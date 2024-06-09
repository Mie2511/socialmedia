// import { Component, Input, OnInit } from '@angular/core';
// import { PostData } from 'src/app/pages/post-feed/post-feed.component';
// import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
// import { MatDialog } from '@angular/material/dialog';
// import { ReplyComponent } from '../reply/reply.component';
// import { Router } from '@angular/router';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
// import { EditPostComponent } from '../edit-post/edit-post.component';

// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.css']
// })
// export class PostComponent implements OnInit {
//   @Input() postData: PostData;
//   creatorName: string;
//   creatorDescription: string;
//   creatorProfilePicture: string;
//   firestore = new FirebaseTSFirestore();
//   likesCount: number = 0;
//   isLiked: boolean = false;
//   auth = new FirebaseTSAuth();

//   constructor(private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

//   ngOnInit(): void {
//     this.getCreatorInfo();
//     this.checkIfLiked();
//     this.getLikesCount();
//   }

//   onReplyClick() {
//     this.dialog.open(ReplyComponent, { data: this.postData.postId });
//   }

//   onLikeClick() {
//     if (this.isLiked) {
//       this.unlikePost();
//     } else {
//       this.likePost();
//     }
//   }

//   likePost() {
//     const userId = this.auth.getAuth().currentUser.uid;
//     this.firestore.create({
//       path: ["Posts", this.postData.postId, "Likes", userId],
//       data: {
//         userId: userId
//       },
//       onComplete: () => {
//         this.likesCount++;
//         this.isLiked = true;
//       }
//     });
//   }

//   unlikePost() {
//     const userId = this.auth.getAuth().currentUser.uid;
//     this.firestore.delete({
//       path: ["Posts", this.postData.postId, "Likes", userId],
//       onComplete: () => {
//         this.likesCount--;
//         this.isLiked = false;
//       }
//     });
//   }

//   getCreatorInfo() {
//     this.firestore.getDocument({
//       path: ["Users", this.postData.creatorId],
//       onComplete: result => {
//         let userDocument = result.data();
//         this.creatorName = userDocument.publicName;
//         this.creatorDescription = userDocument.description;
//         this.creatorProfilePicture = userDocument.profilePictureUrl || 'assets/avatar.jpg';
//       }
//     });
//   }

//   getLikesCount() {
//     this.firestore.getCollection({
//       path: ["Posts", this.postData.postId, "Likes"],
//       onComplete: result => {
//         this.likesCount = result.docs.length;
//       },
//       where: []
//     });
//   }

//   checkIfLiked() {
//     const userId = this.auth.getAuth().currentUser.uid;
//     this.firestore.getDocument({
//       path: ["Posts", this.postData.postId, "Likes", userId],
//       onComplete: result => {
//         this.isLiked = result.exists;
//       }
//     });
//   }

//   navigateToPersonalPage() {
//     this.router.navigate(['/personal', this.postData.creatorId]);
//   }

//   onEditClick() {
//     const dialogRef = this.dialog.open(EditPostComponent, {
//       data: { postData: this.postData }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//     });
//   }

//   onDeleteClick() {
//     this.firestore.delete({
//       path: ["Posts", this.postData.postId],
//       onComplete: () => {
//         this.snackBar.open('Xóa bài đăng thành công', 'Close', { duration: 3000 });
//       },
//       onFail: err => {
//         this.snackBar.open('Lỗi khi xóa bài đăng', 'Close', { duration: 3000 });
//       }
//     });
//   }

//   isCurrentUserPost(): boolean {
//     return this.auth.getAuth().currentUser.uid === this.postData.creatorId;
//   }
// }


