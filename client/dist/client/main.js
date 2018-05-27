(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-about\">    \n  <div class=\"u-center-text u-margin-bottom-big\">\n      <h2 class=\"heading-secondary\">\n          Experience the thrill of a lifetime\n      </h2>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-1-of-2\">\n          <h3 class=\"heading-tertiary u-margin-bottom-small\">A pinnacle experience like no other</h3>\n          <p class=\"paragraph\">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum, aspernatur sint dolores voluptas eius laborum ipsa et exercitationem maiores quae!\n          </p>\n\n          <h3 class=\"heading-tertiary u-margin-bottom-small\">Live adventures like you never have before</h3>\n          <p class=\"paragraph\">\n              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum, aspernatur sint dolores voluptas eius laborum ipsa et exercitationem maiores quae!\n          </p>\n          <a href=\"/\" class=\"btn-text\">Learn More &rarr;</a>\n      </div>\n      <div class=\"col-1-of-2\">\n          <div class=\"composition\">\n              <img src=\"assets/img/ivo-paul-van-vliet-heli1.jpg\" alt=\"helicopter skiing1\" class=\"composition__photo composition__photo--p1\" />\n              <img src=\"assets/img/johannes-waibel-view3.jpg\" alt=\"helicopter skiing2\" class=\"composition__photo composition__photo--p2\" />\n              <img src=\"assets/img/hendrik-morkel-view1.jpg\" alt=\"helicopter skiing3\" class=\"composition__photo composition__photo--p3\" />\n          </div>\n      </div>\n  </div>\n</section> "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<app-header></app-header>\n<app-about></app-about>\n<app-features></app-features>\n<app-packages></app-packages>\n<app-stories></app-stories>\n<app-booking></app-booking>\n<app-footer></app-footer>\n<app-popup></app-popup>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _booking_booking_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/booking.component */ "./src/app/booking/booking.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.component */ "./src/app/features/features.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _packages_packages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./packages/packages.component */ "./src/app/packages/packages.component.ts");
/* harmony import */ var _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./popup/popup.component */ "./src/app/popup/popup.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/stories/stories.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"],
                _booking_booking_component__WEBPACK_IMPORTED_MODULE_4__["BookingComponent"],
                _features_features_component__WEBPACK_IMPORTED_MODULE_5__["FeaturesComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _packages_packages_component__WEBPACK_IMPORTED_MODULE_8__["PackagesComponent"],
                _popup_popup_component__WEBPACK_IMPORTED_MODULE_9__["PopupComponent"],
                _stories_stories_component__WEBPACK_IMPORTED_MODULE_10__["StoriesComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/booking/booking.component.css":
/*!***********************************************!*\
  !*** ./src/app/booking/booking.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/booking/booking.component.html":
/*!************************************************!*\
  !*** ./src/app/booking/booking.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-book\" id=\"section-book\">\n  <div class=\"row\">\n    <div class=\"book\">\n      <div class=\"book__form\">\n        <div class=\"u-margin-bottom-medium\">\n          <h2 class=\"heading-secondary\">Book your trip</h2>\n        </div>\n        <form action=\"/\" class=\"form\">\n          <div class=\"form__group\">\n            <input \n              type=\"text\" \n              class=\"form__input\" \n              placeholder=\"Full Name\" \n              id=\"name\"\n              autoComplete=\"off\"\n              required/>\n            <label \n              for=\"name\" \n              class=\"form__label\">Full name</label>\n          </div>\n          <div class=\"form__group\">\n            <input \n              type=\"email\" \n              class=\"form__input\" \n              placeholder=\"email\"\n              id=\"email\"\n              autoComplete=\"off\"\n              required />\n            <label \n              for=\"email\" \n              class=\"form__label\">Email address</label>\n          </div>\n          <div class=\"form__group u-margin-bottom-medium\">\n            <div class=\"form__radio-group\">\n              <input type=\"radio\" class=\"form__radio-input\" id=\"sub\" name=\"size\" checked=\"checked\"/>\n              <label for=\"sub\" class=\"form__radio-label\">\n                <span class=\"form__radio-button\"></span>\n                Subscribe for deals\n              </label>\n            </div>\n            <div class=\"form__radio-group\">\n              <input type=\"radio\" class=\"form__radio-input\" id=\"nosub\" name=\"size\"/>\n              <label for=\"nosub\" class=\"form__radio-label\">\n                  <span class=\"form__radio-button\"></span>\n                  Do not send me emails\n              </label>\n            </div>\n          </div>\n          <div class=\"form__group\">\n              <button class=\"btn btn--blue\">Next Steps &rarr;</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/booking/booking.component.ts":
/*!**********************************************!*\
  !*** ./src/app/booking/booking.component.ts ***!
  \**********************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookingComponent = /** @class */ (function () {
    function BookingComponent() {
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.component.html */ "./src/app/booking/booking.component.html"),
            styles: [__webpack_require__(/*! ./booking.component.css */ "./src/app/booking/booking.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookingComponent);
    return BookingComponent;
}());



/***/ }),

/***/ "./src/app/features/features.component.css":
/*!*************************************************!*\
  !*** ./src/app/features/features.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/features.component.html":
/*!**************************************************!*\
  !*** ./src/app/features/features.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-features\">   \n  <div class=\"row\">\n    <div class=\"col-1-of-4\">\n      <div class=\"feature-box\">\n        <i class=\"fas fa-globe feature-box__icon\"></i>\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Explore the world</h3>\n        <p class=\"feature-box__text\">\n            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!\n        </p>\n      </div>\n    </div>\n    <div class=\"col-1-of-4\">\n      <div class=\"feature-box\">\n      <i class=\"fas fa-leaf feature-box__icon\"></i>\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Meet Nature</h3>\n        <p class=\"feature-box__text\">\n            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!\n        </p>\n      </div>\n    </div>\n    <div class=\"col-1-of-4\">\n      <div class=\"feature-box\">\n        <i class=\"feature-box__icon fas fa-map\"></i>\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">Find your way</h3>\n        <p class=\"feature-box__text\">\n            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!\n        </p>\n      </div>\n    </div>\n    <div class=\"col-1-of-4\">\n      <div class=\"feature-box\">\n        <i class=\"feature-box__icon far fa-heart\"></i>\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">We love your money</h3>\n        <p class=\"feature-box__text\">\n            Quisquam impedit aut quam soluta laudantium culpa ratione repellat aperiam rerum!\n        </p>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/features/features.component.ts":
/*!************************************************!*\
  !*** ./src/app/features/features.component.ts ***!
  \************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
    }
    FeaturesComponent.prototype.ngOnInit = function () {
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.css */ "./src/app/features/features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <footer class=\"footer\">\n    <div class=\"footer__logo-box\">\n      <img src=\"/assets/img/favicon-blue.png\" alt=\"Full logo\" class=\"footer__logo\"/>\n      <h3 class=\"footer__logo-text\">Powder, Inc.</h3>\n    </div>    \n    <div class=\"row\">\n      <div class=\"col-1-of-2\">\n        <div class=\"footer__navigation\">\n          <ul class=\"footer__list\">\n            <li class=\"footer__item\"><a href=\"/\" class=\"footer__link\">Company</a></li>\n            <li class=\"footer__item\"><a href=\"/\" class=\"footer__link\">Contact</a></li>\n            <li class=\"footer__item\"><a href=\"/\" class=\"footer__link\">Careers</a></li>\n            <li class=\"footer__item\"><a href=\"/\" class=\"footer__link\">Privacy</a></li>\n            <li class=\"footer__item\"><a href=\"/\" class=\"footer__link\">Terms</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-1-of-2\">\n        <p class=\"footer__copyright\">\n          This website was built by <a href=\"/\" class=\"footer__link\">Prescott Breeden</a>.  Check out my <a href=\"/\" class=\"footer__link\">other projects</a>. Copyright &copy; by Prescott Breeden. Layout inspired by Jonas Schmedtman.\n        </p>\n      </div>\n    </div>\n  </footer>\n</section>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"header__logo-box\">\n      <img src=\"assets/img/snowflake-white.png\" alt=\"Logo\" class=\"header__logo\" />\n  </div>\n  <div class=\"header__text-box\">\n      <h1 class=\"heading-primary\">\n          <span class=\"heading-primary--main\">Powder</span>\n          <span class=\"heading-primary--sub\">reimagine life</span>\n      </h1>\n      <a href=\"#section-packages\" class=\"btn btn--white btn--animated\">Discover our Heli-skiing</a>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation\">\n  <input type=\"checkbox\" class=\"navigation__checkbox\" id=\"navi-toggle\" />\n\n  <label for=\"navi-toggle\" class=\"navigation__button\">\n      <span class=\"navigation__icon\">&nbsp;</span>\n  </label>\n\n  <div class=\"navigation__background\">&nbsp;</div>\n\n  <nav class=\"navigation__nav\">\n    <ul class=\"navigation__list\">\n      <li class=\"navigation__item\">\n        <a href=\"/\" class=\"navigation__link\">About Powder</a>\n        <img src=\"assets/img/snowflake-white.png\" alt=\"Logo\" class=\"navigation__snowflake navigation__snowflake-1\" /> \n      </li>\n      <li class=\"navigation__item\">\n        <a href=\"/\" class=\"navigation__link\">Popular packages</a>\n        <img src=\"assets/img/snowflake-white.png\" alt=\"Logo\" class=\"navigation__snowflake navigation__snowflake-2\" /> \n      </li>\n      <li class=\"navigation__item\">\n        <a href=\"#popup\" class=\"navigation__link\" onClick={this.closeNav}>Book now</a>\n        <img src=\"assets/img/snowflake-white.png\" alt=\"Logo\" class=\"navigation__snowflake navigation__snowflake-3\" /> \n      </li>\n      <li class=\"navigation__item\">\n        <a href=\"/\" class=\"navigation__link\">Stories</a>\n        <img src=\"assets/img/snowflake-white.png\" alt=\"Logo\" class=\"navigation__snowflake navigation__snowflake-4\" /> \n      </li>\n      <li class=\"navigation__item\">\n        <a href=\"/\" class=\"navigation__link\">Contact</a>\n        <img src=\"assets/img/snowflake-white.png\" alt=\"Logo\" class=\"navigation__snowflake navigation__snowflake-5\" /> \n      </li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/packages/packages.component.css":
/*!*************************************************!*\
  !*** ./src/app/packages/packages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/packages/packages.component.html":
/*!**************************************************!*\
  !*** ./src/app/packages/packages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-packages\" id=\"section-packages\">\n  <div class=\"u-center-text u-margin-bottom-big\">\n    <h2 class=\"heading-secondary\">\n      Most popular packages\n    </h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-1-of-3\">\n      <div class=\"card\">\n        <div class=\"card__side card__side--front card__side--front-1\">\n          <div class=\"card__picture card__picture--1\">\n            &nbsp;\n          </div>\n          <h4 class=\"card__heading\">\n            <span class=\"card__heading-span card__heading-span--1\">\n                The Cliff Dropper\n            </span>\n          </h4>\n          <div class=\"card__details\">\n            <ul>\n              <li>3 days</li>\n              <li>6 hours flight time</li>\n              <li>2 guides</li>\n              <li>Food and lodging</li>\n              <li>Difficulty: Easy</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card__side card__side--back card__side--back-1\">\n          <div class=\"card__cta\">\n            <div class=\"card__price-box\">\n              <p class=\"card__price-only\">from</p>\n              <p class=\"card__price-value\">$2,799</p>\n            </div>\n            <a href=\"#popup\" class=\"btn btn--white\">Book now!</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-1-of-3\">\n      <div class=\"card\">\n        <div class=\"card__side card__side--front card__side--front-2\">\n          <div class=\"card__picture card__picture--2\">\n              &nbsp;\n          </div>\n          <div class=\"card__heading\">\n            <span class=\"card__heading-span card__heading-span--2\">\n              Powder Hunter\n            </span>\n          </div>\n          <div class=\"card__details\">\n            <ul>\n              <li>5 days</li>\n              <li>12.5 hours flight time</li>\n              <li>2 guides</li>\n              <li>Food and lodging</li>\n              <li>Difficulty: Intermediate</li>\n            </ul>\n          </div>    \n        </div>\n        <div class=\"card__side card__side--back card__side--back-2\">\n          <div class=\"card__cta\">\n            <div class=\"card__price-box\">\n              <p class=\"card__price-only\">from</p>\n              <p class=\"card__price-value\">$4,799</p>\n            </div>\n            <a href=\"#popup\" class=\"btn btn--white\">Book now!</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-1-of-3\">\n      <div class=\"card\">\n        <div class=\"card__side card__side--front card__side--front-3\">\n          <div class=\"card__picture card__picture--3\">\n            &nbsp;\n          </div>\n          <div class=\"card__heading\">\n            <span class=\"card__heading-span card__heading-span--3\">\n                Sultan of Powder\n            </span>\n          </div>\n          <div class=\"card__details\">\n            <ul>\n              <li>7 days</li>\n              <li>21 hours flight time</li>\n              <li>2 guides</li>\n              <li>Food and lodging</li>\n              <li>Difficulty: Powder God</li>\n            </ul>\n          </div>                             \n        </div>\n        <div class=\"card__side card__side--back card__side--back-3\">\n          <div class=\"card__cta\">\n            <div class=\"card__price-box\">\n              <p class=\"card__price-only\">from</p>\n              <p class=\"card__price-value\">$6,799</p>\n            </div>\n            <a href=\"#popup\" class=\"btn btn--white\">Book now!</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>                \n  <div class=\"u-center-text u-margin-top-huge\">\n      <a href=\"/\" class=\"btn btn--blue\">Discover all packages</a>\n  </div>\n  </section>"

/***/ }),

