import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreatePostComponent } from 'src/app/tools/create-post/create-post.component';
import { FirebaseTSFirestore, Limit, OrderBy } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-post-feed',
  templateUrl: './post-feed.component.html',
  styleUrls: ['./post-feed.component.css']
})
export class PostFeedComponent implements OnInit {
  firestore = new FirebaseTSFirestore();
  posts: PostData[] = [];
  auth = new FirebaseTSAuth();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPosts();
  }

  onCreatePostClick() {
    this.dialog.open(CreatePostComponent);
  }

  getPosts() {
    this.firestore.getCollection(
      {
        path: ["Posts"],
        where: [
          new OrderBy("timestamp", "desc"),
          new Limit(100)
        ],
        onComplete: (result) => {
          this.posts = [];
          result.docs.forEach(
            doc => {
              let post = <PostData>doc.data();
              post.postId = doc.id;
              this.posts.push(post);
            }
          );
          this.shufflePosts();
        },
        onFail: err => {
          console.error("Failed to get posts:", err);
        }
      }
    );
  }

  shufflePosts() {
    for (let i = this.posts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.posts[i], this.posts[j]] = [this.posts[j], this.posts[i]];
    }
  }
}

export interface PostData {
  comment: string;
  creatorId: string;
  imageUrl: string;
  postId: string;
}
