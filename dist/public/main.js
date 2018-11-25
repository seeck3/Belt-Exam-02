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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies */ "./src/app/movies/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'movies',
        pathMatch: 'full',
    },
    {
        path: 'movies/:movie_id/refresh',
        component: _movies__WEBPACK_IMPORTED_MODULE_2__["RefreshComponent"],
    },
    {
        path: 'movies',
        children: [
            {
                path: '',
                component: _movies__WEBPACK_IMPORTED_MODULE_2__["MovieComponent"],
            },
            {
                path: 'new',
                component: _movies__WEBPACK_IMPORTED_MODULE_2__["NewMovieComponent"],
            },
            {
                path: ':movie_id',
                component: _movies__WEBPACK_IMPORTED_MODULE_2__["ReviewsComponent"],
            },
            {
                path: ':movie_id/review',
                component: _movies__WEBPACK_IMPORTED_MODULE_2__["NewReviewComponent"],
            },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class='container'>Squishy Tomatoes</h1>\n\n<router-outlet></router-outlet>\n"

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
        this.title = 'beltexam';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movies */ "./src/app/movies/index.ts");
/* harmony import */ var _array_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./array.pipe */ "./src/app/array.pipe.ts");
/* harmony import */ var _movies_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movies/refresh/refresh.component */ "./src/app/movies/refresh/refresh.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ].concat(_movies__WEBPACK_IMPORTED_MODULE_6__["components"], [
                _array_pipe__WEBPACK_IMPORTED_MODULE_7__["ArrayPipe"],
                _movies_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_8__["RefreshComponent"],
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/array.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/array.pipe.ts ***!
  \*******************************/
/*! exports provided: ArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayPipe", function() { return ArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ArrayPipe = /** @class */ (function () {
    function ArrayPipe() {
    }
    ArrayPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) { return Object.assign({ key: key }, value[key]); });
    };
    ArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'ArrayPipe'
        })
    ], ArrayPipe);
    return ArrayPipe;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: Movie, Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies */ "./src/app/models/movies.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return _movies__WEBPACK_IMPORTED_MODULE_0__["Movie"]; });

/* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review */ "./src/app/models/review.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return _review__WEBPACK_IMPORTED_MODULE_1__["Review"]; });





/***/ }),

/***/ "./src/app/models/movies.ts":
/*!**********************************!*\
  !*** ./src/app/models/movies.ts ***!
  \**********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/review.ts":
/*!**********************************!*\
  !*** ./src/app/models/review.ts ***!
  \**********************************/
/*! exports provided: Review */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Review", function() { return Review; });
var Review = /** @class */ (function () {
    function Review() {
    }
    return Review;
}());



/***/ }),

/***/ "./src/app/movies/index.ts":
/*!*********************************!*\
  !*** ./src/app/movies/index.ts ***!
  \*********************************/
/*! exports provided: components, RefreshComponent, MovieComponent, NewMovieComponent, NewReviewComponent, ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movies/movie/movie.component.ts");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/movies/reviews/reviews.component.ts");
/* harmony import */ var _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-movie/new-movie.component */ "./src/app/movies/new-movie/new-movie.component.ts");
/* harmony import */ var _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-review/new-review.component */ "./src/app/movies/new-review/new-review.component.ts");
/* harmony import */ var _refresh_refresh_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./refresh/refresh.component */ "./src/app/movies/refresh/refresh.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return _movie_movie_component__WEBPACK_IMPORTED_MODULE_0__["MovieComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_2__["NewMovieComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewReviewComponent", function() { return _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_3__["NewReviewComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__["ReviewsComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RefreshComponent", function() { return _refresh_refresh_component__WEBPACK_IMPORTED_MODULE_4__["RefreshComponent"]; });






var components = [
    _movie_movie_component__WEBPACK_IMPORTED_MODULE_0__["MovieComponent"],
    _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_1__["ReviewsComponent"],
    _new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_2__["NewMovieComponent"],
    _new_review_new_review_component__WEBPACK_IMPORTED_MODULE_3__["NewReviewComponent"],
    _refresh_refresh_component__WEBPACK_IMPORTED_MODULE_4__["RefreshComponent"]
];







/***/ }),

/***/ "./src/app/movies/movie/movie.component.css":
/*!**************************************************!*\
  !*** ./src/app/movies/movie/movie.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add {\r\n  display: inline-block;\r\n  margin-left: 90%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWVzL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0NBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW92aWVzL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/movies/movie/movie.component.html":
/*!***************************************************!*\
  !*** ./src/app/movies/movie/movie.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <fieldset>\n    <legend>Movie List</legend>\n    <button class='add' [routerLink]='[\"new\"]'>Add a new movie</button>\n    <table class='table table-striped'>\n      <thead>\n        <th>Movie Title</th>\n        <th>Stars</th>\n        <th>Available Actions</th>\n      </thead>\n\n      <tbody>\n        <tr *ngFor='let movie of movies; let i = index'>\n          <td>{{ movie.title }}</td>\n          <td>{{ star[i] / avg[i].length }} &#9733;</td>\n          <td>\n            <button [routerLink]='movie._id' class='btn'>Read reviews</button>\n            <button [routerLink]='[\"/movies\", movie._id, \"review\" ]' class='btn'>Write review</button>\n            <!-- <button class='btn btn-link' (click)='onDelete(movie._id)'>Delete Movie</button> -->\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</section>\n"

/***/ }),

