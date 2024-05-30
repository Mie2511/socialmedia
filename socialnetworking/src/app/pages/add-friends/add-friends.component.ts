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
  selector: 'app-add-friends',
  templateUrl: './add-friends.component.html',
  styleUrls: ['./add-friends.component.css']
})
export class AddFriendsComponent implements OnInit {
  receivedRequests: User[] = [];
  sentRequests: User[] = [];
  notifications: string[] = [];
  firestore = new FirebaseTSFirestore();
  auth = new FirebaseTSAuth();
  currentUserId: string | null = null;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.currentUserId = this.auth.getAuth().currentUser?.uid;
    this.fetchFriendRequests();
  }

  fetchFriendRequests(): void {
    if (!this.currentUserId) {
      return;
    }

    // Fetch received friend requests
    this.firestore.getCollection({
      path: ["Users", this.currentUserId, "friendRequest"],
      where: [],
      onComplete: result => {
        const receivedFriendRequests = result.docs.filter(doc => doc.data().status === 'received');
        const receivedUserIds = receivedFriendRequests.map(doc => doc.id);

        receivedUserIds.forEach(userId => {
          this.firestore.getDocument({
            path: ["Users", userId],
            onComplete: userDoc => {
              if (userDoc.exists) {
                const data = userDoc.data();
                this.receivedRequests.push({
                  userId: userId,
                  description: data.description,
                  mainImageUrl: data.mainImageUrl,
                  profilePictureUrl: data.profilePictureUrl || 'assets/avatar.jpg',
                  publicName: data.publicName,
                  friendRequestStatus: 'received'
                });
              }
            }
          });
        });
      }
    });

    // Fetch sent friend requests
    this.firestore.getCollection({
      path: ["Users", this.currentUserId, "friendRequest"],
      where: [],
      onComplete: result => {
        const sentFriendRequests = result.docs.filter(doc => doc.data().status === 'sent');
        const sentUserIds = sentFriendRequests.map(doc => doc.id);

        sentUserIds.forEach(userId => {
          this.firestore.getDocument({
            path: ["Users", userId],
            onComplete: userDoc => {
              if (userDoc.exists) {
                const data = userDoc.data();
                this.sentRequests.push({
                  userId: userId,
                  description: data.description,
                  mainImageUrl: data.mainImageUrl,
                  profilePictureUrl: data.profilePictureUrl || 'assets/avatar.jpg',
                  publicName: data.publicName,
                  friendRequestStatus: 'sent'
                });
              }
            }
          });
        });
      }
    });
  }

  navigateToPersonalPage(user: User) {
    this.router.navigate(['/personal', user.userId]);
  }

  acceptFriendRequest(user: User): Promise<void> {
    if (!this.currentUserId) {
      return;
    }

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

    const notificationMessage = `${user.profilePictureUrl} Bạn đã trở thành bạn bè với ${user.publicName}`;
    this.firestore.create({
      path: ['Users', this.currentUserId, 'notifications'],
      data: {
        message: notificationMessage,
        timestamp: new Date()
      }
    });

    // const currentUser = this.auth.getAuth().currentUser;
    // if (currentUser && currentUser.displayName) {
    //   const friendNotificationMessage = `${currentUser.displayName} đã đồng ý kết bạn với bạn`;
    //   this.firestore.create({
    //     path: ['Users', user.userId, 'notifications'],
    //     data: {
    //       message: friendNotificationMessage,
    //       timestamp: new Date()
    //     }
    //   });
    // }

    this.notifications.push(`${user.profilePictureUrl} Bạn đã trở thành bạn bè với ${user.publicName}`);
    this.receivedRequests = this.receivedRequests.filter(u => u.userId !== user.userId);
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

    this.receivedRequests = this.receivedRequests.filter(u => u.userId !== user.userId);
  }

  cancelSentRequest(user: User): void {
    if (!this.currentUserId) {
      return;
    }

    this.firestore.delete({
      path: ['Users', this.currentUserId, 'friendRequest', user.userId]
    });
    this.firestore.delete({
      path: ['Users', user.userId, 'friendRequest', this.currentUserId]
    });

    this.sentRequests = this.sentRequests.filter(u => u.userId !== user.userId);
  }
}
