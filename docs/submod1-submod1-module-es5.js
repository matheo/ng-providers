(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["submod1-submod1-module"], {
    /***/
    "vFm7":
    /*!************************************************!*\
      !*** ./src/app/mod1/submod1/submod1.module.ts ***!
      \************************************************/

    /*! exports provided: Submod1Module */

    /***/
    function vFm7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Submod1Module", function () {
        return Submod1Module;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _matheo_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @matheo/common */
      "20lr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "sEIs");
      /* harmony import */


      var _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../../libs/common/src/lib/common.module */
      "RtzL");

      var Submod1Module = function Submod1Module() {
        _classCallCheck(this, Submod1Module);
      };

      Submod1Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: Submod1Module
      });
      Submod1Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function Submod1Module_Factory(t) {
          return new (t || Submod1Module)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _matheo_common__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"]
        }]), _matheo_common__WEBPACK_IMPORTED_MODULE_1__["MyCommonModule"].forChild({
          apiUrl: 'submod1',
          errorRetry: 'submod1Retry'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Submod1Module, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _libs_common_src_lib_common_module__WEBPACK_IMPORTED_MODULE_3__["MyCommonModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Submod1Module, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
              path: '',
              component: _matheo_common__WEBPACK_IMPORTED_MODULE_1__["DisplayComponent"]
            }]), _matheo_common__WEBPACK_IMPORTED_MODULE_1__["MyCommonModule"].forChild({
              apiUrl: 'submod1',
              errorRetry: 'submod1Retry'
            })],
            declarations: []
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=submod1-submod1-module-es5.js.map