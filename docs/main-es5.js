(function () {
  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /media/work/git/github/ng-providers/apps/website/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "20lr":
    /*!********************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/index.ts ***!
      \********************************************************************/

    /*! exports provided: MyCommonModule, DisplayComponent, HttpService, TreeShakeableService, API_URL_TOKEN */

    /***/
    function lr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _lib_common_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./lib/common.module */
      "RtzL");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "MyCommonModule", function () {
        return _lib_common_module__WEBPACK_IMPORTED_MODULE_0__["MyCommonModule"];
      });
      /* harmony import */


      var _lib_components_display_display_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./lib/components/display/display.component */
      "nrtk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
        return _lib_components_display_display_component__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"];
      });
      /* harmony import */


      var _lib_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./lib/services/http.service */
      "vwpk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return _lib_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"];
      });
      /* harmony import */


      var _lib_services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lib/services/tree-shakeable.service */
      "cf+o");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TreeShakeableService", function () {
        return _lib_services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__["TreeShakeableService"];
      });
      /* harmony import */


      var _lib_tokens_api_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./lib/tokens/api.token */
      "Q2kw");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "API_URL_TOKEN", function () {
        return _lib_tokens_api_token__WEBPACK_IMPORTED_MODULE_4__["API_URL_TOKEN"];
      });
      /***/

    },

    /***/
    "2Urx":
    /*!*************************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/tokens/error.token.ts ***!
      \*************************************************************************************/

    /*! exports provided: ERROR_RETRY_TOKEN */

    /***/
    function Urx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ERROR_RETRY_TOKEN", function () {
        return ERROR_RETRY_TOKEN;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");

      var ERROR_RETRY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('errorRetry');
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "Q2kw":
    /*!***********************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/tokens/api.token.ts ***!
      \***********************************************************************************/

    /*! exports provided: API_URL_TOKEN */

    /***/
    function Q2kw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API_URL_TOKEN", function () {
        return API_URL_TOKEN;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");

      var API_URL_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('apiUrl');
      /***/
    },

    /***/
    "RtzL":
    /*!********************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/common.module.ts ***!
      \********************************************************************************/

    /*! exports provided: MyCommonModule */

    /***/
    function RtzL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyCommonModule", function () {
        return MyCommonModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "2kYt");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "vobO");
      /* harmony import */


      var _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/display/display.component */
      "nrtk");
      /* harmony import */


      var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/error-handler.service */
      "XV4l");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/http.service */
      "vwpk");
      /* harmony import */


      var _services_interceptor_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/interceptor.service */
      "xVEG");
      /* harmony import */


      var _tokens_api_token__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./tokens/api.token */
      "Q2kw");
      /* harmony import */


      var _tokens_error_token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tokens/error.token */
      "2Urx");

      var MyCommonModule = /*#__PURE__*/function () {
        function MyCommonModule() {
          _classCallCheck(this, MyCommonModule);
        }

        _createClass(MyCommonModule, null, [{
          key: "forRoot",
          value: function forRoot(config) {
            return {
              ngModule: MyCommonModule,
              providers: [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], _services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"], {
                provide: _tokens_api_token__WEBPACK_IMPORTED_MODULE_7__["API_URL_TOKEN"],
                useValue: config.apiUrl
              }, {
                provide: _tokens_error_token__WEBPACK_IMPORTED_MODULE_8__["ERROR_RETRY_TOKEN"],
                useValue: config.errorRetry || 'defaultRetry'
              }, {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _services_interceptor_service__WEBPACK_IMPORTED_MODULE_6__["InterceptorService"],
                multi: true
              }]
            };
          }
        }, {
          key: "forChild",
          value: function forChild(config) {
            return {
              ngModule: MyCommonModule,
              providers: [
              /**
               * The services using the Token needs to be provided
               * in the same level of the hierarchy tree to use it instead the parent one.
               */
              !config.apiUrl ? [] : [_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"], {
                provide: _tokens_api_token__WEBPACK_IMPORTED_MODULE_7__["API_URL_TOKEN"],
                useValue: config.apiUrl
              }], !config.errorRetry ? [] : [_services_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["ErrorHandlerService"], {
                provide: _tokens_error_token__WEBPACK_IMPORTED_MODULE_8__["ERROR_RETRY_TOKEN"],
                useValue: config.errorRetry
              }]]
            };
          }
        }]);

        return MyCommonModule;
      }();

      MyCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MyCommonModule
      });
      MyCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MyCommonModule_Factory(t) {
          return new (t || MyCommonModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyCommonModule, {
          declarations: [_components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyCommonModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _components_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "A7yd");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "qFEQ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "PBFl");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "sEIs");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'website';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 15,
        vars: 0,
        consts: [["color", "accent"], ["fxFlex", ""], ["mat-button", "", "routerLink", ""], ["mat-button", "", "routerLink", "mod1"], ["mat-button", "", "routerLink", "mod1/submod1"], ["mat-button", "", "routerLink", "mod2"], ["fxFlexFill", "", "fxLayout", "row", "fxLayoutAlign", "center center"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n[_nghost-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvd2Vic2l0ZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSiIsImZpbGUiOiJhcHBzL3dlYnNpdGUvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XV4l":
    /*!*************************************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/error-handler.service.ts ***!
      \*************************************************************************************************/

    /*! exports provided: ErrorHandlerService */

    /***/
    function XV4l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function () {
        return ErrorHandlerService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _tokens_api_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tokens/api.token */
      "Q2kw");
      /* harmony import */


      var _tokens_error_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../tokens/error.token */
      "2Urx");

      var ErrorHandlerService = /*#__PURE__*/function () {
        function ErrorHandlerService(apiUrl, errorRetry) {
          _classCallCheck(this, ErrorHandlerService);

          this.apiUrl = apiUrl;
          this.errorRetry = errorRetry;
          this.i = ErrorHandlerService.count;
          ErrorHandlerService.count++;
          console.log("new ErrorHandlerService(".concat(this.i, ")(").concat(this.apiUrl, ") w/ ").concat(this.errorRetry));
        }

        _createClass(ErrorHandlerService, [{
          key: "getResult",
          value: function getResult(request, next) {
            console.log("used ErrorHandler(".concat(this.i, ")(").concat(this.apiUrl, ")"));
            return next.handle(request);
          }
        }]);

        return ErrorHandlerService;
      }();

      ErrorHandlerService.count = 1;

      ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) {
        return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_error_token__WEBPACK_IMPORTED_MODULE_2__["ERROR_RETRY_TOKEN"]));
      };

      ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ErrorHandlerService,
        factory: ErrorHandlerService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens_error_token__WEBPACK_IMPORTED_MODULE_2__["ERROR_RETRY_TOKEN"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "5lCh");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "40Bj");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "PBFl");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "A7yd");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "sEIs");
      /* harmony import */


      var _matheo_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @matheo/common */
      "20lr");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../libs/common/src/lib/common.module */
      "RtzL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _matheo_common__WEBPACK_IMPORTED_MODULE_6__["MyCommonModule"].forRoot({
          apiUrl: 'root'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["routes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_9__["MyCommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _matheo_common__WEBPACK_IMPORTED_MODULE_6__["MyCommonModule"].forRoot({
              apiUrl: 'root'
            }), _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_8__["routes"])],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony import */


      var _matheo_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @matheo/common */
      "20lr");

      var routes = [{
        path: '',
        component: _matheo_common__WEBPACK_IMPORTED_MODULE_0__["DisplayComponent"]
      }, {
        path: 'mod1',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mod1-mod1-module */
          "mod1-mod1-module").then(__webpack_require__.bind(null,
          /*! ./mod1/mod1.module */
          "Lvs/")).then(function (m) {
            return m.Mod1Module;
          });
        }
      }, {
        path: 'mod2',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mod2-mod2-module */
          "mod2-mod2-module").then(__webpack_require__.bind(null,
          /*! ./mod2/mod2.module */
          "QlYS")).then(function (m) {
            return m.Mod2Module;
          });
        }
      }];
      /***/
    },

    /***/
    "cf+o":
    /*!**************************************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/tree-shakeable.service.ts ***!
      \**************************************************************************************************/

    /*! exports provided: TreeShakeableService */

    /***/
    function cfO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TreeShakeableService", function () {
        return TreeShakeableService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _tokens_api_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tokens/api.token */
      "Q2kw");

      var TreeShakeableService = /*#__PURE__*/function () {
        function TreeShakeableService(apiUrl) {
          _classCallCheck(this, TreeShakeableService);

          this.apiUrl = apiUrl;
          console.log("new TreeShakeableService(".concat(this.apiUrl, ")"));
        }

        _createClass(TreeShakeableService, [{
          key: "print",
          value: function print() {
            return "TreeShakeableService API_URL: ".concat(this.apiUrl);
          }
        }]);

        return TreeShakeableService;
      }();

      TreeShakeableService.ɵfac = function TreeShakeableService_Factory(t) {
        return new (t || TreeShakeableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]));
      };

      TreeShakeableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: TreeShakeableService,
        factory: TreeShakeableService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeShakeableService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "nrtk":
    /*!*******************************************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/components/display/display.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: DisplayComponent */

    /***/
    function nrtk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
        return DisplayComponent;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "vobO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../services/http.service */
      "vwpk");
      /* harmony import */


      var _services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/tree-shakeable.service */
      "cf+o");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "2kYt");

      function DisplayComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var interceptor_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](interceptor_r1);
        }
      }

      var DisplayComponent = /*#__PURE__*/function () {
        function DisplayComponent(cdr, http, shakeable, interceptors) {
          _classCallCheck(this, DisplayComponent);

          this.cdr = cdr;
          this.http = http;
          this.shakeable = shakeable;
          this.interceptors = interceptors;
          this.name = 'Loading...';
          this.list = [];
        }

        _createClass(DisplayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.http.name().subscribe(function (data) {
              _this.name = data['name'];

              _this.cdr.markForCheck();
            });
            this.list = this.interceptors.map(function (i) {
              return i.constructor.name;
            });
          }
        }]);

        return DisplayComponent;
      }();

      DisplayComponent.ɵfac = function DisplayComponent_Factory(t) {
        return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__["TreeShakeableService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"]));
      };

      DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DisplayComponent,
        selectors: [["common-display"]],
        decls: 6,
        vars: 2,
        consts: [[4, "ngFor", "ngForOf"]],
        template: function DisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "HTTP_INTERCEPTORS");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DisplayComponent_li_5_Template, 2, 1, "li", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.list);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL2NvbW1vbi9zcmMvbGliL2NvbXBvbmVudHMvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5zY3NzIn0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DisplayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'common-display',
            templateUrl: './display.component.html',
            styleUrls: ['./display.component.scss'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: _services_tree_shakeable_service__WEBPACK_IMPORTED_MODULE_3__["TreeShakeableService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vwpk":
    /*!****************************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/http.service.ts ***!
      \****************************************************************************************/

    /*! exports provided: HttpService */

    /***/
    function vwpk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "vobO");
      /* harmony import */


      var _tokens_api_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../tokens/api.token */
      "Q2kw");

      var HttpService = /*#__PURE__*/function (_angular_common_http_) {
        _inherits(HttpService, _angular_common_http_);

        var _super = _createSuper(HttpService);

        function HttpService(httpHandler, apiUrl) {
          var _this2;

          _classCallCheck(this, HttpService);

          _this2 = _super.call(this, httpHandler);
          _this2.apiUrl = apiUrl;
          console.log("new HttpService(".concat(_this2.apiUrl, ")"));
          return _this2;
        }

        _createClass(HttpService, [{
          key: "name",
          value: function name() {
            return _get(_getPrototypeOf(HttpService.prototype), "get", this).call(this, "assets/".concat(this.apiUrl, ".json"));
          }
        }, {
          key: "print",
          value: function print() {
            return "HttpService API_URL: ".concat(this.apiUrl);
          }
        }]);

        return HttpService;
      }(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]);

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_2__["API_URL_TOKEN"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHandler"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_2__["API_URL_TOKEN"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "xVEG":
    /*!***********************************************************************************************!*\
      !*** /media/work/git/github/ng-providers/libs/common/src/lib/services/interceptor.service.ts ***!
      \***********************************************************************************************/

    /*! exports provided: InterceptorService */

    /***/
    function xVEG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InterceptorService", function () {
        return InterceptorService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _tokens_api_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../tokens/api.token */
      "Q2kw");
      /* harmony import */


      var _error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error-handler.service */
      "XV4l");

      var InterceptorService = /*#__PURE__*/function () {
        function InterceptorService(injector, apiUrl) {
          _classCallCheck(this, InterceptorService);

          this.injector = injector;
          this.apiUrl = apiUrl;
          this.errorHandler = this.injector.get(_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["ErrorHandlerService"]);
          console.log("new InterceptorService(".concat(this.apiUrl, ") w/ errorHandler(").concat(this.errorHandler.i, ")"));
        }

        _createClass(InterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            return this.errorHandler.getResult(request, next);
          }
        }]);

        return InterceptorService;
      }();

      InterceptorService.ɵfac = function InterceptorService_Factory(t) {
        return new (t || InterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]));
      };

      InterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: InterceptorService,
        factory: InterceptorService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterceptorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_tokens_api_token__WEBPACK_IMPORTED_MODULE_1__["API_URL_TOKEN"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "e4iD");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map