(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CDTN-final\socialnetworking\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");





class HomeComponent {
    constructor(loginSheet) {
        this.loginSheet = loginSheet;
    }
    ngOnInit() {
    }
    onGetStartedClick() {
        this.loginSheet.open(src_app_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorComponent"]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 10, vars: 0, consts: [["id", "home-page"], ["id", "home-page-landing"], ["id", "landing-left"], ["id", "landing-left-content"], ["src", "assets/logosoul.png", "alt", "logo", 1, "img2"], ["src", "assets/chu.png", 1, "img1"], ["id", "landing-right"], ["mat-flat-button", "", "color", "pink", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() { return ctx.onGetStartedClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "B\u1EAFt \u0111\u1EA7u s\u1EED d\u1EE5ng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#home-page[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n#home-page-landing[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-size: cover;\r\n  background-position: center;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  grid-template-rows: 100%;\r\n  min-height: 800px;\r\n}\r\n#landing-left[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#landing-left-content[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  padding: 1em 1em 1em 5cm;\r\n}\r\n#landing-left-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 5em;\r\n}\r\n#landing-left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 3em;\r\n  color: white;\r\n}\r\n#landing-left-content[_ngcontent-%COMP%]   .img2[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n#landing-left-content[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n#landing-left-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n  margin-left: 20px;\r\n}\r\n#landing-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#landing-right[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  font-size: 2em;\r\n  padding: .5em;\r\n  border-radius: 40px;\r\n  background-image: linear-gradient(to right bottom, #6a5af9, #f62682);\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9FQUFvRTtFQUNwRSxZQUFZO0FBQ2QiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiNob21lLXBhZ2UtbGFuZGluZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA4MDBweDtcclxufVxyXG4jbGFuZGluZy1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2xhbmRpbmctbGVmdC1jb250ZW50IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDFlbSAxZW0gMWVtIDVjbTtcclxufVxyXG4jbGFuZGluZy1sZWZ0LWNvbnRlbnQgIGgxIHtcclxuICBmb250LXNpemU6IDVlbTtcclxufVxyXG5cclxuI2xhbmRpbmctbGVmdC1jb250ZW50ICBwIHtcclxuICBmb250LXNpemU6IDNlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNsYW5kaW5nLWxlZnQtY29udGVudCAuaW1nMntcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiNsYW5kaW5nLWxlZnQtY29udGVudCAuaW1nMXtcclxuICB3aWR0aDogNzAlO1xyXG59XHJcbiNsYW5kaW5nLWxlZnQtY29udGVudCBwe1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuI2xhbmRpbmctcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4jbGFuZGluZy1yaWdodCBidXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIHBhZGRpbmc6IC41ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQgYm90dG9tLCAjNmE1YWY5LCAjZjYyNjgyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"] }]; }, null); })();


/***/ }),

/***/ "6qde":
/*!**********************************************!*\
  !*** ./src/app/tools/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _reply_reply_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reply/reply.component */ "sHxp");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");








function PostComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.likesCount);
} }
const _c0 = function (a0) { return { "liked": a0 }; };
class PostComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
        this.likesCount = 0;
        this.isLiked = false;
    }
    ngOnInit() {
        this.getCreatorInfo();
    }
    onReplyClick() {
        this.dialog.open(_reply_reply_component__WEBPACK_IMPORTED_MODULE_2__["ReplyComponent"], { data: this.postData.postId });
    }
    onLikeClick() {
        if (this.isLiked) {
            this.likesCount--;
            this.isLiked = false;
        }
        else {
            this.likesCount++;
            this.isLiked = true;
        }
    }
    getCreatorInfo() {
        this.firestore.getDocument({
            path: ["Users", this.postData.creatorId],
            onComplete: result => {
                let userDocument = result.data();
                this.creatorName = userDocument.publicName;
                this.creatorDescription = userDocument.description;
            }
        });
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], inputs: { postData: "postData" }, decls: 17, vars: 8, consts: [["mat-card-image", "", 3, "src"], ["color", "white", 1, "action-item", 3, "click"], [1, "action-item", 3, "ngClass", "click"], [4, "ngIf"], ["color", "white", 1, "action-item"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_mat_icon_click_10_listener() { return ctx.onReplyClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "chat_bubble_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostComponent_Template_mat_icon_click_12_listener() { return ctx.onLikeClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostComponent_span_14_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.creatorName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.creatorDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.postData == null ? null : ctx.postData.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.postData == null ? null : ctx.postData.comment, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isLiked));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.likesCount > 0);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardActions"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".action-item[_ngcontent-%COMP%] {\r\n  margin-left: .5em;\r\n  cursor: pointer;\r\n}\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n.mat-card[_ngcontent-%COMP%]{\r\n  background-color: black;\r\n  color: white;\r\n  margin: 10px 0;\r\n  border-radius: 10px;\r\n  -webkit-border-radius: 10px;\r\n  -moz-border-radius: 10px;\r\n  -ms-border-radius: 10px;\r\n  -o-border-radius: 10px;\r\n}\r\n.mat-card-subtitle[_ngcontent-%COMP%]{\r\n  color: white;\r\n}\r\n.liked[_ngcontent-%COMP%] {\r\n  color: rgb(255, 127, 127);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi1sZWZ0OiAuNWVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5tYXQtY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLm1hdC1jYXJkLXN1YnRpdGxle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubGlrZWQge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAxMjcsIDEyNyk7XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post',
                templateUrl: './post.component.html',
                styleUrls: ['./post.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, { postData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyC8NCfMeQQv5oqfuSVphjXdLtNIZ0QYn_w",
        authDomain: "socialnetworking-90a13.firebaseapp.com",
        projectId: "socialnetworking-90a13",
        storageBucket: "socialnetworking-90a13.appspot.com",
        messagingSenderId: "407750755202",
        appId: "1:407750755202:web:2171a8ad624756d80bc59b",
        measurementId: "G-6MLM1EM015"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FPDJ":
/*!****************************************************!*\
  !*** ./src/app/tools/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");






const _c0 = function (a0, a1) { return { "active": a0, "idle": a1 }; };
class ProfileComponent {
    constructor() {
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSAuth"]();
    }
    ngOnInit() {
    }
    onContinueClick(nameInput, descriptionInput) {
        let name = nameInput.value;
        let description = descriptionInput.value;
        this.firestore.create({
            path: ["Users", this.auth.getAuth().currentUser.uid],
            data: {
                publicName: name,
                description: description
            },
            onComplete: (docId) => {
                alert("Profile Created");
                nameInput.value = "";
                descriptionInput.value = "";
            },
            onFail: (err) => { }
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], inputs: { show: "show" }, decls: 8, vars: 4, consts: [["id", "profile", 3, "ngClass"], ["id", "profile-content"], ["placeholder", "Name"], ["nameInput", ""], ["placeholder", "Description"], ["descriptionInput", ""], ["mat-flat-button", "", "color", "warn", 3, "click"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onContinueClick(_r0, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.show, !ctx.show));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: ["#profile[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  height: 100vh;\r\n  background-color: rgb(29, 29, 29);\r\n  z-index: 9;\r\n  transition-duration: .5s;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\n.idle[_ngcontent-%COMP%] {\r\n  width: 0;\r\n}\r\n\r\n#profile-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 500px;\r\n  padding: 2em;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n}\r\n\r\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 1em;\r\n  border-radius: 1em;\r\n  margin-bottom: .5em;\r\n  resize: none;\r\n  outline: none;\r\n  border: 1px solid gray;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQyIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZmlsZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyOSwgMjksIDI5KTtcclxuICB6LWluZGV4OiA5O1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4uaWRsZSB7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbiNwcm9maWxlLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5pbnB1dCwgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDFlbTtcclxuICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return []; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "FRkT":
/*!****************************************************************!*\
  !*** ./src/app/tools/authenticator/authenticator.component.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticatorComponent, AuthenticatorCompState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatorComponent", function() { return AuthenticatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticatorCompState", function() { return AuthenticatorCompState; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");







function AuthenticatorComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogin(_r3, _r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0110\u0103ng Nh\u1EADp");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticatorComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_div_6_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onRegisterClick(_r7, _r8, _r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "T\u1EA1o t\u00E0i kho\u1EA3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthenticatorComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 5, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_div_7_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onResetClick(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nh\u1EADn l\u1EA1i m\u1EADt kh\u1EA9u");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AuthenticatorComponent {
    constructor(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
        this.state = AuthenticatorCompState.LOGIN;
        this.firebasetsAuth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSAuth"]();
    }
    ngOnInit() {
    }
    onResetClick(resetEmail) {
        let email = resetEmail.value;
        if (this.isNotEmpty(email)) {
            this.firebasetsAuth.sendPasswordResetEmail({
                email: email,
                onComplete: (err) => { this.bottomSheetRef.dismiss(); }
            });
        }
    }
    onLogin(loginEmail, loginPassword) {
        let email = loginEmail.value;
        let password = loginPassword.value;
        if (this.isNotEmpty(email) && this.isNotEmpty(password)) {
            this.firebasetsAuth.signInWith({
                email: email,
                password: password,
                onComplete: (uc) => { this.bottomSheetRef.dismiss(); },
                onFail: (err) => { alert(err); }
            });
        }
    }
    onRegisterClick(registerEmail, registerPassword, registerConfirmPassword) {
        let email = registerEmail.value;
        let password = registerPassword.value;
        let confirmPassword = registerConfirmPassword.value;
        if (this.isNotEmpty(email) && this.isNotEmpty(password) &&
            this.isNotEmpty(confirmPassword) && this.isAMatch(password, confirmPassword)) {
            this.firebasetsAuth.createAccountWith({
                email: email,
                password: password,
                onComplete: (uc) => {
                    this.bottomSheetRef.dismiss();
                },
                onFail: (err) => {
                    alert("Failed to create the account.");
                }
            });
        }
    }
    isNotEmpty(text) {
        return text != null && text.length > 0;
    }
    isAMatch(text, comparedWith) {
        return text == comparedWith;
    }
    onForgotPasswordClick() {
        this.state = AuthenticatorCompState.FORGOT_PASSWORD;
    }
    onCreateAccountClick() {
        this.state = AuthenticatorCompState.REGISTER;
    }
    onLoginClick() {
        this.state = AuthenticatorCompState.LOGIN;
    }
    isLoginState() {
        return this.state == AuthenticatorCompState.LOGIN;
    }
    isRegisterState() {
        return this.state == AuthenticatorCompState.REGISTER;
    }
    isForgotPasswordState() {
        return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
    }
    getStateText() {
        switch (this.state) {
            case AuthenticatorCompState.LOGIN:
                return "Đăng nhập";
            case AuthenticatorCompState.REGISTER:
                return "Đăng ký";
            case AuthenticatorCompState.FORGOT_PASSWORD:
                return "Quên mật khẩu?";
        }
    }
}
AuthenticatorComponent.ɵfac = function AuthenticatorComponent_Factory(t) { return new (t || AuthenticatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"])); };
AuthenticatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthenticatorComponent, selectors: [["app-authenticator"]], decls: 15, vars: 4, consts: [["id", "authenticator"], ["id", "authenticator-content"], [4, "ngIf"], ["align", "end"], ["mat-flat-button", "", 3, "click"], ["placeholder", "Email"], ["loginEmail", ""], ["placeholder", "M\u1EADt kh\u1EA9u \u0111\u0103ng nh\u1EADp", "type", "password"], ["loginPassword", ""], ["mat-flat-button", "", "color", "warn", 3, "click"], ["registerEmail", ""], ["placeholder", "M\u1EADt kh\u1EA9u", "type", "password"], ["registerPassword", ""], ["placeholder", "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u", "type", "password"], ["registerConfirmPassword", ""], ["resetEmail", ""]], template: function AuthenticatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthenticatorComponent_div_5_Template, 7, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthenticatorComponent_div_6_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthenticatorComponent_div_7_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_Template_button_click_9_listener() { return ctx.onForgotPasswordClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Qu\u00EAn m\u1EADt kh\u1EA9u?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_Template_button_click_11_listener() { return ctx.onCreateAccountClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "T\u1EA1o t\u00E0i kho\u1EA3n?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthenticatorComponent_Template_button_click_13_listener() { return ctx.onLoginClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0110\u0103ng nh\u1EADp");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getStateText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoginState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRegisterState());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForgotPasswordState());
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["#authenticator[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1em;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n}\r\n#authenticator-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  max-width: 30em;\r\n  padding: 1.5em;\r\n}\r\nbutton[_ngcontent-%COMP%] {\r\n  margin: .5em;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 1em;\r\n  margin: .5em 0;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: 1px solid rgba(15, 15, 15, .3);\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhlbnRpY2F0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsOEJBQThCO0FBQ2hDIiwiZmlsZSI6ImF1dGhlbnRpY2F0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhdXRoZW50aWNhdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMWVtO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4jYXV0aGVudGljYXRvci1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDMwZW07XHJcbiAgcGFkZGluZzogMS41ZW07XHJcbn1cclxuYnV0dG9uIHtcclxuICBtYXJnaW46IC41ZW07XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMTUsIDE1LCAuMyk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-authenticator',
                templateUrl: './authenticator.component.html',
                styleUrls: ['./authenticator.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] }]; }, null); })();
var AuthenticatorCompState;
(function (AuthenticatorCompState) {
    AuthenticatorCompState[AuthenticatorCompState["LOGIN"] = 0] = "LOGIN";
    AuthenticatorCompState[AuthenticatorCompState["REGISTER"] = 1] = "REGISTER";
    AuthenticatorCompState[AuthenticatorCompState["FORGOT_PASSWORD"] = 2] = "FORGOT_PASSWORD";
})(AuthenticatorCompState || (AuthenticatorCompState = {}));


/***/ }),

/***/ "Hcrv":
/*!********************************************************!*\
  !*** ./src/app/pages/post-feed/post-feed.component.ts ***!
  \********************************************************/
/*! exports provided: PostFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFeedComponent", function() { return PostFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/tools/create-post/create-post.component */ "QGhw");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");





function PostFeedComponent_app_post_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-post", 3);
} if (rf & 2) {
    const post_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("postData", post_r1);
} }
class PostFeedComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSFirestore"]();
        this.posts = [];
    }
    ngOnInit() {
        this.getPosts();
    }
    onCreatePostClick() {
        this.dialog.open(src_app_tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_1__["CreatePostComponent"]);
    }
    getPosts() {
        this.firestore.getCollection({
            path: ["Posts"],
            where: [
                new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["OrderBy"]("timestamp", "desc"),
                new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_2__["Limit"](10)
            ],
            onComplete: (result) => {
                result.docs.forEach(doc => {
                    let post = doc.data();
                    post.postId = doc.id;
                    this.posts.push(post);
                });
            },
            onFail: err => {
            }
        });
    }
}
PostFeedComponent.ɵfac = function PostFeedComponent_Factory(t) { return new (t || PostFeedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
PostFeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostFeedComponent, selectors: [["app-post-feed"]], decls: 5, vars: 1, consts: [["id", "post-feed"], [3, "postData", 4, "ngFor", "ngForOf"], ["mat-fab", "", "color", "warn", "id", "post-button", 3, "click"], [3, "postData"]], template: function PostFeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostFeedComponent_app_post_1_Template, 1, 1, "app-post", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostFeedComponent_Template_button_click_2_listener() { return ctx.onCreatePostClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, styles: ["#post-button[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  bottom: 2em;\r\n  right: 2em;\r\n}\r\n#post-feed[_ngcontent-%COMP%] {\r\n  max-width: 40%;\r\n  margin-top: 5em;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtZmVlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoicG9zdC1mZWVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3Bvc3QtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAyZW07XHJcbiAgcmlnaHQ6IDJlbTtcclxufVxyXG4jcG9zdC1mZWVkIHtcclxuICBtYXgtd2lkdGg6IDQwJTtcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostFeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-feed',
                templateUrl: './post-feed.component.html',
                styleUrls: ['./post-feed.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "QGhw":
/*!************************************************************!*\
  !*** ./src/app/tools/create-post/create-post.component.ts ***!
  \************************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var firebasets_firebasetsStorage_firebaseTSStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsStorage/firebaseTSStorage */ "jrN9");
/* harmony import */ var firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsApp/firebaseTSApp */ "5tN/");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");











function CreatePostComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CreatePostComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_4__["FirebaseTSAuth"]();
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
        this.storage = new firebasets_firebasetsStorage_firebaseTSStorage__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSStorage"]();
    }
    ngOnInit() {
    }
    onPostClick(commentInput) {
        let comment = commentInput.value;
        if (comment.length <= 0)
            return;
        if (this.selectedImageFile) {
            this.uploadImagePost(comment);
        }
        else {
            this.uploadPost(comment);
        }
    }
    uploadImagePost(comment) {
        let postId = this.firestore.genDocId();
        this.storage.upload({
            uploadName: "upload Image Post",
            path: ["Posts", postId, "image"],
            data: {
                data: this.selectedImageFile
            },
            onComplete: (downloadUrl) => {
                this.firestore.create({
                    path: ["Posts", postId],
                    data: {
                        comment: comment,
                        creatorId: this.auth.getAuth().currentUser.uid,
                        imageUrl: downloadUrl,
                        timestamp: firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSApp"].getFirestoreTimestamp()
                    },
                    onComplete: (docId) => {
                        this.dialog.close();
                    }
                });
            }
        });
    }
    uploadPost(comment) {
        this.firestore.create({
            path: ["Posts"],
            data: {
                comment: comment,
                creatorId: this.auth.getAuth().currentUser.uid,
                timestamp: firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSApp"].getFirestoreTimestamp()
            },
            onComplete: (docId) => {
                this.dialog.close();
            }
        });
    }
    onPhotoSelected(photoSelector) {
        this.selectedImageFile = photoSelector.files[0];
        if (!this.selectedImageFile)
            return;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(this.selectedImageFile);
        fileReader.addEventListener("loadend", ev => {
            let readableString = fileReader.result.toString();
            let postPreviewImage = document.getElementById("post-preview-image");
            postPreviewImage.src = readableString;
        });
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"])); };
CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 17, vars: 1, consts: [["placeholder", "Type Message..."], ["commentInput", ""], ["id", "post-preview", 4, "ngIf"], ["align", "end"], ["mat-button", "", "color", "warn"], ["for", "photo-upload"], ["id", "photo-upload", "type", "file", "accept", "image/*", 3, "change"], ["photoSelector", ""], ["mat-flat-button", "", "color", "warn", 3, "click"], ["id", "post-preview"], ["id", "post-preview-image"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "textarea", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreatePostComponent_div_7_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card-actions", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreatePostComponent_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.onPhotoSelected(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "insert_photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.onPostClick(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedImageFile);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], styles: ["#photo-upload[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  padding: 1em;\r\n  resize: none;\r\n  width: 250px;\r\n  min-height: 200px;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n#post-preview[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  margin-top: 1em;\r\n}\r\n\r\n#post-preview-image[_ngcontent-%COMP%] {\r\n  object-fit: cover;\r\n  object-position: center;\r\n  width: 150px;\r\n  height: 100px;\r\n  border-radius: 1em;\r\n  border: 1px dashed gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6ImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGhvdG8tdXBsb2FkIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4jcG9zdC1wcmV2aWV3IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbiNwb3N0LXByZXZpZXctaW1hZ2Uge1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgZ3JheTtcclxufVxyXG4iXX0= */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-post',
                templateUrl: './create-post.component.html',
                styleUrls: ['./create-post.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/profile/profile.component */ "FPDJ");









function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLoginClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello, ", ctx_r1.getUserName(), "");
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onLogoutClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(loginSheet, router) {
        this.loginSheet = loginSheet;
        this.router = router;
        this.title = 'socialnetworking';
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_2__["FirebaseTSAuth"]();
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSFirestore"]();
        this.userHasProfile = true;
        this.auth.listenToSignInStateChanges(user => {
            this.auth.checkSignInState({
                whenSignedIn: user => {
                },
                whenSignedOut: user => {
                    AppComponent.userDocument = null;
                },
                whenSignedInAndEmailNotVerified: user => {
                    this.router.navigate(["emailVerification"]);
                },
                whenSignedInAndEmailVerified: user => {
                    this.getUserProfile();
                },
                whenChanged: user => {
                }
            });
        });
    }
    static getUserDocument() {
        try {
            return AppComponent.userDocument;
        }
        catch (err) {
        }
    }
    getUserName() {
        return AppComponent.userDocument.publicName;
    }
    getUserProfile() {
        this.firestore.listenToDocument({
            name: "Getting Document",
            path: ["Users", this.auth.getAuth().currentUser.uid],
            onUpdate: (result) => {
                AppComponent.userDocument = result.data();
                this.userHasProfile = result.exists;
                AppComponent.userDocument.userId = this.auth.getAuth().currentUser.uid;
                if (this.userHasProfile) {
                    this.router.navigate(["postfeed"]);
                }
            }
        });
    }
    onLogoutClick() {
        this.auth.signOut();
        this.router.navigate(['/']);
    }
    loggedIn() {
        return this.auth.isSignedIn();
    }
    onLoginClick() {
        this.loginSheet.open(_tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_1__["AuthenticatorComponent"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 4, consts: [["id", "nav-bar"], ["id", "nav-bar-content"], ["id", "nav-bar-left"], [1, "nav-bar-items", 2, "font-size", "1.5em"], ["src", "assets/logo-white.png"], ["id", "nav-bar-right"], ["class", "nav-bar-items", 3, "click", 4, "ngIf"], ["class", "nav-bar-items", 4, "ngIf"], [3, "show"], [1, "nav-bar-items", 3, "click"], [1, "nav-bar-items"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_div_8_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-profile", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn() && ctx.userHasProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loggedIn() && !ctx.userHasProfile);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]], styles: ["#nav-bar[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 5em;\r\n  z-index: 10;\r\n}\r\n#nav-bar-content[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  height: 100%;\r\n  background-color: #1D1929;\r\n}\r\n#nav-bar-left[_ngcontent-%COMP%], #nav-bar-right[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100%;\r\n  padding: 0 2em;\r\n  color: white;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n}\r\n#nav-bar-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n}\r\n#nav-bar-right[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n}\r\n.nav-bar-items[_ngcontent-%COMP%] {\r\n  font-size: 1em;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  margin-right: 1em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI25hdi1iYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVlbTtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4jbmF2LWJhci1jb250ZW50IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFEMTkyOTtcclxufVxyXG4jbmF2LWJhci1sZWZ0LCAjbmF2LWJhci1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNuYXYtYmFyLWxlZnQgaW1ne1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuI25hdi1iYXItcmlnaHQge1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLm5hdi1iYXItaXRlbXMge1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "WBie":
/*!**************************************************************************!*\
  !*** ./src/app/pages/email-verification/email-verification.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmailVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerificationComponent", function() { return EmailVerificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsAuth/firebaseTSAuth */ "mWs4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");





class EmailVerificationComponent {
    constructor(router) {
        this.router = router;
        this.auth = new firebasets_firebasetsAuth_firebaseTSAuth__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSAuth"]();
    }
    ngOnInit() {
        if (this.auth.isSignedIn() && !this.auth.getAuth().currentUser.emailVerified) {
            this.auth.sendVerificationEmail();
        }
        else {
            this.router.navigate([""]);
        }
    }
    onResendClick() {
        this.auth.sendVerificationEmail();
    }
}
EmailVerificationComponent.ɵfac = function EmailVerificationComponent_Factory(t) { return new (t || EmailVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmailVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailVerificationComponent, selectors: [["app-email-verification"]], decls: 5, vars: 0, consts: [["id", "email-verification"], ["mat-flat-button", "", 3, "click"]], template: function EmailVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Email is Not Verified");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailVerificationComponent_Template_button_click_3_listener() { return ctx.onResendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resend Verification Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["#email-verification[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin-top: 8em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakIiLCJmaWxlIjoiZW1haWwtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZW1haWwtdmVyaWZpY2F0aW9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogOGVtO1xyXG59XHJcbiJdfQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-verification',
                templateUrl: './email-verification.component.html',
                styleUrls: ['./email-verification.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebasets/firebasetsApp/firebaseTSApp */ "5tN/");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "Km1n");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "PDjf");
/* harmony import */ var _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/authenticator/authenticator.component */ "FRkT");
/* harmony import */ var _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/email-verification/email-verification.component */ "WBie");
/* harmony import */ var _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tools/profile/profile.component */ "FPDJ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");
/* harmony import */ var _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/post-feed/post-feed.component */ "Hcrv");
/* harmony import */ var _tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/create-post/create-post.component */ "QGhw");
/* harmony import */ var _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tools/post/post.component */ "6qde");
/* harmony import */ var _tools_reply_reply_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tools/reply/reply.component */ "sHxp");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "SVse");
























class AppModule {
    constructor() {
        firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_5__["FirebaseTSApp"].init(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebaseConfig);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_11__["AuthenticatorComponent"],
        _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_12__["EmailVerificationComponent"],
        _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
        _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__["PostFeedComponent"],
        _tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__["CreatePostComponent"],
        _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
        _tools_reply_reply_component__WEBPACK_IMPORTED_MODULE_19__["ReplyComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _tools_authenticator_authenticator_component__WEBPACK_IMPORTED_MODULE_11__["AuthenticatorComponent"],
                    _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_12__["EmailVerificationComponent"],
                    _tools_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                    _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__["PostFeedComponent"],
                    _tools_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__["CreatePostComponent"],
                    _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"],
                    _tools_reply_reply_component__WEBPACK_IMPORTED_MODULE_19__["ReplyComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], function () { return []; }, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_16__["PostFeedComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _tools_post_post_component__WEBPACK_IMPORTED_MODULE_18__["PostComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"]], []);


/***/ }),

/***/ "sHxp":
/*!************************************************!*\
  !*** ./src/app/tools/reply/reply.component.ts ***!
  \************************************************/
/*! exports provided: ReplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplyComponent", function() { return ReplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebasets/firebasetsFirestore/firebaseTSFirestore */ "3GV7");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "iELJ");
/* harmony import */ var firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebasets/firebasetsApp/firebaseTSApp */ "5tN/");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "Dxy4");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "Tj54");