/***/ "./src/app/packages/packages.component.ts":
/*!************************************************!*\
  !*** ./src/app/packages/packages.component.ts ***!
  \************************************************/
/*! exports provided: PackagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesComponent", function() { return PackagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PackagesComponent = /** @class */ (function () {
    function PackagesComponent() {
    }
    PackagesComponent.prototype.ngOnInit = function () {
    };
    PackagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-packages',
            template: __webpack_require__(/*! ./packages.component.html */ "./src/app/packages/packages.component.html"),
            styles: [__webpack_require__(/*! ./packages.component.css */ "./src/app/packages/packages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PackagesComponent);
    return PackagesComponent;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/*!*******************************************!*\
  !*** ./src/app/popup/popup.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/*!********************************************!*\
  !*** ./src/app/popup/popup.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"popup\" id=\"popup\">\n  <div class=\"popup__content\">\n    <div class=\"popup__left\">\n      <img src=\"assets/img/cliff_drop.jpg\" alt=\"cliff drop\" class=\"popup__img\" />\n      <img src=\"assets/img/big_pow.jpg\" alt=\"hippopo\" class=\"popup__img\" />\n    </div>\n    <div class=\"popup__right\">\n    <a href=\"#section-packages\" class=\"popup__close\">&times;</a>\n      <h2 class=\"heading-secondary u-margin-bottom-small\">Start booking now</h2>\n      <h3 class=\"heding-tertiary u-margin-bottom-small\">Important &ndash; Please read these terms before booking</h3>\n      <p class=\"popup__text\">\n        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur error nobis possimus fugit atque repellat quidem sunt non ex ipsa, eius incidunt nihil aut voluptas in doloribus commodi nesciunt voluptates.  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur error nobis possimus fugit atque repellat quidem sunt non ex ipsa, eius incidunt nihil aut voluptas in doloribus commodi nesciunt voluptates.\n      </p>\n      <a href=\"#section-book\" class=\"btn btn--blue\" id=\"popup__btn\">Let's do it!</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/*!******************************************!*\
  !*** ./src/app/popup/popup.component.ts ***!
  \******************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupComponent = /** @class */ (function () {
    function PopupComponent() {
    }
    PopupComponent.prototype.ngOnInit = function () {
    };
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/stories/stories.component.css":
/*!***********************************************!*\
  !*** ./src/app/stories/stories.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stories/stories.component.html":
/*!************************************************!*\
  !*** ./src/app/stories/stories.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-stories\">\n  <div class=\"bg-video\">\n    <video class=\"bg-video__content\" muted autoplay loop>\n      <source src='assets/img/Mt_Baker.mp4' type=\"video/mp4\" />\n      <source src='assets/img/Mt_Baker.webm' type=\"video/webm\" />\n      Your browser is not supported!\n    </video>\n  </div>\n\n  <div class=\"u-center-text u-margin-bottom-big\">\n    <h2 class=\"heading-secondary\">\n        Heaven is a chopper ride away\n    </h2>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"story\">\n      <figure class=\"story__shape\">\n        <img src=\"assets/img/nat-8.jpg\" alt=\"person loving life\" class=\"story__img\" />\n        <figcaption class=\"story__caption\">Mona Lott</figcaption>\n      </figure>\n      <div class=\"story__text\">\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">I had the best week ever</h3>\n        <p>\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quasi porro ullam illum dolores voluptates deserunt autem eligendi natus alias officia, ipsam, atque consectetur incidunt? Explicabo dolorem optio iste assumenda?\n        </p>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"story\">\n      <figure class=\"story__shape\">\n        <img src=\"assets/img/chuck_approves.jpg\" alt=\"person loving life\" class=\"story__img story__img-2\" />\n        <figcaption class=\"story__caption\">Chuck Norris</figcaption>\n      </figure>\n      <div class=\"story__text\">\n        <h3 class=\"heading-tertiary u-margin-bottom-small\">I approve of Powder</h3>\n        <p>\n          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, quasi porro ullam illum dolores voluptates deserunt autem eligendi natus alias officia, ipsam, atque consectetur incidunt? Explicabo dolorem optio iste assumenda?\n        </p>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"u-center-text u-margin-top-huge\">\n      <a href=\"/stories\" class=\"btn-text\">Read all stories &rarr;</a>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/stories/stories.component.ts":
/*!**********************************************!*\
  !*** ./src/app/stories/stories.component.ts ***!
  \**********************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoriesComponent = /** @class */ (function () {
    function StoriesComponent() {
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stories',
            template: __webpack_require__(/*! ./stories.component.html */ "./src/app/stories/stories.component.html"),
            styles: [__webpack_require__(/*! ./stories.component.css */ "./src/app/stories/stories.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StoriesComponent);
    return StoriesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /code/udemy/css/powder_angular/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map