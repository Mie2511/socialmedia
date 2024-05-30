import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-my-friend',
  templateUrl: './my-friend.component.html',
  styleUrls: ['./my-friend.component.css']
})
export class MyFriendComponent implements OnInit {

  friends: { userId: string, publicName: string, profilePictureUrl: string, description: string, mainImageUrl: string }[] = [];
  filteredFriends: { userId: string, publicName: string, profilePictureUrl: string, description: string, mainImageUrl: string }[] = [];
  searchTerm: string = '';
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
                  mainImageUrl: data.mainImageUrl,
                  profilePictureUrl: data.profilePictureUrl || 'assets/avatar.jpg',
                  description: data.description,
                });
              }
              this.filteredFriends = this.friends; // Set filteredFriends to the full list initially
            }
          });
        });
      }
    });
  }

  onSearch(): void {
    this.filteredFriends = this.friends.filter(friend =>
      friend.publicName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  navigateToPersonalPage(friend: { userId: string }) {
    this.router.navigate(['/personal', friend.userId]);
  }


}