const _c0 = function (a1) { return { "comment-container": true, "creator-comment-container": a1 }; };
const _c1 = function (a1) { return { "comment": true, "creator-comment": a1 }; };
function ReplyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r0.isCommentCreator(comment_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2 == null ? null : comment_r2.creatorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r0.isCommentCreator(comment_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r2 == null ? null : comment_r2.comment);
} }
class ReplyComponent {
    constructor(postId) {
        this.postId = postId;
        this.firestore = new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["FirebaseTSFirestore"]();
        this.comments = [];
    }
    ngOnInit() {
        this.getComments();
    }
    isCommentCreator(comment) {
        try {
            return comment.creatorId == src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserDocument().userId;
        }
        catch (err) { }
    }
    getComments() {
        this.firestore.listenToCollection({
            name: "Post Comments",
            path: ["Posts", this.postId, "PostComments"],
            where: [new firebasets_firebasetsFirestore_firebaseTSFirestore__WEBPACK_IMPORTED_MODULE_1__["OrderBy"]("timestamp", "asc")],
            onUpdate: (result) => {
                result.docChanges().forEach(postCommentDoc => {
                    if (postCommentDoc.type == "added") {
                        this.comments.unshift(postCommentDoc.doc.data());
                    }
                });
            }
        });
    }
    onSendClick(commentInput) {
        if (!(commentInput.value.length > 0))
            return;
        this.firestore.create({
            path: ["Posts", this.postId, "PostComments"],
            data: {
                comment: commentInput.value,
                creatorId: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserDocument().userId,
                creatorName: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"].getUserDocument().publicName,
                timestamp: firebasets_firebasetsApp_firebaseTSApp__WEBPACK_IMPORTED_MODULE_3__["FirebaseTSApp"].getFirestoreTimestamp()
            },
            onComplete: (docId) => {
                commentInput.value = "";
            }
        });
    }
}
ReplyComponent.ɵfac = function ReplyComponent_Factory(t) { return new (t || ReplyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
ReplyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReplyComponent, selectors: [["app-reply"]], decls: 10, vars: 1, consts: [["id", "reply-box"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "reply-action-bar"], ["mat-flat-button", "", "color", "warn", 3, "click"], ["placeholder", "Comment..."], ["commentInput", ""], [3, "ngClass"], [1, "comment-name"]], template: function ReplyComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReplyComponent_div_3_Template, 6, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReplyComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.onSendClick(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["#reply-box[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 300px;\r\n  overflow: auto;\r\n  min-width: 400px;\r\n  max-width: 600px;\r\n  padding: 0 1em;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n}\r\n#reply-action-bar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 3em 1fr;\r\n  margin-top: 1em;\r\n  direction: rtl;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  padding: 1em 2em 1em 1em;\r\n  border: 1px solid gray;\r\n  outline: none;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  -webkit-box-sizing: border-box;\r\n  direction: ltr;\r\n}\r\n.comment-container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n}\r\n.comment-name[_ngcontent-%COMP%]{\r\n  font-size: .9em;\r\n}\r\n.comment[_ngcontent-%COMP%]{\r\n  border-radius: 1em;\r\n  background-color: gainsboro;\r\n  padding: 1em;\r\n}\r\n.creator-comment-container[_ngcontent-%COMP%]{\r\n  justify-content: flex-end;\r\n  text-align: end;\r\n}\r\n.creator-comment[_ngcontent-%COMP%] {\r\n  background-color: tomato;\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGx5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZCIsImZpbGUiOiJyZXBseS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlcGx5LWJveCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbiNyZXBseS1hY3Rpb24tYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2VtIDFmcjtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuaW5wdXQge1xyXG4gIHBhZGRpbmc6IDFlbSAyZW0gMWVtIDFlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpcmVjdGlvbjogbHRyO1xyXG59XHJcbi5jb21tZW50LWNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5jb21tZW50LW5hbWV7XHJcbiAgZm9udC1zaXplOiAuOWVtO1xyXG59XHJcbi5jb21tZW50e1xyXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm87XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcbi5jcmVhdG9yLWNvbW1lbnQtY29udGFpbmVye1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbi5jcmVhdG9yLWNvbW1lbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRvbWF0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReplyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reply',
                templateUrl: './reply.component.html',
                styleUrls: ['./reply.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/email-verification/email-verification.component */ "WBie");
/* harmony import */ var _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/post-feed/post-feed.component */ "Hcrv");







const routes = [
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "emailVerification", component: _pages_email_verification_email_verification_component__WEBPACK_IMPORTED_MODULE_3__["EmailVerificationComponent"] },
    { path: "postfeed", component: _pages_post_feed_post_feed_component__WEBPACK_IMPORTED_MODULE_4__["PostFeedComponent"] },
    { path: "**", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map