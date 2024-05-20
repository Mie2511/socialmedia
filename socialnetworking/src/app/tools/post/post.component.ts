// import { Component, Input, OnInit } from '@angular/core';
// import { PostData } from 'src/app/pages/post-feed/post-feed.component';
// import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
// import { MatDialog } from '@angular/material/dialog';
// import { ReplyComponent } from '../reply/reply.component';


// @Component({
//   selector: 'app-post',
//   templateUrl: './post.component.html',
//   styleUrls: ['./post.component.css']
// })
// export class PostComponent implements OnInit {
//   @Input() postData: PostData;
//   creatorName: string;
//   creatorDescription: string;
//   creatorProfilePicture: string; // Thêm thuộc tính này
//   firestore = new FirebaseTSFirestore();
//   likesCount: number = 0;
//   isLiked: boolean = false;

//   constructor(private dialog: MatDialog) { }

//   ngOnInit(): void {
//     this.getCreatorInfo();
//   }

//   onReplyClick() {
//     this.dialog.open(ReplyComponent, { data: this.postData.postId });
//   }

//   onLikeClick() {
//     if (this.isLiked) {
//       this.likesCount--;
//       this.isLiked = false;
//     } else {
//       this.likesCount++;
//       this.isLiked = true;
//     }
//   }

//   getCreatorInfo() {
//     this.firestore.getDocument({
//       path: ["Users", this.postData.creatorId],
//       onComplete: result => {
//         let userDocument = result.data();
//         this.creatorName = userDocument.publicName;
//         this.creatorDescription = userDocument.description;
//         this.creatorProfilePicture = userDocument.profilePictureUrl || 'assets/avatar.jpg'; // Sử dụng ảnh mặc định nếu không có URL ảnh profile
//       }
//     });
//   }
// }


//-------------------------------------------------------------------20/5-32:22--------------------------

import { Component, Input, OnInit } from '@angular/core';
import { PostData } from 'src/app/pages/post-feed/post-feed.component';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postData: PostData;
  creatorName: string;
  creatorDescription: string;
  creatorProfilePicture: string; // Thêm thuộc tính này
  firestore = new FirebaseTSFirestore();
  likesCount: number = 0;
  isLiked: boolean = false;

  constructor(private dialog: MatDialog, private router: Router) { } // Inject Router

  ngOnInit(): void {
    this.getCreatorInfo();
  }

  onReplyClick() {
    this.dialog.open(ReplyComponent, { data: this.postData.postId });
  }

  onLikeClick() {
    if (this.isLiked) {
      this.likesCount--;
      this.isLiked = false;
    } else {
      this.likesCount++;
      this.isLiked = true;
    }
  }

  getCreatorInfo() {
    this.firestore.getDocument({
      path: ["Users", this.postData.creatorId],
      onComplete: result => {
        let userDocument = result.data();
        this.creatorName = userDocument.publicName;
        this.creatorDescription = userDocument.description;
        this.creatorProfilePicture = userDocument.profilePictureUrl || 'assets/avatar.jpg'; // Sử dụng ảnh mặc định nếu không có URL ảnh profile
      }
    });
  }

  navigateToPersonalPage() {
    this.router.navigate(['/personal', this.postData.creatorId]); // Điều hướng đến trang personal của người dùng
  }
}
