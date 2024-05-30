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
  showIcon: boolean = true;
  showNavBarCenter: boolean = false;


  userId: string;

  @ViewChild('logoImage') logoImage: ElementRef;

  constructor(private loginSheet: MatBottomSheet, private router: Router, private location: Location, private route: ActivatedRoute) {
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
              this.loginSheet.dismiss();
            },
            whenChanged: user => {}
          }
        );
      }
    );
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const isPersonalPage = event.urlAfterRedirects.includes('/personal');
        const isHomePage = event.urlAfterRedirects === '/' || event.urlAfterRedirects.includes('/home');
        const isAuthenticatorPage = event.urlAfterRedirects.includes('/emailVerification');

        const isSearchPage = event.urlAfterRedirects.includes('/search');
        const isAddFrPage = event.urlAfterRedirects.includes('/add-friends');
        const isMyFriend = event.urlAfterRedirects.includes('/my-friend');

        this.showNavigation = isPersonalPage || isSearchPage || isAddFrPage || isMyFriend;
        this.showIcon = !isHomePage && !isAuthenticatorPage;
        this.showNavBarCenter = isPersonalPage || isSearchPage || isAddFrPage || isMyFriend;
        this.adjustLogoSize();
      }
    });

    this.route.params.subscribe(params => {
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
    const userIdToUse = this.userId || this.auth.getAuth().currentUser.uid;
    this.firestore.listenToDocument({
      name: "Getting Document",
      path: ["Users", userIdToUse],
      onUpdate: (result) => {
        AppComponent.userDocument = <UserDocument>result.data();
        this.userHasProfile = result.exists;
        AppComponent.userDocument.userId = userIdToUse;
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
    this.router.navigate(['/personal', this.auth.getAuth().currentUser.uid]);
  }

  onIconClick(){
    this.router.navigate(['/search']);
  }
  onIconAddClick() {
    this.router.navigate(['/add-friends']);
  }
  reloadPage(){
    this.router.navigate(['/postfeed']).then(() => {
      location.reload(); // Reload the page
    });
  }
  onIconFriendClick(){
    this.router.navigate(['/my-friend']);
  }
  onNotiClick(){
    this.router.navigate(['/noti']);
  }
}

export interface UserDocument {
  publicName: string;
  description: string;
  userId: string;
}
