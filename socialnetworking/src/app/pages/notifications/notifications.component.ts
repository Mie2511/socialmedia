import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notifications: { message: string, timestamp: Date }[] = [];
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
        this.notifications = result.docs.map(doc => doc.data() as { message: string, timestamp: Date });
      }
    });
  }
}
