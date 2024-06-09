import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: { message: string, timestamp: any }[] = [];
  firestore = new FirebaseTSFirestore();
  auth = new FirebaseTSAuth();
  currentUserId: string | null = null;

  ngOnInit(): void {
    this.currentUserId = this.auth.getAuth().currentUser?.uid;
    this.fetchNotifications();
  }

  fetchNotifications(): void {
    if (!this.currentUserId) {
      return;
    }

    this.firestore.getCollection({
      path: ['Users', this.currentUserId, 'notifications'],
      where: [],
      onComplete: result => {
        this.notifications = result.docs.map(doc => {
          let data = doc.data() as { message: string, timestamp: any };
          return {
            message: data.message,
            timestamp: data.timestamp?.toDate() || new Date()
          };
        });
        this.notifications.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
      }
    });
  }
}
