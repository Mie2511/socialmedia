


import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialnetworking';
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  userHasProfile = true;
  private static userDocument: UserDocument ;
  showNavigation: boolean = false;
  userId: string;

  @ViewChild('logoImage') logoImage: ElementRef;

  constructor(private loginSheet: MatBottomSheet, private router: Router, private location:Location, private route: ActivatedRoute){ // Thêm ActivatedRoute vào constructor
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]).then(() => {
                this.loginSheet.dismiss();
              });
            },
            whenSignedOut: user => {
              AppComponent.userDocument = null;
            },
            whenSignedInAndEmailVerified: user => {
              this.getUserProfile();
              this.loginSheet.dismiss(); // Đảm bảo rằng hộp thoại bị ẩn sau khi đăng nhập và xác minh email
            },
            whenChanged: user => {}
          }
        );
      }
    );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isPersonalPage = event.urlAfterRedirects.includes('/personal');
        this.showNavigation = isPersonalPage;
        this.adjustLogoSize();
      }
    });

    this.route.params.subscribe(params => { // Lấy userId từ tuyến đường
      this.userId = params['userId'];
    });
  }
  goBack() {
    this.location.back();
  }

  adjustLogoSize() {
    if (this.logoImage && this.showNavigation) {
      this.logoImage.nativeElement.style.width = '140%';
    } else if (this.logoImage) {
      this.logoImage.nativeElement.style.width = '100%';
    }
  }

  public static getUserDocument(){
    try{
      return AppComponent.userDocument;
    } catch(err){}
  }

  getUserName(){
    return AppComponent.userDocument.publicName;
  }

  getUserProfile(){
    const userIdToUse = this.userId || this.auth.getAuth().currentUser.uid; // Sử dụng userId từ tuyến đường nếu có
    this.firestore.listenToDocument({
      name: "Getting Document",
      path: ["Users", userIdToUse], // Sử dụng userIdToUse thay vì currentUser.uid
      onUpdate: (result) => {
        AppComponent.userDocument = <UserDocument>result.data();
        this.userHasProfile = result.exists;
        AppComponent.userDocument.userId = userIdToUse; // Đảm bảo userId được thiết lập đúng
        const currentUrl = this.router.url;
        const isPersonalPage = currentUrl.includes('/personal');
        if (this.userHasProfile && !isPersonalPage) {
          this.router.navigate(["postfeed"]);
        }
      }
    });
  }

  onLogoutClick(){
    this.auth.signOut();
    this.router.navigate(['/']);
  }

  loggedIn(){
    return this.auth.isSignedIn();
  }

  onLoginClick(){
    this.loginSheet.open(AuthenticatorComponent);
  }

  navigateToProfile() {
    this.router.navigate(['/personal', this.auth.getAuth().currentUser.uid]); // Điều hướng đến trang cá nhân của người dùng hiện tại
  }
}

export interface UserDocument {
  publicName: string;
  description: string;
  userId: string;
}


