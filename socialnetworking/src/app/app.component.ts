// import { Component, ElementRef, ViewChild } from '@angular/core';
// import { MatBottomSheet } from '@angular/material/bottom-sheet';
// import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
// import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
// import { NavigationEnd, Router } from '@angular/router';
// import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'socialnetworking';
//   auth = new FirebaseTSAuth();
//   firestore = new FirebaseTSFirestore();
//   userHasProfile = true;
//   private static userDocument: UserDocument ;
//   showNavigation: boolean = false;

//   @ViewChild('logoImage') logoImage: ElementRef;

//   constructor(private loginSheet: MatBottomSheet, private router: Router){
//     this.auth.listenToSignInStateChanges(
//       user => {
//         this.auth.checkSignInState(
//           {
//             whenSignedIn: user => {
//               if (user.emailVerified) {
//                 // Ẩn hộp thoại đăng nhập/đăng ký
//                 this.loginSheet.dismiss();

//                 // Chuyển hướng người dùng đến trang post-feed
//                 this.router.navigate(["postfeed"]);
//               } else {
//                 // Chuyển hướng người dùng đến trang xác minh email
//                 this.router.navigate(["emailVerification"]);

//                 // Ẩn hộp thoại đăng nhập/đăng ký
//                 this.loginSheet.dismiss();
//               }

//             },
//             whenSignedOut: user => {
//               AppComponent.userDocument = null;
//             },
//             whenSignedInAndEmailNotVerified: user => {
//               this.router.navigate(["emailVerification"]);
//               this.loginSheet.dismiss();
//             },
//             whenSignedInAndEmailVerified: user => {
//               this.getUserProfile();
//             },
//             whenChanged: user => {

//             }
//           }
//         );
//       }
//     );

//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.showNavigation = event.urlAfterRedirects === '/personal';
//         this.adjustLogoSize();
//       }
//     });
//   }


//   adjustLogoSize() {
//     // Kiểm tra nếu logoImage đã được tham chiếu và showNavigation là true
//     if (this.logoImage && this.showNavigation) {
//       // Đặt kích thước của logoImage
//       this.logoImage.nativeElement.style.width = '140%';
//     } else if (this.logoImage) {
//       this.logoImage.nativeElement.style.width = '100%'; // Đặt lại kích thước khi showNavigation là false
//     }
//   }

//   public static getUserDocument(){
//     try{
//       return AppComponent.userDocument;
//     } catch(err){

//     }
//   }

//   getUserName(){
//     return AppComponent.userDocument.publicName;
//   }

//   getUserProfile(){
//     this.firestore.listenToDocument(
//       {
//         name: "Getting Document",
//         path: ["Users", this.auth.getAuth().currentUser.uid],
//         onUpdate: (result) => {
//           AppComponent.userDocument = <UserDocument >result.data();
//           this.userHasProfile = result.exists;
//           AppComponent.userDocument.userId = this.auth.getAuth().currentUser.uid;

//           // Kiểm tra xem người dùng đang ở trang personal hay không
//           const currentUrl = this.router.url;
//           const isPersonalPage = currentUrl.includes('/personal');

//           if (this.userHasProfile && !isPersonalPage) {
//             this.router.navigate(["postfeed"]);
//           }
//         }
//       }
//     );
//   }

//   onLogoutClick(){
//     this.auth.signOut();
//     this.router.navigate(['/']);
//   }

//   loggedIn(){
//     return this.auth.isSignedIn();
//   }

//   onLoginClick(){
//     this.loginSheet.open(AuthenticatorComponent);

//   }
//   navigateToProfile() {
//     this.router.navigate(['/personal']);
//   }
// }




// export interface UserDocument {
//   publicName: string;
//   description: string;
//   userId: string;
// }

//--------------------------------------------------------------------------------------------------Sửa đợt 1

import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { NavigationEnd, Router } from '@angular/router';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

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

  @ViewChild('logoImage') logoImage: ElementRef;

  constructor(private loginSheet: MatBottomSheet, private router: Router){
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
        this.showNavigation = event.urlAfterRedirects === '/personal';
        this.adjustLogoSize();
      }
    });
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
    this.firestore.listenToDocument({
      name: "Getting Document",
      path: ["Users", this.auth.getAuth().currentUser.uid],
      onUpdate: (result) => {
        AppComponent.userDocument = <UserDocument>result.data();
        this.userHasProfile = result.exists;
        AppComponent.userDocument.userId = this.auth.getAuth().currentUser.uid;
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
    this.router.navigate(['/personal']);
  }
}

export interface UserDocument {
  publicName: string;
  description: string;
  userId: string;
}


