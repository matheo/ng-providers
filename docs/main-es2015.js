(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/work/git/github/ng-providers/apps/website/src/main.ts */"zUnb");


/***/ }),

/***/ "20lr":
/*!********************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/index.ts ***!
  \********************************************************************/
/*! exports provided: MyCommonModule, DisplayComponent, HttpService, TreeShakeableService, API_URL_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/common.module */ "RtzL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyCommonModule", function() { return _lib_common_module__WEBPACK_IMPORTED_MODULE_0__["MyCommonModule"]; });

/* harmony import */ var _lib_components_display_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/display/display.component */ "nrtk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return _lib_components_display_display_component__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"]; });

/* harmony import */ var _lib_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/http.service */ "vwpk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return _lib_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]; });

/* harmony import */ var _lib_services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/tree-shakeable.service */ "cf+o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TreeShakeableService", function() { return _lib_services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__["TreeShakeableService"]; });

/* harmony import */ var _lib_tokens_api_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/tokens/api.token */ "Q2kw");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "API_URL_TOKEN", function() { return _lib_tokens_api_token__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"]; });








/***/ }),

/***/ "2Urx":
/*!*************************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/tokens/error.token.ts ***!
  \*************************************************************************************/
/*! exports provided: ERROR_RETRY_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_RETRY_TOKEN", function() { return ERROR_RETRY_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");

const ERROR_RETRY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('errorRetry');


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

/***/ "Q2kw":
/*!***********************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/tokens/api.token.ts ***!
  \***********************************************************************************/
/*! exports provided: API_URL_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL_TOKEN", function() { return API_URL_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");

const API_URL_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('apiUrl');


/***/ }),

/***/ "RtzL":
/*!********************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/common.module.ts ***!
  \********************************************************************************/
/*! exports provided: MyCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCommonModule", function() { return MyCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/display/display.component */ "nrtk");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/error-handler.service */ "XV4l");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/http.service */ "vwpk");
/* harmony import */ var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/interceptor.service */ "xVEG");
/* harmony import */ var _tokens_api_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tokens/api.token */ "Q2kw");
/* harmony import */ var _tokens_error_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokens/error.token */ "2Urx");










class MyCommonModule {
    static forRoot(config) {
        return {
            ngModule: MyCommonModule,
            providers: [
                _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
                _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
                {
                    provide: _tokens_api_token__WEBPACK_IMPORTED_MODULE_7__["API_URL_TOKEN"],
                    useValue: config.apiUrl,
                },
                {
                    provide: _tokens_error_token__WEBPACK_IMPORTED_MODULE_8__["ERROR_RETRY_TOKEN"],
                    useValue: config.errorRetry || 'defaultRetry',
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
                    multi: true,
                }
            ]
        };
    }
    static forChild(config) {
        return {
            ngModule: MyCommonModule,
            providers: [
                /**
                 * The services using the Token needs to be provided
                 * in the same level of the hierarchy tree to use it instead the parent one.
                 */
                !config.apiUrl
                    ? []
                    : [
                        _services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"],
                        {
                            provide: _tokens_api_token__WEBPACK_IMPORTED_MODULE_7__["API_URL_TOKEN"],
                            useValue: config.apiUrl,
                        },
                    ],
                !config.errorRetry
                    ? []
                    : [
                        _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"],
                        {
                            provide: _tokens_error_token__WEBPACK_IMPORTED_MODULE_8__["ERROR_RETRY_TOKEN"],
                            useValue: config.errorRetry,
                        }
                    ],
            ]
        };
    }
}
MyCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyCommonModule });
MyCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyCommonModule_Factory(t) { return new (t || MyCommonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyCommonModule, { declarations: [_components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                declarations: [
                    _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"],
                ],
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"],
                ],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "A7yd");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "qFEQ");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "sEIs");






class AppComponent {
    constructor() {
        this.title = 'website';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 0, consts: [["color", "accent"], ["fxFlex", ""], ["mat-button", "", "routerLink", ""], ["mat-button", "", "routerLink", "mod1"], ["mat-button", "", "routerLink", "mod1/submod1"], ["mat-button", "", "routerLink", "mod2"], ["fxFlexFill", "", "fxLayout", "row", "fxLayoutAlign", "center center"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NgProviders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Module 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "SubModule 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Module 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "XV4l":
/*!*************************************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/error-handler.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _tokens_api_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/api.token */ "Q2kw");
/* harmony import */ var _tokens_error_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/error.token */ "2Urx");




class ErrorHandlerService {
    constructor(apiUrl, errorRetry) {
        this.apiUrl = apiUrl;
        this.errorRetry = errorRetry;
        this.i = ErrorHandlerService.count;
        ErrorHandlerService.count++;
        console.log(`new ErrorHandlerService(${this.i})(${this.apiUrl}) w/ ${this.errorRetry}`);
    }
    getResult(request, next) {
        console.log(`used ErrorHandler(${this.i})(${this.apiUrl})`);
        return next.handle(request);
    }
}
ErrorHandlerService.count = 1;
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_error_token__WEBPACK_IMPORTED_MODULE_2__["ERROR_RETRY_TOKEN"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_error_token__WEBPACK_IMPORTED_MODULE_2__["ERROR_RETRY_TOKEN"]]
            }] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "5lCh");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "40Bj");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "PBFl");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "A7yd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _matheo_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @matheo/common */ "20lr");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../libs/common/src/lib/common.module */ "RtzL");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _matheo_common__WEBPACK_IMPORTED_MODULE_6__["MyCommonModule"].forRoot({
                apiUrl: 'root',
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["routes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_9__["MyCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _matheo_common__WEBPACK_IMPORTED_MODULE_6__["MyCommonModule"].forRoot({
                        apiUrl: 'root',
                    }),
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["routes"]),
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _matheo_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @matheo/common */ "20lr");