/***/ "./src/app/movies/movie/movie.component.ts":
/*!*************************************************!*\
  !*** ./src/app/movies/movie/movie.component.ts ***!
  \*************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieComponent = /** @class */ (function () {
    function MovieComponent(httpService, router, route) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.movies = [];
        this.star = [];
        this.avg = [];
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getMovies().subscribe(function (movies) {
            console.log('movies from observable', movies);
            _this.movies = movies;
            for (var _i = 0, movies_1 = movies; _i < movies_1.length; _i++) {
                var z = movies_1[_i];
                var temp = [];
                for (var _a = 0, _b = z.reviews; _a < _b.length; _a++) {
                    var x = _b[_a];
                    console.log("xxxxxxxxxxxxx", x.star);
                    temp.push(x.star);
                }
                console.log(temp);
                _this.avg.push(temp);
            }
            console.log(_this.avg);
            for (var i = 0; i < _this.avg.length; i++) {
                console.log(_this.avg[i]);
                var k = 0;
                for (var j = 0; j < _this.avg[i].length; j++) {
                    k = k + _this.avg[i][j];
                }
                _this.star.push(k);
            }
            console.log("sfadffasdfasdfsd", _this.star);
            // for (let z of movies) {
            //   let temp = [];
            //   console.log("zzzzzzzzzzzzzz", z.stars);
            //   // this.star.push(z.stars);
            //   for (let x of z.stars) {
            //     var y = 0;
            //     console.log("xxxxxxxx", x);
            //     temp.push(x);
            //   }
            //   console.log("temptemptemptmeptemp", temp);
            //   var q = 0;
            //   for (let i = 0; i < temp.length; i++) {
            //       y = temp[i];
            //       console.log("yyyyyyyyyyyyyyyyy", y);
            //       q = q + y;
            //       console.log("qqqqqqqqqqqqqq",q);
            //     }
            //   this.avg.push(q);
            // }
            //   console.log('asdffasd', this.avg);
            // });
        });
        // onDelete(id: number) {
        //   console.log('Deleting movie');
        //   this.httpService.deleteMovie(id).subscribe(deletedMovie => {
        //     console.log('zzzzzzzzzzz', deletedMovie);
        //     this.movies = this.movies.filter(movie => movie._id !== deletedMovie._id);
        //     this.router.navigateByUrl('/');
        //   });
        // }
    };
    MovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movies/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movies/movie/movie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/new-movie/new-movie.component.css":
/*!**********************************************************!*\
  !*** ./src/app/movies/new-movie/new-movie.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9uZXctbW92aWUvbmV3LW1vdmllLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/movies/new-movie/new-movie.component.html":
/*!***********************************************************!*\
  !*** ./src/app/movies/new-movie/new-movie.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Submit a movie and review</legend>\n\n  <!-- <div *ngIf='errors.length'>\n    <ul class='alert alert-danger'>\n      <li *ngFor='let error of errors'>{{error}}</li>\n    </ul>\n\n  </div> -->\n\n  <form class='form-group' (submit)='onSubmit($event, form)' #form='ngForm'>\n    <div>\n      <label for=\"\">Movie Title :</label>\n      <input class='form-control' type=\"text\" name=\"title\" [(ngModel)]='movie.title' #title='ngModel' required\n        minlength=\"3\" required>\n      <div>\n        <div *ngIf='title?.errors?.required'>Title is required</div>\n        <div *ngIf='title?.errors?.minlength'>Title must be at least 3 characters</div>\n        <br>\n      </div>\n    </div>\n    <div>\n      <label for=\"\">Your name :</label>\n      <input class='form-control' type=\"text\" name=\"name\" [(ngModel)]='movie.name' #name='ngModel' required minlength=\"3\">\n      <div>\n\n        <div *ngIf='name?.errors?.required'>Name is required</div>\n        <div *ngIf='name?.errors?.minlength'>Name must be at least 3 characters</div>\n        <br>\n      </div>\n    </div>\n    <div>\n      <label for=\"\">Stars :</label>\n      <select class='form-control' type=\"text\" name=\"star\" [(ngModel)]='movie.star' #star='ngModel' required>\n        <option value=\"null\"></option>\n        <option value=\"0\">0</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n      </select>\n\n      <!-- <div class=\"error\" *ngIf='star.invalid && (star.dirty || star.touched)'> -->\n      <div>\n        <div *ngIf='star?.errors?.required'>Star is required</div>\n        <br>\n      </div>\n      <div>\n        <label for=\"\">Your review :</label>\n        <textarea class='form-control' name=\"review\" row='5' [(ngModel)]='movie.review' #review='ngModel' required\n          minlength=\"3\"></textarea>\n      </div>\n      <div>\n        <div *ngIf='review?.errors?.required'>Review is required</div>\n        <br>\n      </div>\n\n    </div>\n\n    <button class='btn'>Submit</button>\n  </form>\n  <button class='btn' [routerLink]='[\"/movies\"]'>Cancel</button>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/movies/new-movie/new-movie.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/movies/new-movie/new-movie.component.ts ***!
  \*********************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewMovieComponent = /** @class */ (function () {
    function NewMovieComponent(httpService, router) {
        this.httpService = httpService;
        this.router = router;
        this.movie = new _models__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
        this.review = new _models__WEBPACK_IMPORTED_MODULE_2__["Review"]();
        this.errors = [];
        this.createMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createReview = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewMovieComponent.prototype.ngOnInit = function () {
    };
    NewMovieComponent.prototype.onSubmit = function (event, form) {
        var _this = this;
        event.preventDefault();
        console.log('submitting form', form.value);
        // this.books.push(form.value);
        this.httpService.createMovie(form.value).subscribe(function () {
            _this.createMovie.emit(form.value);
            _this.createReview.emit(form.value);
            _this.movie = new _models__WEBPACK_IMPORTED_MODULE_2__["Movie"]();
            _this.review = new _models__WEBPACK_IMPORTED_MODULE_2__["Review"]();
            form.reset();
            _this.router.navigateByUrl('/');
        }, function (error) {
            console.log(error);
            _this.errors.push(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewMovieComponent.prototype, "createMovie", void 0);
    NewMovieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-movie',
            template: __webpack_require__(/*! ./new-movie.component.html */ "./src/app/movies/new-movie/new-movie.component.html"),
            styles: [__webpack_require__(/*! ./new-movie.component.css */ "./src/app/movies/new-movie/new-movie.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NewMovieComponent);
    return NewMovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/new-review/new-review.component.css":
/*!************************************************************!*\
  !*** ./src/app/movies/new-review/new-review.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9uZXctcmV2aWV3L25ldy1yZXZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/new-review/new-review.component.html":
/*!*************************************************************!*\
  !*** ./src/app/movies/new-review/new-review.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>Add a review for {{ movie?.title }}</legend>\n\n  <!-- <div *ngIf='errors.length'>\n      <ul class='alert alert-danger'>\n        <li *ngFor='let error of errors'>{{error}}</li>\n      </ul>\n\n    </div> -->\n\n  <form class='form-group' (submit)='onSubmit(movie._id, form)' #form='ngForm'>\n    <div>\n      <label for=\"\">Your name :</label>\n\n      <input class='form-control' type=\"text\" name=\"name\" ngModel #name='ngModel' required minlength=\"3\">\n      <div>\n\n        <div *ngIf='name?.errors?.required'>Name is required</div>\n        <div *ngIf='name?.errors?.minlength'>Name must be at least 3 characters</div>\n        <br>\n      </div>\n    </div>\n    <div>\n      <label for=\"\">Stars :</label>\n      <select class='form-control' type=\"text\" name=\"star\" ngModel #star='ngModel' required>\n        <option value=\"\"></option>\n        <option value=\"0\">0</option>\n        <option value=\"1\">1</option>\n        <option value=\"2\">2</option>\n        <option value=\"3\">3</option>\n        <option value=\"4\">4</option>\n        <option value=\"5\">5</option>\n      </select>\n\n      <!-- <div class=\"error\" *ngIf='star.invalid && (star.dirty || star.touched)'> -->\n      <div>\n        <div *ngIf='star?.errors?.required'>Star is required</div>\n        <br>\n      </div>\n      <div>\n        <label for=\"\">Your review :</label>\n        <textarea class='form-control' name=\"review\" row='5' ngModel #review='ngModel' required minlength=\"3\"></textarea>\n      </div>\n      <div>\n        <div *ngIf='review?.errors?.required'>Review is required</div>\n        <br>\n      </div>\n\n    </div>\n\n    <button class='btn' *ngIf='form.valid'>Submit</button>\n  </form>\n  <button class='btn' [routerLink]='[\"/movies\"]'>Cancel</button>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/movies/new-review/new-review.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/movies/new-review/new-review.component.ts ***!
  \***********************************************************/
/*! exports provided: NewReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewReviewComponent", function() { return NewReviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewReviewComponent = /** @class */ (function () {
    function NewReviewComponent(httpService, router, route, formBuilder) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.movies = [];
        this.errors = [];
        this.createMovie = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    NewReviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        //   this.registerForm = this.formBuilder.group({
        //     name: ['', [Validators.required, Validators.minLength(3)]],
        //     star: ['', Validators.required],
        //     review: ['', [Validators.required, Validators.minLength(3)]],
        // });
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return params.get('movie_id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (movieId) { return _this.httpService.getMovie(movieId); }))
            .subscribe(function (movie) { return (_this.movie = movie); });
    };
    NewReviewComponent.prototype.onSubmit = function (movie_id, form) {
        var _this = this;
        this.httpService.addReview(movie_id, form.value).subscribe(function () {
            _this.createMovie.emit(form.value);
            _this.movie = new _models__WEBPACK_IMPORTED_MODULE_4__["Movie"]();
            form.reset();
            _this.router.navigateByUrl('/');
        }, function (error) {
            console.log(error);
            _this.errors.push(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models__WEBPACK_IMPORTED_MODULE_4__["Movie"])
    ], NewReviewComponent.prototype, "movie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewReviewComponent.prototype, "createMovie", void 0);
    NewReviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-review',
            template: __webpack_require__(/*! ./new-review.component.html */ "./src/app/movies/new-review/new-review.component.html"),
            styles: [__webpack_require__(/*! ./new-review.component.css */ "./src/app/movies/new-review/new-review.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], NewReviewComponent);
    return NewReviewComponent;
}());



/***/ }),

/***/ "./src/app/movies/refresh/refresh.component.css":
/*!******************************************************!*\
  !*** ./src/app/movies/refresh/refresh.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9yZWZyZXNoL3JlZnJlc2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/refresh/refresh.component.html":
/*!*******************************************************!*\
  !*** ./src/app/movies/refresh/refresh.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/movies/refresh/refresh.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/movies/refresh/refresh.component.ts ***!
  \*****************************************************/
/*! exports provided: RefreshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshComponent", function() { return RefreshComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RefreshComponent = /** @class */ (function () {
    function RefreshComponent(httpService, router, route) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.movies = [];
    }
    RefreshComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params.get('movie_id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (movieId) { return _this.httpService.getMovie(movieId); }))
            .subscribe(function (movie) {
            // console.log(movie.reviews.name);
            _this.movie = movie;
            console.log('movie = ', _this.movie);
            console.log("ididididididididi", _this.movie._id);
            _this.router.navigate(['movies', _this.movie._id]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RefreshComponent.prototype, "movie", void 0);
    RefreshComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refresh',
            template: __webpack_require__(/*! ./refresh.component.html */ "./src/app/movies/refresh/refresh.component.html"),
            styles: [__webpack_require__(/*! ./refresh.component.css */ "./src/app/movies/refresh/refresh.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RefreshComponent);
    return RefreshComponent;
}());



/***/ }),

/***/ "./src/app/movies/reviews/reviews.component.css":
/*!******************************************************!*\
  !*** ./src/app/movies/reviews/reviews.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/reviews/reviews.component.html":
/*!*******************************************************!*\
  !*** ./src/app/movies/reviews/reviews.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <a class='btn' routerLink='/'>Home</a>\n  <button class='btn btn-link' (click)='onDelete(movie._id)'>Delete Movie</button>\n  <fieldset>\n    <legend>Review For {{ movie?.title }}</legend>\n    <!-- <button class='add' [routerLink]='[\"new\"]'>Add a new movie</button> -->\n    <table class='table table-striped'>\n      <thead>\n        <th>Reviewer</th>\n        <th>Stars</th>\n        <th>Reviews</th>\n        <th>Actions</th>\n      </thead>\n\n      <tbody>\n        <!-- <tr *ngFor='let name of movie?.name let star of movie?.star let review of movie?.review'> -->\n        <tr *ngFor='let m of movie?.reviews'>\n          <td>{{ m.name }}</td>\n          <td>{{ m.star }} </td>\n          <td>{{ m.review }} </td>\n          <td>\n            <button class='btn btn-warning' [routerLink]=\"['refresh']\" (click)='onReviewDelete(movie._id, m._id)'>Delete\n              Review</button>\n          </td>\n          <!-- <td (click)='onEvent($event)'>\n            <button [routerLink]='movie._id' class='btn'>Read reviews</button>\n            <button [routerLink]='[\"/movies\", movie._id, \"review\" ]' class='btn'>Write review</button>\n          </td> -->\n        </tr>\n      </tbody>\n    </table>\n  </fieldset>\n</section>\n"

/***/ }),

/***/ "./src/app/movies/reviews/reviews.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/movies/reviews/reviews.component.ts ***!
  \*****************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/http.service */ "./src/app/services/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(httpService, router, route) {
        this.httpService = httpService;
        this.router = router;
        this.route = route;
        this.movies = [];
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (params) { return params.get('movie_id'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (movieId) { return _this.httpService.getMovie(movieId); }))
            .subscribe(function (movie) {
            // console.log(movie.reviews.name);
            _this.movie = movie;
            console.log('movie = ', _this.movie);
        });
        // this.httpService.getReview(this.review).subscribe(review => {
        //   this.review = review;
        //   console.log('review = ', review);
        // });
    };
    ReviewsComponent.prototype.onDelete = function (id) {
        var _this = this;
        console.log('Deleting movie');
        this.httpService.deleteMovie(this.movie._id).subscribe(function (deletedMovie) {
            console.log('zzzzzzzzzzz', deletedMovie);
            _this.movies = _this.movies.filter(function (movie) { return movie._id !== deletedMovie._id; });
            _this.router.navigateByUrl('/');
        });
    };
    ReviewsComponent.prototype.onReviewDelete = function (id, review_id) {
        var _this = this;
        console.log('Deleting review', id, review_id);
        this.httpService.deleteReview(id, review_id).subscribe(function (deletedReview) {
            console.log('afsdfasdfasdfads', deletedReview);
            _this.movies = _this.movies.filter(function (reviews) { return review_id !== deletedReview; });
        });
        // this.router.navigate(['movies', id, 'refresh']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ReviewsComponent.prototype, "movie", void 0);
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/movies/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/movies/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.base = '/api/movies';
    }
    HttpService.prototype.getMovies = function () {
        return this.http.get(this.base);
    };
    HttpService.prototype.getMovie = function (id) {
        return this.http.get(this.base + "/" + id);
    };
    HttpService.prototype.getReview = function (id) {
        return this.http.get(this.base + "/" + id + "/review");
    };
    HttpService.prototype.editMovie = function (id, callback) {
        return this.http.put(this.base + "/" + id, callback);
    };
    HttpService.prototype.createMovie = function (movie) {
        return this.http.post(this.base, movie);
    };
    HttpService.prototype.addReview = function (id, callback) {
        return this.http.put(this.base + "/" + id + "/review", callback);
    };
    HttpService.prototype.deleteMovie = function (id) {
        return this.http.delete(this.base + "/" + id);
    };
    HttpService.prototype.deleteReview = function (id, review_id) {
        return this.http.delete(this.base + "/" + id + "/" + review_id);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\Marco_Project\Belt-Exam-02\beltexam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map