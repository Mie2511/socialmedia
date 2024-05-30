import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editedComment: string;
  selectedImageFile: File | null = null;
  previewImageUrl: string;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  constructor(
    public dialogRef: MatDialogRef<EditPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.editedComment = this.data.postData.comment;
    this.previewImageUrl = this.data.postData.imageUrl; // Hiển thị ảnh đã đăng
  }

  onSaveClick() {
    if (this.selectedImageFile) {
      this.uploadImagePost();
    } else {
      this.updatePost();
    }
  }

  onCancelClick() {
    this.dialogRef.close();
  }

  uploadImagePost() {
    let postId = this.data.postData.postId;
    // Không cần xóa ảnh cũ, chỉ cần upload ảnh mới đè lên
    this.storage.upload({
      uploadName: "upload Image Post",
      path: ["Posts", postId, "image"],
      data: { data: this.selectedImageFile },
      onComplete: (downloadUrl) => {
        this.firestore.update({
          path: ["Posts", postId],
          data: {
            comment: this.editedComment,
            imageUrl: downloadUrl
          },
          onComplete: () => {
            this.snackBar.open('Bài đăng đã được cập nhật', 'Đóng', { duration: 5000 });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            this.dialogRef.close();
          },
          onFail: err => {
            this.snackBar.open('Cập nhật bài đăng thất bại', 'Đóng', { duration: 3000 });
            console.error('Cập nhật bài đăng thất bại:', err);
          }
        });
      },
      onFail: err => {
        this.snackBar.open('Upload ảnh thất bại', 'Đóng', { duration: 3000 });
        console.error('Upload ảnh thất bại:', err);
      }
    });
  }

  onPhotoSelected(event: any) {
    this.selectedImageFile = event.target.files[0];
    if (!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.onload = () => {
      this.previewImageUrl = fileReader.result as string;
    };
  }

  updatePost() {
    this.firestore.update({
      path: ["Posts", this.data.postData.postId],
      data: {
        comment: this.editedComment,
        // Chỉ cập nhật imageUrl nếu không có ảnh mới
        imageUrl: this.previewImageUrl
      },
      onComplete: () => {
        this.snackBar.open('Bài đăng đã được cập nhật', 'Đóng', { duration: 3000 });
        this.dialogRef.close();
      },
      onFail: err => {
        this.snackBar.open('Cập nhật bài đăng thất bại', 'Đóng', { duration: 3000 });
        console.error('Cập nhật bài đăng thất bại:', err);
      }
    });
  }
}