import { Component, Input, OnInit } from '@angular/core';
import { PostData } from 'src/app/pages/post-feed/post-feed.component';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import firebase from 'firebase/app';
import { EditPostComponent } from '../edit-post/edit-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: PostData;
  creatorName: string;
  creatorDescription: string;
  creatorProfilePicture: string;
  firestore = new FirebaseTSFirestore();
  likesCount: number = 0;
  isLiked: boolean = false;
  auth = new FirebaseTSAuth();

  constructor(private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCreatorInfo();
    this.checkIfLiked();
    this.getLikesCount();
  }

  onReplyClick() {
    this.dialog.open(ReplyComponent, { data: this.postData.postId });
  }

  onLikeClick() {
    if (this.isLiked) {
      this.unlikePost();
    } else {
      this.likePost();
    }
  }

  likePost() {
    const userId = this.auth.getAuth().currentUser.uid;
    const postId = this.postData.postId;
    const creatorId = this.postData.creatorId;

    this.firestore.create({
      path: ["Posts", postId, "Likes", userId],
      data: {
        userId: userId
      },
      onComplete: () => {
        this.likesCount++;
        this.isLiked = true;
        this.getUserPublicName(userId).then(userName => {
          this.sendNotification(creatorId, `<strong>${userName}</strong> đã thích bài đăng "${this.truncatePostContent(this.postData.comment)}" của bạn`);
        });
      }
    });
  }

  unlikePost() {
    const userId = this.auth.getAuth().currentUser.uid;
    const postId = this.postData.postId;
    const creatorId = this.postData.creatorId;

    this.firestore.delete({
      path: ["Posts", postId, "Likes", userId],
      onComplete: () => {
        this.likesCount--;
        this.isLiked = false;
        this.getUserPublicName(userId).then(userName => {
          // this.removeNotification(creatorId, `${userName} đã thích bài đăng "${this.truncatePostContent(this.postData.comment)}" của bạn`);
        });
      }
    });
  }

  getCreatorInfo() {
    this.firestore.getDocument({
      path: ["Users", this.postData.creatorId],
      onComplete: result => {
        let userDocument = result.data();
        this.creatorName = userDocument.publicName;
        this.creatorDescription = userDocument.description;
        this.creatorProfilePicture = userDocument.profilePictureUrl || 'assets/avatar.jpg';
      }
    });
  }

  getLikesCount() {
    this.firestore.getCollection({
      path: ["Posts", this.postData.postId, "Likes"],
      onComplete: result => {
        this.likesCount = result.docs.length;
      },
      where: []
    });
  }

  checkIfLiked() {
    const userId = this.auth.getAuth().currentUser.uid;
    this.firestore.getDocument({
      path: ["Posts", this.postData.postId, "Likes", userId],
      onComplete: result => {
        this.isLiked = result.exists;
      }
    });
  }

  navigateToPersonalPage() {
    this.router.navigate(['/personal', this.postData.creatorId]);
  }

  onEditClick() {
    const dialogRef = this.dialog.open(EditPostComponent, {
      data: { postData: this.postData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Đã đóng hộp thoại');
    });
  }

  onDeleteClick() {
    this.firestore.delete({
      path: ["Posts", this.postData.postId],
      onComplete: () => {
        this.snackBar.open('Xóa bài đăng thành công', 'Close', { duration: 3000 });
      },
      onFail: err => {
        this.snackBar.open('Lỗi khi xóa bài đăng', 'Close', { duration: 3000 });
      }
    });
  }

  isCurrentUserPost(): boolean {
    return this.auth.getAuth().currentUser.uid === this.postData.creatorId;
  }

  async getUserPublicName(userId: string): Promise<string> {
    const result = await this.firestore.getDocument({
      path: ["Users", userId]
    });
    return result.data()?.publicName || 'Unknown User';
  }

  sendNotification(userId: string, message: string) {
    this.firestore.create({
      path: ["Users", userId, "notifications"],
      data: {
        message: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    });
  }

  removeNotification(userId: string, message: string) {
    this.firestore.getCollection({
      path: ["Users", userId, "notifications"],
      where: [
        {
          field: 'message',
          opStr: '==',
          value: message
        }
      ],
      onComplete: result => {
        result.docs.forEach(doc => {
          this.firestore.delete({
            path: ["Users", userId, "notifications", doc.id]
          });
        });
      }
    });
  }

  truncatePostContent(content: string): string {
    if (content.length > 10) {
      return content.substring(0, 10) + '...';
    }
    return content;
  }
}
