import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Where } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Location } from '@angular/common';
import { PostData } from '../post-feed/post-feed.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CreatePostComponent } from 'src/app/tools/create-post/create-post.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/tools/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  mainImageSrc: string = '';
  profilePictureSrc: string = '';

  profileName: string = 'Profile Name';
  profileHandle: string = '@Name';
  friendRequestStatus: 'none' | 'sent' | 'received' | 'friends' = 'none';

  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  userPosts: PostData[] = [];
  userId: string;
  currentUserId: string | null = null;

  constructor(private location: Location, private route: ActivatedRoute, private dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.currentUserId = this.auth.getAuth().currentUser?.uid;
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.loadImages();
      this.loadUserInfo();
      this.loadUserPosts();
      this.checkFriendRequestStatus();
    });
  }

  loadImages() {
    this.firestore.getDocument({
      path: ["Users", this.userId],
      onComplete: result => {
        const userData = result.data();
        if (userData) {
          this.mainImageSrc = userData['mainImageUrl'] || 'assets/background-bia.jpg';
          this.profilePictureSrc = userData['profilePictureUrl'] || 'assets/avatar.jpg';
        }
      },
      onFail: err => {
        console.error(err);
      }
    });
  }


  loadUserInfo() {
    this.firestore.getDocument({
      path: ["Users", this.userId],
      onComplete: result => {
        const userData = result.data();
        if (userData) {
          this.profileName = userData['publicName'] || 'Profile Name';
          this.profileHandle = `${userData['description'] || 'Name'}`;
        }
      },
      onFail: err => {
        console.error(err);
      }
    });
  }



  loadUserPosts() {
    this.userPosts = [];
    this.firestore.getCollection({
      path: ["Posts"],
      where: [new Where("creatorId", "==", this.userId)],
      onComplete: (result) => {
        result.docs.forEach(doc => {
          let post = <PostData>doc.data();
          post.postId = doc.id;
          this.userPosts.push(post);
        });
      },
      onFail: (err) => {
        console.error(err);
      }
    });
  }

  onMainImageClick() {
    const mainImageInput = <HTMLInputElement>document.getElementById('main-image-input');
    mainImageInput.click();
  }

  onProfilePictureClick() {
    const profilePictureInput = <HTMLInputElement>document.getElementById('profile-picture-input');
    profilePictureInput.click();
  }
  onCreatePostClick(){
    this.dialog.open(CreatePostComponent);
  }

  onMainImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `Users/${this.auth.getAuth().currentUser.uid}/mainImage.jpg`.split('/');
      this.storage.upload({
        uploadName: "upload Main Image",
        path: path,
        data: {
          data: file
        },
        onComplete: (downloadUrl) => {
          this.mainImageSrc = downloadUrl;
          this.updateUserImage('mainImageUrl', downloadUrl);
          this.location.replaceState('/personal'); // Thay đổi trạng thái URL mà không điều hướng lại trang
        },
        onFail: (err) => {
          console.error(err);
        }
      });
    }
  }

  onProfilePictureChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `Users/${this.auth.getAuth().currentUser.uid}/profilePicture.jpg`.split('/');
      this.storage.upload({
        uploadName: "upload Profile Picture",
        path: path,
        data: {
          data: file
        },
        onComplete: (downloadUrl) => {
          this.profilePictureSrc = downloadUrl;
          this.updateUserImage('profilePictureUrl', downloadUrl);
          this.location.replaceState('/personal');
        },
        onFail: (err) => {
          console.error(err);
        }
      });
    }
  }

  updateUserImage(imageField: string, imageUrl: string) {
    const userId = this.auth.getAuth().currentUser.uid;
    this.firestore.update({
      path: ["Users", userId],
      data: {
        [imageField]: imageUrl
      },
      onComplete: () => {
        console.log(`Đổi ${imageField} thành công.`);
        this.loadImages();
      },
      onFail: (err) => {
        console.error(err);
      }
    });
  }
  checkFriendRequestStatus() {
    if (!this.currentUserId || this.currentUserId === this.userId) {
      return;
    }

    this.firestore.getDocument({
      path: ['Users', this.currentUserId, 'friendRequest', this.userId],
      onComplete: result => {
        if (result.exists) {
          this.friendRequestStatus = 'sent';
        } else {
          this.firestore.getDocument({
            path: ['Users', this.userId, 'friendRequest', this.currentUserId],
            onComplete: result => {
              if (result.exists) {
                this.friendRequestStatus = 'received';
              } else {
                this.firestore.getDocument({
                  path: ['Users', this.currentUserId, 'friend', this.userId],
                  onComplete: result => {
                    if (result.exists) {
                      this.friendRequestStatus = 'friends';
                    } else {
                      this.friendRequestStatus = 'none';
                    }
                  }
                });
              }
            }
          });
        }
      }
    });
  }


  toggleFriendRequest(): void {
    if (!this.currentUserId) {
      return;
    }

    if (this.friendRequestStatus === 'none') {
      this.friendRequestStatus = 'sent';
      this.firestore.create({
        path: ['Users', this.currentUserId, 'friendRequest', this.userId],
        data: { status: 'sent' }
      });
      this.firestore.create({
        path: ['Users', this.userId, 'friendRequest', this.currentUserId],
        data: { status: 'received' }
      });
    } else if (this.friendRequestStatus === 'sent') {
      this.friendRequestStatus = 'none';
      this.firestore.delete({
        path: ['Users', this.currentUserId, 'friendRequest', this.userId]
      });
      this.firestore.delete({
        path: ['Users', this.userId, 'friendRequest', this.currentUserId]
      });
    }
  }

  acceptFriendRequest(): void {
    if (!this.currentUserId) {
      return;
    }

    this.friendRequestStatus = 'friends';
    this.firestore.create({
      path: ['Users', this.currentUserId, 'friend', this.userId],
      data: { status: 'friends' }
    });
    this.firestore.create({
      path: ['Users', this.userId, 'friend', this.currentUserId],
      data: { status: 'friends' }
    });
    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friendRequest', this.userId]
    });
    this.firestore.delete({
      path: ['Users', this.userId, 'friendRequest', this.currentUserId]
    });
  }

  declineFriendRequest(): void {
    if (!this.currentUserId) {
      return;
    }

    this.friendRequestStatus = 'none';
    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friendRequest', this.userId]
    });
    this.firestore.delete({
      path: ['Users', this.userId, 'friendRequest', this.currentUserId]
    });
  }

  openRemoveFriendDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Bạn muốn xóa bạn bè?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.removeFriend();
      }
    });
  }

  removeFriend(): void {
    if (!this.currentUserId) {
      return;
    }

    this.friendRequestStatus = 'none';
    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friend', this.userId]
    });
    this.firestore.delete({
      path: ['Users', this.userId, 'friend', this.currentUserId]
    });
  }
}
