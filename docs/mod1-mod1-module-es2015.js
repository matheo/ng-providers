(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mod1-mod1-module"],{

/***/ "Lvs/":
/*!*************************************!*\
  !*** ./src/app/mod1/mod1.module.ts ***!
  \*************************************/
/*! exports provided: Mod1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mod1Module", function() { return Mod1Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _matheo_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @matheo/common */ "20lr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/common/src/lib/common.module */ "RtzL");






class Mod1Module {
}
Mod1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Mod1Module });
Mod1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Mod1Module_Factory(t) { return new (t || Mod1Module)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                {
                    path: '',
                    component: _matheo_common__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"],
                },
                {
                    path: 'submod1',
                    loadChildren: () => __webpack_require__.e(/*! import() | submod1-submod1-module */ "submod1-submod1-module").then(__webpack_require__.bind(null, /*! ./submod1/submod1.module */ "vFm7")).then(m => m.Submod1Module),
                }
            ]),
            _matheo_common__WEBPACK_IMPORTED_MODULE_1__["MyCommonModule"].forChild({
                apiUrl: 'mod1',
                errorRetry: 'mod1Retry',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Mod1Module, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_3__["MyCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mod1Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _matheo_common__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"],
                        },
                        {
                            path: 'submod1',
                            loadChildren: () => __webpack_require__.e(/*! import() | submod1-submod1-module */ "submod1-submod1-module").then(__webpack_require__.bind(null, /*! ./submod1/submod1.module */ "vFm7")).then(m => m.Submod1Module),
                        }
                    ]),
                    _matheo_common__WEBPACK_IMPORTED_MODULE_1__["MyCommonModule"].forChild({
                        apiUrl: 'mod1',
                        errorRetry: 'mod1Retry',
                    }),
                ],
                declarations: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=mod1-mod1-module-es2015.js.map