const routes = [
    {
        path: '',
        component: _matheo_common__WEBPACK_IMPORTED_MODULE_0__["DisplayComponent"],
    },
    {
        path: 'mod1',
        loadChildren: () => __webpack_require__.e(/*! import() | mod1-mod1-module */ "mod1-mod1-module").then(__webpack_require__.bind(null, /*! ./mod1/mod1.module */ "Lvs/")).then(m => m.Mod1Module),
    },
    {
        path: 'mod2',
        loadChildren: () => __webpack_require__.e(/*! import() | mod2-mod2-module */ "mod2-mod2-module").then(__webpack_require__.bind(null, /*! ./mod2/mod2.module */ "QlYS")).then(m => m.Mod2Module),
    },
];


/***/ }),

/***/ "cf+o":
/*!**************************************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/tree-shakeable.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: TreeShakeableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeShakeableService", function() { return TreeShakeableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _tokens_api_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/api.token */ "Q2kw");



class TreeShakeableService {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
        console.log(`new TreeShakeableService(${this.apiUrl})`);
    }
    print() {
        return `TreeShakeableService API_URL: ${this.apiUrl}`;
    }
}
TreeShakeableService.ɵfac = function TreeShakeableService_Factory(t) { return new (t || TreeShakeableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"])); };
TreeShakeableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeShakeableService, factory: TreeShakeableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeShakeableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "nrtk":
/*!*******************************************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/components/display/display.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/http.service */ "vwpk");
/* harmony import */ var _services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/tree-shakeable.service */ "cf+o");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "2kYt");








function DisplayComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const interceptor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](interceptor_r1);
} }
class DisplayComponent {
    constructor(cdr, http, shakeable, interceptors) {
        this.cdr = cdr;
        this.http = http;
        this.shakeable = shakeable;
        this.interceptors = interceptors;
        this.name = 'Loading...';
        this.list = [];
    }
    ngOnInit() {
        this.http.name().subscribe(data => {
            this.name = data['name'];
            this.cdr.markForCheck();
        });
        this.list = this.interceptors.map(i => i.constructor.name);
    }
}
DisplayComponent.ɵfac = function DisplayComponent_Factory(t) { return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__["TreeShakeableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"])); };
DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DisplayComponent, selectors: [["common-display"]], decls: 6, vars: 2, consts: [[4, "ngFor", "ngForOf"]], template: function DisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "HTTP_INTERCEPTORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DisplayComponent_li_5_Template, 2, 1, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2NvbW1vbi9zcmMvbGliL2NvbXBvbmVudHMvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'common-display',
                templateUrl: './display.component.html',
                styleUrls: ['./display.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__["TreeShakeableService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"]]
            }] }]; }, null); })();


/***/ }),

/***/ "vwpk":
/*!****************************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/http.service.ts ***!
  \****************************************************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _tokens_api_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens/api.token */ "Q2kw");





class HttpService extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] {
    constructor(httpHandler, apiUrl) {
        super(httpHandler);
        this.apiUrl = apiUrl;
        console.log(`new HttpService(${this.apiUrl})`);
    }
    name() {
        return super.get(`assets/${this.apiUrl}.json`);
    }
    print() {
        return `HttpService API_URL: ${this.apiUrl}`;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_2__["API_URL_TOKEN"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_2__["API_URL_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "xVEG":
/*!***********************************************************************************************!*\
  !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/interceptor.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: InterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorService", function() { return InterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _tokens_api_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens/api.token */ "Q2kw");
/* harmony import */ var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-handler.service */ "XV4l");




class InterceptorService {
    constructor(injector, apiUrl) {
        this.injector = injector;
        this.apiUrl = apiUrl;
        this.errorHandler = this.injector.get(_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"]);
        console.log(`new InterceptorService(${this.apiUrl}) w/ errorHandler(${this.errorHandler.i})`);
    }
    intercept(request, next) {
        return this.errorHandler.getResult(request, next);
    }
}
InterceptorService.ɵfac = function InterceptorService_Factory(t) { return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"])); };
InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InterceptorService, factory: InterceptorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "e4iD");




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
//# sourceMappingURL=main-es2015.js.map