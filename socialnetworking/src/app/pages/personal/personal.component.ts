import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore, Where } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Location } from '@angular/common';
import { PostData } from '../post-feed/post-feed.component';
import { ActivatedRoute } from '@angular/router';

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

  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  userPosts: PostData[] = [];
  userId: string;

  constructor(private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['userId'];
      this.loadImages();
      this.loadUserInfo();
      this.loadUserPosts();
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
      path: ["Users", this.userId], // Sử dụng userId thay vì currentUser.uid
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
        console.log(`${imageField} đã đổi.`);
        this.loadImages();
      },
      onFail: (err) => {
        console.error(err);
      }
    });
  }
}
