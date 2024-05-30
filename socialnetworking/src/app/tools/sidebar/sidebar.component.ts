import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  friends: { userId: string, publicName: string, profilePictureUrl: string }[] = [];
  firestore = new FirebaseTSFirestore();
  auth = new FirebaseTSAuth();
  currentUserId: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUserId = this.auth.getAuth().currentUser?.uid;
    this.fetchFriends();
  }

  fetchFriends(): void {
    if (!this.currentUserId) {
      return;
    }

    this.firestore.getCollection({
      path: ["Users", this.currentUserId, "friend"],
      where: [],

      onComplete: result => {
        result.docs.forEach(doc => {
          const friendId = doc.id;
          this.firestore.getDocument({
            path: ["Users", friendId],
            onComplete: userDoc => {
              if (userDoc.exists) {
                const data = userDoc.data();
                this.friends.push({
                  userId: friendId,
                  publicName: data.publicName,
                  profilePictureUrl: data.profilePictureUrl || 'assets/avatar.jpg',
                });
              }
            }
          });
        });
      }
    });

  }
  navigateToPersonalPage(friend: { userId: string }): void {
    this.router.navigate(['/personal', friend.userId]);
  }
}
