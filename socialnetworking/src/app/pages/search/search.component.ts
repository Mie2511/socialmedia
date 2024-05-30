import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { Router } from '@angular/router';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/tools/confirm-dialog/confirm-dialog.component';

export interface User {
  userId: string;
  description: string;
  mainImageUrl: string;
  profilePictureUrl: string;
  publicName: string;
  friendRequestStatus: 'none' | 'sent' | 'received' | 'friends';
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  users: User[] = [];
  filteredUsers: User[] = [];
  firestore = new FirebaseTSFirestore();
  auth = new FirebaseTSAuth();
  currentUserId: string | null = null;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUserId = this.auth.getAuth().currentUser?.uid;
    this.fetchUsers();
  }

  fetchUsers(): void {
    if (!this.currentUserId) {
      return;
    }

    this.firestore.getCollection({
      path: ["Users"],
      where: [],
      onComplete: result => {
        this.users = result.docs.map(doc => {
          const data = doc.data();
          return {
            userId: doc.id,
            description: data.description,
            mainImageUrl: data.mainImageUrl,
            profilePictureUrl: data.profilePictureUrl || 'assets/avatar.jpg',
            publicName: data.publicName,
            friendRequestStatus: 'none'
          };
        });

        this.checkFriendRequestStatus().then(() => {
          this.filteredUsers = this.users;
        });
      }
    });
  }

  async checkFriendRequestStatus(): Promise<void> {
    const userChecks = this.users.map(async user => {
      if (user.userId === this.currentUserId) {
        return;
      }

      const sentRequest = await this.firestore.getDocument({
        path: ['Users', this.currentUserId, 'friendRequest', user.userId]
      }).then(result => result.exists ? 'sent' as const : null);

      const receivedRequest = await this.firestore.getDocument({
        path: ['Users', user.userId, 'friendRequest', this.currentUserId]
      }).then(result => result.exists ? 'received' as const : null);

      const isFriend = await this.firestore.getDocument({
        path: ['Users', this.currentUserId, 'friend', user.userId]
      }).then(result => result.exists ? 'friends' as const : null);

      const friendStatus = sentRequest || receivedRequest || isFriend;

      if (friendStatus) {
        user.friendRequestStatus = friendStatus;
      }
    });

    await Promise.all(userChecks);
  }

  navigateToPersonalPage(user: User) {
    this.router.navigate(['/personal', user.userId]);
  }

  onSearch(): void {
    this.filteredUsers = this.users.filter(user =>
      user.publicName.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleFriendRequest(user: User): void {
    if (!this.currentUserId) {
      return;
    }

    if (user.friendRequestStatus === 'none') {
      user.friendRequestStatus = 'sent';
      this.firestore.create({
        path: ['Users', this.currentUserId, 'friendRequest', user.userId],
        data: {
          status: 'sent'
        }
      });
      this.firestore.create({
        path: ['Users', user.userId, 'friendRequest', this.currentUserId],
        data: {
          status: 'received'
        }
      });
    } else if (user.friendRequestStatus === 'sent') {
      user.friendRequestStatus = 'none';
      this.firestore.delete({
        path: ['Users', this.currentUserId, 'friendRequest', user.userId]
      });
      this.firestore.delete({
        path: ['Users', user.userId, 'friendRequest', this.currentUserId]
      });
    }
  }

  acceptFriendRequest(user: User): void {
    if (!this.currentUserId) {
      return;
    }

    user.friendRequestStatus = 'friends';
    this.firestore.create({
      path: ['Users', this.currentUserId, 'friend', user.userId],
      data: {
        status: 'friends'
      }
    });
    this.firestore.create({
      path: ['Users', user.userId, 'friend', this.currentUserId],
      data: {
        status: 'friends'
      }
    });
    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friendRequest', user.userId]
    });
    this.firestore.delete({
      path: ['Users', user.userId, 'friendRequest', this.currentUserId]
    });
  }

  declineFriendRequest(user: User): void {
    if (!this.currentUserId) {
      return;
    }

    user.friendRequestStatus = 'none';
    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friendRequest', user.userId]
    });
    this.firestore.delete({
      path: ['Users', user.userId, 'friendRequest', this.currentUserId]
    });
  }

  openRemoveFriendDialog(user: User): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Bạn muốn xóa bạn bè?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.removeFriend(user);
      }
    });
  }

  removeFriend(user: User): void {
    if (!this.currentUserId) {
      return;
    }

    user.friendRequestStatus = 'none';
    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friend', user.userId]
    });
    this.firestore.delete({
      path: ['Users', user.userId, 'friend', this.currentUserId]
    });
  }
}
