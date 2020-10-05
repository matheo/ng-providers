(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mod2-mod2-module"],{

/***/ "QlYS":
/*!*************************************!*\
  !*** ./src/app/mod2/mod2.module.ts ***!
  \*************************************/
/*! exports provided: Mod2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mod2Module", function() { return Mod2Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _matheo_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @matheo/common */ "20lr");
/* harmony import */ var _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../libs/common/src/lib/common.module */ "RtzL");






class Mod2Module {
}
Mod2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Mod2Module });
Mod2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Mod2Module_Factory(t) { return new (t || Mod2Module)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _matheo_common__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"],
                }
            ]),
            _matheo_common__WEBPACK_IMPORTED_MODULE_2__["MyCommonModule"].forChild({
                apiUrl: 'mod2',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Mod2Module, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_3__["MyCommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Mod2Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _matheo_common__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"],
                        }
                    ]),
                    _matheo_common__WEBPACK_IMPORTED_MODULE_2__["MyCommonModule"].forChild({
                        apiUrl: 'mod2',
                    }),
                ],
                declarations: [],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=mod2-mod2-module-es2015.js.map