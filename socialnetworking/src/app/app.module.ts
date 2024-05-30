import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';

import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { ProfileComponent } from './tools/profile/profile.component';
import { PostFeedComponent } from './pages/post-feed/post-feed.component';
import { CreatePostComponent } from './tools/create-post/create-post.component';
import { PostComponent } from './tools/post/post.component';
import { ReplyComponent } from './tools/reply/reply.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { AddFriendsComponent } from './pages/add-friends/add-friends.component';
import { ConfirmDialogComponent } from './tools/confirm-dialog/confirm-dialog.component';
import { MyFriendComponent } from './pages/my-friend/my-friend.component';
import { EditPostComponent } from './tools/edit-post/edit-post.component';
import { SidebarComponent } from './tools/sidebar/sidebar.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthenticatorComponent,
    EmailVerificationComponent,
    ProfileComponent,
    PostFeedComponent,
    CreatePostComponent,
    PostComponent,
    ReplyComponent,
    PersonalComponent,
    SearchComponent,
    AddFriendsComponent,
    ConfirmDialogComponent,
    MyFriendComponent,
    EditPostComponent,
    SidebarComponent,
    NotificationsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatSnackBarModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    FirebaseTSApp.init( environment.firebaseConfig);
 }
}
