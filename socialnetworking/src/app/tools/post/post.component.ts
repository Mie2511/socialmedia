
import { Component, Input, OnInit } from '@angular/core';
import { PostData } from 'src/app/pages/post-feed/post-feed.component';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatDialog } from '@angular/material/dialog';
import { ReplyComponent } from '../reply/reply.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
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

  constructor(private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { } // Inject Router

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

  onEditClick() {
    const dialogRef = this.dialog.open(EditPostComponent, {
      data: { postData: this.postData }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDeleteClick() {
    this.firestore.delete({
      path: ["Posts", this.postData.postId],
      onComplete: () => {
        this.snackBar.open('Xóa bài đăng thành công', 'Close', { duration: 3000 });
        // Optionally, you can remove the post from the view or reload the page
      },
      onFail: err => {
        this.snackBar.open('Lỗi khi xóa bài đăng', 'Close', { duration: 3000 });
      }
    });
  }
  isCurrentUserPost(): boolean {
    // Check if the current user is the creator of the post
    return this.auth.getAuth().currentUser.uid === this.postData.creatorId;
  }
}
