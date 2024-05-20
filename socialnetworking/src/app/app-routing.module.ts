// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
// import { PostFeedComponent } from './pages/post-feed/post-feed.component';
// import { PersonalComponent } from './pages/personal/personal.component';

// const routes: Routes = [
//   { path: "", component: HomeComponent },
//   {path: "emailVerification", component: EmailVerificationComponent},
//   {path: "postfeed", component: PostFeedComponent},
//   { path: "personal", component: PersonalComponent },
//   { path: "**", component: HomeComponent },

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { PostFeedComponent } from './pages/post-feed/post-feed.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "emailVerification", component: EmailVerificationComponent },
  { path: "postfeed", component: PostFeedComponent },
  { path: "personal/:userId", component: PersonalComponent }, // Thêm dòng này
  //{ path: "**", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
