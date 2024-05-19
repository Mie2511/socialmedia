// import { Component, OnInit } from '@angular/core';
// import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-email-verification',
//   templateUrl: './email-verification.component.html',
//   styleUrls: ['./email-verification.component.css']
// })
// export class EmailVerificationComponent implements OnInit {

//   auth = new FirebaseTSAuth();
//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     if(
//       this.auth.isSignedIn() && !this.auth.getAuth().currentUser.emailVerified
//     ) {
//         this.auth.sendVerificationEmail();
//       } else {
//         this.router.navigate([""]);
//       }
//   }

//   onResendClick(){
//     this.auth.sendVerificationEmail();
//   }

// }

//-----------------------------------------------------------------------------------------------ĐỢT 1


import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {
  auth = new FirebaseTSAuth();
  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.auth.isSignedIn() && !this.auth.getAuth().currentUser.emailVerified) {
      this.auth.sendVerificationEmail();
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Tải lại trang sau 1 giây để đảm bảo email được gửi
    } else {
      this.router.navigate([""]);
    }
  }

  onResendClick(){
    this.auth.sendVerificationEmail();
  }
}

