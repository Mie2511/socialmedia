// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-personal',
//   templateUrl: './personal.component.html',
//   styleUrls: ['./personal.component.css']
// })
// export class PersonalComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


//-----------------------------------------------------------------------------------------------Sửa đợt 1


// import { Component, OnInit } from '@angular/core';
// import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
// import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
// import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
// import { Location } from '@angular/common';

// @Component({
//   selector: 'app-personal',
//   templateUrl: './personal.component.html',
//   styleUrls: ['./personal.component.css']
// })
// export class PersonalComponent implements OnInit {
//   mainImageSrc: string = '';
//   profilePictureSrc: string = '';
//   auth = new FirebaseTSAuth();
//   firestore = new FirebaseTSFirestore();
//   storage = new FirebaseTSStorage();

//   constructor(private location: Location) { }

//   ngOnInit() {
//     this.loadImages();
//   }

//   loadImages() {
//     const userId = this.auth.getAuth().currentUser.uid;

//     this.firestore.getDocument({
//       path: ["Users", userId],
//       onComplete: result => {
//         const userData = result.data();
//         if (userData) {
//           this.mainImageSrc = userData['mainImageUrl'] || 'default-main-image-url.jpg';
//           this.profilePictureSrc = userData['profilePictureUrl'] || 'default-profile-picture-url.jpg';
//         }
//       },
//       onFail: err => {
//         console.error(err);
//       }
//     });
//   }

//   onMainImageClick() {
//     const mainImageInput = <HTMLInputElement>document.getElementById('main-image-input');
//     mainImageInput.click();
//   }

//   onProfilePictureClick() {
//     const profilePictureInput = <HTMLInputElement>document.getElementById('profile-picture-input');
//     profilePictureInput.click();
//   }

//   onMainImageChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       const path = `Users/${this.auth.getAuth().currentUser.uid}/mainImage.jpg`.split('/');
//       this.storage.upload({
//         uploadName: "upload Main Image",
//         path: path,
//         data: {
//           data: file
//         },
//         onComplete: (downloadUrl) => {
//           this.mainImageSrc = downloadUrl;
//           this.updateUserImage('mainImageUrl', downloadUrl);
//           this.location.replaceState('/personal'); // Chuyển hướng người dùng đến trang personal sau khi thay đổi hình ảnh
//         },
//         onFail: (err) => {
//           console.error(err);
//         }
//       });
//     }
//   }

//   onProfilePictureChange(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       const path = `Users/${this.auth.getAuth().currentUser.uid}/profilePicture.jpg`.split('/');
//       this.storage.upload({
//         uploadName: "upload Profile Picture",
//         path: path,
//         data: {
//           data: file
//         },
//         onComplete: (downloadUrl) => {
//           this.profilePictureSrc = downloadUrl;
//           this.updateUserImage('profilePictureUrl', downloadUrl);
//         },
//         onFail: (err) => {
//           console.error(err);
//         }
//       });
//     }
//   }

//   updateUserImage(imageField: string, imageUrl: string) {
//     const userId = this.auth.getAuth().currentUser.uid;
//     this.firestore.update({
//       path: ["Users", userId],
//       data: {
//         [imageField]: imageUrl
//       },
//       onComplete: () => {
//         console.log(`${imageField} đã đổi.`);
//         this.loadImages();
//       },
//       onFail: (err) => {
//         console.error(err);
//       }
//     });
//   }
// }

//---------------------------------------------------------------------------------------------------s

import { Component, OnInit } from '@angular/core';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { FirebaseTSStorage } from 'firebasets/firebasetsStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  mainImageSrc: string = '';
  profilePictureSrc: string = '';

  profileName: string = 'Profile Name';
  profileHandle: string = '@Name';

  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();

  constructor(private location: Location) { }

  ngOnInit() {
    this.loadImages();
    this.loadUserInfo();
  }

  loadImages() {
    const userId = this.auth.getAuth().currentUser.uid;

    this.firestore.getDocument({
      path: ["Users", userId],
      onComplete: result => {
        const userData = result.data();
        if (userData) {
          this.mainImageSrc = userData['mainImageUrl'] || 'assets/background-bia.jpg';
          this.profilePictureSrc = userData['profilePictureUrl'] || 'assets/avatar.jpg';
        }
      },
      onFail: err => {
        console.error(err);
      }
    });
  }

  loadUserInfo() {
    const userId = this.auth.getAuth().currentUser.uid;
    this.firestore.getDocument({
      path: ["Users", userId],
      onComplete: result => {
        const userData = result.data();
        if (userData) {
          this.profileName = userData['publicName'] || 'Profile Name';
          this.profileHandle = `${userData['description'] || 'Name'}`;
        }
      },
      onFail: err => {
        console.error(err);
      }
    });
  }

  onMainImageClick() {
    const mainImageInput = <HTMLInputElement>document.getElementById('main-image-input');
    mainImageInput.click();
  }

  onProfilePictureClick() {
    const profilePictureInput = <HTMLInputElement>document.getElementById('profile-picture-input');
    profilePictureInput.click();
  }

  onMainImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `Users/${this.auth.getAuth().currentUser.uid}/mainImage.jpg`.split('/');
      this.storage.upload({
        uploadName: "upload Main Image",
        path: path,
        data: {
          data: file
        },
        onComplete: (downloadUrl) => {
          this.mainImageSrc = downloadUrl;
          this.updateUserImage('mainImageUrl', downloadUrl);
          this.location.replaceState('/personal'); // Thay đổi trạng thái URL mà không điều hướng lại trang
        },
        onFail: (err) => {
          console.error(err);
        }
      });
    }
  }

  onProfilePictureChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `Users/${this.auth.getAuth().currentUser.uid}/profilePicture.jpg`.split('/');
      this.storage.upload({
        uploadName: "upload Profile Picture",
        path: path,
        data: {
          data: file
        },
        onComplete: (downloadUrl) => {
          this.profilePictureSrc = downloadUrl;
          this.updateUserImage('profilePictureUrl', downloadUrl);
          this.location.replaceState('/personal'); // Thay đổi trạng thái URL mà không điều hướng lại trang
        },
        onFail: (err) => {
          console.error(err);
        }
      });
    }
  }

  updateUserImage(imageField: string, imageUrl: string) {
    const userId = this.auth.getAuth().currentUser.uid;
    this.firestore.update({
      path: ["Users", userId],
      data: {
        [imageField]: imageUrl
      },
      onComplete: () => {
        console.log(`${imageField} đã đổi.`);
        this.loadImages();
      },
      onFail: (err) => {
        console.error(err);
      }
    });
  }
}
