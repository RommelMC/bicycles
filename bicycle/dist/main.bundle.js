webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.registerUser = function (user) {
        return this._http.post('/register', user).map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.login = function (info) {
        return this._http.post('/login', info).map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.createBike = function (bicycle) {
        return this._http.post('/listings/create', bicycle).map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.getBikes = function () {
        return this._http.get('listings/bikes').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.getMyBikes = function () {
        return this._http.get('listings/mybikes').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.getCurrentUser = function () {
        return this._http.get('currentUser').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.updateBike = function (bike) {
        return this._http.post('/listings/bikes/update/' + bike._id, bike).map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.deleteBike = function (bike) {
        return this._http.delete('/listings/bikes/delete/' + bike._id).map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.logoff = function () {
        return this._http.get('/logoff').map(function (data) { return data.json(); }).toPromise();
    };
    ApiService.prototype.getRandomBike = function () {
        return this._http.get('/randombike').map(function (data) { return data.json(); }).toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginreg_loginreg_component__ = __webpack_require__("../../../../../src/app/loginreg/loginreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__loginreg_loginreg_component__["a" /* LoginregComponent */] },
    { path: 'browse', component: __WEBPACK_IMPORTED_MODULE_1__browse_browse_component__["a" /* BrowseComponent */] },
    { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_0__listings_listings_component__["a" /* ListingsComponent */] },
    { path: 'listings/browse', redirectTo: '/browse' },
    { path: 'listings/listings', redirectTo: '/listings' },
    { path: 'browse/listings', redirectTo: '/listings' },
    { path: 'browse/browse', redirectTo: '/browse' },
    { path: 'browse/logoff', redirectTo: '/' },
    { path: 'listings/logoff', redirectTo: '/' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Bicycle Marketplace</h1>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.loggedIn = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loginreg_loginreg_component__ = __webpack_require__("../../../../../src/app/loginreg/loginreg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__ = __webpack_require__("../../../../../src/app/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__loginreg_loginreg_component__["a" /* LoginregComponent */],
            __WEBPACK_IMPORTED_MODULE_8__browse_browse_component__["a" /* BrowseComponent */],
            __WEBPACK_IMPORTED_MODULE_9__listings_listings_component__["a" /* ListingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bicycle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bicycle; });
var Bicycle = (function () {
    function Bicycle(id, title, description, price, location, image) {
        if (id === void 0) { id = null; }
        if (title === void 0) { title = ""; }
        if (description === void 0) { description = ""; }
        if (price === void 0) { price = null; }
        if (location === void 0) { location = ""; }
        if (image === void 0) { image = ""; }
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.image = image;
    }
    return Bicycle;
}());

//# sourceMappingURL=bicycle.js.map

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['browse']\">Browse</a> | <a [routerLink]=\"['listings']\">My Listings</a> | <a [routerLink]=\"['logoff']\">Logoff</a></p>\n<div id=\"container\">\n  <form>\n    <div><label>Search: </label><input (ngModelChange)=\"search()\" [(ngModel)]=\"searchItem.item\" type=\"text\" name=\"search\"><input type=\"submit\" value='search'></div>\n  </form>\n  <div id=\"listings\">\n    <div *ngFor=\"let bike of showBikes\">\n      <img src=\"{{bike.image}}\">\n      <div>\n        <h5>Title</h5>\n        <p>{{bike.title}}</p>\n      </div>\n      <div>\n        <h5>Price</h5>\n        <p>{{bike.price}}</p>\n      </div>\n      <div>\n        <h5>Location</h5>\n        <p>{{bike.location}}</p>\n      </div>\n      <div>\n        <h5>Description</h5>\n        <p>{{bike.description}}</p>\n      </div>\n      <button *ngIf=\"currUser.email == bike.owner\" (click)=\"deleteBike(bike)\">Delete</button>\n      <button *ngIf=\"currUser.email != bike.owner\" (click)=\"contact(bike.owner)\">Contact</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowseComponent = (function () {
    function BrowseComponent(apiService) {
        this.apiService = apiService;
        this.allBikes = [];
        this.currUser = {};
        this.showBikes = [];
        this.searchItem = { item: "" };
    }
    BrowseComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
        this.getBikes();
    };
    BrowseComponent.prototype.getBikes = function () {
        var _this = this;
        this.apiService.getBikes().then(function (result) {
            _this.allBikes = result;
            _this.showBikes = _this.allBikes;
        });
    };
    BrowseComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.apiService.getCurrentUser().then(function (result) {
            _this.currUser = result;
        });
    };
    BrowseComponent.prototype.deleteBike = function (bike) {
        this.apiService.deleteBike(bike);
        this.getBikes();
    };
    BrowseComponent.prototype.contact = function (owner) {
        alert("email: " + owner);
    };
    BrowseComponent.prototype.search = function () {
        console.log("ahhh");
        this.showBikes = [];
        for (var i = 0; i < this.allBikes.length; i++) {
            console.log(i);
            if (this.allBikes[i].title.indexOf(this.searchItem.item) != -1) {
                this.showBikes.push(this.allBikes[i]);
            }
        }
    };
    return BrowseComponent;
}());
BrowseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-browse',
        template: __webpack_require__("../../../../../src/app/browse/browse.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse/browse.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], BrowseComponent);

var _a;
//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<p><a [routerLink]=\"['browse']\">Browse</a> | <a [routerLink]=\"['listings']\">My Listings</a> | <a [routerLink]=\"['logoff']\">Logoff</a></p>\n<div id=\"container\">\n  <h2>Create Listing</h2>\n  <form (submit)=\"createBike()\">\n    <div><label>Title: </label><input [(ngModel)]=\"bicycle.title\" type=\"text\" name='title'></div>\n    <div><label>Description: </label><input [(ngModel)]=\"bicycle.description\" name='description' type=\"text\"></div>\n    <div><label>Price: </label><input [(ngModel)]=\"bicycle.price\" name='price' type=\"number\" step='.01'></div>\n    <div><label>Location: </label><input [(ngModel)]=\"bicycle.location\" name='location' type=\"text\"></div>\n    <div><label>Image: </label><input [(ngModel)]=\"bicycle.image\" name='image' type=\"text\"></div>\n    <div><input type=\"submit\" value='CREATE'></div>\n  </form>\n  <div id=\"listings\">\n    <div *ngFor=\"let bike of allBikes\">\n      <img src=\"{{bike.image}}\">\n      <form (submit)=\"updateBike(bike)\">\n        <div><label>Title: </label><input type=\"text\" name='title' [(ngModel)]='bike.title'></div>\n        <div><label>Price: </label><input type=\"text\" name='price' [(ngModel)]='bike.price'></div>\n        <div><label>Description: </label><input type=\"text\" name='description' [(ngModel)]='bike.description'></div>\n        <div><label>Location: </label><input type=\"text\" name='location' [(ngModel)]='bike.location'></div>\n        <div><label>Image: </label><input type=\"text\" name='image' [(ngModel)]='bike.image'></div>\n        <div><input type=\"submit\" value='UPDATE'></div>\n      </form>\n      <button (click)=\"deleteBike(bike)\">Delete</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bicycle__ = __webpack_require__("../../../../../src/app/bicycle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingsComponent = (function () {
    function ListingsComponent(apiService) {
        this.apiService = apiService;
        this.bicycle = new __WEBPACK_IMPORTED_MODULE_0__bicycle__["a" /* Bicycle */]();
        this.bikeErrors = [];
        this.allBikes = [];
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.getBikes();
    };
    ListingsComponent.prototype.createBike = function () {
        var _this = this;
        this.apiService.createBike(this.bicycle).then(function (result) {
            console.log("OOOOO");
            if (result != null) {
                if (result.errors) {
                    for (var x in result.errors) {
                        if (x != '__proto__')
                            _this.bikeErrors.push(result.errors[x].message);
                    }
                }
            }
            _this.bicycle = new __WEBPACK_IMPORTED_MODULE_0__bicycle__["a" /* Bicycle */]();
            _this.getBikes();
        });
    };
    ListingsComponent.prototype.getBikes = function () {
        var _this = this;
        this.apiService.getMyBikes().then(function (result) {
            console.log(result);
            _this.allBikes = result;
        });
    };
    ListingsComponent.prototype.updateBike = function (bike) {
        this.apiService.updateBike(bike);
    };
    ListingsComponent.prototype.deleteBike = function (bike) {
        console.log("delete");
        this.apiService.deleteBike(bike);
        this.getBikes();
    };
    return ListingsComponent;
}());
ListingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-listings',
        template: __webpack_require__("../../../../../src/app/listings/listings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listings/listings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], ListingsComponent);

var _a;
//# sourceMappingURL=listings.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginreg/loginreg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginreg/loginreg.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='container'>\n  <div>\n    <h2 style='color: blue'>Bike of the day!</h2>\n    <div id=\"bikeoftheday\">\n      <img src=\"{{randBike.image}}\">\n      <h2>{{randBike.title}} {{randBike.price}}</h2>\n      <p>{{randBike.location}}</p>\n      <p>{{randBike.description}}</p>\n    </div>\n  </div>\n  <div>\n    <p *ngIf=\"logErrors\">Invalid email/password</p>\n    <form (submit)=\"login()\">\n      <label>*Email: <input name='logemail' [(ngModel)]=\"loginInfo.email\" type=\"text\"></label>\n      <label>*Password: <input name='logpassword' [(ngModel)]=\"loginInfo.password\" type=\"password\"></label>\n      <input type=\"submit\" value='Login'>\n    </form>\n    <p *ngFor=\"let err of regErrors\">{{err}}</p>\n    <form (submit)=\"register()\">\n      <label>*First Name: <input [(ngModel)]=\"user.firstName\" name='first' type=\"text\"></label>\n      <label>*Last Name: <input [(ngModel)]=\"user.lastName\" name='last' type=\"text\"></label>\n      <label>*Email: <input [(ngModel)]=\"user.email\" name='email' type=\"text\"></label>\n      <label>*Password: <input [(ngModel)]=\"user.password\" name='pw' type=\"text\"></label>\n      <label>*Password Confirmation: <input [(ngModel)]=\"user.confirmPassword\" name='cpw' type=\"text\"></label>\n      <input type=\"submit\" value='Register'>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/loginreg/loginreg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginregComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginregComponent = (function () {
    function LoginregComponent(_apiService, _router) {
        this._apiService = _apiService;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
        this.loginInfo = { email: "", password: "" };
        this.regErrors = [];
        this.logErrors = false;
        this.randBike = {};
    }
    LoginregComponent.prototype.ngOnInit = function () {
        this._apiService.logoff();
        this.getRandomBike();
    };
    LoginregComponent.prototype.register = function () {
        var _this = this;
        this.regErrors = [];
        this.logErrors = false;
        //Use service to send api call that will save user
        this._apiService.registerUser(this.user).then(function (result) {
            //Check validation errors
            if (result != null) {
                if (result.errors) {
                    for (var x in result.errors) {
                        if (x != '__proto__')
                            _this.regErrors.push(result.errors[x].message);
                    }
                }
                else {
                    _this.regErrors.push("Email already been used");
                }
            }
            else {
                _this.user = new __WEBPACK_IMPORTED_MODULE_1__user__["a" /* User */]();
                _this._router.navigate(['browse']);
            }
        });
    };
    LoginregComponent.prototype.login = function () {
        var _this = this;
        this.logErrors = false;
        this._apiService.login(this.loginInfo).then(function (result) {
            if (result == true) {
                _this._router.navigate(['browse']);
            }
            else
                _this.logErrors = true;
        });
    };
    LoginregComponent.prototype.getRandomBike = function () {
        var _this = this;
        this._apiService.getRandomBike().then(function (result) {
            _this.randBike = result;
        });
    };
    return LoginregComponent;
}());
LoginregComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loginreg',
        template: __webpack_require__("../../../../../src/app/loginreg/loginreg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginreg/loginreg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginregComponent);

var _a, _b;
//# sourceMappingURL=loginreg.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(firstName, lastName, email, password, passwordConfirmation) {
        if (firstName === void 0) { firstName = ""; }
        if (lastName === void 0) { lastName = ""; }
        if (email === void 0) { email = ""; }
        if (password === void 0) { password = ""; }
        if (passwordConfirmation === void 0) { passwordConfirmation = ""; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.passwordConfirmation = passwordConfirmation;
    }
    User.prototype.toJSON = function () {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
        };
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map