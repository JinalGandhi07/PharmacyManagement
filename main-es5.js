function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var AboutusComponent = /*#__PURE__*/function () {
      function AboutusComponent(router, authService) {
        _classCallCheck(this, AboutusComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.authService.signout();
        }
      }]);

      return AboutusComponent;
    }();

    AboutusComponent.ɵfac = function AboutusComponent_Factory(t) {
      return new (t || AboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutusComponent,
      selectors: [["app-aboutus"]],
      decls: 70,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], [1, "navbars"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdowns"], [1, "dropbtns"], [1, "dropdowns-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "text-center", "about"], [2, "font-size", "50px"], [1, "container"], [1, "row"], ["data-wow-offset", "200", 1, "col-lg-5", "col-ex-12", "about-item", "wow", "lightSpeedIn"], [1, "bi", "bi-award"], [1, "lead"], [1, "col-lg-2"], [1, "bi", "bi-file-earmark-lock2"], [1, "team-page-section"], [1, "sec-title", "centered"], [1, "title", 2, "font-size", "50px"], [1, "row", "clearfix"], [1, "team-block", "col-lg-4", "col-md-6", "col-sm-12"], ["data-wow-delay", "0ms", "data-wow-duration", "1500ms", 1, "inner-box", "wow", "fadeInLeft"], [1, "image"], ["src", "assets/jinal.jpeg", "alt", ""], [1, "lower-content"], ["src", "assets/milin.jpeg", "alt", ""], ["src", "assets/kriti.jpeg", "alt", ""]],
      template: function AboutusComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutusComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "BioBigrade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Our Mission");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Our solemn goal is to provide all the information about COVID-19 to everybody. We bring you one step closer to all the COVID essential resources and provide you a better interface to get it all.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Our Commitment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "BioBrigade commits to give access to authenticated and trusted resources. We promise to verify all the distributors and hospitals to whom people can reach out when in need.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Our Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Jinal Gandhi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Milin Khabya ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Kriti Verma ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".about[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  color: black;\n  padding-top: 20px;\n  padding-bottom: 30px;\n}\n\n.about[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  color: black;\n  margin-bottom: 20px;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\nh3[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.about[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  line-height: 100px;\n  margin: auto;\n  border-radius: 50%;\n  font-size: 40px;\n  color: black;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  border: 2px solid linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  cursor: pointer;\n  transition: all 0.5s ease;\n}\n\n.about-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  opacity: 1;\n  border: 2px solid black;\n  font-size: 42px;\n  transform: scale(1.1, 1.1) rotate(360deg);\n}\n\n.about-item[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: pointer;\n  transform: scale(1.1, 1.1);\n}\n\n.about[_ngcontent-%COMP%]   .lead[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n  margin-top: 5px;\n}\n\n.navbars[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%]   .dropbtns[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdowns[_ngcontent-%COMP%]:hover   .dropbtns[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtns[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%]:hover   .dropdowns-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: 330px;\n}\n\nimg[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.team-page-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 70px;\n  background: floralwhite;\n}\n\n.team-page-section[_ngcontent-%COMP%]   .team-block[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n\n.sec-title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin-bottom: 6px;\n}\n\n.sec-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 0;\n  color: black;\n  margin-bottom: 20px;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.team-section[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 80px 0px 60px;\n}\n\n.team-section.style-two[_ngcontent-%COMP%]   .pattern-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  background-position: center center;\n  background-repeat: no-repeat;\n}\n\n.team-section[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n\n.team-section[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  color: #222222;\n  font-size: 36px;\n  font-weight: 700;\n  line-height: 1.3em;\n  margin-bottom: 50px;\n}\n\n.team-block[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.team-block[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 70px 28px 0px;\n  max-height: 490px;\n}\n\n.team-block[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  right: 0px;\n  top: 0px;\n  left: 70px;\n  bottom: 0px;\n  border-radius: 10px;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  transition: all 600ms ease;\n}\n\n.team-block[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  border-radius: 10px;\n  background: #f1f7fa;\n  box-shadow: inset 0px 0px 35px rgba(0, 0, 0, 0.2);\n}\n\n.team-block[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: block;\n}\n\n.team-block[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .lower-content[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: left;\n  z-index: 1;\n  padding: 30px 15px 0px 110px;\n}\n\n.team-block[_ngcontent-%COMP%]   .inner-box[_ngcontent-%COMP%]   .lower-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  position: relative;\n  color: black;\n  font-size: 25px;\n  font-weight: 700;\n  line-height: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxhYm91dHVzXFxhYm91dHVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFQyw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDRkQ7O0FESUE7RUFDQyxlQUFBO0VBQ0MsWUFBQTtFQUNELG1CQUFBO0VBQ0Msa0JBQUE7RUFDQSw0Q0FBQTtBQ0RGOztBREdBO0VBQ0UsZUFBQTtFQUNBLDRDQUFBO0FDQUY7O0FERUE7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEsNERBQUE7RUFDQSxrRUFBQTtFQUNELGVBQUE7RUFJRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUlBLHlDQUFBO0FDQUQ7O0FERUE7RUFDQyxVQUFBO0VBQ0MsZUFBQTtFQUlELDBCQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDSSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDRSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRENFLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0Usb0JBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFBVyxrREFBQTtBQ0lmOztBRERFLHdEQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNJSjs7QURERSx5Q0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNJSjs7QURGRTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhFLDhCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESEUsMkRBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ01KOztBREZFLG9DQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ0tKOztBREZBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNLQTs7QURGQTtFQUNFLGVBQUE7QUNLRjs7QURGQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0tBOztBREZBO0VBQ0EsbUJBQUE7QUNLQTs7QURGQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDS0E7O0FERkE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDS0E7O0FEREE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDSUE7O0FEREE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0FDSUE7O0FEREE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUE7O0FEREE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSUE7O0FEQ0E7RUFDQSxrQkFBQTtBQ0VBOztBRENBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRUE7O0FEQ0E7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw0REFBQTtFQUtBLDBCQUFBO0FDRUE7O0FERUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUNDQTs7QURFQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDQTs7QURFQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUNDQTs7QURFQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0EiLCJmaWxlIjoic3JjL2FwcC9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5hYm91dHtcclxuXHRcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuXHRjb2xvcjogYmxhY2s7XHJcblx0cGFkZGluZy10b3A6IDIwcHg7XHJcblx0cGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLmFib3V0IGgyIHtcclxuXHRwYWRkaW5nOiAxMHB4IDA7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbmgze1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG4uYWJvdXQgc3BhbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMHB4O1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0bGluZS1oZWlnaHQ6IDEwMHB4O1xyXG5cdG1hcmdpbjphdXRvO1xyXG5cdGJvcmRlci1yYWRpdXM6NTAlOyAgXHJcblx0Zm9udC1zaXplOiA0MHB4O1xyXG5cdGNvbG9yOiBibGFjaztcclxuXHQvLyBvcGFjaXR5OiAwLjc7XHJcblx0YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcblx0Ym9yZGVyOiAycHggc29saWQgbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZTtcclxuIFx0LW1vei10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZTtcclxuIFx0LW8tdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XHJcbiBcdHRyYW5zaXRpb246YWxsIC41cyBlYXNlO1xyXG5cclxufVxyXG4uYWJvdXQtaXRlbTpob3ZlciBzcGFue1xyXG5cdG9wYWNpdHk6IDE7XHRcclxuXHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRmb250LXNpemU6IDQycHg7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpIHJvdGF0ZSgzNjBkZWcpIDtcclxuXHQtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSkgcm90YXRlKDM2MGRlZykgO1xyXG5cdC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSkgcm90YXRlKDM2MGRlZykgO1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSkgcm90YXRlKDM2MGRlZykgO1xyXG59XHJcbi5hYm91dC1pdGVtOmhvdmVyIGgze1xyXG5cdG9wYWNpdHk6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKSAgO1xyXG5cdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEsMS4xKSAgO1xyXG5cdC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xLDEuMSkgIDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSwxLjEpIDtcclxufVxyXG4uYWJvdXQgLmxlYWR7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4ubmF2YmFycyB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xyXG4gIC5uYXZiYXJzIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xyXG4gIC5kcm9wZG93bnMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBEcm9wZG93biBidXR0b24gKi9cclxuICAuZHJvcGRvd25zIC5kcm9wYnRucyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMSwgMSk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLm5hdmJhcnMgYTpob3ZlciwgLmRyb3Bkb3duczpob3ZlciAuZHJvcGJ0bnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAvKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cclxuICAuZHJvcGRvd25zLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuZHJvcGJ0bnM6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd25zLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3ducy1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd25zOmhvdmVyIC5kcm9wZG93bnMtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG5pbWcge1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMzMwcHg7XHJcbn1cclxuXHJcbmltZzpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50ZWFtLXBhZ2Utc2VjdGlvbntcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnBhZGRpbmctdG9wOjcwcHg7XHJcbmJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xyXG59XHJcblxyXG4udGVhbS1wYWdlLXNlY3Rpb24gLnRlYW0tYmxvY2t7XHJcbm1hcmdpbi1ib3R0b206NjBweDtcclxufVxyXG5cclxuLnNlYy10aXRsZXtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbnotaW5kZXg6MTtcclxubWFyZ2luLWJvdHRvbTo2cHg7XHJcbn1cclxuXHJcbi5zZWMtdGl0bGUgLnRpdGxle1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZzogMTBweCAwO1xyXG5jb2xvcjogYmxhY2s7XHJcbm1hcmdpbi1ib3R0b206IDIwcHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG4udGVhbS1zZWN0aW9ue1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxucGFkZGluZzo4MHB4IDBweCA2MHB4O1xyXG59XHJcblxyXG4udGVhbS1zZWN0aW9uLnN0eWxlLXR3byAucGF0dGVybi1sYXllcntcclxucG9zaXRpb246YWJzb2x1dGU7XHJcbmxlZnQ6MHB4O1xyXG50b3A6MHB4O1xyXG5yaWdodDowcHg7XHJcbmJvdHRvbTowcHg7XHJcbmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyIGNlbnRlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG59XHJcblxyXG4udGVhbS1zZWN0aW9uIC50aXRsZS1ib3h7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnRlYW0tc2VjdGlvbiAudGl0bGUtYm94IGgye1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmNvbG9yOiAjMjIyMjIyO1xyXG5mb250LXNpemU6IDM2cHg7XHJcbmZvbnQtd2VpZ2h0OiA3MDA7XHJcbmxpbmUtaGVpZ2h0OiAxLjNlbTtcclxubWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4udGVhbS1ibG9ja3tcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi50ZWFtLWJsb2NrIC5pbm5lci1ib3h7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG5wYWRkaW5nOjQwcHggNzBweCAyOHB4IDBweDtcclxubWF4LWhlaWdodDogNDkwcHg7XHJcbn1cclxuXHJcbi50ZWFtLWJsb2NrIC5pbm5lci1ib3g6YmVmb3Jle1xyXG5wb3NpdGlvbjphYnNvbHV0ZTtcclxuY29udGVudDonJztcclxucmlnaHQ6MHB4O1xyXG50b3A6MHB4O1xyXG5sZWZ0OjcwcHg7XHJcbmJvdHRvbTowcHg7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpOztcclxuLXdlYmtpdC10cmFuc2l0aW9uOmFsbCA2MDBtcyBlYXNlO1xyXG4tbW96LXRyYW5zaXRpb246YWxsIDYwMG1zIGVhc2U7XHJcbi1tcy10cmFuc2l0aW9uOmFsbCA2MDBtcyBlYXNlO1xyXG4tby10cmFuc2l0aW9uOmFsbCA2MDBtcyBlYXNlO1xyXG50cmFuc2l0aW9uOmFsbCA2MDBtcyBlYXNlO1xyXG59XHJcblxyXG5cclxuLnRlYW0tYmxvY2sgLmlubmVyLWJveCAuaW1hZ2V7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG56LWluZGV4OjE7XHJcbmJvcmRlci1yYWRpdXM6MTBweDtcclxuYmFja2dyb3VuZDpyZ2IoMjQxLCAyNDcsIDI1MCk7O1xyXG5ib3gtc2hhZG93Omluc2V0IDBweCAwcHggMzVweCByZ2JhKDAsMCwwLDAuMjApO1xyXG59XHJcblxyXG4udGVhbS1ibG9jayAuaW5uZXItYm94IC5pbWFnZSBpbWd7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG53aWR0aDoxMDAlO1xyXG5kaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4udGVhbS1ibG9jayAuaW5uZXItYm94IC5sb3dlci1jb250ZW50e1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxudGV4dC1hbGlnbjpsZWZ0O1xyXG56LWluZGV4OjE7XHJcbnBhZGRpbmc6MzBweCAxNXB4IDBweCAxMTBweDtcclxufVxyXG5cclxuLnRlYW0tYmxvY2sgLmlubmVyLWJveCAubG93ZXItY29udGVudCBoM3tcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbmNvbG9yOmJsYWNrO1xyXG5mb250LXNpemU6MjVweDtcclxuZm9udC13ZWlnaHQ6NzAwO1xyXG5saW5lLWhlaWdodDoxLjNlbTtcclxufVxyXG5cclxuXHJcblxyXG4iLCIuYWJvdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbi5hYm91dCBoMiB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbmgzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4uYWJvdXQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cblxuLmFib3V0LWl0ZW06aG92ZXIgc3BhbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBmb250LXNpemU6IDQycHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgcm90YXRlKDM2MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSkgcm90YXRlKDM2MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpIHJvdGF0ZSgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKSByb3RhdGUoMzYwZGVnKTtcbn1cblxuLmFib3V0LWl0ZW06aG92ZXIgaDMge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xLCAxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbn1cblxuLmFib3V0IC5sZWFkIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLm5hdmJhcnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXJzIGEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xuLmRyb3Bkb3ducyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93bnMgLmRyb3BidG5zIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMGUwMTAxO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXG4ubmF2YmFycyBhOmhvdmVyLCAuZHJvcGRvd25zOmhvdmVyIC5kcm9wYnRucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cbi5kcm9wZG93bnMtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wYnRuczpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bnMtY29udGVudCBhIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bnMtY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duczpob3ZlciAuZHJvcGRvd25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMzMHB4O1xufVxuXG5pbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50ZWFtLXBhZ2Utc2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDcwcHg7XG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xufVxuXG4udGVhbS1wYWdlLXNlY3Rpb24gLnRlYW0tYmxvY2sge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uc2VjLXRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zZWMtdGl0bGUgLnRpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG4udGVhbS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA4MHB4IDBweCA2MHB4O1xufVxuXG4udGVhbS1zZWN0aW9uLnN0eWxlLXR3byAucGF0dGVybi1sYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi50ZWFtLXNlY3Rpb24gLnRpdGxlLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGVhbS1zZWN0aW9uIC50aXRsZS1ib3ggaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnRlYW0tYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZWFtLWJsb2NrIC5pbm5lci1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDQwcHggNzBweCAyOHB4IDBweDtcbiAgbWF4LWhlaWdodDogNDkwcHg7XG59XG5cbi50ZWFtLWJsb2NrIC5pbm5lci1ib3g6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogNzBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlO1xuICAtby10cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2U7XG59XG5cbi50ZWFtLWJsb2NrIC5pbm5lci1ib3ggLmltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjFmN2ZhO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDM1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4udGVhbS1ibG9jayAuaW5uZXItYm94IC5pbWFnZSBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRlYW0tYmxvY2sgLmlubmVyLWJveCAubG93ZXItY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMzBweCAxNXB4IDBweCAxMTBweDtcbn1cblxuLnRlYW0tYmxvY2sgLmlubmVyLWJveCAubG93ZXItY29udGVudCBoMyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboutus',
          templateUrl: './aboutus.component.html',
          styleUrls: ['./aboutus.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _services_authguard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./services/authguard.service */
    "./src/app/services/authguard.service.ts");
    /* harmony import */


    var _eligibility_eligibility_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./eligibility/eligibility.component */
    "./src/app/eligibility/eligibility.component.ts");
    /* harmony import */


    var _donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./donorlist/donorlist.component */
    "./src/app/donorlist/donorlist.component.ts");
    /* harmony import */


    var _plasmalist_plasmalist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./plasmalist/plasmalist.component */
    "./src/app/plasmalist/plasmalist.component.ts");
    /* harmony import */


    var _vaccinelist_vaccinelist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./vaccinelist/vaccinelist.component */
    "./src/app/vaccinelist/vaccinelist.component.ts");
    /* harmony import */


    var _vaccine_vaccine_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./vaccine/vaccine.component */
    "./src/app/vaccine/vaccine.component.ts");
    /* harmony import */


    var _medicinecard_medicinecard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./medicinecard/medicinecard.component */
    "./src/app/medicinecard/medicinecard.component.ts");
    /* harmony import */


    var _covidguide_covidguide_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./covidguide/covidguide.component */
    "./src/app/covidguide/covidguide.component.ts");
    /* harmony import */


    var _display_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./display/display.component */
    "./src/app/display/display.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _cure_cure_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cure/cure.component */
    "./src/app/cure/cure.component.ts");
    /* harmony import */


    var _covidsymptoms_covidsymptoms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./covidsymptoms/covidsymptoms.component */
    "./src/app/covidsymptoms/covidsymptoms.component.ts");
    /* harmony import */


    var _plasmaoption_plasmaoption_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./plasmaoption/plasmaoption.component */
    "./src/app/plasmaoption/plasmaoption.component.ts");
    /* harmony import */


    var _beds_beds_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./beds/beds.component */
    "./src/app/beds/beds.component.ts");
    /* harmony import */


    var _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./medicine/medicine.component */
    "./src/app/medicine/medicine.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _donatedisplay_donatedisplay_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./donatedisplay/donatedisplay.component */
    "./src/app/donatedisplay/donatedisplay.component.ts");
    /* harmony import */


    var _needdisplay_needdisplay_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./needdisplay/needdisplay.component */
    "./src/app/needdisplay/needdisplay.component.ts");
    /* harmony import */


    var _choice_choice_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./choice/choice.component */
    "./src/app/choice/choice.component.ts");
    /* harmony import */


    var _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./homescreen/homescreen.component */
    "./src/app/homescreen/homescreen.component.ts");
    /* harmony import */


    var _hospitalform_hospitalform_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./hospitalform/hospitalform.component */
    "./src/app/hospitalform/hospitalform.component.ts");
    /* harmony import */


    var _distriform_distriform_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./distriform/distriform.component */
    "./src/app/distriform/distriform.component.ts");
    /* harmony import */


    var _vaccinedisplay_vaccinedisplay_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./vaccinedisplay/vaccinedisplay.component */
    "./src/app/vaccinedisplay/vaccinedisplay.component.ts");
    /* harmony import */


    var _medicinedisplay_medicinedisplay_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./medicinedisplay/medicinedisplay.component */
    "./src/app/medicinedisplay/medicinedisplay.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"]
    }, {
      path: 'hospitals',
      component: _hospitalform_hospitalform_component__WEBPACK_IMPORTED_MODULE_24__["HospitalformComponent"]
    }, {
      path: 'distributors',
      component: _distriform_distriform_component__WEBPACK_IMPORTED_MODULE_25__["DistriformComponent"]
    }, {
      path: 'homescreen',
      component: _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_23__["HomescreenComponent"]
    }, {
      path: 'choice',
      component: _choice_choice_component__WEBPACK_IMPORTED_MODULE_22__["ChoiceComponent"]
    }, {
      path: 'home',
      component: _card_card_component__WEBPACK_IMPORTED_MODULE_15__["CardComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'medicine/:a',
      component: _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_14__["MedicineComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'bed',
      component: _beds_beds_component__WEBPACK_IMPORTED_MODULE_13__["BedsComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'plasmaoption',
      component: _plasmaoption_plasmaoption_component__WEBPACK_IMPORTED_MODULE_12__["PlasmaoptionComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'symptoms',
      component: _covidsymptoms_covidsymptoms_component__WEBPACK_IMPORTED_MODULE_11__["CovidsymptomsComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'cure',
      component: _cure_cure_component__WEBPACK_IMPORTED_MODULE_10__["CureComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'display/:id',
      component: _display_display_component__WEBPACK_IMPORTED_MODULE_8__["DisplayComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'donatedisplay/:id',
      component: _donatedisplay_donatedisplay_component__WEBPACK_IMPORTED_MODULE_20__["DonatedisplayComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'needdisplay/:id',
      component: _needdisplay_needdisplay_component__WEBPACK_IMPORTED_MODULE_21__["NeeddisplayComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'guide',
      component: _covidguide_covidguide_component__WEBPACK_IMPORTED_MODULE_7__["CovidguideComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'medicinecard',
      component: _medicinecard_medicinecard_component__WEBPACK_IMPORTED_MODULE_6__["MedicinecardComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'vaccine',
      component: _vaccine_vaccine_component__WEBPACK_IMPORTED_MODULE_5__["VaccineComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'vaccinelist/:id',
      component: _vaccinelist_vaccinelist_component__WEBPACK_IMPORTED_MODULE_4__["VaccinelistComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'plasmalist',
      component: _plasmalist_plasmalist_component__WEBPACK_IMPORTED_MODULE_3__["PlasmalistComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'donorlist',
      component: _donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_2__["DonorlistComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'ab',
      component: _eligibility_eligibility_component__WEBPACK_IMPORTED_MODULE_1__["EligibilityComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'aboutus',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_28__["AboutusComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'vaccinedisplay/:id',
      component: _vaccinedisplay_vaccinedisplay_component__WEBPACK_IMPORTED_MODULE_26__["VaccinedisplayComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }, {
      path: 'medicinedisplay/:id',
      component: _medicinedisplay_medicinedisplay_component__WEBPACK_IMPORTED_MODULE_27__["MedicinedisplayComponent"],
      canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_0__["AuthguardService"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_17__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'clone1';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
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
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./card/card.component */
    "./src/app/card/card.component.ts");
    /* harmony import */


    var _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./medicine/medicine.component */
    "./src/app/medicine/medicine.component.ts");
    /* harmony import */


    var _beds_beds_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./beds/beds.component */
    "./src/app/beds/beds.component.ts");
    /* harmony import */


    var _plasmaoption_plasmaoption_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./plasmaoption/plasmaoption.component */
    "./src/app/plasmaoption/plasmaoption.component.ts");
    /* harmony import */


    var _covidsymptoms_covidsymptoms_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./covidsymptoms/covidsymptoms.component */
    "./src/app/covidsymptoms/covidsymptoms.component.ts");
    /* harmony import */


    var _cure_cure_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./cure/cure.component */
    "./src/app/cure/cure.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _display_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./display/display.component */
    "./src/app/display/display.component.ts");
    /* harmony import */


    var _covidguide_covidguide_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./covidguide/covidguide.component */
    "./src/app/covidguide/covidguide.component.ts");
    /* harmony import */


    var _medicinecard_medicinecard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./medicinecard/medicinecard.component */
    "./src/app/medicinecard/medicinecard.component.ts");
    /* harmony import */


    var _vaccine_vaccine_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./vaccine/vaccine.component */
    "./src/app/vaccine/vaccine.component.ts");
    /* harmony import */


    var _vaccinelist_vaccinelist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./vaccinelist/vaccinelist.component */
    "./src/app/vaccinelist/vaccinelist.component.ts");
    /* harmony import */


    var _plasmalist_plasmalist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./plasmalist/plasmalist.component */
    "./src/app/plasmalist/plasmalist.component.ts");
    /* harmony import */


    var _donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./donorlist/donorlist.component */
    "./src/app/donorlist/donorlist.component.ts");
    /* harmony import */


    var _eligibility_eligibility_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./eligibility/eligibility.component */
    "./src/app/eligibility/eligibility.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _donatedisplay_donatedisplay_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./donatedisplay/donatedisplay.component */
    "./src/app/donatedisplay/donatedisplay.component.ts");
    /* harmony import */


    var _needdisplay_needdisplay_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./needdisplay/needdisplay.component */
    "./src/app/needdisplay/needdisplay.component.ts");
    /* harmony import */


    var _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./homescreen/homescreen.component */
    "./src/app/homescreen/homescreen.component.ts");
    /* harmony import */


    var _choice_choice_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./choice/choice.component */
    "./src/app/choice/choice.component.ts");
    /* harmony import */


    var _distriform_distriform_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./distriform/distriform.component */
    "./src/app/distriform/distriform.component.ts");
    /* harmony import */


    var _hospitalform_hospitalform_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./hospitalform/hospitalform.component */
    "./src/app/hospitalform/hospitalform.component.ts");
    /* harmony import */


    var _vaccinedisplay_vaccinedisplay_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./vaccinedisplay/vaccinedisplay.component */
    "./src/app/vaccinedisplay/vaccinedisplay.component.ts");
    /* harmony import */


    var _medicinedisplay_medicinedisplay_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./medicinedisplay/medicinedisplay.component */
    "./src/app/medicinedisplay/medicinedisplay.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_11__["MedicineComponent"], _beds_beds_component__WEBPACK_IMPORTED_MODULE_12__["BedsComponent"], _plasmaoption_plasmaoption_component__WEBPACK_IMPORTED_MODULE_13__["PlasmaoptionComponent"], _covidsymptoms_covidsymptoms_component__WEBPACK_IMPORTED_MODULE_14__["CovidsymptomsComponent"], _cure_cure_component__WEBPACK_IMPORTED_MODULE_15__["CureComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_17__["DisplayComponent"], _covidguide_covidguide_component__WEBPACK_IMPORTED_MODULE_18__["CovidguideComponent"], _medicinecard_medicinecard_component__WEBPACK_IMPORTED_MODULE_19__["MedicinecardComponent"], _vaccine_vaccine_component__WEBPACK_IMPORTED_MODULE_20__["VaccineComponent"], _vaccinelist_vaccinelist_component__WEBPACK_IMPORTED_MODULE_21__["VaccinelistComponent"], _plasmalist_plasmalist_component__WEBPACK_IMPORTED_MODULE_22__["PlasmalistComponent"], _donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_23__["DonorlistComponent"], _eligibility_eligibility_component__WEBPACK_IMPORTED_MODULE_24__["EligibilityComponent"], _donatedisplay_donatedisplay_component__WEBPACK_IMPORTED_MODULE_26__["DonatedisplayComponent"], _needdisplay_needdisplay_component__WEBPACK_IMPORTED_MODULE_27__["NeeddisplayComponent"], _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_28__["HomescreenComponent"], _choice_choice_component__WEBPACK_IMPORTED_MODULE_29__["ChoiceComponent"], _distriform_distriform_component__WEBPACK_IMPORTED_MODULE_30__["DistriformComponent"], _hospitalform_hospitalform_component__WEBPACK_IMPORTED_MODULE_31__["HospitalformComponent"], _vaccinedisplay_vaccinedisplay_component__WEBPACK_IMPORTED_MODULE_32__["VaccinedisplayComponent"], _medicinedisplay_medicinedisplay_component__WEBPACK_IMPORTED_MODULE_33__["MedicinedisplayComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_34__["AboutusComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"], _medicine_medicine_component__WEBPACK_IMPORTED_MODULE_11__["MedicineComponent"], _beds_beds_component__WEBPACK_IMPORTED_MODULE_12__["BedsComponent"], _plasmaoption_plasmaoption_component__WEBPACK_IMPORTED_MODULE_13__["PlasmaoptionComponent"], _covidsymptoms_covidsymptoms_component__WEBPACK_IMPORTED_MODULE_14__["CovidsymptomsComponent"], _cure_cure_component__WEBPACK_IMPORTED_MODULE_15__["CureComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _display_display_component__WEBPACK_IMPORTED_MODULE_17__["DisplayComponent"], _covidguide_covidguide_component__WEBPACK_IMPORTED_MODULE_18__["CovidguideComponent"], _medicinecard_medicinecard_component__WEBPACK_IMPORTED_MODULE_19__["MedicinecardComponent"], _vaccine_vaccine_component__WEBPACK_IMPORTED_MODULE_20__["VaccineComponent"], _vaccinelist_vaccinelist_component__WEBPACK_IMPORTED_MODULE_21__["VaccinelistComponent"], _plasmalist_plasmalist_component__WEBPACK_IMPORTED_MODULE_22__["PlasmalistComponent"], _donorlist_donorlist_component__WEBPACK_IMPORTED_MODULE_23__["DonorlistComponent"], _eligibility_eligibility_component__WEBPACK_IMPORTED_MODULE_24__["EligibilityComponent"], _donatedisplay_donatedisplay_component__WEBPACK_IMPORTED_MODULE_26__["DonatedisplayComponent"], _needdisplay_needdisplay_component__WEBPACK_IMPORTED_MODULE_27__["NeeddisplayComponent"], _homescreen_homescreen_component__WEBPACK_IMPORTED_MODULE_28__["HomescreenComponent"], _choice_choice_component__WEBPACK_IMPORTED_MODULE_29__["ChoiceComponent"], _distriform_distriform_component__WEBPACK_IMPORTED_MODULE_30__["DistriformComponent"], _hospitalform_hospitalform_component__WEBPACK_IMPORTED_MODULE_31__["HospitalformComponent"], _vaccinedisplay_vaccinedisplay_component__WEBPACK_IMPORTED_MODULE_32__["VaccinedisplayComponent"], _medicinedisplay_medicinedisplay_component__WEBPACK_IMPORTED_MODULE_33__["MedicinedisplayComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_34__["AboutusComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/beds/beds.component.ts":
  /*!****************************************!*\
    !*** ./src/app/beds/beds.component.ts ***!
    \****************************************/

  /*! exports provided: BedsComponent */

  /***/
  function srcAppBedsBedsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BedsComponent", function () {
      return BedsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BedsComponent_li_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedsComponent_li_42_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var indexOfelement_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick(indexOfelement_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexOfelement_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.member.result[indexOfelement_r2].Name, ", ", ctx_r0.member.result[indexOfelement_r2].City, "");
      }
    }

    var BedsComponent = /*#__PURE__*/function () {
      function BedsComponent(router, authService, member) {
        _classCallCheck(this, BedsComponent);

        this.router = router;
        this.authService = authService;
        this.member = member;
      }

      _createClass(BedsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.member.getbedhospitals();
        }
      }, {
        key: "search",
        value: function search() {
          if (this.city == "All Cities" || this.city == "") {
            this.member.getbedhospitals();
          } else {
            this.member.getbedhospitalscities(this.city);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(indexOfelement) {
          for (this.i = 0; this.i <= indexOfelement; this.i++) {
            console.log(this.member.result[this.i].id);
            var url = '/display/' + this.member.result[this.i].id;
            this.router.navigateByUrl(url);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.signout();
        }
      }]);

      return BedsComponent;
    }();

    BedsComponent.ɵfac = function BedsComponent_Factory(t) {
      return new (t || BedsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]));
    };

    BedsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BedsComponent,
      selectors: [["app-beds"]],
      decls: 43,
      vars: 2,
      consts: [[1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], ["ngNativeValidate", ""], ["placeholder", "Enter Your City", "type", "text", "list", "city", "name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["id", "city"], ["value", "All Cities"], ["value", "Udaipur"], ["value", "Ajmer"], ["value", "Jaipur"], ["value", "Bhilwara"], ["value", "Jaisalmer"], ["value", "Jodhpur"], ["value", "Chittorgarh"], ["value", "Bikaner"], ["value", "Kota"], ["type", "submit", 1, "buttonk", 3, "click"], [1, "gradient-list"], [3, "click", 4, "ngFor", "ngForOf"]],
      template: function BedsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedsComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Hospitals with Available Beds");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BedsComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "datalist", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BedsComponent_Template_button_click_38_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ol", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, BedsComponent_li_42_Template, 2, 2, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.member.result);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);\n\n\n\n\n\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n}\nheader[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  width: 100%;\n  height: 40px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: black;\n  align-content: center;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\nmain[_ngcontent-%COMP%] {\n  padding: calc(var(--heading-height) + 1.5vw) 4em 0;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  color: #050505;\n  font-family: \"Raleway\", sans-serif;\n}\nmain[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 1rem;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%] {\n  counter-reset: gradient-counter;\n  list-style: none;\n  margin: 1.75rem 0;\n  padding-left: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  counter-increment: gradient-counter;\n  margin-top: 1rem;\n  min-height: 3rem;\n  padding: 1rem 1rem 1rem 3rem;\n  position: relative;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, ol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);\n  border-radius: 1rem 1rem 0 1rem;\n  content: \"\";\n  height: 3rem;\n  left: -1rem;\n  overflow: hidden;\n  position: absolute;\n  top: -1rem;\n  width: 3rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  align-items: flex-end;\n  content: counter(gradient-counter);\n  color: #1d1f20;\n  display: flex;\n  font: 900 1.5em/1 \"Montserrat\";\n  justify-content: flex-end;\n  padding: 0.125em 0.25em;\n  z-index: 1;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  padding-right: 15px;\n  text-align: center;\n}\nlabel.light[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: inline-block;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 300px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n.buttonk[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 20px;\n  margin-left: 10px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n.buttonk[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVkcy9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxiZWRzXFxiZWRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9iZWRzL2JlZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLDZGQUFBO0FBRFIsVUFBQTtBQUtBLGNBQUE7QUFDQSxXQUFBO0FBUUEsV0FBQTtBQUNBLGVBQUE7QUFDQTtFQUNFLDhGQUFBO0FDVEY7QURXQTtFQUNJLDREQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSSjtBRFVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNQSjtBRFNBO0VBQ0Msa0RBQUE7QUNORDtBRFNBLFVBQUE7QUFDQTs7O0VBR0Usc0JBQUE7QUNORjtBRFNBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0FDTkY7QURVQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDUEY7QURVQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDUEY7QURTQTtFQUNFLGVBQUE7QUNORjtBRFNBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNORjtBRE9FO0VBQ0UsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDhGQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FETUk7RUFFRSw2REFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTE47QURPSTtFQUNFLHFCQUFBO0VBRUEsa0NBQUE7RUFDQSxjQXhGRTtFQXlGRixhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ05OO0FEVU07RUFDRSw0REFBQTtBQ1JSO0FET007RUFDRSw0REFBQTtBQ0xSO0FESU07RUFDRSw0REFBQTtBQ0ZSO0FEQ007RUFDRSw0REFBQTtBQ0NSO0FERk07RUFDRSw0REFBQTtBQ0lSO0FEQVE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNFWjtBREpRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDTVo7QURSUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ1VaO0FEWlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNjWjtBRGhCUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ2tCWjtBRGRNO0VBQ0UsNERBQUE7QUNnQlI7QURqQk07RUFDRSw0REFBQTtBQ21CUjtBRHBCTTtFQUNFLDREQUFBO0FDc0JSO0FEdkJNO0VBQ0UsNERBQUE7QUN5QlI7QUQxQk07RUFDRSw0REFBQTtBQzRCUjtBRHhCUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQzBCWjtBRDVCUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQzhCWjtBRGhDUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ2tDWjtBRHBDUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ3NDWjtBRHhDUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQzBDWjtBRHZDSTtFQUNFLGdCQUFBO0FDeUNOO0FEOUJBO0VBQ0UsZ0JBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0FDaUNGO0FEOUJBLDRCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNpQ0Y7QUQ5QkEsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ2lDRjtBRDlCQSxvQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFzQixrREFBQTtFQUN0QixTQUFBO0VBQVcsa0RBQUE7QUNtQ2I7QURoQ0Esd0RBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDbUNGO0FEaENBLHlDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDbUNGO0FEakNBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDb0NGO0FEbENBLDhCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNxQ0Y7QURsQ0EsMkRBQUE7QUFDQTtFQUNFLHNCQUFBO0FDcUNGO0FEakNBLG9DQUFBO0FBQ0E7RUFDRSxjQUFBO0FDb0NGO0FEakNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ29DRjtBRGpDQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNvQ0Y7QURqQ0E7Ozs7Ozs7Ozs7OztFQVlFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtBQ29DRjtBRGpDQTtFQUNBLGdCQUFBO0VBRUUsV0FBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNGLGFBQUE7RUFDQSxrQkFBQTtFQUNFLG1EQUFBO0FDbUNGO0FEakNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ29DSiIsImZpbGUiOiJzcmMvYXBwL2JlZHMvYmVkcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZPTlRTICovXHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb250c2VycmF0OjkwMHxSYWxld2F5OjQwMCw0MDBpLDcwMCw3MDBpKTtcclxuXHJcblxyXG5cclxuLyogVkFSSUFCTEVTICovXHJcbi8qIENvbG9ycyAqL1xyXG4kYmxhY2s6ICMxZDFmMjA7XHJcbiRibHVlOiAjODNlNGUyO1xyXG4kZ3JlZW46ICNhMmVkNTY7XHJcbiR5ZWxsb3c6ICNmZGRjMzI7XHJcbiR3aGl0ZTogI2ZhZmFmYTtcclxuXHJcblxyXG4vKiBFWFRFTkQgKi9cclxuLyogYm94LXNoYWRvdyAqL1xyXG4lYm94c2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwwLDAsMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsMCwwLDAuMDUpO1xyXG59XHJcbmhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbm1haW4ge1xyXG5cdHBhZGRpbmc6IGNhbGModmFyKC0taGVhZGluZy1oZWlnaHQpICsgMS41dncpIDRlbSAwO1xyXG59XHJcblxyXG4vKiBTVFlMRSAqL1xyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ZmxvcmFsd2hpdGU7XHJcbiAgY29sb3I6IzA1MDUwNTtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuYTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm9sLmdyYWRpZW50LWxpc3Qge1xyXG4gIGNvdW50ZXItcmVzZXQ6IGdyYWRpZW50LWNvdW50ZXI7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBtYXJnaW46IDEuNzVyZW0gMDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgPiBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwwLDAsMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsMCwwLDAuMDUpO1xyXG4gICAgY291bnRlci1pbmNyZW1lbnQ6IGdyYWRpZW50LWNvdW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWluLWhlaWdodDogM3JlbTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDNyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjpiZWZvcmUsXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICRibHVlIDAlLCRncmVlbiAxMDAlKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMXJlbTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGhlaWdodDogM3JlbTtcclxuICAgICAgbGVmdDogLTFyZW07XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAtMXJlbTtcclxuICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIEBleHRlbmQgJWJveHNoYWRvdztcclxuICAgICAgY29udGVudDogY291bnRlcihncmFkaWVudC1jb3VudGVyKTtcclxuICAgICAgY29sb3I6ICRibGFjaztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZm9udDogOTAwIDEuNWVtLzEgJ01vbnRzZXJyYXQnO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbTtcclxuICAgICAgei1pbmRleDogMTtcclxuICAgIH1cclxuICAgXHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xyXG4gICAgICAmOm50aC1jaGlsZCgxMG4rI3skaX0pOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1IHtcclxuICAgICAgICAmOm50aC1jaGlsZCgxMG4rI3skaX0pOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBAZm9yICRpIGZyb20gNiB0aHJvdWdoIDEwIHtcclxuICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb3IgJGkgZnJvbSA2IHRocm91Z2ggMTAge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDEwbisjeyRpfSk6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICsgbGkge1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4vLyBvbC5ncmFkaWVudC1saXN0e1xyXG4vLyAgIGxpOmhvdmVye1xyXG4vLyAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuLy8gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG4ubmF2YmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbi5uYXZiYXIgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoMTQsIDAsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gYnV0dG9uICovXHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG59XHJcblxyXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cclxuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5kcm9wYnRuOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6ICAycHggMTBweCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuIFxyXG59XHJcblxyXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmxhYmVsLmxpZ2h0IHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbmlucHV0W3R5cGU9XCJkYXRldGltZVwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcclxuaW5wdXRbdHlwZT1cInVybFwiXSxcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gIGNvbG9yOiAjM2M0NzRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uayB7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbmJvcmRlcjogYmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSkgaW5zZXQ7XHJcbn1cclxuLmJ1dHRvbms6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYig1NywgMTk0LCA1Nyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iLCIvKiBGT05UUyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJhbGV3YXk6NDAwLDQwMGksNzAwLDcwMGkpO1xuLyogVkFSSUFCTEVTICovXG4vKiBDb2xvcnMgKi9cbi8qIEVYVEVORCAqL1xuLyogYm94LXNoYWRvdyAqL1xub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsIDAsIDAsIDAuMDUpO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1oZWFkaW5nLWhlaWdodCkgKyAxLjV2dykgNGVtIDA7XG59XG5cbi8qIFNUWUxFICovXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgY29sb3I6ICMwNTA1MDU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxub2wuZ3JhZGllbnQtbGlzdCB7XG4gIGNvdW50ZXItcmVzZXQ6IGdyYWRpZW50LWNvdW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMS43NXJlbSAwO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LCAwLCAwLCAwLjA1KTtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGdyYWRpZW50LWNvdW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTo6YmVmb3JlLCBvbC5ncmFkaWVudC1saXN0ID4gbGk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzgzZTRlMiAwJSwgI2EyZWQ1NiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMXJlbTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAzcmVtO1xuICBsZWZ0OiAtMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcmVtO1xuICB3aWR0aDogM3JlbTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTo6YmVmb3JlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb250ZW50OiBjb3VudGVyKGdyYWRpZW50LWNvdW50ZXIpO1xuICBjb2xvcjogIzFkMWYyMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udDogOTAwIDEuNWVtLzEgXCJNb250c2VycmF0XCI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtO1xuICB6LWluZGV4OiAxO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMSk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMik6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMyk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNCk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNSk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzIpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbiszKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNCk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzUpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis2KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis3KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis4KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis5KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxMCk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNik6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzcpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis4KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rOSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzEwKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpICsgbGkge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubmF2YmFyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXG4ubmF2YmFyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xuLmRyb3Bkb3duIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xuLmRyb3Bkb3duIC5kcm9wYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMGUwMTAxO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXG4ubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3BidG46aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxhYmVsLmxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1kYXRldGltZV0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPXVybF0sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XG4gIGNvbG9yOiAjM2M0NzRlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMykgaW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uYnV0dG9uayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xufVxuXG4uYnV0dG9uazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzM5YzIzOTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BedsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-beds',
          templateUrl: './beds.component.html',
          styleUrls: ['./beds.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/card/card.component.ts":
  /*!****************************************!*\
    !*** ./src/app/card/card.component.ts ***!
    \****************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");

    var CardComponent = /*#__PURE__*/function () {
      function CardComponent(router, authService) {
        _classCallCheck(this, CardComponent);

        this.router = router;
        this.authService = authService;
      }

      _createClass(CardComponent, [{
        key: "medicinecard",
        value: function medicinecard() {
          this.router.navigateByUrl('/medicinecard');
        }
      }, {
        key: "vaccine",
        value: function vaccine() {
          this.router.navigateByUrl('/vaccine');
        }
      }, {
        key: "bed",
        value: function bed() {
          this.router.navigateByUrl('/bed');
        }
      }, {
        key: "plasma",
        value: function plasma() {
          this.router.navigateByUrl('/plasmaoption');
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.signout();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardComponent;
    }();

    CardComponent.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      decls: 78,
      vars: 0,
      consts: [[1, "main"], [1, "space"], [1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "cards"], [1, "image"], ["src", "assets/medicine3.jpg"], [1, "title"], [1, "description"], ["src", "assets/vaccine3.jpg"], ["src", "assets/beds3.jpg"], ["src", "assets/Plasma3.jpg"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_a_click_24_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Medicines ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Find the medicines you need!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_43_listener() {
            return ctx.medicinecard();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Check Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Vaccine ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Find the vaccines you need!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_54_listener() {
            return ctx.vaccine();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Check Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Beds ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Find beds in the nearby hospitals!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_65_listener() {
            return ctx.bed();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Check Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Plasma ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Find or Donate Plasma here!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_Template_button_click_76_listener() {
            return ctx.plasma();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Check Availability");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.main[_ngcontent-%COMP%] {\n  background-image: url(/assets/Home3.jpeg);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n\n\n.cards[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: #1fd1f9;\n  background-color: #60dfcd;\n  background-color: #f89b9e;\n  background-color: #0beef9;\n  background-color: #96c8fb;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  border-radius: 5px;\n  margin: 30px;\n  box-shadow: 2px 2px 10px black;\n  display: inline-block;\n}\n\n.cards[_ngcontent-%COMP%]:hover {\n  box-shadow: 4px 4px 12px black;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n}\n\n.description[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  color: white;\n  transition: 0.5s;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBR0MsNENBQUE7QUNBRDs7QURLQTtFQUNFLGVBQUE7QUNGRjs7QURJQTtFQUVDLHlDQUFBO0VBQ0csNEJBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBREtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBQUE7O0FBdUNBO0VBRUMsVUFBQTtFQUVBLHlCQUFBO0VBQ0cseUJBQUE7RUFDSCx5QkFBQTtFQUNHLHlCQUFBO0VBQ0gseUJBQUE7RUFDQSw0REFBQTtFQUVBLGtCQUFBO0VBQ0csWUFBQTtFQUNILDhCQUFBO0VBRUEscUJBQUE7QUNQRDs7QURTQTtFQUVDLDhCQUFBO0FDUEQ7O0FEVUE7RUFDQyxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQ1BEOztBRFVBO0VBRUMsa0JBQUE7RUFDQSxZQUFBO0FDUkQ7O0FEVUE7RUFFQyxrQkFBQTtFQUNBLFlBQUE7QUNSRDs7QURVQTtFQUVDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1JEOztBRFdBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSRDs7QURZQTtFQUNJLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQ1RKOztBRFlFLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDVEo7O0FEWUUsMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURZRSxvQkFBQTs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDUGY7O0FEVUUsd0RBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1BKOztBRFVFLHlDQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ1BKOztBRFNFO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDTko7O0FEUUUsOEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRRSwyREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDTEo7O0FEU0Usb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG5cdG1hcmdpbjogMHB4O1xyXG5cdHBhZGRpbmc6IDBweDtcclxufVxyXG5ib2R5IFxyXG5cclxue1xyXG5cdGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG5cdFxyXG5cclxuXHRcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubWFpblxyXG57XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSG9tZTMuanBlZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLyogLnNwYWNlXHJcbntcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG4uc3BhY2UgdWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTs7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwYWNlIGxpIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYmJiO1xyXG59XHJcblxyXG4uc3BhY2UgbGkgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLnNwYWNlIGxpIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbn1cclxuXHJcblxyXG4gKi9cclxuXHJcbi5jYXJkc1xyXG57XHJcblx0d2lkdGg6IDIwJTtcclxuXHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzFmZDFmOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MGRmY2Q7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4OWI5ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYmVlZjk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzk2YzhmYjtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcblx0XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOjMwcHg7XHRcclxuXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcblxyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4uY2FyZHM6aG92ZXJcclxue1xyXG5cdGJveC1zaGFkb3c6IDRweCA0cHggMTJweCBibGFjaztcclxufVxyXG5cclxuLmltYWdlIGltZ3tcclxuXHR3aWR0aDogMTAwJTtcclxuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRpdGxlXHJcbntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogNXB4O1xyXG59XHJcbi5kZXNjcmlwdGlvblxyXG57XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBhZGRpbmc6IDRweDtcclxufVxyXG5idXR0b25cclxue1xyXG5cdG1hcmdpbi10b3A6MzBweDtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG5cdHBhZGRpbmc6IDVweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0dHJhbnNpdGlvbjogLjVzO1xyXG5cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIH1cclxuICBcclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xyXG4gIC5uYXZiYXIgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDAsIDApO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXHJcbiAgLmRyb3Bkb3duIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gYnV0dG9uICovXHJcbiAgLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAxLCAxKTtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cclxuICAubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzgsIDIzOCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLmRyb3BidG46aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAvKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH0iLCIqIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvSG9tZTMuanBlZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi8qIC5zcGFjZVxue1xuXG59XG5cblxuXG4uc3BhY2UgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpOztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3BhY2UgbGkge1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2JiYjtcbn1cblxuLnNwYWNlIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5cbi5zcGFjZSBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbn1cblxuXG4gKi9cbi5jYXJkcyB7XG4gIHdpZHRoOiAyMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZmQxZjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MGRmY2Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODliOWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYmVlZjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NmM4ZmI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDMwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uY2FyZHM6aG92ZXIge1xuICBib3gtc2hhZG93OiA0cHggNHB4IDEycHggYmxhY2s7XG59XG5cbi5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG4udGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0cHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLm5hdmJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xuLm5hdmJhciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwZTAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cbi5kcm9wZG93biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzBlMDEwMTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-card',
          templateUrl: './card.component.html',
          styleUrls: ['./card.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/choice/choice.component.ts":
  /*!********************************************!*\
    !*** ./src/app/choice/choice.component.ts ***!
    \********************************************/

  /*! exports provided: ChoiceComponent */

  /***/
  function srcAppChoiceChoiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoiceComponent", function () {
      return ChoiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ChoiceComponent = /*#__PURE__*/function () {
      function ChoiceComponent(route) {
        _classCallCheck(this, ChoiceComponent);

        this.route = route;
      }

      _createClass(ChoiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "distributors",
        value: function distributors() {
          this.route.navigateByUrl('distributors');
        }
      }, {
        key: "hospitals",
        value: function hospitals() {
          this.route.navigateByUrl('hospitals');
        }
      }]);

      return ChoiceComponent;
    }();

    ChoiceComponent.ɵfac = function ChoiceComponent_Factory(t) {
      return new (t || ChoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ChoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChoiceComponent,
      selectors: [["app-choice"]],
      decls: 28,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"], [1, "container"], [1, "card"], [1, "content", 3, "click"], [1, "bi", "bi-bank"], [1, "bi", "bi-bag-plus-fill"]],
      template: function ChoiceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Who are you!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoiceComponent_Template_div_click_12_listener() {
            return ctx.distributors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Distributors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Register your firm to Bio-Brigade for essential COVID-19 medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChoiceComponent_Template_div_click_21_listener() {
            return ctx.hospitals();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Hospitals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Register your hospital to Bio-Brigade for COVID-19 healthcare facilities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500[_ngcontent-%COMP%];600&display=swap\")[_ngcontent-%COMP%];\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: Montserrat;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 50px;\n}\nbody[_ngcontent-%COMP%] {\n  background: floralwhite;\n  min-height: 97vh;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.card[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 360px;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  margin: 40px 30px;\n  padding: 5px;\n  position: relative;\n  transition: 0.5s;\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: translatey(-20px);\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: inherit;\n  top: 0;\n  left: 0;\n  filter: blur(30px);\n}\n.card[_ngcontent-%COMP%]:nth-child(1)::before, .card[_ngcontent-%COMP%]:nth-child(1) {\n  background: linear-gradient(315deg, #d5d5f7 0%, #2ca6ec 74%);\n}\n.card[_ngcontent-%COMP%]:nth-child(2)::before, .card[_ngcontent-%COMP%]:nth-child(2) {\n  background: linear-gradient(315deg, #d5d5f7 0%, #2ca6ec 74%);\n}\n.card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  right: 5px;\n  bottom: 5px;\n  background: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n}\n.content[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0.05) 50%);\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2;\n  color: #fff;\n  padding: 40px 20px;\n}\n.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 20px;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  justify-content: center;\n  font-family: \"Times New Roman\", Times, serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  margin-top: 50px;\n  font-size: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  justify-content: center;\n  text-align: center;\n}\n.content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-decoration: none;\n  text-align: center;\n  background: #fff;\n  color: #121214;\n  padding: 10px 5px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvaWNlL0U6XFxOZXcgZm9sZGVyXFxQaGFybWFjeU1hbmFnZW1lbnQvc3JjXFxhcHBcXGNob2ljZVxcY2hvaWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaG9pY2UvY2hvaWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGdHQUFBO0FBRVI7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNBRjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDQ0o7QURDQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0REFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTs7RUFFRSw0REFBQTtBQ0NGO0FERUE7O0VBRUUsNERBQUE7QUNDRjtBREdBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtBQ0FGO0FER0E7RUFDRSx5RkFBQTtFQUtBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNKRjtBRE1BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDREQUFBO0FDSEo7QURLQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRkY7QURLQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2Nob2ljZS9jaG9pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbn1cclxuaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogZmxvcmFsd2hpdGU7XHJcbiAgbWluLWhlaWdodDogOTd2aDtcclxuICB3aWR0aDogMTAwJTtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgbWFyZ2luOiA0MHB4IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV5KC0yMHB4KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGZpbHRlcjogYmx1cigzMHB4KTtcclxufVxyXG5cclxuLmNhcmQ6bnRoLWNoaWxkKDEpOjpiZWZvcmUsXHJcbi5jYXJkOm50aC1jaGlsZCgxKSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgI2Q1ZDVmNyAwJSwgIzJjYTZlYyA3NCUpO1xyXG59XHJcblxyXG4uY2FyZDpudGgtY2hpbGQoMik6OmJlZm9yZSxcclxuLmNhcmQ6bnRoLWNoaWxkKDIpIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDVkNWY3IDAlLCAjMmNhNmVjICA3NCUpO1xyXG59XHJcblxyXG5cclxuLmNhcmQgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNXB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICByaWdodDogNXB4O1xyXG4gIGJvdHRvbTogNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIDkwZGVnLFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDUwJSxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4wNSkgNTAlXHJcbiAgKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG59XHJcblxyXG4uY29udGVudCBoMiB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbn1cclxuLmNvbnRlbnQgcCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgY29sb3I6ICMxMjEyMTQ7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs1MDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0O1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogZmxvcmFsd2hpdGU7XG4gIG1pbi1oZWlnaHQ6IDk3dmg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIG1hcmdpbjogNDBweCAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXkoLTIwcHgpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZmlsdGVyOiBibHVyKDMwcHgpO1xufVxuXG4uY2FyZDpudGgtY2hpbGQoMSk6OmJlZm9yZSxcbi5jYXJkOm50aC1jaGlsZCgxKSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICNkNWQ1ZjcgMCUsICMyY2E2ZWMgNzQlKTtcbn1cblxuLmNhcmQ6bnRoLWNoaWxkKDIpOjpiZWZvcmUsXG4uY2FyZDpudGgtY2hpbGQoMikge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjZDVkNWY3IDAlLCAjMmNhNmVjIDc0JSk7XG59XG5cbi5jYXJkIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIGJvdHRvbTogNXB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDUwJSwgcmdiYSgwLCAwLCAwLCAwLjA1KSA1MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA0MHB4IDIwcHg7XG59XG5cbi5jb250ZW50IGgyIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbi5jb250ZW50IHAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250ZW50IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogIzEyMTIxNDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-choice',
          templateUrl: './choice.component.html',
          styleUrls: ['./choice.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(as, member, loc) {
        _classCallCheck(this, ContactComponent);

        this.as = as;
        this.member = member;
        this.loc = loc;
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addContact",
        value: function addContact(formData) {
          console.log(formData);
          this.member.addContactForm(formData.value);
          formData.resetForm();
          SweetAlert__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Thank you for sharing your message with us!",
            // text: "Thank you for sharing your message with us!",
            icon: "success"
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 91,
      vars: 0,
      consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "container"], [1, "contactinfo"], [1, "info"], [1, "fa", "fa-map-marker", 2, "font-size", "36px"], [1, "fa", "fa-phone", 2, "font-size", "36px"], [1, "fa", "fa-envelope", 2, "font-size", "36px"], [1, "maillink"], ["href", "mailto:biogradesupport@gmail.com", "target", "_blank"], [1, "contactForm"], ["ngNativeValidate", "", 3, "ngSubmit"], ["memberObject", "ngForm"], [1, "formBox"], [1, "inputBox", "w50"], ["type", "text", "ngModel", "", "name", "FirstName", "required", ""], ["FirstName", "ngModel"], ["type", "text", "ngModel", "", "name", "LastName", "required", ""], ["LastName", "ngModel"], ["type", "email", "ngModel", "", "name", "Email", "required", ""], ["Email", "ngModel"], ["type", "text", "ngModel", "", "name", "Contact", "required", ""], ["Contact", "ngModel"], [1, "inputBox", "w100"], ["type", "textarea", "ngModel", "", "name", "Message", "required", ""], ["Message", "ngModel"], ["type", "submit", "value", "SUBMIT"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_a_click_25_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "College of Technology and Engineering,Udaipur,Rajasthan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "9511575047");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "biogradesupport@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "GET IN TOUCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "We would love to hear from you!!!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "form", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_61_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            return ctx.addContact(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Last Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Email Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 34, 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Mobile Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 37, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 10px;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.maillink[_ngcontent-%COMP%] {\n  color: #fff;\n  max-width: 100%;\n  opacity: 0.8;\n  font-weight: 700;\n  font: sans-serif;\n}\n\n.maillink[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  cursor: pointer;\n}\n\nsection[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 635px;\n  font-family: \"Times New Roman\", Times, serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\nsection[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 1100px;\n  min-height: 550px;\n  display: flex;\n  z-index: 1000;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  width: 350px;\n  height: calc(100%-80px);\n  background: black;\n  z-index: 1;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  font-weight: 500;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 20px 0;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  list-style: none;\n  display: flex;\n  margin: 20px 0;\n  cursor: pointer;\n  align-items: flex-start;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  width: 30px;\n  min-width: 30px;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%] {\n  filter: invert(1);\n  max-width: 100%;\n  opacity: 0.5;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  color: #fff;\n  margin-left: 10px;\n  font-weight: 700;\n  font: sans-serif;\n  opacity: 0.5;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(1)   i[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 1;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-right: 15px;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: invert(1);\n  opacity: 0.5;\n  text-decoration: none;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactinfo[_ngcontent-%COMP%]   .sci[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 70px 20px;\n  background: #fff;\n  margin-left: 150px;\n  padding-left: 250px;\n  width: calc(100%-150px);\n  height: 100%;\n  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 24px;\n  font-weight: 500;\n  font: sans-serif;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  padding-top: 20px;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 35px 0;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w50[_ngcontent-%COMP%] {\n  width: 47%;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox.w100[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100% !important;\n  resize: none;\n  color: black;\n  font-size: 18px;\n  font-weight: 300;\n  border: none;\n  border-bottom: 1px solid #777;\n  padding: 5px 0;\n  outline: none;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 100px;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  color: black;\n  font-size: 18px;\n  font-weight: 300;\n  transition: 0.3s;\n  padding: 5px 0;\n  pointer-events: none;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus    ~ span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:valid    ~ span[_ngcontent-%COMP%] {\n  transform: translateY(-20px);\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 1px;\n  color: red;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  color: black;\n  font-weight: 800;\n  border: none;\n  max-width: 150px;\n  padding: 12px;\n}\n\nsection[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .contactForm[_ngcontent-%COMP%]   .formBox[_ngcontent-%COMP%]   .inputBox[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover {\n  background: #39c239;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1002;\n}\n\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxZQUFBO0VBQ0EsNERBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw0Q0FBQTtFQUdBLDREQUFBO0FDQUY7O0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsNERBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFFQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQyxpQkFBQTtFQUVELFVBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0YsOEJBQUE7RUFDQSwwQ0FBQTtBQ0FBOztBREdBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDQUY7O0FERUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNDQTs7QURDQTtFQUVFLFdBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBOztFQUdFLFVBQUE7QUNBRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VBOztBREFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUNHQTs7QURBQTtFQUVFLFVBQUE7QUNFRjs7QURDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0VKOztBREFFO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREU7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0lGOztBREZFO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhFO0VBQ0UsVUFBQTtBQ01KOztBREpFO0VBQ0EsV0FBQTtBQ09GOztBRExFOztFQUlFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ01KOztBREhFO0VBQ0UsaUJBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ09KOztBREpFOzs7O0VBS0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNNSjs7QURKRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLDREQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpFO0VBQ0UsbUJBQUE7QUNPSjs7QURIQTtFQUNFLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQ01GOztBREhBLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDTUY7O0FESEEsMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNNRjs7QURIQSxvQkFBQTs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDUWI7O0FETEEsd0RBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRExBLHlDQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEEsOEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNVRjs7QURQQSwyREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDVUY7O0FETkEsb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIFxyXG59XHJcbmJvZHl7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuIFxyXG59XHJcbi5tYWlsbGlua3tcclxuICBjb2xvcjojZmZmO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250OiAgc2Fucy1zZXJpZjtcclxufVxyXG4ubWFpbGxpbms6aG92ZXJ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNlY3Rpb257XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA2MzVweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9CYW5uZXIyLmpwZWcpO1xyXG4gIC8vYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG59XHJcbnNlY3Rpb246OmJlZm9yZXtcclxuICBjb250ZW50OicnIDtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvL2JhY2tncm91bmQ6I2ZmZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbn1cclxuc2VjdGlvbiAuY29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDExMDBweDtcclxuICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mb3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgLy8gbGVmdDogMDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUtODBweCk7XHJcbiAgIGJhY2tncm91bmQ6YmxhY2s7XHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgei1pbmRleDogMTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5ib3gtc2hhZG93OiAwIDIwcHggMjBweCByZ2JhKDAsMCwwLDAuMik7ICBcclxuXHJcbn1cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyBoMntcclxuICBjb2xvcjojZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxufVxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZve1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpe1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmxpc3Qtc3R5bGU6IG5vbmU7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbm1hcmdpbjogMjBweCAwO1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG59XHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGkgc3BhbjpudGgtY2hpbGQoMSlcclxue1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxufVxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpIHNwYW46bnRoLWNoaWxkKDEpIGlcclxue1xyXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGkgc3BhbjpudGgtY2hpbGQoMilcclxueyBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQ6ICBzYW5zLXNlcmlmO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuXHJcbn1cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyBsaTpob3ZlciBzcGFuOm50aC1jaGlsZCgxKSBpLFxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpOmhvdmVyIHNwYW46bnRoLWNoaWxkKDIpXHJcbntcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLnNjaXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5zY2kgbGkge1xyXG5saXN0LXN0eWxlOiBub25lO1xyXG5tYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2NpIGxpIGltZ3tcclxuZmlsdGVyOiBpbnZlcnQoMSk7XHJcbm9wYWNpdHk6IDAuNTtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5zY2kgbGk6aG92ZXIgIGltZ3tcclxuICBcclxuICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmc6IDcwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJS0xNTBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAwIDUwcHggNTBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gaDJ7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udDogIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMCAwIDM1cHggMDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzUwe1xyXG4gICAgd2lkdGg6IDQ3JTtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzEwMHtcclxuICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggaW5wdXQsXHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWF7XHJcbiAgICBcclxuICAgIC8vIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJSAgIWltcG9ydGFudDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3NztcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCB0ZXh0YXJlYXtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBzcGFue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dDpmb2N1cyB+IHNwYW4sXHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggdGV4dGFyZWE6Zm9jdXMgfiBzcGFuLFxyXG4gIHNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0OnZhbGlkIH4gc3BhbixcclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCB0ZXh0YXJlYTp2YWxpZCB+IHNwYW5cclxuICB7IFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8vYmFja2dyb3VuZDpkYXJrYmx1ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gIH1cclxuICBzZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dFt0eXBlPVwic3VibWl0XCJdOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoNTcsIDE5NCwgNTcpO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5uYXZiYXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cclxuLm5hdmJhciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHJnYigxNCwgMCwgMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cclxuLmRyb3Bkb3duIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBidXR0b24gKi9cclxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHJnYigxNCwgMSwgMSk7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbn1cclxuXHJcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xyXG4ubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDEwMDI7XHJcbn1cclxuLmRyb3BidG46aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gXHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haWxsaW5rIHtcbiAgY29sb3I6ICNmZmY7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250OiBzYW5zLXNlcmlmO1xufVxuXG4ubWFpbGxpbms6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2MzVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxuXG5zZWN0aW9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxMTAwcHg7XG4gIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUtODBweCk7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaGFkb3c6IDAgMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyBoMiB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyBsaSBzcGFuOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAzMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLmluZm8gbGkgc3BhbjpudGgtY2hpbGQoMSkgaSB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuaW5mbyBsaSBzcGFuOm50aC1jaGlsZCgyKSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udDogc2Fucy1zZXJpZjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpOmhvdmVyIHNwYW46bnRoLWNoaWxkKDEpIGksXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5pbmZvIGxpOmhvdmVyIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0aW5mbyAuc2NpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RpbmZvIC5zY2kgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLnNjaSBsaSBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxKTtcbiAgb3BhY2l0eTogMC41O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdGluZm8gLnNjaSBsaTpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAxO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiA3MHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJS0xNTBweCk7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA1MHB4IDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIGgyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQ6IHNhbnMtc2VyaWY7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCAwIDM1cHggMDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzUwIHtcbiAgd2lkdGg6IDQ3JTtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3gudzEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5zZWN0aW9uIC5jb250YWluZXIgLmNvbnRhY3RGb3JtIC5mb3JtQm94IC5pbnB1dEJveCBpbnB1dCxcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcmVzaXplOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzc3NztcbiAgcGFkZGluZzogNXB4IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogMTAwcHg7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0OmZvY3VzIH4gc3BhbixcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhOmZvY3VzIH4gc3BhbixcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0OnZhbGlkIH4gc3BhbixcbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IHRleHRhcmVhOnZhbGlkIH4gc3BhbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHJlZDtcbn1cblxuc2VjdGlvbiAuY29udGFpbmVyIC5jb250YWN0Rm9ybSAuZm9ybUJveCAuaW5wdXRCb3ggaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogODAwO1xuICBib3JkZXI6IG5vbmU7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIHBhZGRpbmc6IDEycHg7XG59XG5cbnNlY3Rpb24gLmNvbnRhaW5lciAuY29udGFjdEZvcm0gLmZvcm1Cb3ggLmlucHV0Qm94IGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMzOWMyMzk7XG59XG5cbi5uYXZiYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMGUwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXG4uZHJvcGRvd24ge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uICovXG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwZTAxMDE7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xuICBtYXJnaW46IDA7XG4gIC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xufVxuXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cbi5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxMDAyO1xufVxuXG4uZHJvcGJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covidguide/covidguide.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/covidguide/covidguide.component.ts ***!
    \****************************************************/

  /*! exports provided: CovidguideComponent */

  /***/
  function srcAppCovidguideCovidguideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidguideComponent", function () {
      return CovidguideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CovidguideComponent = /*#__PURE__*/function () {
      function CovidguideComponent(as) {
        _classCallCheck(this, CovidguideComponent);

        this.as = as;
      }

      _createClass(CovidguideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return CovidguideComponent;
    }();

    CovidguideComponent.ɵfac = function CovidguideComponent_Factory(t) {
      return new (t || CovidguideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CovidguideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CovidguideComponent,
      selectors: [["app-covidguide"]],
      decls: 63,
      vars: 0,
      consts: [[1, "main"], [1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "fa", "fa-caret-down"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "cards"], [1, "image"], ["src", "/assets/wearmask4.jpg"], [1, "title"], ["src", "/assets/vaccinated4.png"], ["src", "/assets/stayhome4.jpg"], ["src", "/assets/sanitize4.jpg"], ["src", "/assets/distance4.png"], ["src", "/assets/touch4.jpg"]],
      template: function CovidguideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CovidguideComponent_Template_a_click_24_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Wear Mask ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Get Vaccinated ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Stay Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Sanitize ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Social Distancing ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Don't Touch Face ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: 25%;\n  background-color: #1fd1f9;\n  background-color: #60dfcd;\n  background-color: #f89b9e;\n  background-color: #0beef9;\n  background-color: #96c8fb;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  border-radius: 5px;\n  margin: 30px;\n  margin-left: 68px;\n  box-shadow: 2px 2px 10px black;\n  display: inline-block;\n}\n\n.cards[_ngcontent-%COMP%]:hover {\n  box-shadow: 4px 4px 12px black;\n}\n\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-top-right-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 5px;\n}\n\n.description[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  background-color: white;\n  border: 1px solid black;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: black;\n  color: white;\n  transition: 0.5s;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWRndWlkZS9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxjb3ZpZGd1aWRlXFxjb3ZpZGd1aWRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3ZpZGd1aWRlL2NvdmlkZ3VpZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ0NEOztBRENBO0VBR0MsdUJBQUE7QUNBRDs7QUQwR0E7RUFDRSxlQUFBO0FDdkdGOztBRHlHQTtFQUVDLFVBQUE7RUFFQSx5QkFBQTtFQUNHLHlCQUFBO0VBQ0gseUJBQUE7RUFDRyx5QkFBQTtFQUNILHlCQUFBO0VBQ0EsNERBQUE7RUFFQSxrQkFBQTtFQUNHLFlBQUE7RUFDSCxpQkFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7QUMxR0Q7O0FENEdBO0VBRUMsOEJBQUE7QUMxR0Q7O0FENkdBO0VBQ0MsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUMxR0Q7O0FENkdBO0VBRUMsa0JBQUE7RUFDQSxZQUFBO0FDM0dEOztBRDZHQTtFQUVDLGtCQUFBO0VBQ0EsWUFBQTtBQzNHRDs7QUQ2R0E7RUFFQyxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUMzR0Q7O0FEOEdBO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUMzR0Q7O0FEK0dBO0VBQ0ksZ0JBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0FDNUdKOztBRCtHRSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQzVHSjs7QUQrR0UsMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUM1R0o7O0FEK0dFLG9CQUFBOztBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFzQixrREFBQTtFQUN0QixTQUFBO0VBQVcsa0RBQUE7QUMxR2Y7O0FENkdFLHdEQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQzFHSjs7QUQ2R0UseUNBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDMUdKOztBRDRHRTtFQUNFLDBCQUFBO0FDekdKOztBRDJHRSw4QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3hHSjs7QUQyR0UsMkRBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ3hHSjs7QUQ0R0Usb0NBQUE7O0FBQ0E7RUFDRSxjQUFBO0FDekdKIiwiZmlsZSI6InNyYy9hcHAvY292aWRndWlkZS9jb3ZpZGd1aWRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuXHRtYXJnaW46IDBweDtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuYm9keSBcclxuXHJcbntcclxuXHRmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuXHRcclxuXHJcblx0XHJcbn1cclxuXHJcblxyXG4vLyAuc3BhY2VcclxuLy8ge1xyXG5cdFxyXG4vLyB9XHJcblxyXG5cclxuXHJcbi8vIC5zcGFjZSB1bCB7XHJcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4vLyAgIG1hcmdpbjogMDtcclxuLy8gICBwYWRkaW5nOiAwO1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpOztcclxuLy8gICBwb3NpdGlvbjogZml4ZWQ7XHJcbi8vICAgdG9wOiAwO1xyXG4vLyAgIHdpZHRoOiAxMDAlO1xyXG4vLyB9XHJcblxyXG4vLyAuc3BhY2UgbGkge1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNiYmI7XHJcbi8vIH1cclxuXHJcbi8vIC5zcGFjZSBsaSBhIHtcclxuLy8gICBkaXNwbGF5OiBibG9jaztcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuc3BhY2UgbGkgYTpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuLy8gLmNhcmRzXHJcbi8vIHtcclxuLy8gXHR3aWR0aDogMjUlO1xyXG5cclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWZkMWY5O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzYwZGZjZDtcclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5YjllO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzBiZWVmOTtcclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTZjOGZiO1xyXG4vLyBcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuXHRcclxuLy8gXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDo4MHB4O1x0XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuLy8gXHRib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcblxyXG4vLyBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gfVxyXG4vLyAuY2FyZHM6aG92ZXJcclxuLy8ge1xyXG4vLyBcdGJveC1zaGFkb3c6IDRweCA0cHggMTJweCBibGFjaztcclxuLy8gfVxyXG5cclxuLy8gLmltYWdlIGltZ3tcclxuLy8gXHR3aWR0aDogMTAwJTtcclxuLy8gXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4vLyBcdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuLy8gfVxyXG5cclxuLy8gLnRpdGxlXHJcbi8vIHtcclxuLy8gXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIFx0cGFkZGluZzogNXB4O1xyXG4vLyBcdGZvbnQtZmFtaWx5OiBDYWxpYnJpO1xyXG4vLyB9XHJcbi8vIC5kZXNjcmlwdGlvblxyXG4vLyB7XHJcbi8vIFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyBcdHBhZGRpbmc6IDRweDtcclxuLy8gfVxyXG4vLyBidXR0b25cclxuLy8ge1xyXG4vLyBcdG1hcmdpbi10b3A6MzBweDtcclxuLy8gXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4vLyBcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4vLyBcdHBhZGRpbmc6IDVweDtcclxuLy8gXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vIFx0Y3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b246aG92ZXJ7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbi8vIFx0Y29sb3I6d2hpdGU7XHJcbi8vIFx0dHJhbnNpdGlvbjogLjVzO1xyXG5cclxuLy8gfVxyXG5cclxuYTpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhcmRzXHJcbntcclxuXHR3aWR0aDogMjUlO1xyXG5cclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWZkMWY5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwZGZjZDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjg5YjllO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiZWVmOTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOTZjOGZiO1xyXG5cdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuXHRcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46MzBweDtcclxuXHRtYXJnaW4tbGVmdDogNjhweDtcdFxyXG5cdGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuXHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5jYXJkczpob3ZlclxyXG57XHJcblx0Ym94LXNoYWRvdzogNHB4IDRweCAxMnB4IGJsYWNrO1xyXG59XHJcblxyXG4uaW1hZ2UgaW1ne1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcblx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGl0bGVcclxue1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uXHJcbntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogNHB4O1xyXG59XHJcbmJ1dHRvblxyXG57XHJcblx0bWFyZ2luLXRvcDozMHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuXHRjb2xvcjp3aGl0ZTtcclxuXHR0cmFuc2l0aW9uOiAuNXM7XHJcblxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbiAgLm5hdmJhciBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYigxNCwgMCwgMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cclxuICAuZHJvcGRvd24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBEcm9wZG93biBidXR0b24gKi9cclxuICAuZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICAgIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuZHJvcGJ0bjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6ICAycHggMTBweCBibGFjaztcclxuICB9XHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIC8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfSIsIioge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkcyB7XG4gIHdpZHRoOiAyNSU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZmQxZjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MGRmY2Q7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmODliOWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYmVlZjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NmM4ZmI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2OHB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmRzOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogNHB4IDRweCAxMnB4IGJsYWNrO1xufVxuXG4uaW1hZ2UgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbn1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5uYXZiYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMGUwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXG4uZHJvcGRvd24ge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uICovXG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwZTAxMDE7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xuICBtYXJnaW46IDA7XG4gIC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xufVxuXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cbi5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xufVxuXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3BidG46aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMTBweCBibGFjaztcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidguideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-covidguide',
          templateUrl: './covidguide.component.html',
          styleUrls: ['./covidguide.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/covidsymptoms/covidsymptoms.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/covidsymptoms/covidsymptoms.component.ts ***!
    \**********************************************************/

  /*! exports provided: CovidsymptomsComponent */

  /***/
  function srcAppCovidsymptomsCovidsymptomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidsymptomsComponent", function () {
      return CovidsymptomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CovidsymptomsComponent = /*#__PURE__*/function () {
      function CovidsymptomsComponent(as) {
        _classCallCheck(this, CovidsymptomsComponent);

        this.as = as;
      }

      _createClass(CovidsymptomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return CovidsymptomsComponent;
    }();

    CovidsymptomsComponent.ɵfac = function CovidsymptomsComponent_Factory(t) {
      return new (t || CovidsymptomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CovidsymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CovidsymptomsComponent,
      selectors: [["app-covidsymptoms"]],
      decls: 65,
      vars: 0,
      consts: [[1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "card"], [1, "thumbnail"], ["src", "/assets/symptoms.jpg", 1, "left"], [1, "right"], [1, "separator"]],
      template: function CovidsymptomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CovidsymptomsComponent_Template_a_click_17_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "COVID SYMPTOMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "COVID-19 affects different people in different ways.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Most common symptoms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 1.Fever.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " 2.Dry cough.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 3.Tiredness.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Less common symptoms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " 1.Aches and pains.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " 2.Sore throat.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " 3.Diarrhoea.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " 4.Conjunctivitis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " 5.Headache.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " 6.Loss of taste or smell.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " 7.A rash on skin, or discolouration of fingers or toes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Serious symptoms:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " 1.Difficulty breathing or shortness of breath.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 2.Chest pain or pressure.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " 3.Loss of speech or movement.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Seek immediate medical attention if you have serious symptoms.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto);\n\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  height: 510px;\n  width: 1000px;\n  margin-left: 180px;\n  margin-top: 40px;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\n.thumbnail[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  left: 30px;\n  top: -30px;\n  height: 530px;\n  width: 530px;\n  box-shadow: 2px 2px 10px black;\n  overflow: hidden;\n  \n  \n}\nimg.left[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  height: auto;\n  width: 100%;\n  transform: translate(-50%, -50%);\n}\n\n.right[_ngcontent-%COMP%] {\n  margin-left: 590px;\n  margin-right: 20px;\n}\nh1[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  font-size: 1.3rem;\n  color: #4B4B4B;\n}\n.separator[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border: 1px solid #C3C3C3;\n}\np[_ngcontent-%COMP%] {\n  text-align: justify;\n  padding-top: 10px;\n  font-size: 0.95rem;\n  line-height: 150%;\n  color: #4B4B4B;\n}\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWRzeW1wdG9tcy9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxjb3ZpZHN5bXB0b21zXFxjb3ZpZHN5bXB0b21zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb3ZpZHN5bXB0b21zL2Nvdmlkc3ltcHRvbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsMkRBQUE7QUFFUiwwQkFBQTtBQUtBLGFBQUE7QUFDQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFFQyxrQkFBQTtFQUNBLGdCQUFBO0VBRUUsNERBQUE7QUNOSjtBRFlBLDJCQUFBO0FBQ0E7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBSUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNELHFCQUFBO0VBQ0EsMkJBQUE7QUNaQTtBRGNBO0VBQ0Msa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBR0EsZ0NBQUE7QUNYRDtBRGFBLDJCQUFBO0FBQ0E7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0FDVkQ7QURZQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDVEQ7QURZQTtFQUNDLGdCQUFBO0VBQ0EseUJBQUE7QUNURDtBRFdBO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDUkQ7QURZQTtFQUNJLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEWUUsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1RKO0FEWUUsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEWUUsb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDUGY7QURVRSx3REFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQ1BKO0FEVUUseUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNQSjtBRFNFO0VBQ0UsMEJBQUE7QUNOSjtBRFFFLDhCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFFLDJEQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQ0xKO0FEU0Usb0NBQUE7QUFDQTtFQUNFLGNBQUE7QUNOSjtBRFFFO0VBQ0UsZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvY292aWRzeW1wdG9tcy9jb3ZpZHN5bXB0b21zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XHJcblxyXG4vKk15IGh1bS4uLiBib2R5Li4geWVhaC4uKi9cclxuLy8gYm9keSB7XHJcbi8vIFx0YmFja2dyb3VuZC1jb2xvcjogIzM1M0IzRjtcclxuLy8gXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbi8vIH1cclxuLyogVGhlIGNhcmQgKi9cclxuLmNhcmR7XHJcblx0cG9zaXRpb24gOiByZWxhdGl2ZTtcclxuXHRoZWlnaHQ6IDUxMHB4O1xyXG5cdHdpZHRoOiAxMDAwcHg7XHJcblx0Ly8gbWFyZ2luIDogNjBweCAxODBweCAwcHggMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcblx0Ly8gYmFja2dyb3VuZC1jb2xvciA6ICNGRkY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcblx0Ly8gLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggOTNweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHQvLyAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA5M3B4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cdC8vIGJveC1zaGFkb3c6IDEwcHggMTBweCA5M3B4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cdC8vYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG59XHJcbi8qIEltYWdlIG9uIHRoZSBsZWZ0IHNpZGUgKi9cclxuLnRodW1ibmFpbCB7XHJcblx0ZmxvYXQgOiBsZWZ0O1xyXG5cdHBvc2l0aW9uIDogcmVsYXRpdmU7IFxyXG5cdGxlZnQgOiAzMHB4O1xyXG5cdHRvcCA6IC0zMHB4O1xyXG5cdGhlaWdodCA6IDUzMHB4O1xyXG5cdHdpZHRoIDogNTMwcHg7XHJcblx0Ly8gLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDEwcHggNjBweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuXHQvLyAtbW96LWJveC1zaGFkb3c6IDEwcHggMTBweCA2MHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cdC8vIGJveC1zaGFkb3c6IDEwcHggMTBweCA2MHB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG5cdGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4vKm9iamVjdC1maXQ6IGNvdmVyOyovXHJcbi8qb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7Ki9cclxufVxyXG5pbWcubGVmdHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0bGVmdDogNTAlO1xyXG5cdHRvcDogNTAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHR3aWR0aDogMTAwJTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG4vKiBSaWdodCBzaWRlIG9mIHRoZSBjYXJkICovXHJcbi5yaWdodHtcclxuXHRtYXJnaW4tbGVmdCA6IDU5MHB4O1xyXG5cdG1hcmdpbi1yaWdodCA6IDIwcHg7XHJcbn1cclxuaDF7XHJcblx0cGFkZGluZy10b3AgOiAxNXB4O1xyXG5cdGZvbnQtc2l6ZSA6IDEuM3JlbTtcclxuXHRjb2xvciA6ICM0QjRCNEI7XHJcbn1cclxuXHJcbi5zZXBhcmF0b3J7XHJcblx0bWFyZ2luLXRvcCA6IDEwcHg7XHJcblx0Ym9yZGVyIDogMXB4IHNvbGlkICNDM0MzQzM7XHJcbn1cclxucHtcclxuXHR0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG5cdHBhZGRpbmctdG9wIDogMTBweDtcclxuXHRmb250LXNpemUgOiAwLjk1cmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG5cdGNvbG9yIDogIzRCNEI0QjtcclxufVxyXG5cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cclxuICAubmF2YmFyIGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xyXG4gIC5kcm9wZG93biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4gIC5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6IHJnYigxNCwgMSwgMSk7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gICAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gIH1cclxuICBcclxuICAvKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG4gIC5kcm9wYnRuOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gIH1cclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9IiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90byk7XG4vKk15IGh1bS4uLiBib2R5Li4geWVhaC4uKi9cbi8qIFRoZSBjYXJkICovXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA1MTBweDtcbiAgd2lkdGg6IDEwMDBweDtcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbi8qIEltYWdlIG9uIHRoZSBsZWZ0IHNpZGUgKi9cbi50aHVtYm5haWwge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMHB4O1xuICB0b3A6IC0zMHB4O1xuICBoZWlnaHQ6IDUzMHB4O1xuICB3aWR0aDogNTMwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLypvYmplY3QtZml0OiBjb3ZlcjsqL1xuICAvKm9iamVjdC1wb3NpdGlvbjogY2VudGVyOyovXG59XG5cbmltZy5sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4vKiBSaWdodCBzaWRlIG9mIHRoZSBjYXJkICovXG4ucmlnaHQge1xuICBtYXJnaW4tbGVmdDogNTkwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuaDEge1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGNvbG9yOiAjNEI0QjRCO1xufVxuXG4uc2VwYXJhdG9yIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0MzQzNDMztcbn1cblxucCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDAuOTVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICBjb2xvcjogIzRCNEI0Qjtcbn1cblxuLm5hdmJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xuLm5hdmJhciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwZTAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cbi5kcm9wZG93biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzBlMDEwMTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG59XG5cbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IGJsYWNrO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CovidsymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-covidsymptoms',
          templateUrl: './covidsymptoms.component.html',
          styleUrls: ['./covidsymptoms.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cure/cure.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cure/cure.component.ts ***!
    \****************************************/

  /*! exports provided: CureComponent */

  /***/
  function srcAppCureCureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CureComponent", function () {
      return CureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CureComponent = /*#__PURE__*/function () {
      function CureComponent(as) {
        _classCallCheck(this, CureComponent);

        this.as = as;
      }

      _createClass(CureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return CureComponent;
    }();

    CureComponent.ɵfac = function CureComponent_Factory(t) {
      return new (t || CureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    CureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CureComponent,
      selectors: [["app-cure"]],
      decls: 73,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"], ["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], [1, "navbars"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdowns"], [1, "dropbtns"], [1, "dropdowns-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "container", "my-5"], [1, "text-center", "mb-5", "col-md-10", "mx-auto"], [1, "font-weight-bold", "display-4", 2, "font-family", "'Times New Roman', Times, serif", "font-size", "30px", "color", "black"], [2, "color", "black", "font-family", "'Times New Roman', Times, serif"], [1, "row", 2, "margin-top", "0px"], [1, "col-md-4", "my-4"], [1, "card"], [1, "icon"], [1, "bi", "bi-calendar2-x-fill"], [1, "px-3", "text-center", "pb-3"], [1, "text-uppercase", 2, "font-weight", "600"], [2, "text-align", "left"], [1, "cardmiddle"], [1, "bi", "bi-shop"], [1, "bi", "bi-plus-circle-fill"]],
      template: function CureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CureComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "COVID-19 Precautions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "and Treatment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Precaution");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1. Wash your hands or sanitize them using soap and sanitizers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2. Maintain 1 meter distance from a person sneezing, and cover your mouth while coughing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3. Avoid touching your face refrain from activities that weakens the lungs.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "4. Avoid unnecessary travel, practice physical distancing and stay home.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Treatment At Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "If your symptoms are mild enough, then you can recover at home:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "1. Rest and stay home.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2. Drink fluids and monitor your oxygen level timely.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "3. Get help from your doctor about necessary medications and exercises.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h5", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Treatment At Hospital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Scientists all around the world are working to find the optimum treatment for COVID 19");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Supportive care includes oxygen cylinders or severely ill patients and people who require advanced respiratory support.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Doctors may give you an antiviral medicine called remdesivir which is the first drug approved by the FDA for treatment of hospitalized COVID patients over the age of 12.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];600[_ngcontent-%COMP%];700&display=swap\")[_ngcontent-%COMP%];\nbody[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif !important;\n  overflow: hidden;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  max-height: 600px;\n}\nh5[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n}\np[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n}\na[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  cursor: pointer;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: black;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  margin-left: 150px;\n}\n.card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-top: 0;\n  border: black;\n  border-radius: 2%;\n  background: #f1f7fa;\n  height: 360px;\n  box-shadow: black;\n}\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: black;\n  cursor: pointer;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n.cardmiddle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  border: black;\n  border-radius: 2%;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  height: 360px;\n  box-shadow: black;\n}\n.cardmiddle[_ngcontent-%COMP%]:hover {\n  box-shadow: black;\n  cursor: pointer;\n  background: #f1f7fa;\n}\n.navbars[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdowns[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdowns[_ngcontent-%COMP%]   .dropbtns[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdowns[_ngcontent-%COMP%]:hover   .dropbtns[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdowns-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtns[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdowns[_ngcontent-%COMP%]:hover   .dropdowns-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VyZS9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxjdXJlXFxjdXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jdXJlL2N1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEscUdBQUE7QUFFUjtFQUNJLDZDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBSjtBREVBO0VBQ0ksNENBQUE7QUNDSjtBRENBO0VBQ0ksNENBQUE7QUNFSjtBREFBO0VBQ0kscUJBQUE7RUFDRSxlQUFBO0FDR047QURBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNJSjtBREZBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7QUNLSjtBREhBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDTUo7QURKQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDT0o7QURIQTtFQUNJLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQ01KO0FESEUsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ01KO0FESEUsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ01KO0FESEUsb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDUWY7QURMRSx3REFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNRSjtBRExFLHlDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDUUo7QURORTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ1NKO0FEUEUsOEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1VKO0FEUEUsMkRBQUE7QUFDQTtFQUNFLHNCQUFBO0FDVUo7QURORSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvY3VyZS9jdXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG59XHJcbmg1e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7ICBcclxufVxyXG5cclxuLmljb257XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbi5jYXJke1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBib3JkZXI6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyNDEsIDI0NywgMjUwKTtcclxuICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICBib3gtc2hhZG93OiBibGFjaztcclxufVxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbn1cclxuLmNhcmRtaWRkbGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgYm9yZGVyOiBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxuICAgIGhlaWdodDogMzYwcHg7XHJcbiAgICBib3gtc2hhZG93OiBibGFjaztcclxufVxyXG4uY2FyZG1pZGRsZTpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiKDI0MSwgMjQ3LCAyNTApO1xyXG59XHJcblxyXG5cclxuLm5hdmJhcnMge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICB9XHJcbiAgXHJcbiAgLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cclxuICAubmF2YmFycyBhIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYigxNCwgMCwgMCk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cclxuICAuZHJvcGRvd25zIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gYnV0dG9uICovXHJcbiAgLmRyb3Bkb3ducyAuZHJvcGJ0bnMge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICAgIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5uYXZiYXJzIGE6aG92ZXIsIC5kcm9wZG93bnM6aG92ZXIgLmRyb3BidG5zIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbiAgLmRyb3Bkb3ducy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLmRyb3BidG5zOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAvKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbiAgLmRyb3Bkb3ducy1jb250ZW50IGEge1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4gIC5kcm9wZG93bnMtY29udGVudCBhOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAvKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbiAgLmRyb3Bkb3duczpob3ZlciAuZHJvcGRvd25zLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMzAwOzQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbn1cblxuaDUge1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxuLmNhcmQge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAwO1xuICBib3JkZXI6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbiAgYmFja2dyb3VuZDogI2YxZjdmYTtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgYm94LXNoYWRvdzogYmxhY2s7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxuXG4uY2FyZG1pZGRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDIlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGhlaWdodDogMzYwcHg7XG4gIGJveC1zaGFkb3c6IGJsYWNrO1xufVxuXG4uY2FyZG1pZGRsZTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmMWY3ZmE7XG59XG5cbi5uYXZiYXJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXG4ubmF2YmFycyBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwZTAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cbi5kcm9wZG93bnMge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uICovXG4uZHJvcGRvd25zIC5kcm9wYnRucyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzBlMDEwMTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhcnMgYTpob3ZlciwgLmRyb3Bkb3duczpob3ZlciAuZHJvcGJ0bnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGJ0bnM6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd25zLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd25zLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bnM6aG92ZXIgLmRyb3Bkb3ducy1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cure',
          templateUrl: './cure.component.html',
          styleUrls: ['./cure.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/display/display.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/display/display.component.ts ***!
    \**********************************************/

  /*! exports provided: DisplayComponent */

  /***/
  function srcAppDisplayDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayComponent", function () {
      return DisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");

    var DisplayComponent = /*#__PURE__*/function () {
      function DisplayComponent(as, loc, route, member) {
        _classCallCheck(this, DisplayComponent);

        this.as = as;
        this.loc = loc;
        this.route = route;
        this.member = member; // details=[];

        this.details = {
          Name: "",
          Address: "",
          Contact: NaN,
          ContactTwo: NaN,
          Email: "",
          NumberOfEstimatedBedsCovid: NaN
        };
      }

      _createClass(DisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (res) {
            console.log(res['id']); // console.log(res);

            _this.id = res['id'];

            _this.member.getamountbyId(_this.id).subscribe(function (res) {
              console.log(res);
              _this.details = res;
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }, {
        key: "back",
        value: function back() {
          this.loc.back();
        }
      }]);

      return DisplayComponent;
    }();

    DisplayComponent.ɵfac = function DisplayComponent_Factory(t) {
      return new (t || DisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]));
    };

    DisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayComponent,
      selectors: [["app-display"]],
      decls: 70,
      vars: 10,
      consts: [["lang", "en", "dir", "ltr"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "blog-card"], ["type", "radio", "name", "select", "id", "tap-1", "checked", ""], ["type", "radio", "name", "select", "id", "tap-2"], ["type", "radio", "name", "select", "id", "tap-3"], ["type", "radio", "name", "select", "id", "tap-4"], ["type", "checkbox", "id", "imgTap"], [1, "sliders"], ["for", "tap-1", 1, "tap", "tap-1"], ["for", "tap-2", 1, "tap", "tap-2"], ["for", "tap-3", 1, "tap", "tap-3"], ["for", "tap-4", 1, "tap", "tap-4"], [1, "inner-part"], ["for", "imgTap", 1, "img"], ["src", "/assets/hospital.png", 1, "img-1"], [1, "content", "content-1"], [1, "title"], [1, "text"], [1, "fa", "fa-plus-circle", 2, "font-size", "36px"], [2, "text-align", "center", "font-weight", "600", "font-size", "20px"], ["src", "/assets/hospital.png", 1, "img-2"], [1, "content", "content-2"], [1, "fa", "fa-map-marker", 2, "font-size", "36px"], ["src", "/assets/hospital.png", 1, "img-3"], [1, "content", "content-3"], ["tyle", "font-size:48px", 1, "fa", "fa-phone"], ["src", "/assets/hospital.png", 1, "img-4"], [1, "content", "content-4"], ["tyle", "font-size:48px", 1, "fa", "fa-envelope"], ["target", "_blank", 3, "href"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function DisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Number of Estimated beds for COVID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DisplayComponent_Template_button_click_68_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.NumberOfEstimatedBedsCovid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.ContactTwo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.details.Email, "?subject=Regarding Beds Availability in your hospital", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Email);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 605px;\n  font-family: \"Fira Sans\", sans-serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n.blog-card[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 370px;\n  width: 95%;\n  max-width: 850px;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  border-radius: 25px;\n  background: white;\n  box-shadow: 0px 10px 50px rgba(252, 56, 56, 0.3);\n}\n.inner-part[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  height: 360px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 25px;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%] {\n  padding: 0;\n  transition: 0.1s ease-in;\n}\n.inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 260px;\n  width: 260px;\n  flex-shrink: 0;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 2px 3px 15px rgba(252, 56, 56, 0.1);\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 370px;\n  width: 850px;\n  z-index: 99;\n  margin-top: 10px;\n  transition: 0.3s 0.2s ease-in;\n}\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  opacity: 0;\n  transition: 0.6s;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-3[_ngcontent-%COMP%], #tap-4[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-4[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0 20px 0 35px;\n  width: 530px;\n  margin-left: 50px;\n  opacity: 0;\n  transition: 0.6s;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-3[_ngcontent-%COMP%], #tap-4[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-4[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin-left: 0px;\n  z-index: 100;\n  transition-delay: 0.3s;\n}\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #7b7992;\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #0d0925;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #4e4a67;\n  font-size: 19px;\n  margin-bottom: 30px;\n  line-height: 1.5em;\n  text-align: justify;\n}\na[_ngcontent-%COMP%] {\n  color: #4e4a67;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 15px 20px;\n  border: none;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #fff0e6;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #fd3535;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.sliders[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  left: 65%;\n  transform: translateX(-50%);\n  z-index: 12;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%] {\n  display: none;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  width: 50px;\n  background: #d9d9d9;\n  border-radius: 5px;\n  display: inline-flex;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:hover {\n  background: #cccccc;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: -100%;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  border-radius: 10px;\n  transform: scaleX(0);\n  transition: transform 0.6s;\n  transform-origin: left;\n}\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-1[_ngcontent-%COMP%]:before, #tap-2[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-2[_ngcontent-%COMP%]:before, #tap-3[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-3[_ngcontent-%COMP%]:before, #tap-4[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-4[_ngcontent-%COMP%]:before {\n  transform: scaleX(1);\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 300;\n  font-size: 20px;\n  width: 30%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 400px;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzcGxheS9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxkaXNwbGF5XFxkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFDUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSw0REFBQTtBQ0VGO0FEQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdEQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0dGO0FEREE7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7QUNJRjtBREZBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FDS0Y7QURIQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUNNRjtBREpBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ09GO0FETEE7Ozs7RUFJRSxVQUFBO0VBQ0Esc0JBQUE7QUNRRjtBRE5BO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNTRjtBRFBBO0VBQ0UsYUFBQTtBQ1VGO0FEUkE7Ozs7RUFJRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNXRjtBRFRBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1lGO0FEVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNhRjtBRFhBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNjRjtBRFpBO0VBQ0UsY0FBQTtBQ2VGO0FEYkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsK0RBQUE7QUNlRjtBRGJBO0VBRUksK0RBQUE7QUNlSjtBRGJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2dCRjtBRGRBO0VBQ0UsYUFBQTtBQ2lCRjtBRGZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDa0JGO0FEaEJBO0VBQ0UsbUJBQUE7QUNtQkY7QURqQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsK0RBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ2tCRjtBRGhCQTs7RUFFRSxhQUFBO0FDbUJGO0FEakJBOzs7O0VBSUUsb0JBQUE7RUFDQSxXQUFBO0FDb0JGO0FEaEJBO0VBRUUsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQyxpQkFBQTtFQUNBLCtEQUFBO0VBR0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNnQkoiLCJmaWxlIjoic3JjL2FwcC9kaXNwbGF5L2Rpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMCw2MDAsNzAwLDgwMFwiKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNjA1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxufVxyXG4uYmxvZy1jYXJke1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAvLyBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSgyNTIsNTYsNTYsLjMpO1xyXG59XHJcbi5pbm5lci1wYXJ0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogMzYwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLmlubmVyLXBhcnQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjFzIGVhc2UtaW47XHJcbn1cclxuLmlubmVyLXBhcnQgLmltZ3tcclxuICBoZWlnaHQ6IDI2MHB4O1xyXG4gIHdpZHRoOiAyNjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMnB4IDNweCAxNXB4IHJnYmEoMjUyLDU2LDU2LC4xKTtcclxufVxyXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1ne1xyXG4gIGhlaWdodDogMzcwcHg7XHJcbiAgd2lkdGg6IDg1MHB4O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogLjNzIC4ycyBlYXNlLWluO1xyXG59XHJcbi5pbWcgaW1ne1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAuNnM7XHJcbn1cclxuI3RhcC0xOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTEsXHJcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0yLFxyXG4jdGFwLTM6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMyxcclxuI3RhcC00OmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTR7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMzVweDtcclxuICB3aWR0aDogNTMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAuNnM7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTEsXHJcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMixcclxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0zLFxyXG4jdGFwLTQ6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTR7XHJcbiAgb3BhY2l0eTogMTtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XHJcbn1cclxuLmNvbnRlbnQgc3BhbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzdiNzk5MjtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNTAwXHJcbn1cclxuLmNvbnRlbnQgLnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGQwOTI1O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmNvbnRlbnQgLnRleHR7XHJcbiAgY29sb3I6ICM0ZTRhNjc7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuYXtcclxuICBjb2xvcjojNGU0YTY3O1xyXG59XHJcbi5jb250ZW50IGJ1dHRvbntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmMGU2O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG59XHJcbi5jb250ZW50IGJ1dHRvbjpob3ZlcntcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG59XHJcbi5zbGlkZXJze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiAgbGVmdDogNjUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB6LWluZGV4OiAxMjtcclxufVxyXG4jaW1nVGFwOmNoZWNrZWQgfiAuc2xpZGVyc3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zbGlkZXJzIC50YXB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW46IDAgM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2xpZGVycyAudGFwOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbn1cclxuLnNsaWRlcnMgLnRhcDpiZWZvcmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogLTEwMCU7XHJcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsI2Y2YjMyMyAwJSwgI2YyM2IyNiA3NCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3RhcC0xOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTE6YmVmb3JlLFxyXG4jdGFwLTI6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMjpiZWZvcmUsXHJcbiN0YXAtMzpjaGVja2VkIH4gLnNsaWRlcnMgLnRhcC0zOmJlZm9yZSxcclxuI3RhcC00OmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTQ6YmVmb3Jle1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnN1Ym1pdC1idG5cclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cdHdpZHRoOiAzMCU7XHJcblx0cGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG5cdC8vYmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcclxuLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHhcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2Fuczo0MDAsNTAwLDYwMCw3MDAsODAwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDYwNXB4O1xuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxuXG4uYmxvZy1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSgyNTIsIDU2LCA1NiwgMC4zKTtcbn1cblxuLmlubmVyLXBhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IHtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xufVxuXG4uaW5uZXItcGFydCAuaW1nIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAxNXB4IHJnYmEoMjUyLCA1NiwgNTYsIDAuMSk7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWcge1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogODUwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIDAuMnMgZWFzZS1pbjtcbn1cblxuLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMSxcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0yLFxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTMsXG4jdGFwLTQ6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctNCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMzVweDtcbiAgd2lkdGg6IDUzMHB4O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC42cztcbn1cblxuI2ltZ1RhcDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTEsXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTIsXG4jdGFwLTM6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTMsXG4jdGFwLTQ6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTQge1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICB6LWluZGV4OiAxMDA7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5jb250ZW50IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM3Yjc5OTI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzBkMDkyNTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNvbnRlbnQgLnRleHQge1xuICBjb2xvcjogIzRlNGE2NztcbiAgZm9udC1zaXplOiAxOXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmEge1xuICBjb2xvcjogIzRlNGE2Nztcbn1cblxuLmNvbnRlbnQgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmMGU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbn1cblxuLmNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xufVxuXG4uc2xpZGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNXB4O1xuICBsZWZ0OiA2NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTI7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5zbGlkZXJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlcnMgLnRhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVycyAudGFwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbn1cblxuLnNsaWRlcnMgLnRhcDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogLTEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhcC0xOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTE6YmVmb3JlLFxuI3RhcC0yOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTI6YmVmb3JlLFxuI3RhcC0zOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTM6YmVmb3JlLFxuI3RhcC00OmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTQ6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display',
          templateUrl: './display.component.html',
          styleUrls: ['./display.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/distriform/distriform.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/distriform/distriform.component.ts ***!
    \****************************************************/

  /*! exports provided: DistriformComponent */

  /***/
  function srcAppDistriformDistriformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistriformComponent", function () {
      return DistriformComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DistriformComponent = /*#__PURE__*/function () {
      function DistriformComponent(member, loc) {
        _classCallCheck(this, DistriformComponent);

        this.member = member;
        this.loc = loc;
        this.Medicines = [];
        this.i = 50;
      }

      _createClass(DistriformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkCheckBoxValue",
        value: function checkCheckBoxValue(event) {
          if (event.target.checked) {
            console.log(event.target.value);
            this.Medicines.push(event.target.value);
            console.log(this.Medicines);
          }
        } // adddistributor(formData:NgForm){
        //   console.log(formData)
        //    this.member.addDistributor(formData.value,this.Medicines)
        //    formData.resetForm()
        //    swal({
        //     title: "Distributor Registered Successfully",
        //     // text: "Hospital registered successfully",
        //     icon: "success",
        //     timer:6000
        //   });
        //  setTimeout(
        //    function(){
        //      location.reload();
        //    },4000
        //  )
        //   }

      }, {
        key: "adddistributor",
        value: function adddistributor(formData) {
          console.log(formData);
          this.member.addDistributor(formData.value, this.Medicines);
          formData.resetForm();
          SweetAlert__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Distributor Registered Successfully",
            //  text: "Hospital registered successfully",
            icon: "success"
          });
          setTimeout(function () {
            location.reload();
          }, 4000);
        }
      }]);

      return DistriformComponent;
    }();

    DistriformComponent.ɵfac = function DistriformComponent_Factory(t) {
      return new (t || DistriformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    DistriformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DistriformComponent,
      selectors: [["app-distriform"]],
      decls: 90,
      vars: 0,
      consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://codepen.io/gymratpacks/pen/VKzBEp#0"], ["href", "https://fonts.googleapis.com/css?family=Nunito:400,300", "rel", "stylesheet", "type", "text/css"], [1, "row"], [1, "col-md-12"], ["ngNativeValidate", "", 3, "ngSubmit"], ["memberObject", "ngForm"], [1, "number"], ["for", "name"], ["required", "", "minlength", "6", "ngModel", "", "type", "text", "id", "name", "name", "Name"], ["Name", "ngModel"], ["for", "email"], ["required", "", "type", "text", "ngModel", "", "id", "mail", "name", "City"], ["City", "ngModel"], ["required", "", "id", "bio", "ngModel", "", "name", "Address"], ["Address", "ngModel"], ["type", "checkbox", "id", "development", "value", "Favipiravir-Tablets", "name", "user_interest", 3, "change"], ["for", "development", 1, "light"], ["type", "checkbox", "id", "design", "value", "Azithromycin", "name", "user_interest", 3, "change"], ["for", "design", 1, "light"], ["type", "checkbox", "id", "business", "value", "Paracetamol", "name", "user_interest", 3, "change"], ["for", "business", 1, "light"], ["type", "checkbox", "id", "develop", "value", "Zinc-Tablets", "name", "user_interes", 3, "change"], ["type", "checkbox", "id", "desig", "value", "Vitamin-C", "name", "user_interes", 3, "change"], ["type", "checkbox", "id", "busines", "value", "Remdesivir", "name", "user_interst", 3, "change"], ["type", "checkbox", "id", "develo", "value", "Doxycycline-Capsule", "name", "user_intere", 3, "change"], ["type", "checkbox", "id", "desi", "value", "Ivermectin-Tablets", "name", "user_intere", 3, "change"], ["required", "", "type", "number", "ngModel", "", "id", "mailwe", "name", "MinStock"], ["MinStock", "ngModel"], ["required", "", "type", "email", "ngModel", "", "id", "mail", "name", "Email"], ["Email", "ngModel"], ["for", "bio"], ["required", "", "minlength", "10", "pattern", "[0-9]{10}", "ngModel", "", "type", "tel", "id", "Contact", "ngModel", "", "name", "Contact", "autocomplete", "off"], ["Contact", "ngModel", "Contact", "ngModel"], ["required", "", "minlength", "10", "pattern", "[0-9]{10}", "ngModel", "", "type", "tel", "id", "ContactTwo", "ngModel", "", "name", "ContactTwo", "autocomplete", "off"], ["ContactTwo", "ngModel", "ContactTwo", "ngModel"], ["type", "submit"]],
      template: function DistriformComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function DistriformComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.adddistributor(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Register as Distributor ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Firm Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Medicines Available:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_35_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Favipiravir Tablets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_38_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Azithromycin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_41_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Paracetamol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_45_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Zinc Tablets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_48_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Vitamin C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_51_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Remdesivir");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_55_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Doxycycline Capsule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DistriformComponent_Template_input_change_58_listener($event) {
            return ctx.checkCheckBoxValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ivermectin Tablets");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Estimated Minimum Stock of Medicines:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "input", 28, 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Contact Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Contact Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Other Contact Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"]],
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  padding: 0%;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\nform[_ngcontent-%COMP%] {\n  min-width: 800px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: floralwhite;\n  border-radius: 8px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  font-family: \"Times New Roman\", Times, serif;\n  text-align: center;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 30px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 15px;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 6px;\n  height: 32px;\n  border-radius: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 25px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  font-family: \"Times New Roman\", Times, serif;\n  width: 100%;\n  border: 1px solid linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n  margin-bottom: 10px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  border: none;\n  max-width: 900px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 10px;\n  font-weight: 600;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  padding-right: 15px;\n}\n\nlabel.light[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: inline-block;\n}\n\n.number[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  color: #fff;\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  font-size: 0.8em;\n  margin-right: 4px;\n  line-height: 30px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 100%;\n}\n\n@media screen and (min-width: 480px) {\n  form[_ngcontent-%COMP%] {\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlzdHJpZm9ybS9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxkaXN0cmlmb3JtXFxkaXN0cmlmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kaXN0cmlmb3JtL2Rpc3RyaWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0VBQ0EsNERBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFOzs7Ozs7Ozs7Ozs7RUFZRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUNDSjs7QURFRTs7RUFHRSxxQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0U7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtFQUNBLHlCQUFBO0VBQ0EsbURBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVFO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NOOztBRENFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURDRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNFQUFBO0FDRUo7O0FEQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ0VKOztBRENFO0VBQ0UsNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQ0VKOztBRENFO0VBRUU7SUFDRSxnQkFBQTtFQ0NKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9kaXN0cmlmb3JtL2Rpc3RyaWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICB9XHJcbiAgXHJcbiAgZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBmbG9yYWx3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gICAgY29sb3I6ICMzYzQ3NGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4wMykgaW5zZXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgLy8gbWFyZ2luOiAwIDRweCA4cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE5cHggMzlweCAxOHB4IDM5cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIGluc2V0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiKDU3LCAxOTQsIDU3KTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgbGFiZWwubGlnaHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLm51bWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgXHJcbiAgICBmb3JtIHtcclxuICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgIH1cclxuICBcclxuICB9XHJcbiAgIiwiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIHBhZGRpbmc6IDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbmZvcm0ge1xuICBtaW4td2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiBmbG9yYWx3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMCAwIDMwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1kYXRldGltZV0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPXVybF0sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWVlZjtcbiAgY29sb3I6ICMzYzQ3NGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKSBpbnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuaW5wdXRbdHlwZT1yYWRpb10sXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG5zZWxlY3Qge1xuICBwYWRkaW5nOiA2cHg7XG4gIGhlaWdodDogMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG5idXR0b24ge1xuICBwYWRkaW5nOiAxOXB4IDM5cHggMThweCAzOXB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAzcHg7XG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSBpbnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzljMjM5O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmZpZWxkc2V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG5sZWdlbmQge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWY7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxubGFiZWwubGlnaHQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5udW1iZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gIGZvcm0ge1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DistriformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-distriform',
          templateUrl: './distriform.component.html',
          styleUrls: ['./distriform.component.scss']
        }]
      }], function () {
        return [{
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/donatedisplay/donatedisplay.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/donatedisplay/donatedisplay.component.ts ***!
    \**********************************************************/

  /*! exports provided: DonatedisplayComponent */

  /***/
  function srcAppDonatedisplayDonatedisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonatedisplayComponent", function () {
      return DonatedisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");

    var DonatedisplayComponent = /*#__PURE__*/function () {
      function DonatedisplayComponent(as, loc, route, member) {
        _classCallCheck(this, DonatedisplayComponent);

        this.as = as;
        this.loc = loc;
        this.route = route;
        this.member = member;
        this.details = {
          Name: "",
          Address: "",
          Contact: NaN,
          ContactTwo: NaN,
          Email: ""
        };
      }

      _createClass(DonatedisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['id']); // console.log(res);

            _this2.id = res['id'];

            _this2.member.getdonateplasmabyId(_this2.id).subscribe(function (res) {
              console.log(res);
              _this2.details = res;
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }, {
        key: "back",
        value: function back() {
          this.loc.back();
        }
      }]);

      return DonatedisplayComponent;
    }();

    DonatedisplayComponent.ɵfac = function DonatedisplayComponent_Factory(t) {
      return new (t || DonatedisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]));
    };

    DonatedisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonatedisplayComponent,
      selectors: [["app-donatedisplay"]],
      decls: 56,
      vars: 8,
      consts: [["lang", "en", "dir", "ltr"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "blog-card"], ["type", "radio", "name", "select", "id", "tap-1", "checked", ""], ["type", "radio", "name", "select", "id", "tap-2"], ["type", "radio", "name", "select", "id", "tap-3"], ["type", "checkbox", "id", "imgTap"], [1, "sliders"], ["for", "tap-1", 1, "tap", "tap-1"], ["for", "tap-2", 1, "tap", "tap-2"], ["for", "tap-3", 1, "tap", "tap-3"], [1, "inner-part"], ["for", "imgTap", 1, "img"], ["src", "/assets/plasma.jpeg", 1, "img-1"], [1, "content", "content-1"], [1, "title"], [1, "text"], [1, "fa", "fa-map-marker", 2, "font-size", "36px"], ["src", "/assets/plasma.jpeg", 1, "img-2"], [1, "content", "content-2"], ["tyle", "font-size:48px", 1, "fa", "fa-phone"], ["src", "/assets/plasma.jpeg", 1, "img-3"], [1, "content", "content-3"], ["tyle", "font-size:48px", 1, "fa", "fa-envelope"], ["target", "_blank", 3, "href"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function DonatedisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonatedisplayComponent_Template_button_click_54_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.ContactTwo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.details.Email, "?subject=To donate plasma in your hospital", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Email);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 605px;\n  font-family: \"Fira Sans\", sans-serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\na[_ngcontent-%COMP%] {\n  color: #4e4a67;\n}\n.blog-card[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 370px;\n  width: 95%;\n  max-width: 850px;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  border-radius: 25px;\n  background: white;\n  box-shadow: 0px 10px 50px rgba(252, 56, 56, 0.3);\n}\n.inner-part[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  height: 360px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 25px;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%] {\n  padding: 0;\n  transition: 0.1s ease-in;\n}\n.inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 260px;\n  width: 260px;\n  flex-shrink: 0;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 2px 3px 15px rgba(252, 56, 56, 0.1);\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 370px;\n  width: 850px;\n  z-index: 99;\n  margin-top: 10px;\n  transition: 0.3s 0.2s ease-in;\n}\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  opacity: 0;\n  transition: 0.6s;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-3[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0 20px 0 35px;\n  width: 530px;\n  margin-left: 50px;\n  opacity: 0;\n  transition: 0.6s;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-3[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin-left: 0px;\n  z-index: 100;\n  transition-delay: 0.3s;\n}\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #7b7992;\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #0d0925;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #4e4a67;\n  font-size: 19px;\n  margin-bottom: 30px;\n  line-height: 1.5em;\n  text-align: justify;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 15px 20px;\n  border: none;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #fff0e6;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #fd3535;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.sliders[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  left: 65%;\n  transform: translateX(-50%);\n  z-index: 12;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%] {\n  display: none;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  width: 50px;\n  background: #d9d9d9;\n  border-radius: 5px;\n  display: inline-flex;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:hover {\n  background: #cccccc;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: -100%;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  border-radius: 10px;\n  transform: scaleX(0);\n  transition: transform 0.6s;\n  transform-origin: left;\n}\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-1[_ngcontent-%COMP%]:before, #tap-2[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-2[_ngcontent-%COMP%]:before, #tap-3[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-3[_ngcontent-%COMP%]:before {\n  transform: scaleX(1);\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 300;\n  font-size: 20px;\n  width: 30%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 400px;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9uYXRlZGlzcGxheS9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxkb25hdGVkaXNwbGF5XFxkb25hdGVkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25hdGVkaXNwbGF5L2RvbmF0ZWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFDUjtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNDRjtBRENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSw0REFBQTtBQ0VGO0FEQUE7RUFDRSxjQUFBO0FDR0Y7QUREQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7QUNHRjtBRERBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDSUY7QURGQTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQ0tGO0FESEE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUNNRjtBREpBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ09GO0FETEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDUUY7QUROQTs7O0VBR0UsVUFBQTtFQUNBLHNCQUFBO0FDU0Y7QURQQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDVUY7QURSQTtFQUNFLGFBQUE7QUNXRjtBRFRBOzs7RUFHRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNZRjtBRFZBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ2FGO0FEWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNjRjtBRFpBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNlRjtBRGJBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLCtEQUFBO0FDZUY7QURiQTtFQUVJLCtEQUFBO0FDZUo7QURiQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNnQkY7QURkQTtFQUNFLGFBQUE7QUNpQkY7QURmQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ2tCRjtBRGhCQTtFQUNFLG1CQUFBO0FDbUJGO0FEakJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLCtEQUFBO0VBRUEsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNrQkY7QURoQkE7O0VBRUUsYUFBQTtBQ21CRjtBRGpCQTs7O0VBR0Usb0JBQUE7RUFDQSxXQUFBO0FDb0JGO0FEaEJBO0VBRUUsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQyxpQkFBQTtFQUNBLCtEQUFBO0VBR0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNnQkoiLCJmaWxlIjoic3JjL2FwcC9kb25hdGVkaXNwbGF5L2RvbmF0ZWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMCw2MDAsNzAwLDgwMFwiKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNjA1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxufVxyXG5he1xyXG4gIGNvbG9yOiM0ZTRhNjc7XHJcbn1cclxuLmJsb2ctY2FyZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1heC13aWR0aDogODUwcHg7XHJcbiAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IHJnYmEoMjUyLDU2LDU2LC4zKTtcclxufVxyXG4uaW5uZXItcGFydHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRyYW5zaXRpb246IC4xcyBlYXNlLWluO1xyXG59XHJcbi5pbm5lci1wYXJ0IC5pbWd7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMTVweCByZ2JhKDI1Miw1Niw1NiwuMSk7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZ3tcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC4zcyAuMnMgZWFzZS1pbjtcclxufVxyXG4uaW1nIGltZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjZzO1xyXG59XHJcbiN0YXAtMTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0xLFxyXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMixcclxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTN7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAuMnM7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMzVweDtcclxuICB3aWR0aDogNTMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAuNnM7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnR7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTEsXHJcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMixcclxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0ze1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG59XHJcbi5jb250ZW50IHNwYW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM3Yjc5OTI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcbi5jb250ZW50IC50aXRsZXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBkMDkyNTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb250ZW50IC50ZXh0e1xyXG4gIGNvbG9yOiAjNGU0YTY3O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5jb250ZW50IGJ1dHRvbntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmMGU2O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG59XHJcbi5jb250ZW50IGJ1dHRvbjpob3ZlcntcclxuICAgIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG59XHJcbi5zbGlkZXJze1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiAgbGVmdDogNjUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICB6LWluZGV4OiAxMjtcclxufVxyXG4jaW1nVGFwOmNoZWNrZWQgfiAuc2xpZGVyc3tcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5zbGlkZXJzIC50YXB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBtYXJnaW46IDAgM3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uc2xpZGVycyAudGFwOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbn1cclxuLnNsaWRlcnMgLnRhcDpiZWZvcmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogLTEwMCU7XHJcbiAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG4vLyAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsI2Y2YjMyMyAwJSwgI2YyM2IyNiA3NCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC42cztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG59XHJcbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3RhcC0xOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTE6YmVmb3JlLFxyXG4jdGFwLTI6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMjpiZWZvcmUsXHJcbiN0YXAtMzpjaGVja2VkIH4gLnNsaWRlcnMgLnRhcC0zOmJlZm9yZXtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5zdWJtaXQtYnRuXHJcbntcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHR3aWR0aDogMzAlO1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxuXHQvL2JhY2tncm91bmQtY29sb3I6ICMyYTJhNzI7XHJcbi8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4XHJcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMCw2MDAsNzAwLDgwMFwiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MDVweDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCIsIHNhbnMtc2VyaWY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNGU0YTY3O1xufVxuXG4uYmxvZy1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSgyNTIsIDU2LCA1NiwgMC4zKTtcbn1cblxuLmlubmVyLXBhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IHtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xufVxuXG4uaW5uZXItcGFydCAuaW1nIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAxNXB4IHJnYmEoMjUyLCA1NiwgNTYsIDAuMSk7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWcge1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogODUwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIDAuMnMgZWFzZS1pbjtcbn1cblxuLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMSxcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0yLFxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTMge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDM1cHg7XG4gIHdpZHRoOiA1MzBweDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNnM7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhcC0xOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0xLFxuI3RhcC0yOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0yLFxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0zIHtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgei1pbmRleDogMTAwO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4uY29udGVudCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjN2I3OTkyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMwZDA5MjU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW50IC50ZXh0IHtcbiAgY29sb3I6ICM0ZTRhNjc7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29udGVudCBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTVweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmYwZTY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkMzUzNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xufVxuXG4uY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XG59XG5cbi5zbGlkZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDY1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiAxMjtcbn1cblxuI2ltZ1RhcDpjaGVja2VkIH4gLnNsaWRlcnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVycyAudGFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IDAgM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXJzIC50YXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xufVxuXG4uc2xpZGVycyAudGFwOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAtMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dLFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGFwLTE6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMTpiZWZvcmUsXG4jdGFwLTI6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMjpiZWZvcmUsXG4jdGFwLTM6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMzpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonatedisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donatedisplay',
          templateUrl: './donatedisplay.component.html',
          styleUrls: ['./donatedisplay.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/donorlist/donorlist.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/donorlist/donorlist.component.ts ***!
    \**************************************************/

  /*! exports provided: DonorlistComponent */

  /***/
  function srcAppDonorlistDonorlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonorlistComponent", function () {
      return DonorlistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DonorlistComponent_li_48_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonorlistComponent_li_48_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var indexOfelement_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick(indexOfelement_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexOfelement_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.member.donateplasma[indexOfelement_r2].Name, ", ", ctx_r0.member.donateplasma[indexOfelement_r2].City, "");
      }
    }

    var DonorlistComponent = /*#__PURE__*/function () {
      function DonorlistComponent(router, as, member) {
        _classCallCheck(this, DonorlistComponent);

        this.router = router;
        this.as = as;
        this.member = member;
      }

      _createClass(DonorlistComponent, [{
        key: "search",
        value: function search() {
          if (this.city == "All Cities" || this.city == "") {
            this.member.getdonateplasma();
          } else {
            this.member.getdonateplasmacities(this.city);
          }
        }
      }, {
        key: "onClick",
        value: function onClick(indexOfelement) {
          for (this.i = 0; this.i <= indexOfelement; this.i++) {
            console.log(this.member.donateplasma[this.i].id);
            var url = '/donatedisplay/' + this.member.donateplasma[this.i].id;
            this.router.navigateByUrl(url);
          }
        }
      }, {
        key: "clicke",
        value: function clicke() {
          this.router.navigateByUrl('/ab');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.member.getdonateplasma();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return DonorlistComponent;
    }();

    DonorlistComponent.ɵfac = function DonorlistComponent_Factory(t) {
      return new (t || DonorlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]));
    };

    DonorlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DonorlistComponent,
      selectors: [["app-donorlist"]],
      decls: 49,
      vars: 2,
      consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"], [1, "navbars"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], ["ngNativeValidate", ""], ["placeholder", "Enter Your City", "type", "text", "list", "city", "name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["id", "city"], ["value", "All Cities"], ["value", "Udaipur"], ["value", "Ajmer"], ["value", "Jaipur"], ["value", "Bhilwara"], ["value", "Jaisalmer"], ["value", "Jodhpur"], ["value", "Chittorgarh"], ["value", "Bikaner"], ["value", "Kota"], ["type", "submit", 1, "buttonk", 3, "click"], [1, "fl_inst2", 3, "click"], [1, "icon"], [1, "bi", "bi-check-circle-fill"], [1, "gradient-list"], [3, "click", 4, "ngFor", "ngForOf"]],
      template: function DonorlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonorlistComponent_Template_a_click_21_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hospitals where you can Donate Plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DonorlistComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "datalist", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonorlistComponent_Template_button_click_39_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DonorlistComponent_Template_a_click_41_listener() {
            return ctx.clicke();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Know about Donor Eligibility");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ol", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, DonorlistComponent_li_48_Template, 2, 2, "li", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.member.donateplasma);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);\n\n\n\n\n\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n}\nheader[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  width: 100%;\n  height: 40px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: black;\n  align-content: center;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\nmain[_ngcontent-%COMP%] {\n  padding: calc(var(--heading-height) + 1.5vw) 4em 0;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  color: #050505;\n  font-family: \"Raleway\", sans-serif;\n}\nmain[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 1rem;\n}\n.icon[_ngcontent-%COMP%] {\n  color: black;\n  margin-right: 6px;\n  display: inline;\n}\n.fl_inst2[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  margin-left: 371px;\n  margin-right: auto;\n  color: black;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  border-radius: 7px;\n  position: relative;\n  display: inline-block;\n  height: 3rem;\n  width: 606px;\n  text-align: center;\n  font-size: 25px;\n  line-height: 50px;\n  vertical-align: middle;\n  background: white;\n  overflow: hidden;\n  cursor: pointer;\n}\n.fl_inst2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n.fl_inst2[_ngcontent-%COMP%]:hover {\n  transform: rotateX(360deg);\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%] {\n  counter-reset: gradient-counter;\n  list-style: none;\n  margin: 1.75rem 0;\n  padding-left: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  counter-increment: gradient-counter;\n  margin-top: 1rem;\n  min-height: 3rem;\n  padding: 1rem 1rem 1rem 3rem;\n  position: relative;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, ol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);\n  border-radius: 1rem 1rem 0 1rem;\n  content: \"\";\n  height: 3rem;\n  left: -1rem;\n  overflow: hidden;\n  position: absolute;\n  top: -1rem;\n  width: 3rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  align-items: flex-end;\n  content: counter(gradient-counter);\n  color: #1d1f20;\n  display: flex;\n  font: 900 1.5em/1 \"Montserrat\";\n  justify-content: flex-end;\n  padding: 0.125em 0.25em;\n  z-index: 1;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.navbars[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 300px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n.buttonk[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 20px;\n  margin-left: 10px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n.buttonk[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ub3JsaXN0L0U6XFxOZXcgZm9sZGVyXFxQaGFybWFjeU1hbmFnZW1lbnQvc3JjXFxhcHBcXGRvbm9ybGlzdFxcZG9ub3JsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kb25vcmxpc3QvZG9ub3JsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSw2RkFBQTtBQURSLFVBQUE7QUFLQSxjQUFBO0FBQ0EsV0FBQTtBQVFBLFdBQUE7QUFDQSxlQUFBO0FBQ0E7RUFDRSw4RkFBQTtBQ1RGO0FEV0E7RUFDSSw0REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUko7QURVQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0FDUEo7QURTQTtFQUNDLGtEQUFBO0FDTkQ7QURTQSxVQUFBO0FBQ0E7OztFQUdFLHNCQUFBO0FDTkY7QURTQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtBQ05GO0FEU0E7RUFDRSxlQUFBO0FDTkY7QURRQTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0FDTEY7QURRQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEY7QURPQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNKSjtBRE1BO0VBQ0ksZ0JBQUE7RUFDQSw4RkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFFQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FEVUU7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFNFO0VBSUUsMEJBQUE7RUFDRCw0REFBQTtBQ1BIO0FEVUE7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ1BGO0FEUUU7RUFDRSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEZBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDTko7QURPSTtFQUVFLDZEQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNOTjtBRFFJO0VBQ0UscUJBQUE7RUFFQSxrQ0FBQTtFQUNBLGNBaklFO0VBa0lGLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDUE47QURXTTtFQUNFLDREQUFBO0FDVFI7QURRTTtFQUNFLDREQUFBO0FDTlI7QURLTTtFQUNFLDREQUFBO0FDSFI7QURFTTtFQUNFLDREQUFBO0FDQVI7QURETTtFQUNFLDREQUFBO0FDR1I7QURDUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ0NaO0FESFE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNLWjtBRFBRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDU1o7QURYUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ2FaO0FEZlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNpQlo7QURiTTtFQUNFLDREQUFBO0FDZVI7QURoQk07RUFDRSw0REFBQTtBQ2tCUjtBRG5CTTtFQUNFLDREQUFBO0FDcUJSO0FEdEJNO0VBQ0UsNERBQUE7QUN3QlI7QUR6Qk07RUFDRSw0REFBQTtBQzJCUjtBRHZCUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ3lCWjtBRDNCUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQzZCWjtBRC9CUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ2lDWjtBRG5DUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ3FDWjtBRHZDUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ3lDWjtBRHRDSTtFQUNFLGdCQUFBO0FDd0NOO0FEM0JBO0VBQ0UsZ0JBQUE7RUFDQSw0REFBQTtFQUNBLGtCQUFBO0FDOEJGO0FEM0JBLDRCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUM4QkY7QUQzQkEsMkJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQzhCRjtBRDNCQSxvQkFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUFzQixrREFBQTtFQUN0QixTQUFBO0VBQVcsa0RBQUE7QUNnQ2I7QUQ3QkEsd0RBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDZ0NGO0FEN0JBLHlDQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDZ0NGO0FEOUJBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDaUNGO0FEL0JBLDhCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNrQ0Y7QUQvQkEsMkRBQUE7QUFDQTtFQUNFLHNCQUFBO0FDa0NGO0FEOUJBLG9DQUFBO0FBQ0E7RUFDRSxjQUFBO0FDaUNGO0FENUJBOzs7Ozs7Ozs7Ozs7RUFZRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7QUMrQkY7QUQ1QkE7RUFDQSxnQkFBQTtFQUVFLFdBQUE7RUFDQSw0REFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDRixhQUFBO0VBQ0Esa0JBQUE7RUFDRSxtREFBQTtBQzhCRjtBRDVCQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUMrQkoiLCJmaWxlIjoic3JjL2FwcC9kb25vcmxpc3QvZG9ub3JsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9OVFMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJhbGV3YXk6NDAwLDQwMGksNzAwLDcwMGkpO1xyXG5cclxuXHJcblxyXG4vKiBWQVJJQUJMRVMgKi9cclxuLyogQ29sb3JzICovXHJcbiRibGFjazogIzFkMWYyMDtcclxuJGJsdWU6ICM4M2U0ZTI7XHJcbiRncmVlbjogI2EyZWQ1NjtcclxuJHllbGxvdzogI2ZkZGMzMjtcclxuJHdoaXRlOiAjZmFmYWZhO1xyXG5cclxuXHJcbi8qIEVYVEVORCAqL1xyXG4vKiBib3gtc2hhZG93ICovXHJcbiVib3hzaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLDAsMCwwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwwLDAsMC4wNSk7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxubWFpbiB7XHJcblx0cGFkZGluZzogY2FsYyh2YXIoLS1oZWFkaW5nLWhlaWdodCkgKyAxLjV2dykgNGVtIDA7XHJcbn1cclxuXHJcbi8qIFNUWUxFICovXHJcbiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gIGNvbG9yOiMwNTA1MDU7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmZsX2luc3Qye1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLDAsMCwwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwwLDAsMC4wNSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMzcxcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOjYwNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIFxyXG4gIC5mbF9pbnN0MiBzcGFuIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzfVxyXG4gIFxyXG4gIC5mbF9pbnN0Mjpob3ZlciB7XHJcbiAgICAvLyAgIC9Ib3ZlckVmZmVjdC9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcclxuICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSlcclxuICB9XHJcblxyXG5vbC5ncmFkaWVudC1saXN0IHtcclxuICBjb3VudGVyLXJlc2V0OiBncmFkaWVudC1jb3VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAxLjc1cmVtIDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gID4gbGkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsMCwwLDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LDAsMCwwLjA1KTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBncmFkaWVudC1jb3VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkYmx1ZSAwJSwkZ3JlZW4gMTAwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDFyZW07XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgIGxlZnQ6IC0xcmVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTFyZW07XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBAZXh0ZW5kICVib3hzaGFkb3c7XHJcbiAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoZ3JhZGllbnQtY291bnRlcik7XHJcbiAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZvbnQ6IDkwMCAxLjVlbS8xICdNb250c2VycmF0JztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW07XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1IHtcclxuICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgQGZvciAkaSBmcm9tIDYgdGhyb3VnaCAxMCB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEwbisjeyRpfSk6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAZm9yICRpIGZyb20gNiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAmOm50aC1jaGlsZCgxMG4rI3skaX0pOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICArIGxpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gb2wuZ3JhZGllbnQtbGlzdHtcclxuLy8gICBsaTpob3ZlcntcclxuLy8gICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbi8vICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi5uYXZiYXJzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbi5uYXZiYXJzIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogcmdiKDE0LCAxLCAxKTtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxufVxyXG5cclxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXHJcbi5uYXZiYXJzIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmRyb3BidG46aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gXHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbmlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XHJcbiAgY29sb3I6ICMzYzQ3NGU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLDAuMDMpIGluc2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5idXR0b25rIHtcclxubWFyZ2luLXRvcDogMTBweDtcclxuICBcclxuICBjb2xvcjogI0ZGRjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogODVweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuYm9yZGVyOiBibGFjaztcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSBpbnNldDtcclxufVxyXG4uYnV0dG9uazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiKDU3LCAxOTQsIDU3KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSIsIi8qIEZPTlRTICovXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8UmFsZXdheTo0MDAsNDAwaSw3MDAsNzAwaSk7XG4vKiBWQVJJQUJMRVMgKi9cbi8qIENvbG9ycyAqL1xuLyogRVhURU5EICovXG4vKiBib3gtc2hhZG93ICovXG5vbC5ncmFkaWVudC1saXN0ID4gbGk6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwgMCwgMCwgMC4wNSk7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWhlYWRpbmctaGVpZ2h0KSArIDEuNXZ3KSA0ZW0gMDtcbn1cblxuLyogU1RZTEUgKi9cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xuICBjb2xvcjogIzA1MDUwNTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uaWNvbiB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLmZsX2luc3QyIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LCAwLCAwLCAwLjA1KTtcbiAgbWFyZ2luLWxlZnQ6IDM3MXB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogNjA2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZsX2luc3QyIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZsX2luc3QyOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxuXG5vbC5ncmFkaWVudC1saXN0IHtcbiAgY291bnRlci1yZXNldDogZ3JhZGllbnQtY291bnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxLjc1cmVtIDA7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsIDAsIDAsIDAuMDUpO1xuICBjb3VudGVyLWluY3JlbWVudDogZ3JhZGllbnQtY291bnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWluLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUsIG9sLmdyYWRpZW50LWxpc3QgPiBsaTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODNlNGUyIDAlLCAjYTJlZDU2IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAxcmVtO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDNyZW07XG4gIGxlZnQ6IC0xcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFyZW07XG4gIHdpZHRoOiAzcmVtO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoZ3JhZGllbnQtY291bnRlcik7XG4gIGNvbG9yOiAjMWQxZjIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250OiA5MDAgMS41ZW0vMSBcIk1vbnRzZXJyYXRcIjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW07XG4gIHotaW5kZXg6IDE7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisyKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbiszKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis0KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis1KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMik6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzMpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis0KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzYpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzcpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzgpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzkpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzEwKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis2KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNyk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzgpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis5KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMTApOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5uYXZiYXJzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXG4ubmF2YmFycyBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwZTAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cbi5kcm9wZG93biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzBlMDEwMTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhcnMgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1kYXRldGltZV0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPXVybF0sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XG4gIGNvbG9yOiAjM2M0NzRlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMykgaW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uYnV0dG9uayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xufVxuXG4uYnV0dG9uazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzM5YzIzOTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonorlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-donorlist',
          templateUrl: './donorlist.component.html',
          styleUrls: ['./donorlist.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/eligibility/eligibility.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/eligibility/eligibility.component.ts ***!
    \******************************************************/

  /*! exports provided: EligibilityComponent */

  /***/
  function srcAppEligibilityEligibilityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EligibilityComponent", function () {
      return EligibilityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var EligibilityComponent = /*#__PURE__*/function () {
      function EligibilityComponent(loc) {
        _classCallCheck(this, EligibilityComponent);

        this.loc = loc;
      }

      _createClass(EligibilityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "back",
        value: function back() {
          this.loc.back();
        }
      }]);

      return EligibilityComponent;
    }();

    EligibilityComponent.ɵfac = function EligibilityComponent_Factory(t) {
      return new (t || EligibilityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]));
    };

    EligibilityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EligibilityComponent,
      selectors: [["app-eligibility"]],
      decls: 49,
      vars: 0,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"], [1, "service-grid", "pb-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-xl-12", "text-center", "mb-4"], [1, "service-title"], [1, "col-lg-4", "col-md-6", "text-center", "mb-3"], [1, "service-wrap"], [1, "service-icon"], [1, "bi", "bi-x-circle"], [1, "bi", "bi-person-plus-fill"], [1, "bi", "bi-bag-plus"], [1, "bi", "bi-arrow-down-up"], [1, "bi", "bi-segmented-nav"], [1, "bi", "bi-check2-circle"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function EligibilityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Donor ineligible for convalescent Plasma donation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Weight Less than 50 kg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Females who have ever been pregnant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Diabetic on insulation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "B.P. more than 140, diastolic less than 60 or more than 90");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Diabetes or Hypertension with change in medication in last 28 days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancer survivor or Chronic diseased");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EligibilityComponent_Template_button_click_47_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".service-grid[_ngcontent-%COMP%] {\n  background: floralwhite;\n}\n\nh4[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.service-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 45px;\n  display: inline-block;\n  font-weight: 600;\n  line-height: 1;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\n.service-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  width: 60px;\n  height: 2px;\n  background: blue;\n  bottom: -25px;\n  margin: auto;\n  right: 0;\n}\n\n.service-icon[_ngcontent-%COMP%] {\n  position: relative;\n  color: black;\n}\n\n.service-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 190px;\n  margin-bottom: 10px;\n}\n\n.about-info-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 23px;\n  text-transform: capitalize;\n  font-weight: 700;\n  line-height: 0.9;\n}\n\n.about-info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 100px;\n  font-size: 18px;\n  margin-bottom: 26px;\n  position: relative;\n}\n\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.about-info-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  position: relative;\n}\n\n.service-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: black;\n  margin-top: 0px;\n  margin-bottom: 20px;\n  display: inline-block;\n}\n\n.service-wrap[_ngcontent-%COMP%] {\n  border: 1px solid #e6e6e6;\n  padding: 30px 10px;\n  position: relative;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  height: 180px;\n}\n\n.service-wrap[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 2px 10px black;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover:before {\n  background: rgba(0, 0, 0, 0.2901960784);\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0px;\n  content: \"\";\n  top: 0;\n  opacity: 1;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%], .service-wrap[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.service-wrap[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1e2331;\n  margin-bottom: 17px;\n  font-size: 18px;\n  text-transform: capitalize;\n  position: relative;\n}\n\n.service-wrap[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  position: relative;\n  color: #e8bc00;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 300;\n  font-size: 20px;\n  width: 30%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 40px;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWxpZ2liaWxpdHkvRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxcZWxpZ2liaWxpdHlcXGVsaWdpYmlsaXR5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lbGlnaWJpbGl0eS9lbGlnaWJpbGl0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0Q0FBQTtBQ0VKOztBREFJO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNFLGtCQUFBO0FDUU47O0FETkE7RUFDSSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksbUJBQUE7RUFDRSxrQkFBQTtBQ1VOOztBRFJBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQ1dKOztBRFRBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7RUFDQSxhQUFBO0FDWU47O0FEVEE7RUFDTSxrQkFBQTtBQ1lOOztBRFRBO0VBS0ksOEJBQUE7QUNRSjs7QURMQTtFQUNJLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNRSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Usa0JBQUE7QUNTTjs7QURQQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNFLGtCQUFBO0VBQ0YsY0FBQTtBQ1VKOztBRFBBO0VBRUUsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQyxnQkFBQTtFQUdGLGtFQUFBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL2VsaWdpYmlsaXR5L2VsaWdpYmlsaXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2UtZ3JpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBmbG9yYWx3aGl0ZTtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbiAgICAuc2VydmljZS10aXRsZSBoMiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0NXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLnNlcnZpY2UtdGl0bGUgaDI6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xyXG4gICAgYm90dG9tOiAtMjVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbi5zZXJ2aWNlLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5zZXJ2aWNlLXRpdGxlIHAge1xyXG4gICAgcGFkZGluZzogMCAxOTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmFib3V0LWluZm8tdGV4dCBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IC45O1xyXG59XHJcbi5hYm91dC1pbmZvLXRleHQgcCB7XHJcbiAgICBwYWRkaW5nOiAwIDEwMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hYm91dC1jb250ZW50IHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4uYWJvdXQtaW5mby10ZXh0IGEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zZXJ2aWNlLWljb24gaSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5zZXJ2aWNlLXdyYXAge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIHBhZGRpbmc6IDMwcHggMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbiAgICAgIGhlaWdodDogMTgwcHg7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLXdyYXAgcHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VydmljZS13cmFwOmhvdmVyIHtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1hdHRhY2htZW50OiBsb2NhbDtcclxuXHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLXdyYXA6aG92ZXI6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yOTAxOTYwNzg0MzEzNzI2KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHRvcDogMDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zZXJ2aWNlLXdyYXA6aG92ZXIgaDQsLnNlcnZpY2Utd3JhcDpob3ZlciBwe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnNlcnZpY2Utd3JhcCBoNCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMxZTIzMzE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2VydmljZS13cmFwIGEge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNlOGJjMDA7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnRuXHJcbntcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuXHR3aWR0aDogMzAlO1xyXG5cdHBhZGRpbmc6IDEwcHggMzBweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XHJcblx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTcyO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHhcclxufVxyXG4iLCIuc2VydmljZS1ncmlkIHtcbiAgYmFja2dyb3VuZDogZmxvcmFsd2hpdGU7XG59XG5cbmg0IHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbn1cblxuLnNlcnZpY2UtdGl0bGUgaDIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbi5zZXJ2aWNlLXRpdGxlIGgyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgYm90dG9tOiAtMjVweDtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMDtcbn1cblxuLnNlcnZpY2UtaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uc2VydmljZS10aXRsZSBwIHtcbiAgcGFkZGluZzogMCAxOTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmFib3V0LWluZm8tdGV4dCBoMiB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMC45O1xufVxuXG4uYWJvdXQtaW5mby10ZXh0IHAge1xuICBwYWRkaW5nOiAwIDEwMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFib3V0LWNvbnRlbnQgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5hYm91dC1pbmZvLXRleHQgYSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlcnZpY2UtaWNvbiBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VydmljZS13cmFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgcGFkZGluZzogMzBweCAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgaGVpZ2h0OiAxODBweDtcbn1cblxuLnNlcnZpY2Utd3JhcCBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VydmljZS13cmFwOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xufVxuXG4uc2VydmljZS13cmFwOmhvdmVyOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yOTAxOTYwNzg0KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlcnZpY2Utd3JhcDpob3ZlciBoNCwgLnNlcnZpY2Utd3JhcDpob3ZlciBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZXJ2aWNlLXdyYXAgaDQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzFlMjMzMTtcbiAgbWFyZ2luLWJvdHRvbTogMTdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VydmljZS13cmFwIGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNlOGJjMDA7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EligibilityComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-eligibility',
          templateUrl: './eligibility.component.html',
          styleUrls: ['./eligibility.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/homescreen/homescreen.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/homescreen/homescreen.component.ts ***!
    \****************************************************/

  /*! exports provided: HomescreenComponent */

  /***/
  function srcAppHomescreenHomescreenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomescreenComponent", function () {
      return HomescreenComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomescreenComponent = /*#__PURE__*/function () {
      function HomescreenComponent(route) {
        _classCallCheck(this, HomescreenComponent);

        this.route = route;
      }

      _createClass(HomescreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loginuser",
        value: function loginuser() {
          this.route.navigateByUrl('login');
        }
      }, {
        key: "distributor",
        value: function distributor() {
          this.route.navigateByUrl('choice');
        }
      }]);

      return HomescreenComponent;
    }();

    HomescreenComponent.ɵfac = function HomescreenComponent_Factory(t) {
      return new (t || HomescreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomescreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomescreenComponent,
      selectors: [["app-homescreen"]],
      decls: 27,
      vars: 0,
      consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["http-equiv", "X-UA-Compatible", "content", "ie=edge"], [1, "box"], [1, "card"], [1, "imgBx"], ["src", "assets/1.png", "alt", "images", 3, "click"], [1, "details", 3, "click"], ["src", "assets/3.png", "alt", "images", 3, "click"]],
      template: function HomescreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Layered Card Hover");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomescreenComponent_Template_img_click_11_listener() {
            return ctx.loginuser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomescreenComponent_Template_div_click_12_listener() {
            return ctx.loginuser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign in as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomescreenComponent_Template_img_click_20_listener() {
            return ctx.distributor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomescreenComponent_Template_div_click_21_listener() {
            return ctx.distributor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign in as");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Distributors/Hospitals");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 97vh;\n  font-family: sans-serif;\n  background-image: url(/assets/2.png);\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\n.box[_ngcontent-%COMP%] {\n  width: 800px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n  grid-gap: 3px;\n  margin: 0 auto;\n  margin-left: 0px;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 300px;\n  height: 350px;\n  background: #fff;\n  margin: 0 auto;\n  border-radius: 4px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);\n}\n\n.card[_ngcontent-%COMP%]::before, .card[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  background: #fff;\n  transition: 0.5s;\n  z-index: -1;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  bottom: 10px;\n  right: 10px;\n  background: #222;\n  transition: 0.5s;\n  z-index: 1;\n}\n\n.card[_ngcontent-%COMP%]:hover   .imgBx[_ngcontent-%COMP%] {\n  bottom: 80px;\n}\n\n.card[_ngcontent-%COMP%]   .imgBx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  right: 10px;\n  bottom: 10px;\n  height: 60px;\n  text-align: center;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-weight: 600;\n  font-size: 20px;\n  color: black;\n  text-transform: uppercase;\n}\n\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 18px;\n  color: blue;\n  display: block;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXNjcmVlbi9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxob21lc2NyZWVuXFxob21lc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lc2NyZWVuL2hvbWVzY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyREFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDRUo7O0FEQUU7O0VBR0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0MsWUFBQTtFQUNELGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBRTtFQUVBLHlDQUFBO0VBQ0EsZUFBQTtBQ0VGOztBRElFO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNERjs7QURJRTtFQUVFLFlBQUE7QUNGSjs7QURLRTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNGTjs7QURLRTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDRk47O0FES0U7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0ZIOztBREtFO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9ob21lc2NyZWVuL2hvbWVzY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDk3dmg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy8yLnBuZyk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gIH1cclxuICAuYm94e1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xyXG4gICAgZ3JpZC1nYXA6IDNweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgLmNhcmR7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm94LXNoYWRvdzowIDJweCAxMHB4IHJnYmEoMCwwLDAsLjIpO1xyXG4gIH1cclxuICAuY2FyZDo6YmVmb3JlLFxyXG4gIC5jYXJkOjphZnRlclxyXG4gIHtcclxuICAgIGNvbnRlbnQ6XCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIHotaW5kZXg6LTE7XHJcbiAgfVxyXG4gIC5jYXJkOmhvdmVye1xyXG4gIC8vIHRyYW5zZm9ybTogcm90YXRlKDRkZWcpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLDAsMCwuMik7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuLy8gICAuY2FyZDpob3Zlcjo6YWZ0ZXJ7XHJcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xyXG4vLyAgIGJveC1zaGFkb3c6IDAgMnB4IDIwcHggcmdiYSgwLDAsMCwuMik7XHJcbi8vICAgfVxyXG4gIC5jYXJkIC5pbWdCeHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICBcclxuICAuY2FyZDpob3ZlciAuaW1nQnhcclxuICB7XHJcbiAgICBib3R0b206IDgwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuaW1nQnggaW1ne1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZCAuZGV0YWlsc3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICByaWdodDogMTBweDtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jYXJkIC5kZXRhaWxzIGgye1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgY29sb3I6YmxhY2s7XHJcbiAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfSBcclxuXHJcbiAgLmNhcmQgLmRldGFpbHMgaDIgc3BhbntcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogYmx1ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiB9ICIsImJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA5N3ZoO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvMi5wbmcpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5ib3gge1xuICB3aWR0aDogODAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzUwcHgsIDFmcikpO1xuICBncmlkLWdhcDogM3B4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5jYXJkOjpiZWZvcmUsXG4uY2FyZDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDJweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZCAuaW1nQngge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogIzIyMjtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgei1pbmRleDogMTtcbn1cblxuLmNhcmQ6aG92ZXIgLmltZ0J4IHtcbiAgYm90dG9tOiA4MHB4O1xufVxuXG4uY2FyZCAuaW1nQnggaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY2FyZCAuZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jYXJkIC5kZXRhaWxzIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmNhcmQgLmRldGFpbHMgaDIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsdWU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomescreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homescreen',
          templateUrl: './homescreen.component.html',
          styleUrls: ['./homescreen.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hospitalform/hospitalform.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/hospitalform/hospitalform.component.ts ***!
    \********************************************************/

  /*! exports provided: HospitalformComponent */

  /***/
  function srcAppHospitalformHospitalformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HospitalformComponent", function () {
      return HospitalformComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! SweetAlert */
    "./node_modules/SweetAlert/dist/sweetalert.min.js");
    /* harmony import */


    var SweetAlert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(SweetAlert__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var HospitalformComponent = /*#__PURE__*/function () {
      function HospitalformComponent(member) {
        _classCallCheck(this, HospitalformComponent);

        this.member = member;
      }

      _createClass(HospitalformComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addhospital",
        value: function addhospital(formData) {
          console.log(formData);
          this.member.addHospital(formData.value);
          formData.resetForm();
          SweetAlert__WEBPACK_IMPORTED_MODULE_1___default()({
            title: "Hospital Registered Successfully",
            // text: "Hospital registered successfully",
            icon: "success"
          });
        }
      }]);

      return HospitalformComponent;
    }();

    HospitalformComponent.ɵfac = function HospitalformComponent_Factory(t) {
      return new (t || HospitalformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]));
    };

    HospitalformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HospitalformComponent,
      selectors: [["app-hospitalform"]],
      decls: 57,
      vars: 0,
      consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://codepen.io/gymratpacks/pen/VKzBEp#0"], ["href", "https://fonts.googleapis.com/css?family=Nunito:400,300", "rel", "stylesheet", "type", "text/css"], [1, "row"], [1, "col-md-12"], ["ngNativeValidate", "", 3, "ngSubmit"], ["memberObject", "ngForm"], [1, "number"], ["for", "name"], ["required", "", "minlength", "6", "ngModel", "", "type", "text", "id", "name", "name", "Name", "autocomplete", "off"], ["Name", "ngModel"], ["for", "city"], ["required", "", "type", "text", "ngModel", "", "id", "city", "name", "City", "autocomplete", "off"], ["City", "ngModel"], ["for", "email"], ["type", "text", "required", "", "id", "bio", "ngModel", "", "name", "Address", "autocomplete", "off"], ["Address", "ngModel"], ["for", "password"], ["required", "", "type", "number", "id", "password", "ngModel", "", "autocomplete", "off", "name", "NumberOfEstimatedBedsCovid"], ["NumberOfEstimatedBedsCovid", "ngModel"], ["for", "bio"], ["required", "", "type", "email", "id", "mail", "ngModel", "", "name", "Email", "autocomplete", "off"], ["Email", "ngModel"], ["minlength", "10", "pattern", "[0-9]{10}", "required", "", "type", "tel", "id", "contact", "ngModel", "", "name", "Contact", "autocomplete", "off"], ["Contact", "ngModel"], ["minlength", "10", "pattern", "[0-9]{10}", "required", "", "type", "tel", "id", "contacttwo", "ngModel", "", "name", "ContactTwo", "autocomplete", "off"], ["ContactTwo", "ngModel"], ["type", "submit"]],
      template: function HospitalformComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up Form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HospitalformComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.addhospital(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Register Your Hospitals ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Hospital Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "City:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Address:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Number of Beds for COVID patients:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Contact Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 22, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Contact Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 24, 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Other Contact Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 26, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]],
      styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  padding: 0%;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\nform[_ngcontent-%COMP%] {\n  min-width: 800px;\n  margin: 10px auto;\n  padding: 10px 20px;\n  background: floralwhite;\n  border-radius: 8px;\n}\n\nh1[_ngcontent-%COMP%] {\n  margin: 0 0 30px 0;\n  font-family: \"Times New Roman\", Times, serif;\n  text-align: center;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  width: 100%;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 30px;\n  font-family: \"Times New Roman\", Times, serif;\n}\n\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  margin: 0 4px 8px 0;\n}\n\nselect[_ngcontent-%COMP%] {\n  padding: 6px;\n  height: 32px;\n  border-radius: 2px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  padding: 19px 39px 18px 39px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 25px;\n  text-align: center;\n  font-style: normal;\n  border-radius: 5px;\n  font-family: \"Times New Roman\", Times, serif;\n  width: 100%;\n  border: 1px solid linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  border-width: 1px 1px 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n  margin-bottom: 10px;\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n\nfieldset[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  border: none;\n  max-width: 900px;\n}\n\nlegend[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 10px;\n  font-weight: 600;\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n}\n\nlabel.light[_ngcontent-%COMP%] {\n  font-weight: 300;\n  display: inline;\n}\n\n.number[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  color: #fff;\n  height: 30px;\n  width: 30px;\n  display: inline-block;\n  font-size: 0.8em;\n  margin-right: 4px;\n  line-height: 30px;\n  text-align: center;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);\n  border-radius: 100%;\n}\n\n@media screen and (min-width: 480px) {\n  form[_ngcontent-%COMP%] {\n    max-width: 480px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWxmb3JtL0U6XFxOZXcgZm9sZGVyXFxQaGFybWFjeU1hbmFnZW1lbnQvc3JjXFxhcHBcXGhvc3BpdGFsZm9ybVxcaG9zcGl0YWxmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob3NwaXRhbGZvcm0vaG9zcGl0YWxmb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0ksc0JBQUE7QUNDSjs7QURFRTtFQUNFLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLDREQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTs7Ozs7Ozs7Ozs7O0VBWUUsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0FDQ0o7O0FERUU7O0VBRUUsbUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0VBQ0EseUJBQUE7RUFDQSxtREFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0U7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDRU47O0FEQUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0dKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0VBQUE7QUNHSjs7QURBRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0dKOztBREFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUU7RUFDRSw0REFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUU7RUFFRTtJQUNFLGdCQUFBO0VDRUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvc3BpdGFsZm9ybS9ob3NwaXRhbGZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICB9XHJcbiAgXHJcbiAgZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBmbG9yYWx3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgaDEge1xyXG4gICAgbWFyZ2luOiAwIDAgMzBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl0sXHJcbiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXSxcclxuICBpbnB1dFt0eXBlPVwidGVsXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG4gIGlucHV0W3R5cGU9XCJ1cmxcIl0sXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gICAgY29sb3I6ICMzYzQ3NGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwwLDAsMC4wMykgaW5zZXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcclxuICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xyXG4gICAgbWFyZ2luOiAwIDRweCA4cHggMDtcclxuICB9XHJcbiAgXHJcbiAgc2VsZWN0IHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDE5cHggMzlweCAxOHB4IDM5cHg7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjEpIGluc2V0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6cmdiKDU3LCAxOTQsIDU3KTtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBmaWVsZHNldCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICB9XHJcbiAgXHJcbiAgbGVnZW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuICBcclxuICBsYWJlbC5saWdodCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gIH1cclxuICBcclxuICAubnVtYmVyIHtcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICBcclxuICAgIGZvcm0ge1xyXG4gICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICAiLCIqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgcGFkZGluZzogMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cblxuZm9ybSB7XG4gIG1pbi13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9ZGF0ZV0sXG5pbnB1dFt0eXBlPWRhdGV0aW1lXSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT10aW1lXSxcbmlucHV0W3R5cGU9dXJsXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xuICBjb2xvcjogIzNjNDc0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMDMpIGluc2V0O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgbWFyZ2luOiAwIDRweCA4cHggMDtcbn1cblxuc2VsZWN0IHtcbiAgcGFkZGluZzogNnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuYnV0dG9uIHtcbiAgcGFkZGluZzogMTlweCAzOXB4IDE4cHggMzlweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggM3B4O1xuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzM5YzIzOTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5maWVsZHNldCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbn1cblxubGVnZW5kIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1mYW1pbHk6IENhbWJyaWEsIENvY2hpbiwgR2VvcmdpYSwgVGltZXMsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmxhYmVsLmxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubnVtYmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xuICBmb3JtIHtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HospitalformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hospitalform',
          templateUrl: './hospitalform.component.html',
          styleUrls: ['./hospitalform.component.scss']
        }]
      }], function () {
        return [{
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, authService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.authService = authService;
        this.Email = "";
        this.Password = "";
        this.msg = '';
        this.errorMessage = '';
        this.error = {
          name: '',
          message: ''
        };
      }

      _createClass(LoginComponent, [{
        key: "register",
        value: function register() {
          // this.isclicked=false;
          this.router.navigateByUrl('/register');
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigateByUrl('/login');
        } // submit(){
        //   this.router.navigateByUrl('/home');
        // }

      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          // if(this.validateForm(this.Email,this.Password)){
          this.authService.loginWithEmail(this.Email, this.Password).then(function () {
            _this3.router.navigateByUrl('/home');
          })["catch"](function (_error) {
            _this3.error = _error;

            _this3.router.navigateByUrl('/login');
          });
        } //}
        // validateForm(Email,Password){
        //   if(Email.length ===0){
        //      this.errorMessage="please enter email id";
        //     //console.log("please enter email id");
        //     return false;
        //   }
        //   if(Password.length ===0){
        //     this.errorMessage="please enter password";
        //     //console.log("please enter password");
        //     return false;
        //   }
        // if(Password.length <6){
        //     //this.errorMessage="please enter password";
        //     console.log("length of password be atleast 6 characters");
        //     return false;
        //   }
        //   this.errorMessage='';
        //   return true;
        // }

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 22,
      vars: 2,
      consts: [[1, "hero"], [1, "formbox"], [1, "button-box"], ["id", "btn"], ["type", "button", 1, "toggle-btn", 3, "click"], [1, "social-icons"], ["src", "assets/fb2.jpeg"], ["src", "assets/tw2.jpeg"], ["src", "assets/gp2.jpeg"], ["id", "myform", 1, "input-group"], ["type", "email", "name", "Email", "placeholder", "User Id", "autocomplete", "off", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "Password", "placeholder", "Password", "autocomplete", "off", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "submit-btn", 2, "margin-top", "20px", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login and Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_11_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.Email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_19_listener($event) {
            return ctx.Password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: [".hero[_ngcontent-%COMP%] {\n  width: 1340px;\n  height: 640px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/assets/Banner2.jpg);\n  background-position: center;\n  position: absolute;\n  margin-left: 0px;\n  background-repeat: no-repeat;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n.formbox[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 480px;\n  position: relative;\n  margin: 4% auto;\n  color: #FFFFFF;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n}\n.button-box[_ngcontent-%COMP%] {\n  width: 220px;\n  margin: 35px auto;\n  position: relative;\n  box-shadow: 0 0 20px 9px #a59be21f;\n  border-radius: 30px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  outline: none;\n  position: relative;\n  color: #FFFFFF;\n}\n#btn[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  position: absolute;\n  width: 115px;\n  height: 100%;\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  border-radius: 30px;\n  transition: 0.5s;\n}\n.social-icons[_ngcontent-%COMP%] {\n  margin: 20px auto;\n  text-align: center;\n}\n.social-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  margin: 0 12px;\n  box-shadow: 0 0 20px 0 #7f7f7f3d;\n  cursor: pointer;\n  border-radius: 50%;\n}\n.input-group[_ngcontent-%COMP%] {\n  top: 180px;\n  position: absolute;\n  width: 280px;\n  transition: 0.5s;\n}\n.input-field[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  width: 100%;\n  padding: 10px 0;\n  margin: 5px 0;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px solid #999;\n  outline: none;\n  background: transparent;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #FFFFFF;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 85%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n  color: #FFFFFF;\n}\n.check-box[_ngcontent-%COMP%] {\n  margin: 30px 10px 30px 0;\n}\nspan[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  font-size: 12px;\n  bottom: 68px;\n  position: absolute;\n}\n#myform[_ngcontent-%COMP%] {\n  left: 50px;\n}\n#registre[_ngcontent-%COMP%] {\n  left: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FBQTtBQVNBO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxtR0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDQ0Q7QURJQTtFQUVDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNGRDtBRElBO0VBRUMsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDRyxjQUFBO0VBQ0gsb0NBQUE7RUFDQSxZQUFBO0FDRkQ7QURJQTtFQUVDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0ZEO0FES0E7RUFFQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSEQ7QURLQTtFQUNDLE1BQUE7RUFFQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHlCQUFBO0VBQ0Esa0VBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDSkQ7QURNQTtFQUVDLGlCQUFBO0VBQ0Esa0JBQUE7QUNKRDtBRFFBO0VBRUMsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ05EO0FEU0E7RUFFQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNQRDtBRFNBO0VBQ0ksY0FBQTtFQUVILFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FDUEQ7QURTQTtFQUNDLGNBQUE7QUNORDtBRFFBO0VBRUMsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7RUFDRCxrRUFBQTtFQUNJLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDSCxjQUFBO0FDUEQ7QURTQTtFQUVDLHdCQUFBO0FDUEQ7QURVQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDUEQ7QURTQTtFQUVDLFVBQUE7QUNQRDtBRFNBO0VBRUMsV0FBQTtBQ1BEIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBodG1sLGJvZHl7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC40KSxyZ2JhKDAsMCwwLDAuNCkpLHVybCgvYXNzZXRzL0Jhbm5lci5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcbiAgICBcclxufSAqL1xyXG4uaGVyb3tcclxuXHR3aWR0aDogMTM0MHB4O1xyXG5cdGhlaWdodDogNjQwcHg7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwwLDAsMC40KSxyZ2JhKDAsMCwwLDAuNCkpLHVybCgvYXNzZXRzL0Jhbm5lcjIuanBnKTtcclxuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdG1hcmdpbi1sZWZ0OiAwcHggO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHJcbn1cclxuXHJcblxyXG4qXHJcbntcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtYm94XHJcbntcclxuXHR3aWR0aDogMzgwcHg7XHJcblx0aGVpZ2h0OiA0ODBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bWFyZ2luOiA0JSBhdXRvO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG5cdHBhZGRpbmc6IDVweFxyXG59XHJcbi5idXR0b24tYm94XHJcbntcclxuXHR3aWR0aDogMjIwcHg7XHJcblx0bWFyZ2luOiAzNXB4IGF1dG87XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJveC1zaGFkb3c6IDAgMCAyMHB4IDlweCAjYTU5YmUyMWY7XHJcblx0Ym9yZGVyLXJhZGl1czogMzBweDtcclxuXHJcbn1cclxuLnRvZ2dsZS1idG5cclxue1xyXG5cdHBhZGRpbmc6MTBweCAzMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMDtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4jYnRue1xyXG5cdHRvcDowO1xyXG5cdFxyXG5cdGxlZnQ6IDA7XHJcblx0cG9zaXRpb246YWJzb2x1dGU7XHJcblx0d2lkdGg6IDExNXB4O1xyXG5cdGhlaWdodDoxMDAlO1xyXG5cdFxyXG5cdGJhY2tncm91bmQtY29sb3I6ICMyYTJhNzI7XHJcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0dHJhbnNpdGlvbjouNXM7XHJcbn1cclxuLnNvY2lhbC1pY29uc1xyXG57XHJcblx0bWFyZ2luOjIwcHggYXV0bztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGltZ1xyXG57XHJcblx0d2lkdGg6MzBweCA7XHJcblx0bWFyZ2luOiAwIDEycHg7XHJcblx0Ym94LXNoYWRvdzogMCAwIDIwcHggMCAjN2Y3ZjdmM2Q7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwXHJcbntcclxuXHR0b3A6MTgwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAyODBweDtcclxuXHR0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLmlucHV0LWZpZWxkXHJcbnsgICBjb2xvcjogI0ZGRkZGRjtcclxuXHRcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOjEwcHggMDtcclxuXHRtYXJnaW46IDVweCAwO1xyXG5cdGJvcmRlci1sZWZ0OiAwO1xyXG5cdGJvcmRlci10b3A6MDtcclxuXHRib3JkZXItcmlnaHQ6MDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG5cdGNvbG9yOiNGRkZGRkY7XHJcbn1cclxuLnN1Ym1pdC1idG5cclxue1xyXG5cdHdpZHRoOiA4NSU7XHJcblx0cGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IGF1dG87XHJcblx0XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uY2hlY2stYm94XHJcbntcclxuXHRtYXJnaW46IDMwcHggMTBweCAzMHB4IDA7XHJcblxyXG59XHJcbnNwYW57XHJcblx0Y29sb3I6ICNGRkZGRkY7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGJvdHRvbTo2OHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4jbXlmb3JtXHJcbntcclxuXHRsZWZ0OiA1MHB4O1xyXG59XHJcbiNyZWdpc3RyZVxyXG57XHJcblx0bGVmdDogNDUwcHhcclxufSIsIi8qIGh0bWwsYm9keXtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNCkscmdiYSgwLDAsMCwwLjQpKSx1cmwoL2Fzc2V0cy9CYW5uZXIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuXG59ICovXG4uaGVybyB7XG4gIHdpZHRoOiAxMzQwcHg7XG4gIGhlaWdodDogNjQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksIHVybCgvYXNzZXRzL0Jhbm5lcjIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybWJveCB7XG4gIHdpZHRoOiAzODBweDtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDQlIGF1dG87XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJ1dHRvbi1ib3gge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogMzVweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDlweCAjYTU5YmUyMWY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi50b2dnbGUtYnRuIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5cbiNidG4ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJhNzI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMgaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbjogMCAxMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwICM3ZjdmN2YzZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIHRvcDogMTgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI4MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnN1Ym1pdC1idG4ge1xuICB3aWR0aDogODUlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4uY2hlY2stYm94IHtcbiAgbWFyZ2luOiAzMHB4IDEwcHggMzBweCAwO1xufVxuXG5zcGFuIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm90dG9tOiA2OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNteWZvcm0ge1xuICBsZWZ0OiA1MHB4O1xufVxuXG4jcmVnaXN0cmUge1xuICBsZWZ0OiA0NTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/medicine/medicine.component.ts":
  /*!************************************************!*\
    !*** ./src/app/medicine/medicine.component.ts ***!
    \************************************************/

  /*! exports provided: MedicineComponent */

  /***/
  function srcAppMedicineMedicineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicineComponent", function () {
      return MedicineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MedicineComponent_li_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicineComponent_li_42_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var indexOfelement_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick(indexOfelement_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexOfelement_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.member.alldistributors[indexOfelement_r2].Name, " ", ctx_r0.member.alldistributors[indexOfelement_r2].City, "");
      }
    }

    var MedicineComponent = /*#__PURE__*/function () {
      function MedicineComponent(router, as, member, route) {
        _classCallCheck(this, MedicineComponent);

        this.router = router;
        this.as = as;
        this.member = member;
        this.route = route;
      }

      _createClass(MedicineComponent, [{
        key: "onClick",
        value: function onClick(indexOfelement) {
          for (this.i = 0; this.i <= indexOfelement; this.i++) {
            console.log(this.member.alldistributors[this.i].id);
            var url = '/medicinedisplay/' + this.member.alldistributors[this.i].id;
            this.router.navigateByUrl(url);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['a']);
            _this4.a = res['a'];
          });

          if (this.a == "Various-Medicines") {
            this.member.getalldistributors();
          } else {
            this.member.getdistributors(this.a);
          }
        }
      }, {
        key: "search",
        value: function search() {
          if ((this.city == "All Cities" || this.city == "") && this.a == "Various-Medicines") {
            this.member.getalldistributors();
          } else if (this.city == "All Cities" || this.city == "") {
            this.member.getdistributors(this.a);
          } else if ((this.city != "All Cities" || this.city != "") && this.a == "Various-Medicines") {
            this.member.getdistributorsonlybycities(this.city);
          } else {
            this.member.getdistributorscities(this.a, this.city);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return MedicineComponent;
    }();

    MedicineComponent.ɵfac = function MedicineComponent_Factory(t) {
      return new (t || MedicineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    MedicineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MedicineComponent,
      selectors: [["app-medicine"]],
      decls: 43,
      vars: 2,
      consts: [[1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], ["ngNativeValidate", ""], ["placeholder", "Enter Your City", "type", "text", "list", "city", "name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["id", "city"], ["value", "All Cities"], ["value", "Udaipur"], ["value", "Ajmer"], ["value", "Jaipur"], ["value", "Bhilwara"], ["value", "Jaisalmer"], ["value", "Jodhpur"], ["value", "Chittorgarh"], ["value", "Bikaner"], ["value", "Kota"], ["type", "submit", 1, "buttonk", 3, "click"], [1, "gradient-list"], [3, "click", 4, "ngFor", "ngForOf"]],
      template: function MedicineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicineComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Distributors with Available Covid Medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MedicineComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "datalist", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicineComponent_Template_button_click_38_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "ol", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MedicineComponent_li_42_Template, 2, 2, "li", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.member.alldistributors);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);\n\n\n\n\n\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n}\nheader[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  width: 100%;\n  height: 40px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: black;\n  align-content: center;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\nmain[_ngcontent-%COMP%] {\n  padding: calc(var(--heading-height) + 1.5vw) 4em 0;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  color: #050505;\n  font-family: \"Raleway\", sans-serif;\n}\nmain[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%] {\n  counter-reset: gradient-counter;\n  list-style: none;\n  margin: 1.75rem 0;\n  padding-left: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  counter-increment: gradient-counter;\n  margin-top: 1rem;\n  min-height: 3rem;\n  padding: 1rem 1rem 1rem 3rem;\n  position: relative;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, ol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);\n  border-radius: 1rem 1rem 0 1rem;\n  content: \"\";\n  height: 3rem;\n  left: -1rem;\n  overflow: hidden;\n  position: absolute;\n  top: -1rem;\n  width: 3rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  align-items: flex-end;\n  content: counter(gradient-counter);\n  color: #1d1f20;\n  display: flex;\n  font: 900 1.5em/1 \"Montserrat\";\n  justify-content: flex-end;\n  padding: 0.125em 0.25em;\n  z-index: 1;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 300px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n.buttonk[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 20px;\n  margin-left: 10px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n.buttonk[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNpbmUvRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxcbWVkaWNpbmVcXG1lZGljaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWRpY2luZS9tZWRpY2luZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ1EsNkZBQUE7QUFEUixVQUFBO0FBS0EsY0FBQTtBQUNBLFdBQUE7QUFRQSxXQUFBO0FBQ0EsZUFBQTtBQUNBO0VBQ0UsOEZBQUE7QUNURjtBRFdBO0VBQ0ksNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEVUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ1BKO0FEU0E7RUFDQyxrREFBQTtBQ05EO0FEU0EsVUFBQTtBQUNBOzs7RUFHRSxzQkFBQTtBQ05GO0FEU0E7O0VBRUUsU0FBQTtFQUNBLFVBQUE7QUNORjtBRFNBO0VBQ0UsZUFBQTtBQ05GO0FEUUE7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0xGO0FEU0E7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05GO0FET0U7RUFDRSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEZBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDTEo7QURNSTtFQUVFLDZEQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNMTjtBRE9JO0VBQ0UscUJBQUE7RUFFQSxrQ0FBQTtFQUNBLGNBeEZFO0VBeUZGLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDTk47QURVTTtFQUNFLDREQUFBO0FDUlI7QURPTTtFQUNFLDREQUFBO0FDTFI7QURJTTtFQUNFLDREQUFBO0FDRlI7QURDTTtFQUNFLDREQUFBO0FDQ1I7QURGTTtFQUNFLDREQUFBO0FDSVI7QURBUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ0VaO0FESlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNNWjtBRFJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDVVo7QURaUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ2NaO0FEaEJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDa0JaO0FEZE07RUFDRSw0REFBQTtBQ2dCUjtBRGpCTTtFQUNFLDREQUFBO0FDbUJSO0FEcEJNO0VBQ0UsNERBQUE7QUNzQlI7QUR2Qk07RUFDRSw0REFBQTtBQ3lCUjtBRDFCTTtFQUNFLDREQUFBO0FDNEJSO0FEeEJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDMEJaO0FENUJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDOEJaO0FEaENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDa0NaO0FEcENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDc0NaO0FEeENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDMENaO0FEdkNJO0VBQ0UsZ0JBQUE7QUN5Q047QUQ1QkE7RUFDRSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7QUMrQkY7QUQ1QkEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQytCRjtBRDVCQSwyQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDK0JGO0FENUJBLG9CQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFBVyxrREFBQTtBQ2lDYjtBRDlCQSx3REFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNpQ0Y7QUQ5QkEseUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNpQ0Y7QUQvQkE7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNrQ0Y7QURoQ0EsOEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ21DRjtBRGhDQSwyREFBQTtBQUNBO0VBQ0Usc0JBQUE7QUNtQ0Y7QUQvQkEsb0NBQUE7QUFDQTtFQUNFLGNBQUE7QUNrQ0Y7QUQvQkE7Ozs7Ozs7Ozs7OztFQVlFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtBQ2tDRjtBRC9CQTtFQUNBLGdCQUFBO0VBRUUsV0FBQTtFQUNBLDREQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNGLGFBQUE7RUFDQSxrQkFBQTtFQUNFLG1EQUFBO0FDaUNGO0FEL0JBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ2tDSiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lL21lZGljaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9OVFMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJhbGV3YXk6NDAwLDQwMGksNzAwLDcwMGkpO1xyXG5cclxuXHJcblxyXG4vKiBWQVJJQUJMRVMgKi9cclxuLyogQ29sb3JzICovXHJcbiRibGFjazogIzFkMWYyMDtcclxuJGJsdWU6ICM4M2U0ZTI7XHJcbiRncmVlbjogI2EyZWQ1NjtcclxuJHllbGxvdzogI2ZkZGMzMjtcclxuJHdoaXRlOiAjZmFmYWZhO1xyXG5cclxuXHJcbi8qIEVYVEVORCAqL1xyXG4vKiBib3gtc2hhZG93ICovXHJcbiVib3hzaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLDAsMCwwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwwLDAsMC4wNSk7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxubWFpbiB7XHJcblx0cGFkZGluZzogY2FsYyh2YXIoLS1oZWFkaW5nLWhlaWdodCkgKyAxLjV2dykgNGVtIDA7XHJcbn1cclxuXHJcbi8qIFNUWUxFICovXHJcbiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gIGNvbG9yOiMwNTA1MDU7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxub2wuZ3JhZGllbnQtbGlzdCB7XHJcbiAgY291bnRlci1yZXNldDogZ3JhZGllbnQtY291bnRlcjtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbjogMS43NXJlbSAwO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICA+IGxpIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwLjVyZW0gMC41cmVtIDAuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLDAsMCwwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwwLDAsMC4wNSk7XHJcbiAgICBjb3VudGVyLWluY3JlbWVudDogZ3JhZGllbnQtY291bnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAzcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmJlZm9yZSxcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJGJsdWUgMCUsJGdyZWVuIDEwMCUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAxcmVtO1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgICBsZWZ0OiAtMXJlbTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IC0xcmVtO1xyXG4gICAgICB3aWR0aDogM3JlbTtcclxuICAgIH1cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgQGV4dGVuZCAlYm94c2hhZG93O1xyXG4gICAgICBjb250ZW50OiBjb3VudGVyKGdyYWRpZW50LWNvdW50ZXIpO1xyXG4gICAgICBjb2xvcjogJGJsYWNrO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmb250OiA5MDAgMS41ZW0vMSAnTW9udHNlcnJhdCc7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtO1xyXG4gICAgICB6LWluZGV4OiAxO1xyXG4gICAgfVxyXG4gICBcclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEwbisjeyRpfSk6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xyXG4gICAgICAgICY6bnRoLWNoaWxkKDEwbisjeyRpfSk6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIEBmb3IgJGkgZnJvbSA2IHRocm91Z2ggMTAge1xyXG4gICAgICAmOm50aC1jaGlsZCgxMG4rI3skaX0pOmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgQGZvciAkaSBmcm9tIDYgdGhyb3VnaCAxMCB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgKyBsaSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBvbC5ncmFkaWVudC1saXN0e1xyXG4vLyAgIGxpOmhvdmVye1xyXG4vLyAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuLy8gICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG4vLyB9XHJcblxyXG5cclxuLm5hdmJhciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xyXG4ubmF2YmFyIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogcmdiKDE0LCAxLCAxKTtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxufVxyXG5cclxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXHJcbi5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzgsIDIzOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uZHJvcGJ0bjpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbiBcclxufVxyXG5cclxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLFxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwiZW1haWxcIl0sXHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0sXHJcbmlucHV0W3R5cGU9XCJzZWFyY2hcIl0sXHJcbmlucHV0W3R5cGU9XCJ0ZWxcIl0sXHJcbmlucHV0W3R5cGU9XCJ0aW1lXCJdLFxyXG5pbnB1dFt0eXBlPVwidXJsXCJdLFxyXG50ZXh0YXJlYSxcclxuc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMzAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XHJcbiAgY29sb3I6ICMzYzQ3NGU7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDAsMCwwLDAuMDMpIGluc2V0O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5idXR0b25rIHtcclxubWFyZ2luLXRvcDogMTBweDtcclxuICBcclxuICBjb2xvcjogI0ZGRjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGhlaWdodDogNDVweDtcclxuICB3aWR0aDogODVweDtcclxuICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuYm9yZGVyOiBibGFjaztcclxuYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJveC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC4xKSBpbnNldDtcclxufVxyXG4uYnV0dG9uazpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQ6cmdiKDU3LCAxOTQsIDU3KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxufSIsIi8qIEZPTlRTICovXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8UmFsZXdheTo0MDAsNDAwaSw3MDAsNzAwaSk7XG4vKiBWQVJJQUJMRVMgKi9cbi8qIENvbG9ycyAqL1xuLyogRVhURU5EICovXG4vKiBib3gtc2hhZG93ICovXG5vbC5ncmFkaWVudC1saXN0ID4gbGk6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwgMCwgMCwgMC4wNSk7XG59XG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDI3cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLWhlYWRpbmctaGVpZ2h0KSArIDEuNXZ3KSA0ZW0gMDtcbn1cblxuLyogU1RZTEUgKi9cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGZsb3JhbHdoaXRlO1xuICBjb2xvcjogIzA1MDUwNTtcbiAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IDQwcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG5vbC5ncmFkaWVudC1saXN0IHtcbiAgY291bnRlci1yZXNldDogZ3JhZGllbnQtY291bnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxLjc1cmVtIDA7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsIDAsIDAsIDAuMDUpO1xuICBjb3VudGVyLWluY3JlbWVudDogZ3JhZGllbnQtY291bnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWluLWhlaWdodDogM3JlbTtcbiAgcGFkZGluZzogMXJlbSAxcmVtIDFyZW0gM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUsIG9sLmdyYWRpZW50LWxpc3QgPiBsaTo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjODNlNGUyIDAlLCAjYTJlZDU2IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtIDFyZW0gMCAxcmVtO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDNyZW07XG4gIGxlZnQ6IC0xcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTFyZW07XG4gIHdpZHRoOiAzcmVtO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGNvbnRlbnQ6IGNvdW50ZXIoZ3JhZGllbnQtY291bnRlcik7XG4gIGNvbG9yOiAjMWQxZjIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250OiA5MDAgMS41ZW0vMSBcIk1vbnRzZXJyYXRcIjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW07XG4gIHotaW5kZXg6IDE7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisyKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbiszKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis0KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis1KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMik6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzMpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis0KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzYpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzcpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzgpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzkpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzEwKTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis2KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNyk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzgpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis5KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMTApOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGkgKyBsaSB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5uYXZiYXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMGUwMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXG4uZHJvcGRvd24ge1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogRHJvcGRvd24gYnV0dG9uICovXG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICMwZTAxMDE7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xuICBtYXJnaW46IDA7XG4gIC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xufVxuXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cbi5uYXZiYXIgYTpob3ZlciwgLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGJ0bjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXG5pbnB1dFt0eXBlPWRhdGVdLFxuaW5wdXRbdHlwZT1kYXRldGltZV0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9bnVtYmVyXSxcbmlucHV0W3R5cGU9c2VhcmNoXSxcbmlucHV0W3R5cGU9dGVsXSxcbmlucHV0W3R5cGU9dGltZV0sXG5pbnB1dFt0eXBlPXVybF0sXG50ZXh0YXJlYSxcbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XG4gIGNvbG9yOiAjM2M0NzRlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMykgaW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uYnV0dG9uayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xufVxuXG4uYnV0dG9uazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzM5YzIzOTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-medicine',
          templateUrl: './medicine.component.html',
          styleUrls: ['./medicine.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/medicinecard/medicinecard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/medicinecard/medicinecard.component.ts ***!
    \********************************************************/

  /*! exports provided: MedicinecardComponent */

  /***/
  function srcAppMedicinecardMedicinecardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicinecardComponent", function () {
      return MedicinecardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MedicinecardComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_29_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var a_r18 = ctx.aVariable;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.cardm(a_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Favipiravir has shown rapid viral clearance and faster clinical improvement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r18 = ctx.aVariable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r18);
      }
    }

    function MedicinecardComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_33_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var b_r21 = ctx.Variable;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.cardm(b_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "It is an antibiotic madication used to trear a number of bacterial infections.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r21 = ctx.Variable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r21);
      }
    }

    function MedicinecardComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_37_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var c_r24 = ctx.ariable;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.cardm(c_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Paracetamol, also known as acetaminophen, is a medication used to treat fever and mild to moderate pain.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r24 = ctx.ariable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r24);
      }
    }

    function MedicinecardComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_42_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var d_r27 = ctx.aVariabl;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.cardm(d_r27);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Zinc Tablets provide necessary zinc supplement in our body to boost immunity.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r27 = ctx.aVariabl;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r27);
      }
    }

    function MedicinecardComponent_ng_template_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_46_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var e_r30 = ctx.aVaiable;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.cardm(e_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Rich source of antioxidants.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r30 = ctx.aVaiable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r30);
      }
    }

    function MedicinecardComponent_ng_template_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_50_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var f_r33 = ctx.aVariabe;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.cardm(f_r33);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remdesivir (Veklury) is the first drug approved by the FDA for treating the SARS-CoV-2 virus.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r33 = ctx.aVariabe;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r33);
      }
    }

    function MedicinecardComponent_ng_template_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_55_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var g_r36 = ctx.aVariableo;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.cardm(g_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Doxycycline is an antibiotic medicine used to treat bacterial infections in your body.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r36 = ctx.aVariableo;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r36);
      }
    }

    function MedicinecardComponent_ng_template_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_59_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var h_r39 = ctx.aVariableom;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.cardm(h_r39);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ivermectin is an anthelmintic agent used to treat various parasitic infestations of the human body.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var h_r39 = ctx.aVariableom;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r39);
      }
    }

    function MedicinecardComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_ng_template_63_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var i_r42 = ctx.aVariableomg;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.cardm(i_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get Information about ditributors providing COVID-19 and other medicines.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r42 = ctx.aVariableomg;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r42);
      }
    }

    var _c0 = function _c0() {
      return {
        aVariable: "Favipiravir-Tablets"
      };
    };

    var _c1 = function _c1() {
      return {
        Variable: "Azithromycin"
      };
    };

    var _c2 = function _c2() {
      return {
        ariable: "Paracetamol"
      };
    };

    var _c3 = function _c3() {
      return {
        aVariabl: "Zinc-Tablets"
      };
    };

    var _c4 = function _c4() {
      return {
        aVaiable: "Vitamin-C"
      };
    };

    var _c5 = function _c5() {
      return {
        aVariabe: "Remdesivir"
      };
    };

    var _c6 = function _c6() {
      return {
        aVariableo: "Doxycycline-Capsule"
      };
    };

    var _c7 = function _c7() {
      return {
        aVariableom: "Ivermectin-Tablets"
      };
    };

    var _c8 = function _c8() {
      return {
        aVariableomg: "Various-Medicines"
      };
    };

    var MedicinecardComponent = /*#__PURE__*/function () {
      function MedicinecardComponent(router, as, member) {
        _classCallCheck(this, MedicinecardComponent);

        this.router = router;
        this.as = as;
        this.member = member;
      }

      _createClass(MedicinecardComponent, [{
        key: "cardm",
        value: function cardm(a) {
          // console.log(a);
          //this.router.navigateByUrl('/medicine');
          this.router.navigate(['/medicine/', a]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return MedicinecardComponent;
    }();

    MedicinecardComponent.ɵfac = function MedicinecardComponent_Factory(t) {
      return new (t || MedicinecardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]));
    };

    MedicinecardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MedicinecardComponent,
      selectors: [["app-medicinecard"]],
      decls: 65,
      vars: 27,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], [1, "navbars"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdowns"], [1, "dropbtns"], [1, "dropdowns-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "wrapper"], [1, "cols"], ["ontouchstart", "this.classList.toggle('hover');", 1, "col"], [1, "container"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["selfie", ""], ["selfies", ""], ["selfiek", ""], ["selie", ""], ["selfiej", ""], ["selfieg", ""], ["selfiec", ""], ["selfiech", ""], ["selfiechw", ""], [1, "front", 2, "background-image", "url(https://image.freepik.com/free-photo/assorted-pharmaceutical-medicine-pills-tablets-capsules-bottle-blue-background-copy-space-text_130265-1145.jpg)"], [1, "inner"], [1, "back"], [1, "inner", 3, "click"], [1, "front", 2, "background-image", "url(https://images.unsplash.com/photo-1573883429746-084be9b5cfca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)"]],
      template: function MedicinecardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinecardComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Covid Medicines Prescribed by Expert Doctors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MedicinecardComponent_ng_template_29_Template, 8, 1, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, MedicinecardComponent_ng_template_33_Template, 8, 1, "ng-template", 16, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MedicinecardComponent_ng_template_37_Template, 8, 1, "ng-template", 16, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, MedicinecardComponent_ng_template_42_Template, 8, 1, "ng-template", 16, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MedicinecardComponent_ng_template_46_Template, 8, 1, "ng-template", 16, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, MedicinecardComponent_ng_template_50_Template, 8, 1, "ng-template", 16, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MedicinecardComponent_ng_template_55_Template, 8, 1, "ng-template", 16, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MedicinecardComponent_ng_template_59_Template, 8, 1, "ng-template", 16, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MedicinecardComponent_ng_template_63_Template, 8, 1, "ng-template", 16, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("ngTemplateOutlet", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1))("ngTemplateOutlet", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2))("ngTemplateOutlet", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3))("ngTemplateOutlet", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c4))("ngTemplateOutlet", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5))("ngTemplateOutlet", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c6))("ngTemplateOutlet", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c7))("ngTemplateOutlet", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8))("ngTemplateOutlet", _r16);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\n  background: floralwhite;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: normal;\n  color: black;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 80rem;\n}\n\n.cols[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: calc(25% - 2rem);\n  margin: 1rem;\n  cursor: pointer;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n  perspective: 1000px;\n}\n\n.front[_ngcontent-%COMP%] {\n  background-size: cover;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  background-position: center;\n  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  text-align: center;\n  min-height: 190px;\n  height: auto;\n  border-radius: 10px;\n  color: #fff;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1.5rem;\n}\n\n.back[_ngcontent-%COMP%] {\n  background-size: cover;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  background-position: center;\n  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  text-align: center;\n  min-height: 190px;\n  height: auto;\n  border-radius: 10px;\n  color: black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1.5rem;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\n.front[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  opacity: 0.6;\n  background-color: #000;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 10px;\n}\n\n.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%] {\n  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n\n.back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.inner[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\n  top: 50%;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  padding: 2rem;\n  box-sizing: border-box;\n  outline: 1px solid transparent;\n  perspective: inherit;\n  z-index: 2;\n}\n\n.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n  transform-style: preserve-3d;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 4rem;\n  height: 2px;\n  position: absolute;\n  background: #C6D4DF;\n  display: block;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  bottom: -0.75rem;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-family: \"Montserrat\";\n  font-weight: 300;\n}\n\n@media screen and (max-width: 64rem) {\n  .col[_ngcontent-%COMP%] {\n    width: calc(33.333333% - 2rem);\n  }\n}\n\n@media screen and (max-width: 48rem) {\n  .col[_ngcontent-%COMP%] {\n    width: calc(50% - 2rem);\n  }\n}\n\n@media screen and (max-width: 32rem) {\n  .col[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 2rem 0;\n  }\n}\n\n.navbars[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%]   .dropbtns[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdowns[_ngcontent-%COMP%]:hover   .dropbtns[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtns[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%]:hover   .dropdowns-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNpbmVjYXJkL0U6XFxOZXcgZm9sZGVyXFxQaGFybWFjeU1hbmFnZW1lbnQvc3JjXFxhcHBcXG1lZGljaW5lY2FyZFxcbWVkaWNpbmVjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWRpY2luZWNhcmQvbWVkaWNpbmVjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7QUNDSjs7QURDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBRVEsc0JBQUE7QUNFVjs7QURDQTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VGOztBRENBO0VBR0UsYUFBQTtFQUVJLGVBQUE7RUFHSSx1QkFBQTtBQ0VWOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBRVUsNEJBQUE7RUFFQSxtQkFBQTtBQ0lWOztBRERBO0VBRUUsc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFJQSx5REFBQTtFQUVBLG1DQUFBO0VBQ1EsMkJBQUE7RUFDUixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUVFLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBSUEseURBQUE7RUFFQSxtQ0FBQTtFQUNRLDJCQUFBO0VBQ1Isa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDSSw0REFBQTtBQ0dKOztBREFBO0VBQ0Usa0JBQUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtFQUNSLG1CQUFBO0FDR0o7O0FEREE7O0VBS0kseURBQUE7QUNLSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDSUo7O0FEREE7RUFFWSx3REFBQTtFQUNSLFFBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVRLHNCQUFBO0VBQ1IsOEJBQUE7RUFFUSxvQkFBQTtFQUNSLFVBQUE7QUNJSjs7QUREQTtFQUVZLDBCQUFBO0VBRUEsNEJBQUE7QUNJWjs7QUREQTtFQUVZLHdCQUFBO0VBRUEsNEJBQUE7QUNJWjs7QUREQTtFQUVVLHdCQUFBO0VBRUEsNEJBQUE7QUNJVjs7QUREQTtFQUVVLDJCQUFBO0VBRUEsNEJBQUE7QUNJVjs7QUREQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FEREE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSwrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNJRjs7QUREQTtFQUNFO0lBQ0UsOEJBQUE7RUNJRjtBQUNGOztBRERBO0VBQ0U7SUFDRSx1QkFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFQ0VGO0FBQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQSw0QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0Esb0JBQUE7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFBVyxrREFBQTtBQ0ViOztBRENBLHdEQUFBOztBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQ0VGOztBRENBLHlDQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ0VGOztBREFBO0VBQ0UsMEJBQUE7QUNHRjs7QUREQSw4QkFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBLDJEQUFBOztBQUNBO0VBQ0Usc0JBQUE7QUNJRjs7QURBQSxvQ0FBQTs7QUFDQTtFQUNFLGNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lY2FyZC9tZWRpY2luZWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgYmFja2dyb3VuZDpmbG9yYWx3aGl0ZVxyXG59XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaDF7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBjb2xvcjpibGFjaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA4MHJlbTtcclxufVxyXG5cclxuLmNvbHN7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbHtcclxuICB3aWR0aDogY2FsYygyNSUgLSAycmVtKTtcclxuICBtYXJnaW46IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbmE6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbiAgICAgICAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG59XHJcblxyXG4uZnJvbnR7XHJcbiAgICAgIFxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTkwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuLmJhY2t7XHJcbiAgIFxyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogMTkwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuXHJcbi5iYWNre1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG59XHJcblxyXG4uZnJvbnQ6YWZ0ZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY29udGFpbmVyOmhvdmVyIC5mcm9udCxcclxuLmNvbnRhaW5lcjpob3ZlciAuYmFja3tcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5iYWNre1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uaW5uZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiBpbmhlcml0O1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuYmFja3tcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5mcm9udHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLmJhY2t7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmNvbnRhaW5lcjpob3ZlciAuZnJvbnR7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmZyb250IC5pbm5lciBwe1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZyb250IC5pbm5lciBwOmFmdGVye1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiA0cmVtO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAjQzZENERGO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYm90dG9tOiAtLjc1cmVtO1xyXG59XHJcblxyXG4uZnJvbnQgLmlubmVyIHNwYW57XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKXtcclxuICAuY29se1xyXG4gICAgd2lkdGg6IGNhbGMoMzMuMzMzMzMzJSAtIDJyZW0pO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pe1xyXG4gIC5jb2x7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAycmVtKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMycmVtKXtcclxuICAuY29se1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgMCAycmVtIDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm5hdmJhcnMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cclxuLm5hdmJhcnMgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoMTQsIDAsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXHJcbi5kcm9wZG93bnMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uZHJvcGRvd25zIC5kcm9wYnRucyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG59XHJcblxyXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cclxuLm5hdmJhcnMgYTpob3ZlciwgLmRyb3Bkb3duczpob3ZlciAuZHJvcGJ0bnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4uZHJvcGRvd25zLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5kcm9wYnRuczpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd25zLWNvbnRlbnQgYSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbi5kcm9wZG93bnMtY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gXHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duczpob3ZlciAuZHJvcGRvd25zLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiYm9keSB7XG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogODByZW07XG59XG5cbi5jb2xzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbCB7XG4gIHdpZHRoOiBjYWxjKDI1JSAtIDJyZW0pO1xuICBtYXJnaW46IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZnJvbnQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxOTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTkwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbi5mcm9udDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC42O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5mcm9udCxcbi5jb250YWluZXI6aG92ZXIgLmJhY2sge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG59XG5cbi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xuICBwZXJzcGVjdGl2ZTogaW5oZXJpdDtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhaW5lciAuYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5jb250YWluZXIgLmZyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5iYWNrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5mcm9udCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZyb250IC5pbm5lciBwIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mcm9udCAuaW5uZXIgcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjQzZENERGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3R0b206IC0wLjc1cmVtO1xufVxuXG4uZnJvbnQgLmlubmVyIHNwYW4ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gIC5jb2wge1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMyUgLSAycmVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgLmNvbCB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMycmVtKSB7XG4gIC5jb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcbiAgfVxufVxuLm5hdmJhcnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXJzIGEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xuLmRyb3Bkb3ducyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93bnMgLmRyb3BidG5zIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMGUwMTAxO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXG4ubmF2YmFycyBhOmhvdmVyLCAuZHJvcGRvd25zOmhvdmVyIC5kcm9wYnRucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGJ0bnM6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMTBweCBibGFjaztcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3ducy1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3ducy1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd25zOmhvdmVyIC5kcm9wZG93bnMtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicinecardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-medicinecard',
          templateUrl: './medicinecard.component.html',
          styleUrls: ['./medicinecard.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/medicinedisplay/medicinedisplay.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/medicinedisplay/medicinedisplay.component.ts ***!
    \**************************************************************/

  /*! exports provided: MedicinedisplayComponent */

  /***/
  function srcAppMedicinedisplayMedicinedisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MedicinedisplayComponent", function () {
      return MedicinedisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var MedicinedisplayComponent = /*#__PURE__*/function () {
      function MedicinedisplayComponent(route, member, loc) {
        _classCallCheck(this, MedicinedisplayComponent);

        this.route = route;
        this.member = member;
        this.loc = loc;
        this.details = {
          Name: "",
          City: "",
          Address: "",
          Medicines: [],
          MinStock: NaN,
          Contact: NaN,
          ContactTwo: NaN,
          Email: ""
        };
      }

      _createClass(MedicinedisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['id']); // console.log(res);

            _this5.id = res['id'];

            _this5.member.getdistributorbyId(_this5.id).subscribe(function (res) {
              console.log(res);
              _this5.details = res;
            });
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.loc.back();
        }
      }]);

      return MedicinedisplayComponent;
    }();

    MedicinedisplayComponent.ɵfac = function MedicinedisplayComponent_Factory(t) {
      return new (t || MedicinedisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    MedicinedisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MedicinedisplayComponent,
      selectors: [["app-medicinedisplay"]],
      decls: 84,
      vars: 12,
      consts: [["lang", "en", "dir", "ltr"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "blog-card"], ["type", "radio", "name", "select", "id", "tap-1", "checked", ""], ["type", "radio", "name", "select", "id", "tap-2"], ["type", "radio", "name", "select", "id", "tap-3"], ["type", "radio", "name", "select", "id", "tap-4"], ["type", "radio", "name", "select", "id", "tap-5"], ["type", "checkbox", "id", "imgTap"], [1, "sliders"], ["for", "tap-1", 1, "tap", "tap-1"], ["for", "tap-2", 1, "tap", "tap-2"], ["for", "tap-3", 1, "tap", "tap-3"], ["for", "tap-4", 1, "tap", "tap-4"], ["for", "tap-5", 1, "tap", "tap-5"], [1, "inner-part"], ["for", "imgTap", 1, "img"], ["src", "/assets/medicines.png", 1, "img-1"], [1, "content", "content-1"], [1, "title"], [1, "text"], [1, "fa", "fa-medkit", 2, "font-size", "36px"], ["src", "/assets/medicines.png", 1, "img-2"], [1, "content", "content-2"], [1, "fa", "fa-plus-circle", 2, "font-size", "36px"], [2, "text-align", "center", "font-weight", "600", "font-size", "20px"], ["src", "/assets/medicines.png", 1, "img-3"], [1, "content", "content-3"], ["tyle", "font-size:48px", 1, "fa", "fa-map-marker"], ["src", "/assets/medicines.png", 1, "img-4"], [1, "content", "content-4"], ["tyle", "font-size:48px", 1, "fa", "fa-phone"], ["src", "/assets/medicines.png", 1, "img-5"], [1, "content", "content-5"], ["tyle", "font-size:48px", 1, "fa", "fa-envelope"], ["target", "_blank", 3, "href"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function MedicinedisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Medicines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Number of Estimated medicines for COVID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicinedisplayComponent_Template_button_click_82_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Medicines);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.MinStock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.ContactTwo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.details.Email, "?subject=For need of medicines from your firm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Email);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 605px;\n  font-family: \"Fira Sans\", sans-serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n.blog-card[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 370px;\n  width: 95%;\n  max-width: 850px;\n  border-radius: 25px;\n  background: white;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  box-shadow: 0px 10px 50px rgba(252, 56, 56, 0.3);\n}\n.inner-part[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  height: 360px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 25px;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%] {\n  padding: 0;\n  transition: 0.1s ease-in;\n}\n.inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 260px;\n  width: 260px;\n  flex-shrink: 0;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 2px 3px 15px rgba(252, 56, 56, 0.1);\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 370px;\n  width: 850px;\n  z-index: 99;\n  margin-top: 10px;\n  transition: 0.3s 0.2s ease-in;\n}\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  opacity: 0;\n  transition: 0.6s;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-3[_ngcontent-%COMP%], #tap-4[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-4[_ngcontent-%COMP%], #tap-5[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-5[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0 20px 0 35px;\n  width: 530px;\n  margin-left: 50px;\n  opacity: 0;\n  transition: 0.6s;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-3[_ngcontent-%COMP%], #tap-4[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-4[_ngcontent-%COMP%], #tap-5[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-5[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin-left: 0px;\n  z-index: 100;\n  transition-delay: 0.3s;\n}\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #7b7992;\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #0d0925;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #4e4a67;\n  font-size: 19px;\n  margin-bottom: 30px;\n  line-height: 1.5em;\n  text-align: justify;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 15px 20px;\n  border: none;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #fff0e6;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #fd3535;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\na[_ngcontent-%COMP%] {\n  color: #4e4a67;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.sliders[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  left: 65%;\n  transform: translateX(-50%);\n  z-index: 12;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%] {\n  display: none;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  width: 50px;\n  background: #d9d9d9;\n  border-radius: 5px;\n  display: inline-flex;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:hover {\n  background: #cccccc;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: -100%;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  border-radius: 10px;\n  transform: scaleX(0);\n  transition: transform 0.6s;\n  transform-origin: left;\n}\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-1[_ngcontent-%COMP%]:before, #tap-2[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-2[_ngcontent-%COMP%]:before, #tap-3[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-3[_ngcontent-%COMP%]:before, #tap-4[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-4[_ngcontent-%COMP%]:before, #tap-5[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-5[_ngcontent-%COMP%]:before {\n  transform: scaleX(1);\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 300;\n  font-size: 20px;\n  width: 30%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 400px;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNpbmVkaXNwbGF5L0U6XFxOZXcgZm9sZGVyXFxQaGFybWFjeU1hbmFnZW1lbnQvc3JjXFxhcHBcXG1lZGljaW5lZGlzcGxheVxcbWVkaWNpbmVkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tZWRpY2luZWRpc3BsYXkvbWVkaWNpbmVkaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ1I7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsNERBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtBQ0VGO0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNFRjtBREFBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FDR0Y7QUREQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ0lGO0FERkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDS0Y7QURIQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNNRjtBREpBOzs7OztFQUtFLFVBQUE7RUFDQSxzQkFBQTtBQ09GO0FETEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1FGO0FETkE7RUFDRSxhQUFBO0FDU0Y7QURQQTs7Ozs7RUFLRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNVRjtBRFJBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1dGO0FEVEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNZRjtBRFZBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNhRjtBRFhBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUVBLCtEQUFBO0FDYUY7QURYQTtFQUNFLGNBQUE7QUNjRjtBRFpBO0VBRUksK0RBQUE7QUNjSjtBRFpBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2VGO0FEYkE7RUFDRSxhQUFBO0FDZ0JGO0FEZEE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNpQkY7QURmQTtFQUNFLG1CQUFBO0FDa0JGO0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLCtEQUFBO0VBRUEsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNpQkY7QURmQTs7RUFFRSxhQUFBO0FDa0JGO0FEaEJBOzs7OztFQUtFLG9CQUFBO0VBQ0EsV0FBQTtBQ21CRjtBRGZBO0VBRUUsNENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDRCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQyxpQkFBQTtFQUNBLCtEQUFBO0VBR0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNlSiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lZGlzcGxheS9tZWRpY2luZWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1GaXJhK1NhbnM6NDAwLDUwMCw2MDAsNzAwLDgwMFwiKTtcclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNjA1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxufVxyXG4uYmxvZy1jYXJke1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgbWF4LXdpZHRoOiA4NTBweDtcclxuICAvLyBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSgyNTIsNTYsNTYsLjMpO1xyXG59XHJcblxyXG4uaW5uZXItcGFydHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAyNXB4O1xyXG59XHJcbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRyYW5zaXRpb246IC4xcyBlYXNlLWluO1xyXG59XHJcbi5pbm5lci1wYXJ0IC5pbWd7XHJcbiAgaGVpZ2h0OiAyNjBweDtcclxuICB3aWR0aDogMjYwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJveC1zaGFkb3c6IDJweCAzcHggMTVweCByZ2JhKDI1Miw1Niw1NiwuMSk7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZ3tcclxuICBoZWlnaHQ6IDM3MHB4O1xyXG4gIHdpZHRoOiA4NTBweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IC4zcyAuMnMgZWFzZS1pbjtcclxufVxyXG4uaW1nIGltZ3tcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjZzO1xyXG59XHJcbiN0YXAtMTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0xLFxyXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMixcclxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTMsXHJcbiN0YXAtNDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy00LFxyXG4jdGFwLTU6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctNXtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IC4ycztcclxufVxyXG4uY29udGVudHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAzNXB4O1xyXG4gIHdpZHRoOiA1MzBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC42cztcclxufVxyXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0YXAtMTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMSxcclxuI3RhcC0yOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0yLFxyXG4jdGFwLTM6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTMsXHJcbiN0YXAtNDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtNCxcclxuI3RhcC01OmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC01e1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xyXG59XHJcbi5jb250ZW50IHNwYW57XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29sb3I6ICM3Yjc5OTI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMFxyXG59XHJcbi5jb250ZW50IC50aXRsZXtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBkMDkyNTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jb250ZW50IC50ZXh0e1xyXG4gIGNvbG9yOiAjNGU0YTY3O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcbi5jb250ZW50IGJ1dHRvbntcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmMGU2O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XHJcbiAgLy9iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6IzRlNGE2NztcclxufVxyXG4uY29udGVudCBidXR0b246aG92ZXJ7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxufVxyXG4uc2xpZGVyc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gIGxlZnQ6IDY1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgei1pbmRleDogMTI7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLnNsaWRlcnN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2xpZGVycyAudGFwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNsaWRlcnMgLnRhcDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG59XHJcbi5zbGlkZXJzIC50YXA6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IC0xMDAlO1xyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCNmNmIzMjMgMCUsICNmMjNiMjYgNzQlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0YXAtMTpjaGVja2VkIH4gLnNsaWRlcnMgLnRhcC0xOmJlZm9yZSxcclxuI3RhcC0yOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTI6YmVmb3JlLFxyXG4jdGFwLTM6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMzpiZWZvcmUsXHJcbiN0YXAtNDpjaGVja2VkIH4gLnNsaWRlcnMgLnRhcC00OmJlZm9yZSxcclxuI3RhcC01OmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTU6YmVmb3Jle1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLnN1Ym1pdC1idG5cclxue1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG5cdHdpZHRoOiAzMCU7XHJcblx0cGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xyXG5cdC8vYmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcclxuLy9iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHhcclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUZpcmErU2Fuczo0MDAsNTAwLDYwMCw3MDAsODAwXCIpO1xuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDYwNXB4O1xuICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxuXG4uYmxvZy1jYXJkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDg1MHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDUwcHggcmdiYSgyNTIsIDU2LCA1NiwgMC4zKTtcbn1cblxuLmlubmVyLXBhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IHtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xufVxuXG4uaW5uZXItcGFydCAuaW1nIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDI2MHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm94LXNoYWRvdzogMnB4IDNweCAxNXB4IHJnYmEoMjUyLCA1NiwgNTYsIDAuMSk7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWcge1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogODUwcHg7XG4gIHotaW5kZXg6IDk5O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIDAuMnMgZWFzZS1pbjtcbn1cblxuLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMSxcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0yLFxuI3RhcC0zOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTMsXG4jdGFwLTQ6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctNCxcbiN0YXAtNTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy01IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHggMCAzNXB4O1xuICB3aWR0aDogNTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0YXAtMTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMSxcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMixcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMyxcbiN0YXAtNDpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtNCxcbiN0YXAtNTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtNSB7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmNvbnRlbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzdiNzk5MjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGQwOTI1O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudCAudGV4dCB7XG4gIGNvbG9yOiAjNGU0YTY3O1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNvbnRlbnQgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmMGU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNGU0YTY3O1xufVxuXG4uY29udGVudCBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XG59XG5cbi5zbGlkZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDY1JTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiAxMjtcbn1cblxuI2ltZ1RhcDpjaGVja2VkIH4gLnNsaWRlcnMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2xpZGVycyAudGFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBtYXJnaW46IDAgM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXJzIC50YXA6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xufVxuXG4uc2xpZGVycyAudGFwOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAtMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG59XG5cbmlucHV0W3R5cGU9cmFkaW9dLFxuaW5wdXRbdHlwZT1jaGVja2JveF0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jdGFwLTE6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMTpiZWZvcmUsXG4jdGFwLTI6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMjpiZWZvcmUsXG4jdGFwLTM6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMzpiZWZvcmUsXG4jdGFwLTQ6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtNDpiZWZvcmUsXG4jdGFwLTU6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtNTpiZWZvcmUge1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtaXQtYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMzAlO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNDAwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicinedisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-medicinedisplay',
          templateUrl: './medicinedisplay.component.html',
          styleUrls: ['./medicinedisplay.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/needdisplay/needdisplay.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/needdisplay/needdisplay.component.ts ***!
    \******************************************************/

  /*! exports provided: NeeddisplayComponent */

  /***/
  function srcAppNeeddisplayNeeddisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeeddisplayComponent", function () {
      return NeeddisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");

    var NeeddisplayComponent = /*#__PURE__*/function () {
      function NeeddisplayComponent(as, loc, route, member) {
        _classCallCheck(this, NeeddisplayComponent);

        this.as = as;
        this.loc = loc;
        this.route = route;
        this.member = member;
        this.details = {
          Name: "",
          Address: "",
          Contact: NaN,
          ContactTwo: NaN,
          Email: ""
        };
      }

      _createClass(NeeddisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['id']); // console.log(res);

            _this6.id = res['id'];

            _this6.member.getneedplasmabyId(_this6.id).subscribe(function (res) {
              console.log(res);
              _this6.details = res;
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }, {
        key: "back",
        value: function back() {
          this.loc.back();
        }
      }]);

      return NeeddisplayComponent;
    }();

    NeeddisplayComponent.ɵfac = function NeeddisplayComponent_Factory(t) {
      return new (t || NeeddisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]));
    };

    NeeddisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NeeddisplayComponent,
      selectors: [["app-needdisplay"]],
      decls: 56,
      vars: 8,
      consts: [["lang", "en", "dir", "ltr"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "blog-card"], ["type", "radio", "name", "select", "id", "tap-1", "checked", ""], ["type", "radio", "name", "select", "id", "tap-2"], ["type", "radio", "name", "select", "id", "tap-3"], ["type", "checkbox", "id", "imgTap"], [1, "sliders"], ["for", "tap-1", 1, "tap", "tap-1"], ["for", "tap-2", 1, "tap", "tap-2"], ["for", "tap-3", 1, "tap", "tap-3"], [1, "inner-part"], ["for", "imgTap", 1, "img"], ["src", "/assets/plasma.jpeg", 1, "img-1"], [1, "content", "content-1"], [1, "title"], [1, "text"], [1, "fa", "fa-map-marker", 2, "font-size", "36px"], ["src", "/assets/plasma.jpeg", 1, "img-2"], [1, "content", "content-2"], ["tyle", "font-size:48px", 1, "fa", "fa-phone"], ["src", "/assets/plasma.jpeg", 1, "img-3"], [1, "content", "content-3"], ["tyle", "font-size:48px", 1, "fa", "fa-envelope"], ["target", "_blank", 3, "href"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function NeeddisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NeeddisplayComponent_Template_button_click_54_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Contact);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.ContactTwo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "mailto:", ctx.details.Email, "?subject=For need of plasma from your hospital", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Email);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 605px;\n  font-family: \"Fira Sans\", sans-serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n.blog-card[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 370px;\n  width: 95%;\n  max-width: 850px;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  border-radius: 25px;\n  background: white;\n  box-shadow: 0px 10px 50px rgba(252, 56, 56, 0.3);\n}\na[_ngcontent-%COMP%] {\n  color: #4e4a67;\n}\n.inner-part[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  height: 360px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 25px;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%] {\n  padding: 0;\n  transition: 0.1s ease-in;\n}\n.inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 260px;\n  width: 260px;\n  flex-shrink: 0;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 2px 3px 15px rgba(252, 56, 56, 0.1);\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 370px;\n  width: 850px;\n  z-index: 99;\n  margin-top: 10px;\n  transition: 0.3s 0.2s ease-in;\n}\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  opacity: 0;\n  transition: 0.6s;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-3[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0 20px 0 35px;\n  width: 530px;\n  margin-left: 50px;\n  opacity: 0;\n  transition: 0.6s;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-3[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin-left: 0px;\n  z-index: 100;\n  transition-delay: 0.3s;\n}\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #7b7992;\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #0d0925;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #4e4a67;\n  font-size: 19px;\n  margin-bottom: 30px;\n  line-height: 1.5em;\n  text-align: justify;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 15px 20px;\n  border: none;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #fff0e6;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #fd3535;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.sliders[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  left: 65%;\n  transform: translateX(-50%);\n  z-index: 12;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%] {\n  display: none;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  width: 50px;\n  background: #d9d9d9;\n  border-radius: 5px;\n  display: inline-flex;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:hover {\n  background: #cccccc;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: -100%;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  border-radius: 10px;\n  transform: scaleX(0);\n  transition: transform 0.6s;\n  transform-origin: left;\n}\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-1[_ngcontent-%COMP%]:before, #tap-2[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-2[_ngcontent-%COMP%]:before, #tap-3[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-3[_ngcontent-%COMP%]:before {\n  transform: scaleX(1);\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 300;\n  font-size: 20px;\n  width: 30%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 400px;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmVlZGRpc3BsYXkvRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxcbmVlZGRpc3BsYXlcXG5lZWRkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uZWVkZGlzcGxheS9uZWVkZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDREQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7QUNFRjtBREFBO0VBQ0UsY0FBQTtBQ0dGO0FEREE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNJRjtBREZBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FDS0Y7QURIQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ01GO0FESkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDT0Y7QURMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNRRjtBRE5BOzs7RUFHRSxVQUFBO0VBQ0Esc0JBQUE7QUNTRjtBRFBBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNVRjtBRFJBO0VBQ0UsYUFBQTtBQ1dGO0FEVEE7OztFQUdFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1lGO0FEVkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDYUY7QURYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2NGO0FEWkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2VGO0FEYkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsK0RBQUE7QUNlRjtBRGJBO0VBRUksK0RBQUE7QUNlSjtBRGJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2dCRjtBRGRBO0VBQ0UsYUFBQTtBQ2lCRjtBRGZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDa0JGO0FEaEJBO0VBQ0UsbUJBQUE7QUNtQkY7QURqQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsK0RBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ2tCRjtBRGhCQTs7RUFFRSxhQUFBO0FDbUJGO0FEakJBOzs7RUFHRSxvQkFBQTtFQUNBLFdBQUE7QUNvQkY7QURoQkE7RUFFRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNELFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNDLGlCQUFBO0VBQ0EsK0RBQUE7RUFHRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL25lZWRkaXNwbGF5L25lZWRkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zOjQwMCw1MDAsNjAwLDcwMCw4MDBcIik7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbn1cclxuLmJsb2ctY2FyZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1heC13aWR0aDogODUwcHg7XHJcbiAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IHJnYmEoMjUyLDU2LDU2LC4zKTtcclxufVxyXG5he1xyXG4gIGNvbG9yOiM0ZTRhNjc7XHJcbn1cclxuLmlubmVyLXBhcnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbjtcclxufVxyXG4uaW5uZXItcGFydCAuaW1ne1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDE1cHggcmdiYSgyNTIsNTYsNTYsLjEpO1xyXG59XHJcbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWd7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAuM3MgLjJzIGVhc2UtaW47XHJcbn1cclxuLmltZyBpbWd7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC42cztcclxufVxyXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMSxcclxuI3RhcC0yOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTIsXHJcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0ze1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDM1cHg7XHJcbiAgd2lkdGg6IDUzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjZzO1xyXG59XHJcbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3RhcC0xOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0xLFxyXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTIsXHJcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtM3tcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IC4zcztcclxufVxyXG4uY29udGVudCBzcGFue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjN2I3OTkyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDBcclxufVxyXG4uY29udGVudCAudGl0bGV7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZDA5MjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY29udGVudCAudGV4dHtcclxuICBjb2xvcjogIzRlNGE2NztcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY29udGVudCBidXR0b257XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjBlNjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmQzNTM1O1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxufVxyXG4uY29udGVudCBidXR0b246aG92ZXJ7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxufVxyXG4uc2xpZGVyc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gIGxlZnQ6IDY1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgei1pbmRleDogMTI7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLnNsaWRlcnN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2xpZGVycyAudGFwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNsaWRlcnMgLnRhcDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG59XHJcbi5zbGlkZXJzIC50YXA6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IC0xMDAlO1xyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCNmNmIzMjMgMCUsICNmMjNiMjYgNzQlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0YXAtMTpjaGVja2VkIH4gLnNsaWRlcnMgLnRhcC0xOmJlZm9yZSxcclxuI3RhcC0yOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTI6YmVmb3JlLFxyXG4jdGFwLTM6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMzpiZWZvcmV7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc3VibWl0LWJ0blxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XHJcblx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTcyO1xyXG4vL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zOjQwMCw1MDAsNjAwLDcwMCw4MDBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbi5ibG9nLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzcwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogODUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCByZ2JhKDI1MiwgNTYsIDU2LCAwLjMpO1xufVxuXG5hIHtcbiAgY29sb3I6ICM0ZTRhNjc7XG59XG5cbi5pbm5lci1wYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCB7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbn1cblxuLmlubmVyLXBhcnQgLmltZyB7XG4gIGhlaWdodDogMjYwcHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggMTVweCByZ2JhKDI1MiwgNTYsIDU2LCAwLjEpO1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nIHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgd2lkdGg6IDg1MHB4O1xuICB6LWluZGV4OiA5OTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyAwLjJzIGVhc2UtaW47XG59XG5cbi5pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC42cztcbn1cblxuI3RhcC0xOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTEsXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMixcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0zIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHggMCAzNXB4O1xuICB3aWR0aDogNTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0YXAtMTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMSxcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMixcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMyB7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmNvbnRlbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzdiNzk5MjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGQwOTI1O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudCAudGV4dCB7XG4gIGNvbG9yOiAjNGU0YTY3O1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNvbnRlbnQgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmMGU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbn1cblxuLmNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xufVxuXG4uc2xpZGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNXB4O1xuICBsZWZ0OiA2NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTI7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5zbGlkZXJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlcnMgLnRhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVycyAudGFwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbn1cblxuLnNsaWRlcnMgLnRhcDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogLTEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhcC0xOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTE6YmVmb3JlLFxuI3RhcC0yOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTI6YmVmb3JlLFxuI3RhcC0zOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTM6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NeeddisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-needdisplay',
          templateUrl: './needdisplay.component.html',
          styleUrls: ['./needdisplay.component.scss']
        }]
      }], function () {
        return [{
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_4__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/plasmalist/plasmalist.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/plasmalist/plasmalist.component.ts ***!
    \****************************************************/

  /*! exports provided: PlasmalistComponent */

  /***/
  function srcAppPlasmalistPlasmalistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlasmalistComponent", function () {
      return PlasmalistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PlasmalistComponent_li_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlasmalistComponent_li_43_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var indexOfelement_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick(indexOfelement_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexOfelement_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.member.needplasma[indexOfelement_r2].Name, ", ", ctx_r0.member.needplasma[indexOfelement_r2].City, "");
      }
    }

    var PlasmalistComponent = /*#__PURE__*/function () {
      function PlasmalistComponent(router, as, member) {
        _classCallCheck(this, PlasmalistComponent);

        this.router = router;
        this.as = as;
        this.member = member;
      }

      _createClass(PlasmalistComponent, [{
        key: "onClick",
        value: function onClick(indexOfelement) {
          for (this.i = 0; this.i <= indexOfelement; this.i++) {
            console.log(this.member.needplasma[this.i].id);
            var url = '/needdisplay/' + this.member.needplasma[this.i].id;
            this.router.navigateByUrl(url);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.member.getneedplasma();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }, {
        key: "search",
        value: function search() {
          if (this.city == "All Cities" || this.city == "") {
            this.member.getneedplasma();
          } else {
            this.member.getneedplasmacities(this.city);
          }
        }
      }]);

      return PlasmalistComponent;
    }();

    PlasmalistComponent.ɵfac = function PlasmalistComponent_Factory(t) {
      return new (t || PlasmalistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]));
    };

    PlasmalistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlasmalistComponent,
      selectors: [["app-plasmalist"]],
      decls: 44,
      vars: 2,
      consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"], [1, "navbars"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], ["ngNativeValidate", ""], ["placeholder", "Enter Your City", "type", "text", "list", "city", "name", "city", "required", "", 3, "ngModel", "ngModelChange"], ["id", "city"], ["value", "All Cities"], ["value", "Udaipur"], ["value", "Ajmer"], ["value", "Jaipur"], ["value", "Bhilwara"], ["value", "Jaisalmer"], ["value", "Jodhpur"], ["value", "Chittorgarh"], ["value", "Bikaner"], ["value", "Kota"], ["type", "submit", 1, "buttonk", 3, "click"], [1, "gradient-list"], [3, "click", 4, "ngFor", "ngForOf"]],
      template: function PlasmalistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlasmalistComponent_Template_a_click_21_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Hospitals where you can get Plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlasmalistComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "datalist", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlasmalistComponent_Template_button_click_39_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ol", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, PlasmalistComponent_li_43_Template, 2, 2, "li", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.member.needplasma);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);\n\n\n\n\n\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n}\nheader[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  width: 100%;\n  height: 40px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: black;\n  align-content: center;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\nmain[_ngcontent-%COMP%] {\n  padding: calc(var(--heading-height) + 1.5vw) 4em 0;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  color: #050505;\n  font-family: \"Raleway\", sans-serif;\n}\nmain[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 1rem;\n}\n.icon[_ngcontent-%COMP%] {\n  color: black;\n  margin-right: 6px;\n  display: inline;\n}\n.fl_inst2[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  margin-left: 366px;\n  margin-right: auto;\n  color: black;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  border-radius: 7px;\n  position: relative;\n  display: inline-block;\n  height: 3rem;\n  width: 606px;\n  text-align: center;\n  font-size: 25px;\n  line-height: 50px;\n  vertical-align: middle;\n  background: white;\n  overflow: hidden;\n}\n.fl_inst2[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  transition: 0.5s;\n}\n.fl_inst2[_ngcontent-%COMP%]:hover {\n  transform: rotateX(360deg);\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%] {\n  counter-reset: gradient-counter;\n  list-style: none;\n  margin: 1.75rem 0;\n  padding-left: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  counter-increment: gradient-counter;\n  margin-top: 1rem;\n  min-height: 3rem;\n  padding: 1rem 1rem 1rem 3rem;\n  position: relative;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, ol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);\n  border-radius: 1rem 1rem 0 1rem;\n  content: \"\";\n  height: 3rem;\n  left: -1rem;\n  overflow: hidden;\n  position: absolute;\n  top: -1rem;\n  width: 3rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  align-items: flex-end;\n  content: counter(gradient-counter);\n  color: #1d1f20;\n  display: flex;\n  font: 900 1.5em/1 \"Montserrat\";\n  justify-content: flex-end;\n  padding: 0.125em 0.25em;\n  z-index: 1;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.navbars[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%], textarea[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 300px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n.buttonk[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 20px;\n  margin-left: 10px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n.buttonk[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhc21hbGlzdC9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFxwbGFzbWFsaXN0XFxwbGFzbWFsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGFzbWFsaXN0L3BsYXNtYWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNRLDZGQUFBO0FBRFIsVUFBQTtBQUtBLGNBQUE7QUFDQSxXQUFBO0FBUUEsV0FBQTtBQUNBLGVBQUE7QUFDQTtFQUNFLDhGQUFBO0FDVEY7QURXQTtFQUNJLDREQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNSSjtBRFVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUNQSjtBRFNBO0VBQ0Msa0RBQUE7QUNORDtBRFNBLFVBQUE7QUFDQTs7O0VBR0Usc0JBQUE7QUNORjtBRFNBOztFQUVFLFNBQUE7RUFDQSxVQUFBO0FDTkY7QURTQTtFQUNFLGVBQUE7QUNORjtBRFFBO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7QUNMRjtBRFFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNMRjtBRE9BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0pKO0FETUE7RUFDSSxnQkFBQTtFQUNBLDhGQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRFVFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUEo7QURTRTtFQUlFLDBCQUFBO0VBQ0QsNERBQUE7QUNQSDtBRFVBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFFFO0VBQ0UsaUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDhGQUFBO0VBQ0EsbUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ05KO0FET0k7RUFFRSw2REFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTk47QURRSTtFQUNFLHFCQUFBO0VBRUEsa0NBQUE7RUFDQSxjQWhJRTtFQWlJRixhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQ1BOO0FEV007RUFDRSw0REFBQTtBQ1RSO0FEUU07RUFDRSw0REFBQTtBQ05SO0FES007RUFDRSw0REFBQTtBQ0hSO0FERU07RUFDRSw0REFBQTtBQ0FSO0FERE07RUFDRSw0REFBQTtBQ0dSO0FEQ1E7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNDWjtBREhRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDS1o7QURQUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ1NaO0FEWFE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNhWjtBRGZRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDaUJaO0FEYk07RUFDRSw0REFBQTtBQ2VSO0FEaEJNO0VBQ0UsNERBQUE7QUNrQlI7QURuQk07RUFDRSw0REFBQTtBQ3FCUjtBRHRCTTtFQUNFLDREQUFBO0FDd0JSO0FEekJNO0VBQ0UsNERBQUE7QUMyQlI7QUR2QlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUN5Qlo7QUQzQlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUM2Qlo7QUQvQlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNpQ1o7QURuQ1E7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNxQ1o7QUR2Q1E7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUN5Q1o7QUR0Q0k7RUFDRSxnQkFBQTtBQ3dDTjtBRDNCQTtFQUNFLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQzhCRjtBRDNCQSw0QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDOEJGO0FEM0JBLDJCQUFBO0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUM4QkY7QUQzQkEsb0JBQUE7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDZ0NiO0FEN0JBLHdEQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ2dDRjtBRDdCQSx5Q0FBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ2dDRjtBRDlCQTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtBQ2lDRjtBRC9CQSw4QkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDa0NGO0FEL0JBLDJEQUFBO0FBQ0E7RUFDRSxzQkFBQTtBQ2tDRjtBRDlCQSxvQ0FBQTtBQUNBO0VBQ0UsY0FBQTtBQ2lDRjtBRDlCQTs7Ozs7Ozs7Ozs7O0VBWUUsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0FDaUNGO0FEOUJBO0VBQ0EsZ0JBQUE7RUFFRSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0YsYUFBQTtFQUNBLGtCQUFBO0VBQ0UsbURBQUE7QUNnQ0Y7QUQ5QkE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDaUNKIiwiZmlsZSI6InNyYy9hcHAvcGxhc21hbGlzdC9wbGFzbWFsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRk9OVFMgKi9cclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJhbGV3YXk6NDAwLDQwMGksNzAwLDcwMGkpO1xyXG5cclxuXHJcblxyXG4vKiBWQVJJQUJMRVMgKi9cclxuLyogQ29sb3JzICovXHJcbiRibGFjazogIzFkMWYyMDtcclxuJGJsdWU6ICM4M2U0ZTI7XHJcbiRncmVlbjogI2EyZWQ1NjtcclxuJHllbGxvdzogI2ZkZGMzMjtcclxuJHdoaXRlOiAjZmFmYWZhO1xyXG5cclxuXHJcbi8qIEVYVEVORCAqL1xyXG4vKiBib3gtc2hhZG93ICovXHJcbiVib3hzaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLDAsMCwwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwwLDAsMC4wNSk7XHJcbn1cclxuaGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbmgxe1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxubWFpbiB7XHJcblx0cGFkZGluZzogY2FsYyh2YXIoLS1oZWFkaW5nLWhlaWdodCkgKyAxLjV2dykgNGVtIDA7XHJcbn1cclxuXHJcbi8qIFNUWUxFICovXHJcbiosXHJcbio6YmVmb3JlLFxyXG4qOmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmZsb3JhbHdoaXRlO1xyXG4gIGNvbG9yOiMwNTA1MDU7XHJcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiA0MHJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi5pY29ue1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmZsX2luc3Qye1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLDAsMCwwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwwLDAsMC4wNSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMzY2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogR2VvcmdpYSwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOjYwNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuXHJcblxyXG4gIFxyXG4gIC5mbF9pbnN0MiBzcGFuIHtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogLjVzfVxyXG4gIFxyXG4gIC5mbF9pbnN0Mjpob3ZlciB7XHJcbiAgICAvLyAgIC9Ib3ZlckVmZmVjdC9cclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMzYwZGVnKTtcclxuICAgYmFja2dyb3VuZDogIGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSlcclxuICB9XHJcblxyXG5vbC5ncmFkaWVudC1saXN0IHtcclxuICBjb3VudGVyLXJlc2V0OiBncmFkaWVudC1jb3VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAxLjc1cmVtIDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gID4gbGkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsMCwwLDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LDAsMCwwLjA1KTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBncmFkaWVudC1jb3VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkYmx1ZSAwJSwkZ3JlZW4gMTAwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDFyZW07XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgIGxlZnQ6IC0xcmVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTFyZW07XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBAZXh0ZW5kICVib3hzaGFkb3c7XHJcbiAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoZ3JhZGllbnQtY291bnRlcik7XHJcbiAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZvbnQ6IDkwMCAxLjVlbS8xICdNb250c2VycmF0JztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW07XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1IHtcclxuICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgQGZvciAkaSBmcm9tIDYgdGhyb3VnaCAxMCB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEwbisjeyRpfSk6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAZm9yICRpIGZyb20gNiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAmOm50aC1jaGlsZCgxMG4rI3skaX0pOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICArIGxpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gb2wuZ3JhZGllbnQtbGlzdHtcclxuLy8gICBsaTpob3ZlcntcclxuLy8gICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbi8vICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcblxyXG5cclxuXHJcbi5uYXZiYXJzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbi5uYXZiYXJzIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uZHJvcGRvd24gLmRyb3BidG4ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogcmdiKDE0LCAxLCAxKTtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbiAgbWFyZ2luOiAwOyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxufVxyXG5cclxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXHJcbi5uYXZiYXJzIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmRyb3BidG46aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gXHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXSxcclxuaW5wdXRbdHlwZT1cImRhdGVcIl0sXHJcbmlucHV0W3R5cGU9XCJkYXRldGltZVwiXSxcclxuaW5wdXRbdHlwZT1cImVtYWlsXCJdLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdLFxyXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdLFxyXG5pbnB1dFt0eXBlPVwidGVsXCJdLFxyXG5pbnB1dFt0eXBlPVwidGltZVwiXSxcclxuaW5wdXRbdHlwZT1cInVybFwiXSxcclxudGV4dGFyZWEsXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gIGNvbG9yOiAjM2M0NzRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uayB7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbmJvcmRlcjogYmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSkgaW5zZXQ7XHJcbn1cclxuLmJ1dHRvbms6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYig1NywgMTk0LCA1Nyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iLCIvKiBGT05UUyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJhbGV3YXk6NDAwLDQwMGksNzAwLDcwMGkpO1xuLyogVkFSSUFCTEVTICovXG4vKiBDb2xvcnMgKi9cbi8qIEVYVEVORCAqL1xuLyogYm94LXNoYWRvdyAqL1xub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsIDAsIDAsIDAuMDUpO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1oZWFkaW5nLWhlaWdodCkgKyAxLjV2dykgNGVtIDA7XG59XG5cbi8qIFNUWUxFICovXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgY29sb3I6ICMwNTA1MDU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5mbF9pbnN0MiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwgMCwgMCwgMC4wNSk7XG4gIG1hcmdpbi1sZWZ0OiAzNjZweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDYwNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZmxfaW5zdDIgc3BhbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uZmxfaW5zdDI6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGVYKDM2MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgzNjBkZWcpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbm9sLmdyYWRpZW50LWxpc3Qge1xuICBjb3VudGVyLXJlc2V0OiBncmFkaWVudC1jb3VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDEuNzVyZW0gMDtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMC41cmVtIDAuNXJlbSAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDAuMjVyZW0gMC4yNXJlbSAwLjZyZW0gcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAwLjVyZW0gMS4xMjVyZW0gcmdiYSg3NSwgMCwgMCwgMC4wNSk7XG4gIGNvdW50ZXItaW5jcmVtZW50OiBncmFkaWVudC1jb3VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBtaW4taGVpZ2h0OiAzcmVtO1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6OmJlZm9yZSwgb2wuZ3JhZGllbnQtbGlzdCA+IGxpOjphZnRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4M2U0ZTIgMCUsICNhMmVkNTYgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDFyZW07XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogM3JlbTtcbiAgbGVmdDogLTFyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMXJlbTtcbiAgd2lkdGg6IDNyZW07XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6OmJlZm9yZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgY29udGVudDogY291bnRlcihncmFkaWVudC1jb3VudGVyKTtcbiAgY29sb3I6ICMxZDFmMjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQ6IDkwMCAxLjVlbS8xIFwiTW9udHNlcnJhdFwiO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwLjEyNWVtIDAuMjVlbTtcbiAgei1pbmRleDogMTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzEpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzIpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzMpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzQpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzUpOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzEpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisyKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMyk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzQpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis1KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNik6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNyk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rOCk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rOSk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMTApOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzYpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis3KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rOCk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzkpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxMCk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaSArIGxpIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm5hdmJhcnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXJzIGEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xuLmRyb3Bkb3duIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xuLmRyb3Bkb3duIC5kcm9wYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMGUwMTAxO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXG4ubmF2YmFycyBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuLyogU2hvdyB0aGUgZHJvcGRvd24gbWVudSBvbiBob3ZlciAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcbmlucHV0W3R5cGU9ZGF0ZV0sXG5pbnB1dFt0eXBlPWRhdGV0aW1lXSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT1udW1iZXJdLFxuaW5wdXRbdHlwZT1zZWFyY2hdLFxuaW5wdXRbdHlwZT10ZWxdLFxuaW5wdXRbdHlwZT10aW1lXSxcbmlucHV0W3R5cGU9dXJsXSxcbnRleHRhcmVhLFxuc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZWVlZjtcbiAgY29sb3I6ICMzYzQ3NGU7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjAzKSBpbnNldDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5idXR0b25rIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogODVweDtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgYm9yZGVyOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgaW5zZXQ7XG59XG5cbi5idXR0b25rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMzljMjM5O1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlasmalistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plasmalist',
          templateUrl: './plasmalist.component.html',
          styleUrls: ['./plasmalist.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/plasmaoption/plasmaoption.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/plasmaoption/plasmaoption.component.ts ***!
    \********************************************************/

  /*! exports provided: PlasmaoptionComponent */

  /***/
  function srcAppPlasmaoptionPlasmaoptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PlasmaoptionComponent", function () {
      return PlasmaoptionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");

    var PlasmaoptionComponent = /*#__PURE__*/function () {
      function PlasmaoptionComponent(router, as) {
        _classCallCheck(this, PlasmaoptionComponent);

        this.router = router;
        this.as = as;
      }

      _createClass(PlasmaoptionComponent, [{
        key: "donor",
        value: function donor() {
          this.router.navigateByUrl('/donorlist');
        }
      }, {
        key: "plasma",
        value: function plasma() {
          this.router.navigateByUrl('/plasmalist');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return PlasmaoptionComponent;
    }();

    PlasmaoptionComponent.ɵfac = function PlasmaoptionComponent_Factory(t) {
      return new (t || PlasmaoptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    PlasmaoptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PlasmaoptionComponent,
      selectors: [["app-plasmaoption"]],
      decls: 88,
      vars: 0,
      consts: [[2, "background-color", "floralwhite"], [1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "container"], [1, "card", 3, "click"], [1, "pic"], [1, "card", "card2", 3, "click"]],
      template: function PlasmaoptionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlasmaoptionComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "What are you looking for?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlasmaoptionComponent_Template_div_click_28_listener() {
            return ctx.donor();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Donate Plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Save Lives");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlasmaoptionComponent_Template_div_click_57_listener() {
            return ctx.plasma();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Need Plasma");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Don't loose will to live");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  overflow: hidden;\n  overflow-y: hidden;\n}\n\ni[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 18px;\n  color: #fff;\n  will-change: transform;\n  transform: scale(0.1);\n  transition: all 0.2s ease;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  text-align: center;\n  justify-content: center;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\nh2[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  margin: 0px;\n  overflow: hidden;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 0px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n  width: 500px;\n  height: 200px;\n  background: white;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:before {\n  content: \"\";\n  z-index: 99;\n  position: absolute;\n  top: -10px;\n  left: 32px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  z-index: 99;\n  position: absolute;\n  bottom: -10px;\n  left: 32px;\n  display: block;\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: absolute;\n  left: 39px;\n  top: 5px;\n  list-style-type: none;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 2px;\n  border-radius: 2px;\n  margin: 6px 0;\n  background-color: #fff;\n  color: black;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  z-index: 99;\n  font-family: \"Times New Roman\", Times, serif;\n  position: absolute;\n  bottom: 0;\n  right: 130px;\n  font-size: 40px;\n  font-weight: 600;\n  color: black;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .fa-arrow-right[_ngcontent-%COMP%] {\n  z-index: 100;\n  position: absolute;\n  right: 75px;\n  bottom: 25px;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  z-index: 99;\n  position: absolute;\n  top: 20px;\n  right: 70px;\n  color: black;\n  opacity: 0.7;\n  font-size: 15px;\n  letter-spacing: 1px;\n  writing-mode: vertical-lr;\n  transition: all 0.2s ease;\n  font-weight: 600;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  z-index: 100;\n  width: 400px;\n  height: 200px;\n  background-image: url(/assets/donation2.jpg);\n  background-size: 100% 100%;\n  filter: grayscale(20%);\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 60px;\n  top: 0;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  width: 180px;\n  height: 64px;\n  border-radius: 80px;\n  color: black;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-of-type(1) {\n  transition-delay: 0.4s;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-of-type(2) {\n  transition-delay: 0.3s;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-of-type(3) {\n  transition-delay: 0.2s;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-of-type(4) {\n  transition-delay: 0.1s;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14px;\n  bottom: 14px;\n  width: 30px;\n  height: 30px;\n  background-color: #fff;\n  border: none;\n  border-radius: 30px;\n  cursor: pointer;\n  outline: none;\n  transition: all 0.3s ease;\n  mix-blend-mode: hard-light;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n\n.container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .pic[_ngcontent-%COMP%] {\n  filter: grayscale(0);\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%]   .card2[_ngcontent-%COMP%]   .pic[_ngcontent-%COMP%] {\n  background-image: url(/assets/donation.jpg);\n}\n\n.container[_ngcontent-%COMP%]   .card2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.dr[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  width: 100px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhc21hb3B0aW9uL0U6XFxOZXcgZm9sZGVyXFxQaGFybWFjeU1hbmFnZW1lbnQvc3JjXFxhcHBcXHBsYXNtYW9wdGlvblxccGxhc21hb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGFzbWFvcHRpb24vcGxhc21hb3B0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURPQTtFQUNFLFVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEscUJBQUE7RUFFQSx5QkFBQTtBQ0pGOztBRE1BO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0REFBQTtBQ0hKOztBREtBO0VBQ0Usb0JBQUE7QUNGRjs7QURLQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFFRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1JO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNKTjs7QURPSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDTE47O0FEUUk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0FDTk47O0FET007RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQXhGRDtFQXlGQyxZQUFBO0FDTFI7O0FEUUk7RUFDRSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ05OOztBRFVJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ1JOOztBRFVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtBQ1JOOztBRFVJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDUk47O0FEWUk7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBR0EsYUFBQTtFQUVBLDZCQUFBO0VBR0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ1ZOOztBRGFJO0VBRUUsc0JBQUE7QUNYTjs7QURjSTtFQUVFLHNCQUFBO0FDWk47O0FEZUk7RUFFRSxzQkFBQTtBQ2JOOztBRGdCSTtFQUVFLHNCQUFBO0FDZE47O0FEc0JJO0VBQ0UsZUFBQTtBQ3BCTjs7QURzQkk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkE3TEc7RUE4TEgsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FDcEJOOztBRHNCTTtFQUNFLGVBQUE7QUNwQlI7O0FEZ0NJO0VBQ0Usb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUM5Qk47O0FEbUNJO0VBQ0UsMkNBQUE7QUNqQ047O0FEbUNJO0VBQ0Usc0JBN05DO0FDNExQOztBRHNDQTtFQUNBLGtCQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDbkNGOztBRHdDQTtFQUNFLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQ3JDRjs7QUR3Q0EsNEJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUNyQ0Y7O0FEd0NBLDJCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDckNGOztBRHdDQSxvQkFBQTs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDbkNiOztBRHNDQSx3REFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDbkNGOztBRHVDQSx5Q0FBQTs7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNwQ0Y7O0FEc0NBO0VBQ0UsMEJBQUE7QUNuQ0Y7O0FEcUNBLDhCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbENGOztBRHFDQSwyREFBQTs7QUFDQTtFQUNFLHNCQUFBO0FDbENGOztBRHNDQSxvQ0FBQTs7QUFDQTtFQUNFLGNBQUE7QUNuQ0YiLCJmaWxlIjoic3JjL2FwcC9wbGFzbWFvcHRpb24vcGxhc21hb3B0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJnLWNvbG9yOiAjRTZFNUUxO1xyXG4kc2hkb3ctZ3JheTogI2QzZDNkNTtcclxuJG9yYW5nZTogI2ZmZjtcclxuJGJsdWU6ICNmZmY7XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG5pIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC4xKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxufVxyXG5oMntcclxuICBwb2ludGVyLWV2ZW50czpub25lO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcclxuICBtYXJnaW46IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIGxlZnQ6IDMycHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC0xMHB4O1xyXG4gICAgICBsZWZ0OiAzMnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgICBcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgei1pbmRleDogOTk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMzlweDtcclxuICAgICAgdG9wOiA1cHg7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgbGkge1xyXG4gICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIHJpZ2h0OiAxMzBweDtcclxuICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmZhLWFycm93LXJpZ2h0IHtcclxuICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiA3NXB4O1xyXG4gICAgICBib3R0b206IDI1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjBweDtcclxuICAgICAgcmlnaHQ6IDcwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIHdyaXRpbmctbW9kZTogdmVydGljYWwtbHI7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5waWMge1xyXG4gICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvZG9uYXRpb24yLmpwZyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgyMCUpO1xyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA2MHB4O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCBpOm50aC1vZi10eXBlKDEpIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xyXG4gICAgfVxyXG5cclxuICAgIC5zb2NpYWwgaTpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsIGk6bnRoLW9mLXR5cGUoMykge1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbCBpOm50aC1vZi10eXBlKDQpIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICY6aG92ZXIgaSB7XHJcbiAgICAvLyAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC8vICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC8vIH1cclxuICAgIGE6aG92ZXJ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICAgIGJvdHRvbTogMTRweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgICAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAmOmhvdmVyIGJ1dHRvbiB7XHJcbiAgICAvLyAgIHRyYW5zZm9ybTogc2NhbGUoMTYuNSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gJjpob3ZlciBwIHtcclxuICAgIC8vICAgY29sb3I6ICNmZmY7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgICY6aG92ZXIgLnBpYyB7XHJcbiAgICAgIGZpbHRlcjogZ3JheXNjYWxlKDApO1xyXG4gICAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmNhcmQyIHtcclxuICAgIC5waWMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9kb25hdGlvbi5qcGcpO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZHIge1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxNnB4OyBcclxuICByaWdodDogMTZweDtcclxuICB3aWR0aDoxMDBweDtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2YmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbi5uYXZiYXIgYSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiByZ2IoMTQsIDAsIDApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLyogRHJvcGRvd24gYnV0dG9uICovXHJcbi5kcm9wZG93biAuZHJvcGJ0biB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG59XHJcblxyXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cclxuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxufVxyXG5cclxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4uZHJvcGJ0bjpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuIFxyXG59XHJcblxyXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn0iLCIqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbmkge1xuICBvcGFjaXR5OiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbmgyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmNvbnRhaW5lciAuY2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi5jb250YWluZXIgLmNhcmQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogMzJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY29udGFpbmVyIC5jYXJkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTBweDtcbiAgbGVmdDogMzJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG59XG4uY29udGFpbmVyIC5jYXJkIHVsIHtcbiAgei1pbmRleDogOTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzlweDtcbiAgdG9wOiA1cHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jb250YWluZXIgLmNhcmQgdWwgbGkge1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW46IDZweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29udGFpbmVyIC5jYXJkIGgyIHtcbiAgei1pbmRleDogOTk7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMTMwcHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNvbnRhaW5lciAuY2FyZCAuZmEtYXJyb3ctcmlnaHQge1xuICB6LWluZGV4OiAxMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDc1cHg7XG4gIGJvdHRvbTogMjVweDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udGFpbmVyIC5jYXJkIHAge1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA3MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG9wYWNpdHk6IDAuNztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFpbmVyIC5jYXJkIC5waWMge1xuICB6LWluZGV4OiAxMDA7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvZG9uYXRpb24yLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICBmaWx0ZXI6IGdyYXlzY2FsZSgyMCUpO1xufVxuLmNvbnRhaW5lciAuY2FyZCAuc29jaWFsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA2MHB4O1xuICB0b3A6IDA7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtcGFjazogZGlzdHJpYnV0ZTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA4MHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4uY29udGFpbmVyIC5jYXJkIC5zb2NpYWwgaTpudGgtb2YtdHlwZSgxKSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC40cztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC40cztcbn1cbi5jb250YWluZXIgLmNhcmQgLnNvY2lhbCBpOm50aC1vZi10eXBlKDIpIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuLmNvbnRhaW5lciAuY2FyZCAuc29jaWFsIGk6bnRoLW9mLXR5cGUoMykge1xuICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG4uY29udGFpbmVyIC5jYXJkIC5zb2NpYWwgaTpudGgtb2YtdHlwZSg0KSB7XG4gIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cbi5jb250YWluZXIgLmNhcmQgYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb250YWluZXIgLmNhcmQgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTRweDtcbiAgYm90dG9tOiAxNHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgbWl4LWJsZW5kLW1vZGU6IGhhcmQtbGlnaHQ7XG59XG4uY29udGFpbmVyIC5jYXJkIGJ1dHRvbiBpIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuLmNvbnRhaW5lciAuY2FyZDpob3ZlciAucGljIHtcbiAgZmlsdGVyOiBncmF5c2NhbGUoMCk7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvbnRhaW5lciAuY2FyZDIgLnBpYyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2RvbmF0aW9uLmpwZyk7XG59XG4uY29udGFpbmVyIC5jYXJkMiBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZHIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTZweDtcbiAgcmlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLm5hdmJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIG5hdmJhciAqL1xuLm5hdmJhciBhIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwZTAwMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cbi5kcm9wZG93biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93biAuZHJvcGJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzBlMDEwMTtcbiAgcGFkZGluZzogMTRweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG4gIG1hcmdpbjogMDtcbiAgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXG59XG5cbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWVlO1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wYnRuOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDEwcHggYmxhY2s7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlasmaoptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-plasmaoption',
          templateUrl: './plasmaoption.component.html',
          styleUrls: ['./plasmaoption.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(router, authService) {
        _classCallCheck(this, RegisterComponent);

        this.router = router;
        this.authService = authService;
        this.Name = "";
        this.Email = "";
        this.Password = "";
        this.ConfirmPassword = "";
        this.Phone = "";
        this.msg = '';
        this.errorMessage = '';
        this.error = {
          name: '',
          message: ''
        };
      }

      _createClass(RegisterComponent, [{
        key: "login",
        value: function login() {
          this.router.navigateByUrl('/login');
        }
      }, {
        key: "register",
        value: function register() {
          this.router.navigateByUrl('/register');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          if (this.validateForm(this.Email, this.Password)) {
            this.authService.registerWithEmail(this.Email, this.Password).then(function () {
              _this7.router.navigateByUrl('/home');
            })["catch"](function (_error) {
              _this7.error = _error;

              _this7.router.navigateByUrl('/register');
            });
          }
        }
      }, {
        key: "validateForm",
        value: function validateForm(Email, Password) {
          if (Email.length === 0) {
            this.errorMessage = "please enter email id"; //console.log("please enter email id");

            return false;
          }

          if (Password.length === 0) {
            this.errorMessage = "please enter password"; //console.log("please enter password");

            return false;
          }

          if (Password.length < 6) {
            //this.errorMessage="please enter password";
            console.log("length of password be atleast 6 characters");
            return false;
          }

          this.errorMessage = '';
          return true;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 22,
      vars: 4,
      consts: [[1, "hero"], [1, "formbox"], [1, "button-box"], ["id", "btn"], ["type", "button", 1, "toggle-btn", 3, "click"], ["ngNativeValidate", "", "id", "register", "name", "RegForm", 1, "input-group"], ["type", "text", "autocomplete", "off", "placeholder", "Name", "name", "Name", "required", "", "minlength", "3", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Email", "autocomplete", "off", "name", "Email", "required", "", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "tel", "pattern", "[0-9]{10}", "placeholder", "Mobile no.", "autocomplete", "off", "name", "Phone", "title", "Mobile no. must contain ten digits", "required", "", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "autocomplete", "off", "name", "Password", "required", "", "minlength", "6", 1, "input-field", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login and Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_9_listener() {
            return ctx.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_11_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.Name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.Email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.Phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_17_listener($event) {
            return ctx.Password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_20_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.Password);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"]],
      styles: [".hero[_ngcontent-%COMP%] {\n  width: 1340px;\n  height: 640px;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/assets/Banner2.jpg);\n  background-position: center;\n  position: absolute;\n  margin-left: 0px;\n  background-repeat: no-repeat;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n}\n.formbox[_ngcontent-%COMP%] {\n  width: 380px;\n  height: 480px;\n  position: relative;\n  margin: 4% auto;\n  color: #FFFFFF;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n}\n.button-box[_ngcontent-%COMP%] {\n  width: 220px;\n  margin: 35px auto;\n  position: relative;\n  box-shadow: 0 0 20px 9px #a59be21f;\n  border-radius: 30px;\n}\n.toggle-btn[_ngcontent-%COMP%] {\n  padding: 10px 30px;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  color: #FFFFFF;\n  outline: none;\n  position: relative;\n}\n#btn[_ngcontent-%COMP%] {\n  top: 0;\n  left: 0;\n  margin-left: 100px;\n  position: absolute;\n  width: 120px;\n  height: 100%;\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  border-radius: 30px;\n  transition: 0.5s;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  top: 150px;\n  position: absolute;\n  width: 280px;\n  transition: 0.5s;\n}\n.input-field[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  width: 100%;\n  padding: 10px 0;\n  margin: 5px 0;\n  border-left: 0;\n  border-top: 0;\n  border-right: 0;\n  border-bottom: 1px solid #999;\n  outline: none;\n  background: transparent;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 85%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n.check-box[_ngcontent-%COMP%] {\n  margin: 30px 10px 30px 0;\n}\nspan[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 12px;\n  bottom: 68px;\n  position: absolute;\n}\n#register[_ngcontent-%COMP%] {\n  left: 50px;\n}\n#registre[_ngcontent-%COMP%] {\n  left: 450px;\n}\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7R0FBQTtBQVNBO0VBQ0MsYUFBQTtFQUNBLGFBQUE7RUFDQSxtR0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0FDQ0Q7QURHQTtFQUVDLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUNERDtBREdBO0VBRUMsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0FDREQ7QURHQTtFQUVDLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ0REO0FESUE7RUFFQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRkQ7QURJQTtFQUNDLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDRCxrRUFBQTtFQUVDLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGRDtBRElBOzs7Ozs7Ozs7Ozs7OztHQUFBO0FBZ0JBO0VBRUMsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSEQ7QURLQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQ0ZEO0FESUE7RUFFQyxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNELGtFQUFBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNGSjtBRElBO0VBRUMsd0JBQUE7QUNGRDtBRElBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNERDtBREdBO0VBRUMsVUFBQTtBQ0REO0FER0E7RUFFQyxXQUFBO0FDREQ7QURHQTtFQUNDLGNBQUE7QUNBRCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHRtbCxib2R5e1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNCkscmdiYSgwLDAsMCwwLjQpKSx1cmwoL2Fzc2V0cy9CYW5uZXIuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIFxyXG4gICAgXHJcbn0gKi9cclxuLmhlcm97XHJcblx0d2lkdGg6IDEzNDBweDtcclxuXHRoZWlnaHQ6IDY0MHB4O1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNCkscmdiYSgwLDAsMCwwLjQpKSx1cmwoL2Fzc2V0cy9CYW5uZXIyLmpwZyk7XHJcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRtYXJnaW4tbGVmdDogMHB4IDtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFxyXG59XHJcblxyXG4qXHJcbntcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG59XHJcbi5mb3JtYm94XHJcbntcclxuXHR3aWR0aDogMzgwcHg7XHJcblx0aGVpZ2h0OiA0ODBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7O1xyXG5cdG1hcmdpbjogNCUgYXV0bztcclxuXHRjb2xvcjogI0ZGRkZGRjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcblx0cGFkZGluZzogNXB4XHJcbn1cclxuLmJ1dHRvbi1ib3hcclxue1xyXG5cdHdpZHRoOiAyMjBweDtcclxuXHRtYXJnaW46IDM1cHggYXV0bztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Ym94LXNoYWRvdzogMCAwIDIwcHggOXB4ICNhNTliZTIxZjtcclxuXHRib3JkZXItcmFkaXVzOiAzMHB4O1xyXG5cclxufVxyXG4udG9nZ2xlLWJ0blxyXG57XHJcblx0cGFkZGluZzoxMHB4IDMwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGNvbG9yOiAjRkZGRkZGO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiNidG57XHJcblx0dG9wOjA7XHJcblx0bGVmdDogMDtcclxuXHRtYXJnaW4tbGVmdDogMTAwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAxMjBweDtcclxuXHRoZWlnaHQ6MTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTcyO1xyXG5iYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XHJcblxyXG5cdGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcblx0dHJhbnNpdGlvbjouNXM7XHJcbn1cclxuLyogLnNvY2lhbC1pY29uc1xyXG57XHJcblx0bWFyZ2luOjIwcHggYXV0bztcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGltZ1xyXG57XHJcblx0d2lkdGg6MzBweCA7XHJcblx0bWFyZ2luOiAwIDEycHg7XHJcblx0Ym94LXNoYWRvdzogMCAwIDIwcHggMCAjN2Y3ZjdmM2Q7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSAqL1xyXG5cclxuLmlucHV0LWdyb3VwXHJcbntcclxuXHR0b3A6MTUwcHg7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHdpZHRoOiAyODBweDtcclxuXHR0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLmlucHV0LWZpZWxkXHJcbntjb2xvcjogI0ZGRkZGRjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOjEwcHggMDtcclxuXHRtYXJnaW46IDVweCAwO1xyXG5cdGJvcmRlci1sZWZ0OiAwO1xyXG5cdGJvcmRlci10b3A6MDtcclxuXHRib3JkZXItcmlnaHQ6MDtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7XHJcbn1cclxuLnN1Ym1pdC1idG5cclxue1xyXG5cdHdpZHRoOiA4NSU7XHJcblx0cGFkZGluZzogMTBweCAzMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRtYXJnaW46IGF1dG87XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcclxuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6MDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4XHJcbn1cclxuLmNoZWNrLWJveFxyXG57XHJcblx0bWFyZ2luOiAzMHB4IDEwcHggMzBweCAwO1xyXG59XHJcbnNwYW57XHJcblx0Y29sb3I6ICM3Nzc7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGJvdHRvbTo2OHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG4jcmVnaXN0ZXJcclxue1xyXG5cdGxlZnQ6IDUwcHg7XHJcbn1cclxuI3JlZ2lzdHJlXHJcbntcclxuXHRsZWZ0OiA0NTBweFxyXG59XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuXHRjb2xvcjojRkZGRkZGO1xyXG59XHJcbi8vIDpyZXF1aXJlZHtcclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuXHRcclxuLy8gfSIsIi8qIGh0bWwsYm9keXtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLDAuNCkscmdiYSgwLDAsMCwwLjQpKSx1cmwoL2Fzc2V0cy9CYW5uZXIuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDsgXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuXG59ICovXG4uaGVybyB7XG4gIHdpZHRoOiAxMzQwcHg7XG4gIGhlaWdodDogNjQwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNCksIHJnYmEoMCwgMCwgMCwgMC40KSksIHVybCgvYXNzZXRzL0Jhbm5lcjIuanBnKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4uZm9ybWJveCB7XG4gIHdpZHRoOiAzODBweDtcbiAgaGVpZ2h0OiA0ODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDQlIGF1dG87XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmJ1dHRvbi1ib3gge1xuICB3aWR0aDogMjIwcHg7XG4gIG1hcmdpbjogMzVweCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDlweCAjYTU5YmUyMWY7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi50b2dnbGUtYnRuIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbiNidG4ge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmE3MjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4vKiAuc29jaWFsLWljb25zXG57XG5cdG1hcmdpbjoyMHB4IGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4uc29jaWFsLWljb25zIGltZ1xue1xuXHR3aWR0aDozMHB4IDtcblx0bWFyZ2luOiAwIDEycHg7XG5cdGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgIzdmN2Y3ZjNkO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcbn0gKi9cbi5pbnB1dC1ncm91cCB7XG4gIHRvcDogMTUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI4MHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uaW5wdXQtZmllbGQge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIHdpZHRoOiA4NSU7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTcyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbi5jaGVjay1ib3gge1xuICBtYXJnaW46IDMwcHggMTBweCAzMHB4IDA7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogIzc3NztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3R0b206IDY4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuI3JlZ2lzdGVyIHtcbiAgbGVmdDogNTBweDtcbn1cblxuI3JlZ2lzdHJlIHtcbiAgbGVmdDogNDUwcHg7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjRkZGRkZGO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afu, router) {
        var _this8 = this;

        _classCallCheck(this, AuthService);

        this.afu = afu;
        this.router = router;
        this.signedin = false;
        this.authState = null;
        this.afu.authState.subscribe(function (auth) {
          _this8.authState = auth;

          if (auth.uid) {
            _this8.signedin = true;

            _this8.router.navigateByUrl('/home');
          } else {
            _this8.signedin = false;
          }
        });
      }

      _createClass(AuthService, [{
        key: "registerWithEmail",
        value: function registerWithEmail(Email, Password) {
          var _this9 = this;

          return this.afu.createUserWithEmailAndPassword(Email, Password).then(function (user) {
            _this9.authState = user; // console.log("reg m:"+this.authState)

            _this9.signedin = true;
          })["catch"](function (error) {
            console.log(error);
            throw error;
          });
        }
      }, {
        key: "loginWithEmail",
        value: function loginWithEmail(Email, Password) {
          var _this10 = this;

          return this.afu.signInWithEmailAndPassword(Email, Password).then(function (user) {
            _this10.authState = user; // console.log("login m:"+this.authState)

            _this10.signedin = true;
          })["catch"](function (error) {
            alert(error);
            throw error;
          });
        }
      }, {
        key: "isUserAnonymousLoggedIn",
        get: function get() {
          return this.authState !== null ? this.authState.isAnonymous : false;
        }
      }, {
        key: "currentUserId",
        get: function get() {
          return this.authState !== null ? this.authState.uid : '';
        }
      }, {
        key: "currentUserName",
        get: function get() {
          return this.authState['email'];
        }
      }, {
        key: "currentUser",
        get: function get() {
          return this.authState !== null ? this.authState : null;
        }
      }, {
        key: "isUserEmailLoggedIn",
        get: function get() {
          if (this.authState !== null && !this.isUserAnonymousLoggedIn) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "signout",
        value: function signout() {
          this.signedin = false;
          this.afu.signOut();
          this.router.navigateByUrl('/homescreen');
        }
      }, {
        key: "isUserSignedIn",
        value: function isUserSignedIn() {
          return this.signedin;
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/authguard.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/authguard.service.ts ***!
    \***********************************************/

  /*! exports provided: AuthguardService */

  /***/
  function srcAppServicesAuthguardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthguardService", function () {
      return AuthguardService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthguardService = /*#__PURE__*/function () {
      function AuthguardService(auth, router) {
        _classCallCheck(this, AuthguardService);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthguardService, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.auth.isUserSignedIn()) {
            return true;
          } else {
            this.router.navigateByUrl('/homescreen');
            return false;
          }
        }
      }]);

      return AuthguardService;
    }();

    AuthguardService.ɵfac = function AuthguardService_Factory(t) {
      return new (t || AuthguardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AuthguardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthguardService,
      factory: AuthguardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthguardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/member.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/member.service.ts ***!
    \********************************************/

  /*! exports provided: MemberService */

  /***/
  function srcAppServicesMemberServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberService", function () {
      return MemberService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MemberService = /*#__PURE__*/function () {
      function MemberService(db, router) {
        _classCallCheck(this, MemberService);

        this.db = db;
        this.router = router;
        this.result = [];
        this.vaccinationcenters = [];
        this.donateplasma = [];
        this.needplasma = [];
        this.alldistributors = [];
        this.medicinedistributors = [];
        this.doing = [];
      }

      _createClass(MemberService, [{
        key: "getbedhospitals",
        value: function getbedhospitals() {
          var _this11 = this;

          //console.log(this.auth.loggedinuserid)
          this.db.collection("BedHospitals").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //console.log(res)
            _this11.result = res;
            console.log(_this11.result);
          });
        }
      }, {
        key: "getbedhospitalscities",
        value: function getbedhospitalscities(b) {
          var _this12 = this;

          //console.log(this.auth.loggedinuserid)
          this.db.collection("BedHospitals", function (ref) {
            return ref.where('City', '==', b);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //console.log(res)
            _this12.result = res;
            console.log(_this12.result);
          });
        }
      }, {
        key: "getdonateplasma",
        value: function getdonateplasma() {
          var _this13 = this;

          //console.log(this.auth.loggedinuserid)
          this.db.collection("DonatePlasmaHospitals").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //console.log(res)
            _this13.donateplasma = res;
            console.log(_this13.donateplasma);
          });
        }
      }, {
        key: "getdonateplasmacities",
        value: function getdonateplasmacities(b) {
          var _this14 = this;

          //console.log(this.auth.loggedinuserid)
          this.db.collection("DonatePlasmaHospitals", function (ref) {
            return ref.where('City', '==', b);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //console.log(res)
            _this14.donateplasma = res;
            console.log(_this14.donateplasma);
          });
        }
      }, {
        key: "addHospital",
        value: function addHospital(member) {
          var tempStudent = member;
          tempStudent.Name = member.Name;
          tempStudent.City = member.City;
          tempStudent.Address = member.Address;
          tempStudent.NumberOfEstimatedBedsCovid = member.NumberOfEstimatedBedsCovid;
          tempStudent.Email = member.Email;
          tempStudent.Contact = member.Contact;
          tempStudent.ContactTwo = member.ContactTwo;
          this.db.collection("BedHospitals").add(tempStudent); // alert("Hospital Successfully Added.")
        }
      }, {
        key: "addDistributor",
        value: function addDistributor(member, medicines) {
          var tempStudent = member;
          tempStudent.Name = member.Name;
          tempStudent.City = member.City;
          tempStudent.Address = member.Address;
          tempStudent.MinStock = member.MinStock;
          tempStudent.Email = member.Email;
          tempStudent.Contact = member.Contact;
          tempStudent.ContactTwo = member.ContactTwo;
          tempStudent.Medicines = medicines;
          this.db.collection("Distributors").add(tempStudent); // alert("Distributor Successfully Added.")
        }
      }, {
        key: "addContactForm",
        value: function addContactForm(member) {
          var tempStudent = member;
          tempStudent.FirstName = member.FirstName;
          tempStudent.LastName = member.LastName;
          tempStudent.Message = member.Message;
          tempStudent.Email = member.Email;
          tempStudent.Contact = member.Contact;
          this.db.collection("ContactForm").add(tempStudent); // alert("Distributor Successfully Added.")
        }
      }, {
        key: "getvaccinecenter",
        value: function getvaccinecenter(b) {
          var _this15 = this;

          // console.log(this.auth.loggedinuserid)
          this.db.collection("VaccinationCenters", function (ref) {
            return ref.where('City', '==', b);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            console.log(res);
            _this15.vaccinationcenters = res;
          });
        }
      }, {
        key: "getvaccinecenterwithage",
        value: function getvaccinecenterwithage(b, age) {
          var _this16 = this;

          // console.log(this.auth.loggedinuserid)
          this.db.collection("VaccinationCenters", function (ref) {
            return ref.where('City', '==', b).where('Age', '==', age);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            console.log(res);
            _this16.vaccinationcenters = res;
          });
        }
      }, {
        key: "getdistributors",
        value: function getdistributors(b) {
          var _this17 = this;

          // console.log(this.auth.loggedinuserid)
          this.db.collection("Distributors", function (ref) {
            return ref.where('Medicines', 'array-contains', b);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            console.log(res);
            _this17.alldistributors = res;
          });
        }
      }, {
        key: "getdistributorscities",
        value: function getdistributorscities(b, c) {
          var _this18 = this;

          // console.log(this.auth.loggedinuserid)
          this.db.collection("Distributors", function (ref) {
            return ref.where('Medicines', 'array-contains', b).where('City', '==', c);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            console.log(res);
            _this18.alldistributors = res;
          });
        }
      }, {
        key: "getdistributorsonlybycities",
        value: function getdistributorsonlybycities(c) {
          var _this19 = this;

          // console.log(this.auth.loggedinuserid)
          this.db.collection("Distributors", function (ref) {
            return ref.where('City', '==', c);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            console.log(res);
            _this19.alldistributors = res;
          });
        }
      }, {
        key: "getalldistributors",
        value: function getalldistributors() {
          var _this20 = this;

          // console.log(this.auth.loggedinuserid)
          this.db.collection("Distributors").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            console.log(res);
            _this20.alldistributors = res;
          });
        }
      }, {
        key: "getneedplasma",
        value: function getneedplasma() {
          var _this21 = this;

          //console.log(this.auth.loggedinuserid)
          this.db.collection("NeedPlasmaHospitals").snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //console.log(res)
            _this21.needplasma = res;
            console.log(_this21.needplasma);
          });
        }
      }, {
        key: "getneedplasmacities",
        value: function getneedplasmacities(b) {
          var _this22 = this;

          //console.log(this.auth.loggedinuserid)
          this.db.collection("NeedPlasmaHospitals", function (ref) {
            return ref.where('City', '==', b);
          }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (actions) {
            return actions.map(function (a) {
              var data = a.payload.doc.data();
              var id = a.payload.doc.id;
              return Object.assign({
                id: id
              }, data);
            });
          })).subscribe(function (res) {
            //console.log(res)
            _this22.needplasma = res;
            console.log(_this22.needplasma);
          });
        }
      }, {
        key: "getamountbyId",
        value: function getamountbyId(id) {
          return this.db.collection("BedHospitals").doc(id).valueChanges();
        }
      }, {
        key: "getdonateplasmabyId",
        value: function getdonateplasmabyId(id) {
          return this.db.collection("DonatePlasmaHospitals").doc(id).valueChanges();
        }
      }, {
        key: "getneedplasmabyId",
        value: function getneedplasmabyId(id) {
          return this.db.collection("NeedPlasmaHospitals").doc(id).valueChanges();
        }
      }, {
        key: "getvaccinebyId",
        value: function getvaccinebyId(id) {
          return this.db.collection("VaccinationCenters").doc(id).valueChanges();
        }
      }, {
        key: "getdistributorbyId",
        value: function getdistributorbyId(id) {
          return this.db.collection("Distributors").doc(id).valueChanges();
        }
      }]);

      return MemberService;
    }();

    MemberService.ɵfac = function MemberService_Factory(t) {
      return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MemberService,
      factory: MemberService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vaccine/vaccine.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/vaccine/vaccine.component.ts ***!
    \**********************************************/

  /*! exports provided: VaccineComponent */

  /***/
  function srcAppVaccineVaccineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaccineComponent", function () {
      return VaccineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VaccineComponent_ng_template_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_29_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var a_r18 = ctx.aVariable;

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.vlist(a_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Udaipur and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var a_r18 = ctx.aVariable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r18);
      }
    }

    function VaccineComponent_ng_template_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_33_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

          var b_r21 = ctx.Variable;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.vlist(b_r21);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Jaipur and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var b_r21 = ctx.Variable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r21);
      }
    }

    function VaccineComponent_ng_template_37_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_37_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var c_r24 = ctx.ariable;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.vlist(c_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Ajmer and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r24 = ctx.ariable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r24);
      }
    }

    function VaccineComponent_ng_template_42_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_42_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var d_r27 = ctx.aVariabl;

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.vlist(d_r27);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Kota and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r27 = ctx.aVariabl;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](d_r27);
      }
    }

    function VaccineComponent_ng_template_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_46_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var e_r30 = ctx.aVaiable;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.vlist(e_r30);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Jaisalmer and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var e_r30 = ctx.aVaiable;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](e_r30);
      }
    }

    function VaccineComponent_ng_template_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_50_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var f_r33 = ctx.aVariabe;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.vlist(f_r33);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Bhilwara and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r33 = ctx.aVariabe;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](f_r33);
      }
    }

    function VaccineComponent_ng_template_55_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_55_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var g_r36 = ctx.aVariableo;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r37.vlist(g_r36);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Bikaner and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r36 = ctx.aVariableo;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r36);
      }
    }

    function VaccineComponent_ng_template_59_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_59_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var h_r39 = ctx.aVariableom;

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.vlist(h_r39);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Jodhpur and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var h_r39 = ctx.aVariableom;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](h_r39);
      }
    }

    function VaccineComponent_ng_template_63_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_ng_template_63_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var i_r42 = ctx.aVariableomg;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.vlist(i_r42);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get information about vaccination-camps in Chittorgarh and get registered.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r42 = ctx.aVariableomg;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r42);
      }
    }

    var _c0 = function _c0() {
      return {
        aVariable: "Udaipur"
      };
    };

    var _c1 = function _c1() {
      return {
        Variable: "Jaipur"
      };
    };

    var _c2 = function _c2() {
      return {
        ariable: "Ajmer"
      };
    };

    var _c3 = function _c3() {
      return {
        aVariabl: "Kota"
      };
    };

    var _c4 = function _c4() {
      return {
        aVaiable: "Jaisalmer"
      };
    };

    var _c5 = function _c5() {
      return {
        aVariabe: "Bhilwara"
      };
    };

    var _c6 = function _c6() {
      return {
        aVariableo: "Bikaner"
      };
    };

    var _c7 = function _c7() {
      return {
        aVariableom: "Jodhpur"
      };
    };

    var _c8 = function _c8() {
      return {
        aVariableomg: "Chittorgarh"
      };
    };

    var VaccineComponent = /*#__PURE__*/function () {
      function VaccineComponent(router, as) {
        _classCallCheck(this, VaccineComponent);

        this.router = router;
        this.as = as;
      }

      _createClass(VaccineComponent, [{
        key: "vlist",
        value: function vlist(a) {
          // console.log(a);
          this.router.navigate(['/vaccinelist/', a]); // this.router.navigateByUrl('/vaccinelist');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return VaccineComponent;
    }();

    VaccineComponent.ɵfac = function VaccineComponent_Factory(t) {
      return new (t || VaccineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    VaccineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VaccineComponent,
      selectors: [["app-vaccine"]],
      decls: 65,
      vars: 27,
      consts: [["rel", "stylesheet", "href", "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", "integrity", "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh", "crossorigin", "anonymous"], [1, "navbars"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdowns"], [1, "dropbtns"], [1, "dropdowns-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], [1, "wrapper"], [1, "cols"], ["ontouchstart", "this.classList.toggle('hover');", 1, "col"], [1, "container"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], ["selfie", ""], ["selfies", ""], ["selfiek", ""], ["selie", ""], ["selfiej", ""], ["selfieg", ""], ["selfiec", ""], ["selfiech", ""], ["selfiechw", ""], [1, "front", 2, "background-image", "url(https://udaipurtourism.co.in/images/places-to-visit/headers/taj-lake-palace-udaipur-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg)"], [1, "inner"], [1, "back"], [1, "inner", 3, "click"], [1, "front", 2, "background-image", "url(https://www.micato.com/wp-content/uploads/2018/09/jaipur-1110x700.jpg)"], [1, "front", 2, "background-image", "url(https://www.swantour.com/blogs/wp-content/uploads/2016/08/Pushkar.jpg)"], [1, "front", 2, "background-image", "url(https://www.dham-yatra.com/blog/wp-content/uploads/2019/03/Garadia-Mahadev-Temples.jpg)"], [1, "front", 2, "background-image", "url(https://static.toiimg.com/thumb/68427211/3.jpg?width=1200&height=900)"], [1, "front", 2, "background-image", "url(https://images.citizenmatters.in/wp-content/uploads/sites/2/2020/04/29111406/Bhilwara-678x381.jpg)"], [1, "front", 2, "background-image", "url(https://media.architecturaldigest.in/wp-content/uploads/2019/10/Bikaner-Avani-Rai-fetaured-image.jpg)"], [1, "front", 2, "background-image", "url(https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Mehrangarh-Fort-Jodhpur.jpg)"], [1, "front", 2, "background-image", "url(https://www.swantour.com/blogs/wp-content/uploads/2019/02/Chittorgarh-Fort.jpg)"]],
      template: function VaccineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccineComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Know about your nearby Vaccination-Camps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, VaccineComponent_ng_template_29_Template, 8, 1, "ng-template", 16, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, VaccineComponent_ng_template_33_Template, 8, 1, "ng-template", 16, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, VaccineComponent_ng_template_37_Template, 8, 1, "ng-template", 16, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, VaccineComponent_ng_template_42_Template, 8, 1, "ng-template", 16, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, VaccineComponent_ng_template_46_Template, 8, 1, "ng-template", 16, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, VaccineComponent_ng_template_50_Template, 8, 1, "ng-template", 16, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, VaccineComponent_ng_template_55_Template, 8, 1, "ng-template", 16, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, VaccineComponent_ng_template_59_Template, 8, 1, "ng-template", 16, 24, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, VaccineComponent_ng_template_63_Template, 8, 1, "ng-template", 16, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51);

          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);

          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c0))("ngTemplateOutlet", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1))("ngTemplateOutlet", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c2))("ngTemplateOutlet", _r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3))("ngTemplateOutlet", _r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c4))("ngTemplateOutlet", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5))("ngTemplateOutlet", _r10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c6))("ngTemplateOutlet", _r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c7))("ngTemplateOutlet", _r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c8))("ngTemplateOutlet", _r16);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"]],
      styles: ["body[_ngcontent-%COMP%] {\n  background: floralwhite;\n}\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: normal;\n  color: black;\n  text-align: center;\n  margin-top: 0px;\n  margin-bottom: 10px;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n  max-width: 80rem;\n}\n\n.cols[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.col[_ngcontent-%COMP%] {\n  width: calc(25% - 2rem);\n  margin: 1rem;\n  cursor: pointer;\n}\n\n.container[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n  perspective: 1000px;\n}\n\n.front[_ngcontent-%COMP%] {\n  background-size: cover;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  background-position: center;\n  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  text-align: center;\n  min-height: 190px;\n  height: auto;\n  border-radius: 10px;\n  color: #fff;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1.5rem;\n}\n\n.back[_ngcontent-%COMP%] {\n  background-size: cover;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  background-position: center;\n  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  text-align: center;\n  min-height: 190px;\n  height: auto;\n  border-radius: 10px;\n  color: black;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1.5rem;\n}\n\n.back[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n\n.front[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  content: \"\";\n  display: block;\n  opacity: 0.6;\n  background-color: #000;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  border-radius: 10px;\n}\n\n.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%] {\n  transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n\n.back[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n\n.inner[_ngcontent-%COMP%] {\n  transform: translateY(-50%) translateZ(60px) scale(0.94);\n  top: 50%;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  padding: 2rem;\n  box-sizing: border-box;\n  outline: 1px solid transparent;\n  perspective: inherit;\n  z-index: 2;\n}\n\n.container[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]:hover   .back[_ngcontent-%COMP%] {\n  transform: rotateY(0deg);\n  transform-style: preserve-3d;\n}\n\n.container[_ngcontent-%COMP%]:hover   .front[_ngcontent-%COMP%] {\n  transform: rotateY(-180deg);\n  transform-style: preserve-3d;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin-bottom: 2rem;\n  position: relative;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 4rem;\n  height: 2px;\n  position: absolute;\n  background: #C6D4DF;\n  display: block;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  bottom: -0.75rem;\n}\n\n.front[_ngcontent-%COMP%]   .inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-family: \"Montserrat\";\n  font-weight: 300;\n}\n\n@media screen and (max-width: 64rem) {\n  .col[_ngcontent-%COMP%] {\n    width: calc(33.333333% - 2rem);\n  }\n}\n\n@media screen and (max-width: 48rem) {\n  .col[_ngcontent-%COMP%] {\n    width: calc(50% - 2rem);\n  }\n}\n\n@media screen and (max-width: 32rem) {\n  .col[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 0 2rem 0;\n  }\n}\n\n.navbars[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%]   .dropbtns[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n\n\n.navbars[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdowns[_ngcontent-%COMP%]:hover   .dropbtns[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n\n.dropbtns[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n\n\n.dropdowns-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n\n\n.dropdowns[_ngcontent-%COMP%]:hover   .dropdowns-content[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFjY2luZS9FOlxcTmV3IGZvbGRlclxcUGhhcm1hY3lNYW5hZ2VtZW50L3NyY1xcYXBwXFx2YWNjaW5lXFx2YWNjaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YWNjaW5lL3ZhY2NpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQ0NKOztBRENBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFFUSxzQkFBQTtBQ0VWOztBRENBO0VBQ0UsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQ0E7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFHRSxhQUFBO0VBRUksZUFBQTtFQUdJLHVCQUFBO0FDRVY7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRUY7O0FEQ0E7RUFFVSw0QkFBQTtFQUVBLG1CQUFBO0FDRVY7O0FER0E7RUFFRSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUlBLHlEQUFBO0VBRUEsbUNBQUE7RUFDUSwyQkFBQTtFQUNSLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtBQ0RGOztBREdBO0VBRUUsc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFJQSx5REFBQTtFQUVBLG1DQUFBO0VBQ1EsMkJBQUE7RUFDUixrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNJLDREQUFBO0FDREo7O0FESUE7RUFDRSxrQkFBQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNRLDJCQUFBO0VBQ1IsbUJBQUE7QUNESjs7QURHQTs7RUFLSSx5REFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUVZLHdEQUFBO0VBQ1IsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRVEsc0JBQUE7RUFDUiw4QkFBQTtFQUVRLG9CQUFBO0VBQ1IsVUFBQTtBQ0FKOztBREdBO0VBRVksMEJBQUE7RUFFQSw0QkFBQTtBQ0FaOztBREdBO0VBRVksd0JBQUE7RUFFQSw0QkFBQTtBQ0FaOztBREdBO0VBRVUsd0JBQUE7RUFFQSw0QkFBQTtBQ0FWOztBREdBO0VBRVUsMkJBQUE7RUFFQSw0QkFBQTtBQ0FWOztBREdBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0U7SUFDRSw4QkFBQTtFQ0FGO0FBQ0Y7O0FER0E7RUFDRTtJQUNFLHVCQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGtCQUFBO0VDRkY7QUFDRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EsNERBQUE7RUFDQSxrQkFBQTtBQ0pGOztBRE9BLDRCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDSkY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FES0EsMkJBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNGRjs7QURLQSxvQkFBQTs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFBc0Isa0RBQUE7RUFDdEIsU0FBQTtFQUFXLGtEQUFBO0FDQWI7O0FER0Esd0RBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0EseUNBQUE7O0FBQ0E7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBRENBLDhCQUFBOztBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0EsMkRBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ0VGOztBREVBLG9DQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdmFjY2luZS92YWNjaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcclxuICAgIGJhY2tncm91bmQ6ZmxvcmFsd2hpdGVcclxufVxyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ud3JhcHBlcntcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogODByZW07XHJcbn1cclxuXHJcbi5jb2xze1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2x7XHJcbiAgd2lkdGg6IGNhbGMoMjUlIC0gMnJlbSk7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZyb250e1xyXG4gICAgICBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcbi5iYWNre1xyXG4gICBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xyXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSksIC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uYmFja3tcclxuICAgIGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDMxNWRlZywjOTZjOGZiIDAlLCNkZGJkZmMgNzQlKTtcclxufVxyXG5cclxuLmZyb250OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lcjpob3ZlciAuZnJvbnQsXHJcbi5jb250YWluZXI6aG92ZXIgLmJhY2t7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uYmFja3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlubmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooNjBweCkgc2NhbGUoMC45NCk7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdXRsaW5lOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwZXJzcGVjdGl2ZTogaW5oZXJpdDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmJhY2t7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAuZnJvbnR7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4uY29udGFpbmVyOmhvdmVyIC5iYWNre1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLmZyb250e1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi5mcm9udCAuaW5uZXIgcHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mcm9udCAuaW5uZXIgcDphZnRlcntcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogNHJlbTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogI0M2RDRERjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJvdHRvbTogLS43NXJlbTtcclxufVxyXG5cclxuLmZyb250IC5pbm5lciBzcGFue1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NHJlbSl7XHJcbiAgLmNvbHtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMyUgLSAycmVtKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4cmVtKXtcclxuICAuY29se1xyXG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMnJlbSl7XHJcbiAgLmNvbHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIDAgMnJlbSAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5uYXZiYXJzIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbn1cclxuXHJcbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXHJcbi5uYXZiYXJzIGEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogcmdiKDE0LCAwLCAwKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBUaGUgZHJvcGRvd24gY29udGFpbmVyICovXHJcbi5kcm9wZG93bnMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xyXG4uZHJvcGRvd25zIC5kcm9wYnRucyB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiByZ2IoMTQsIDEsIDEpO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cclxuICBtYXJnaW46IDA7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG59XHJcblxyXG4vKiBBZGQgYSByZWQgYmFja2dyb3VuZCBjb2xvciB0byBuYXZiYXIgbGlua3Mgb24gaG92ZXIgKi9cclxuLm5hdmJhcnMgYTpob3ZlciwgLmRyb3Bkb3duczpob3ZlciAuZHJvcGJ0bnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDIzOCwgMjM4KTtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4uZHJvcGRvd25zLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5kcm9wYnRuczpob3ZlcntcclxuICBib3gtc2hhZG93OiAgMnB4IDEwcHggYmxhY2s7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd25zLWNvbnRlbnQgYSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIHRvIGRyb3Bkb3duIGxpbmtzIG9uIGhvdmVyICovXHJcbi5kcm9wZG93bnMtY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gXHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duczpob3ZlciAuZHJvcGRvd25zLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59IiwiYm9keSB7XG4gIGJhY2tncm91bmQ6IGZsb3JhbHdoaXRlO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogODByZW07XG59XG5cbi5jb2xzIHtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbCB7XG4gIHdpZHRoOiBjYWxjKDI1JSAtIDJyZW0pO1xuICBtYXJnaW46IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMHB4O1xuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXG4uZnJvbnQge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICAtby10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxOTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMTkwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmJhY2sge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbi5mcm9udDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC42O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5mcm9udCxcbi5jb250YWluZXI6aG92ZXIgLmJhY2sge1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKTtcbiAgLW8tdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuN3MgY3ViaWMtYmV6aWVyKDAuNCwgMC4yLCAwLjIsIDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjdzIGN1YmljLWJlemllcigwLjQsIDAuMiwgMC4yLCAxKSwgLXdlYmtpdC10cmFuc2Zvcm0gMC43cyBjdWJpYy1iZXppZXIoMC40LCAwLjIsIDAuMiwgMSk7XG59XG5cbi5iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5uZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDYwcHgpIHNjYWxlKDAuOTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWig2MHB4KSBzY2FsZSgwLjk0KTtcbiAgdG9wOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW07XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiBpbmhlcml0O1xuICBwZXJzcGVjdGl2ZTogaW5oZXJpdDtcbiAgei1pbmRleDogMjtcbn1cblxuLmNvbnRhaW5lciAuYmFjayB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi5jb250YWluZXIgLmZyb250IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5iYWNrIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG4uY29udGFpbmVyOmhvdmVyIC5mcm9udCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVZKC0xODBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZyb250IC5pbm5lciBwIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mcm9udCAuaW5uZXIgcDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA0cmVtO1xuICBoZWlnaHQ6IDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiAjQzZENERGO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3R0b206IC0wLjc1cmVtO1xufVxuXG4uZnJvbnQgLmlubmVyIHNwYW4ge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0cmVtKSB7XG4gIC5jb2wge1xuICAgIHdpZHRoOiBjYWxjKDMzLjMzMzMzMyUgLSAycmVtKTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDhyZW0pIHtcbiAgLmNvbCB7XG4gICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMycmVtKSB7XG4gIC5jb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCAwIDJyZW0gMDtcbiAgfVxufVxuLm5hdmJhcnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cbi5uYXZiYXJzIGEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xuLmRyb3Bkb3ducyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBEcm9wZG93biBidXR0b24gKi9cbi5kcm9wZG93bnMgLmRyb3BidG5zIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMGUwMTAxO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXG4ubmF2YmFycyBhOmhvdmVyLCAuZHJvcGRvd25zOmhvdmVyIC5kcm9wYnRucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbn1cblxuLyogRHJvcGRvd24gY29udGVudCAoaGlkZGVuIGJ5IGRlZmF1bHQpICovXG4uZHJvcGRvd25zLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGJ0bnM6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMTBweCBibGFjaztcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3ducy1jb250ZW50IGEge1xuICBmbG9hdDogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xuLmRyb3Bkb3ducy1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd25zOmhvdmVyIC5kcm9wZG93bnMtY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaccineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vaccine',
          templateUrl: './vaccine.component.html',
          styleUrls: ['./vaccine.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vaccinedisplay/vaccinedisplay.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/vaccinedisplay/vaccinedisplay.component.ts ***!
    \************************************************************/

  /*! exports provided: VaccinedisplayComponent */

  /***/
  function srcAppVaccinedisplayVaccinedisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaccinedisplayComponent", function () {
      return VaccinedisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var VaccinedisplayComponent = /*#__PURE__*/function () {
      function VaccinedisplayComponent(route, member, loc) {
        _classCallCheck(this, VaccinedisplayComponent);

        this.route = route;
        this.member = member;
        this.loc = loc;
        this.details = {
          Name: "",
          City: "",
          Address: "",
          Age: "",
          Dose: "",
          Vaccine: ""
        };
      }

      _createClass(VaccinedisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['id']); // console.log(res);

            _this23.id = res['id'];

            _this23.member.getvaccinebyId(_this23.id).subscribe(function (res) {
              console.log(res);
              _this23.details = res;
            });
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.loc.back();
        }
      }]);

      return VaccinedisplayComponent;
    }();

    VaccinedisplayComponent.ɵfac = function VaccinedisplayComponent_Factory(t) {
      return new (t || VaccinedisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    VaccinedisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VaccinedisplayComponent,
      selectors: [["app-vaccinedisplay"]],
      decls: 54,
      vars: 7,
      consts: [["lang", "en", "dir", "ltr"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], [1, "blog-card"], ["type", "radio", "name", "select", "id", "tap-1", "checked", ""], ["type", "radio", "name", "select", "id", "tap-2"], ["type", "radio", "name", "select", "id", "tap-3"], ["type", "checkbox", "id", "imgTap"], [1, "sliders"], ["for", "tap-1", 1, "tap", "tap-1"], ["for", "tap-2", 1, "tap", "tap-2"], ["for", "tap-3", 1, "tap", "tap-3"], [1, "inner-part"], ["for", "imgTap", 1, "img"], ["src", "/assets/vaccine.png", 1, "img-1"], [1, "content", "content-1"], [1, "title"], [1, "text"], [1, "fa", "fa-calendar-plus-o", 2, "font-size", "36px"], ["src", "/assets/vaccine.png", 1, "img-2"], [1, "content", "content-2"], ["tyle", "font-size:48px", 1, "fa", "fa-map-marker"], ["src", "/assets/vaccine.png", 1, "img-3"], [1, "content", "content-3"], ["tyle", "font-size:48px", 1, "fa", "fa-medkit"], ["href", "https://www.cowin.gov.in/home", "target", "_blank"], ["type", "submit", 1, "submit-btn", 3, "click"]],
      template: function VaccinedisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Dose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Vaccine Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccinedisplayComponent_Template_button_click_52_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Go Back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.details.Dose, " for ", ctx.details.Age, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.details.Vaccine);
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800\");\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 605px;\n  font-family: \"Fira Sans\", sans-serif;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\n.blog-card[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 370px;\n  width: 95%;\n  max-width: 850px;\n  margin-top: 20px;\n  margin-bottom: 100px;\n  border-radius: 25px;\n  background: white;\n  box-shadow: 0px 10px 50px rgba(252, 56, 56, 0.3);\n}\na[_ngcontent-%COMP%] {\n  color: #ff3300;\n}\n.inner-part[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  height: 360px;\n  align-items: center;\n  justify-content: center;\n  padding: 0 25px;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%] {\n  padding: 0;\n  transition: 0.1s ease-in;\n}\n.inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 260px;\n  width: 260px;\n  flex-shrink: 0;\n  overflow: hidden;\n  border-radius: 20px;\n  box-shadow: 2px 3px 15px rgba(252, 56, 56, 0.1);\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 370px;\n  width: 850px;\n  z-index: 99;\n  margin-top: 10px;\n  transition: 0.3s 0.2s ease-in;\n}\n.img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  opacity: 0;\n  transition: 0.6s;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .img-3[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition-delay: 0.2s;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 0 20px 0 35px;\n  width: 530px;\n  margin-left: 50px;\n  opacity: 0;\n  transition: 0.6s;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-1[_ngcontent-%COMP%], #tap-2[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-2[_ngcontent-%COMP%], #tap-3[_ngcontent-%COMP%]:checked    ~ .inner-part[_ngcontent-%COMP%]   .content-3[_ngcontent-%COMP%] {\n  opacity: 1;\n  margin-left: 0px;\n  z-index: 100;\n  transition-delay: 0.3s;\n}\n.content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #7b7992;\n  margin-bottom: 15px;\n  font-size: 22px;\n  font-weight: 500;\n}\n.content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n  color: #0d0925;\n  margin-bottom: 20px;\n}\n.content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #4e4a67;\n  font-size: 19px;\n  margin-bottom: 30px;\n  line-height: 1.5em;\n  text-align: justify;\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 15px 20px;\n  border: none;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #fff0e6;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border-radius: 50px;\n  cursor: pointer;\n  outline: none;\n  border: 1px solid #fd3535;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n}\n.sliders[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 25px;\n  left: 65%;\n  transform: translateX(-50%);\n  z-index: 12;\n}\n#imgTap[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%] {\n  display: none;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 10px;\n  width: 50px;\n  background: #d9d9d9;\n  border-radius: 5px;\n  display: inline-flex;\n  margin: 0 3px;\n  cursor: pointer;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:hover {\n  background: #cccccc;\n}\n.sliders[_ngcontent-%COMP%]   .tap[_ngcontent-%COMP%]:before {\n  position: absolute;\n  content: \"\";\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: -100%;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  border-radius: 10px;\n  transform: scaleX(0);\n  transition: transform 0.6s;\n  transform-origin: left;\n}\ninput[type=radio][_ngcontent-%COMP%], input[type=checkbox][_ngcontent-%COMP%] {\n  display: none;\n}\n#tap-1[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-1[_ngcontent-%COMP%]:before, #tap-2[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-2[_ngcontent-%COMP%]:before, #tap-3[_ngcontent-%COMP%]:checked    ~ .sliders[_ngcontent-%COMP%]   .tap-3[_ngcontent-%COMP%]:before {\n  transform: scaleX(1);\n  width: 100%;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  font-family: \"Times New Roman\", Times, serif;\n  font-weight: 300;\n  font-size: 20px;\n  width: 30%;\n  padding: 10px 30px;\n  cursor: pointer;\n  display: block;\n  margin: auto;\n  margin-top: 400px;\n  background: linear-gradient(to right, #ff3300 0%, #ff6666 100%);\n  color: #FFFFFF;\n  border: 0;\n  outline: none;\n  border-radius: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFjY2luZWRpc3BsYXkvRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxcdmFjY2luZWRpc3BsYXlcXHZhY2NpbmVkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YWNjaW5lZGlzcGxheS92YWNjaW5lZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUNSO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0NGO0FEQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDREQUFBO0FDRUY7QURBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0RBQUE7QUNFRjtBREFBO0VBQ0UsY0FBQTtBQ0dGO0FEREE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNJRjtBREZBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FDS0Y7QURIQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQ01GO0FESkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0FDT0Y7QURMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNRRjtBRE5BOzs7RUFHRSxVQUFBO0VBQ0Esc0JBQUE7QUNTRjtBRFBBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNVRjtBRFJBO0VBQ0UsYUFBQTtBQ1dGO0FEVEE7OztFQUdFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1lGO0FEVkE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDYUY7QURYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2NGO0FEWkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2VGO0FEYkE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBRUEsK0RBQUE7QUNlRjtBRGJBO0VBRUksK0RBQUE7QUNlSjtBRGJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2dCRjtBRGRBO0VBQ0UsYUFBQTtBQ2lCRjtBRGZBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDa0JGO0FEaEJBO0VBQ0UsbUJBQUE7QUNtQkY7QURqQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsK0RBQUE7RUFFQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ2tCRjtBRGhCQTs7RUFFRSxhQUFBO0FDbUJGO0FEakJBOzs7RUFHRSxvQkFBQTtFQUNBLFdBQUE7QUNvQkY7QURoQkE7RUFFRSw0Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNELFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNDLGlCQUFBO0VBQ0EsK0RBQUE7RUFHRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL3ZhY2NpbmVkaXNwbGF5L3ZhY2NpbmVkaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zOjQwMCw1MDAsNjAwLDcwMCw4MDBcIik7XHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5ib2R5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XHJcbn1cclxuLmJsb2ctY2FyZHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIG1heC13aWR0aDogODUwcHg7XHJcbiAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwcHggMTBweCA1MHB4IHJnYmEoMjUyLDU2LDU2LC4zKTtcclxufVxyXG5he1xyXG4gIGNvbG9yOiAjZmYzMzAwXHJcbn1cclxuLmlubmVyLXBhcnR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAzNjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjVweDtcclxufVxyXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCB7XHJcbiAgcGFkZGluZzogMDtcclxuICB0cmFuc2l0aW9uOiAuMXMgZWFzZS1pbjtcclxufVxyXG4uaW5uZXItcGFydCAuaW1ne1xyXG4gIGhlaWdodDogMjYwcHg7XHJcbiAgd2lkdGg6IDI2MHB4O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDE1cHggcmdiYSgyNTIsNTYsNTYsLjEpO1xyXG59XHJcbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWd7XHJcbiAgaGVpZ2h0OiAzNzBweDtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgei1pbmRleDogOTk7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiAuM3MgLjJzIGVhc2UtaW47XHJcbn1cclxuLmltZyBpbWd7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IC42cztcclxufVxyXG4jdGFwLTE6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMSxcclxuI3RhcC0yOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTIsXHJcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0ze1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogLjJzO1xyXG59XHJcbi5jb250ZW50e1xyXG4gIHBhZGRpbmc6IDAgMjBweCAwIDM1cHg7XHJcbiAgd2lkdGg6IDUzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjZzO1xyXG59XHJcbiNpbWdUYXA6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuI3RhcC0xOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudC0xLFxyXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5jb250ZW50LTIsXHJcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtM3tcclxuICBvcGFjaXR5OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IC4zcztcclxufVxyXG4uY29udGVudCBzcGFue1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjN2I3OTkyO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDBcclxufVxyXG4uY29udGVudCAudGl0bGV7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZDA5MjU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY29udGVudCAudGV4dHtcclxuICBjb2xvcjogIzRlNGE2NztcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG4uY29udGVudCBidXR0b257XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjBlNjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmQzNTM1O1xyXG4gIC8vYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxufVxyXG4uY29udGVudCBidXR0b246aG92ZXJ7XHJcbiAgICAvL2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICM5NmM4ZmIgMCUsICNkZGJkZmMgNzQlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxufVxyXG4uc2xpZGVyc3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAyNXB4O1xyXG4gIGxlZnQ6IDY1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgei1pbmRleDogMTI7XHJcbn1cclxuI2ltZ1RhcDpjaGVja2VkIH4gLnNsaWRlcnN7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2xpZGVycyAudGFwe1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luOiAwIDNweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNsaWRlcnMgLnRhcDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjY2NjY2NjO1xyXG59XHJcbi5zbGlkZXJzIC50YXA6YmVmb3Jle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiAnJztcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IC0xMDAlO1xyXG4gLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCNmNmIzMjMgMCUsICNmMjNiMjYgNzQlKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNnM7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0sXHJcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiN0YXAtMTpjaGVja2VkIH4gLnNsaWRlcnMgLnRhcC0xOmJlZm9yZSxcclxuI3RhcC0yOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTI6YmVmb3JlLFxyXG4jdGFwLTM6Y2hlY2tlZCB+IC5zbGlkZXJzIC50YXAtMzpiZWZvcmV7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uc3VibWl0LWJ0blxyXG57XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRwYWRkaW5nOiAxMHB4IDMwcHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA0MDBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XHJcblx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYTcyO1xyXG4vL2JhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsICMyYTJhNzIgMCUsICMwMDlmZmQgNzQlKTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweFxyXG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RmlyYStTYW5zOjQwMCw1MDAsNjAwLDcwMCw4MDBcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogNjA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5cbi5ibG9nLWNhcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzcwcHg7XG4gIHdpZHRoOiA5NSU7XG4gIG1heC13aWR0aDogODUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNTBweCByZ2JhKDI1MiwgNTYsIDU2LCAwLjMpO1xufVxuXG5hIHtcbiAgY29sb3I6ICNmZjMzMDA7XG59XG5cbi5pbm5lci1wYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM2MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCB7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbn1cblxuLmlubmVyLXBhcnQgLmltZyB7XG4gIGhlaWdodDogMjYwcHg7XG4gIHdpZHRoOiAyNjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggMTVweCByZ2JhKDI1MiwgNTYsIDU2LCAwLjEpO1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nIHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgd2lkdGg6IDg1MHB4O1xuICB6LWluZGV4OiA5OTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyAwLjJzIGVhc2UtaW47XG59XG5cbi5pbWcgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogMC42cztcbn1cblxuI3RhcC0xOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuaW1nLTEsXG4jdGFwLTI6Y2hlY2tlZCB+IC5pbm5lci1wYXJ0IC5pbWctMixcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmltZy0zIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmNvbnRlbnQge1xuICBwYWRkaW5nOiAwIDIwcHggMCAzNXB4O1xuICB3aWR0aDogNTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xufVxuXG4jaW1nVGFwOmNoZWNrZWQgfiAuaW5uZXItcGFydCAuY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiN0YXAtMTpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMSxcbiN0YXAtMjpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMixcbiN0YXAtMzpjaGVja2VkIH4gLmlubmVyLXBhcnQgLmNvbnRlbnQtMyB7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDEwMDtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmNvbnRlbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzdiNzk5MjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMGQwOTI1O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY29udGVudCAudGV4dCB7XG4gIGNvbG9yOiAjNGU0YTY3O1xuICBmb250LXNpemU6IDE5cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNvbnRlbnQgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjZmZmMGU2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZDM1MzU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbn1cblxuLmNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmYzMzAwIDAlLCAjZmY2NjY2IDEwMCUpO1xufVxuXG4uc2xpZGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNXB4O1xuICBsZWZ0OiA2NSU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMTI7XG59XG5cbiNpbWdUYXA6Y2hlY2tlZCB+IC5zbGlkZXJzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNsaWRlcnMgLnRhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgbWFyZ2luOiAwIDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVycyAudGFwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbn1cblxuLnNsaWRlcnMgLnRhcDpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogLTEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmMzMwMCAwJSwgI2ZmNjY2NiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG5pbnB1dFt0eXBlPXJhZGlvXSxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI3RhcC0xOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTE6YmVmb3JlLFxuI3RhcC0yOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTI6YmVmb3JlLFxuI3RhcC0zOmNoZWNrZWQgfiAuc2xpZGVycyAudGFwLTM6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VibWl0LWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDMwJTtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjMzMDAgMCUsICNmZjY2NjYgMTAwJSk7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaccinedisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vaccinedisplay',
          templateUrl: './vaccinedisplay.component.html',
          styleUrls: ['./vaccinedisplay.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vaccinelist/vaccinelist.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/vaccinelist/vaccinelist.component.ts ***!
    \******************************************************/

  /*! exports provided: VaccinelistComponent */

  /***/
  function srcAppVaccinelistVaccinelistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VaccinelistComponent", function () {
      return VaccinelistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VaccinelistComponent_li_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccinelistComponent_li_35_Template_li_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var indexOfelement_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick(indexOfelement_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var indexOfelement_r2 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.member.vaccinationcenters[indexOfelement_r2].Name, " for ", ctx_r0.member.vaccinationcenters[indexOfelement_r2].Age, "");
      }
    }

    var VaccinelistComponent = /*#__PURE__*/function () {
      function VaccinelistComponent(router, as, route, member) {
        _classCallCheck(this, VaccinelistComponent);

        this.router = router;
        this.as = as;
        this.route = route;
        this.member = member;
        this.age = "";
      }

      _createClass(VaccinelistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.route.params.subscribe(function (res) {
            console.log(res['id']);
            _this24.a = res['id'];
          });
          this.member.getvaccinecenter(this.a);
        }
      }, {
        key: "onClick",
        value: function onClick(indexOfelement) {
          for (this.i = 0; this.i <= indexOfelement; this.i++) {
            console.log(this.member.vaccinationcenters[this.i].id);
            var url = '/vaccinedisplay/' + this.member.vaccinationcenters[this.i].id;
            this.router.navigateByUrl(url);
          }
        }
      }, {
        key: "search",
        value: function search() {
          if (this.age == "For All Ages" || this.age == "") {
            this.member.getvaccinecenter(this.a);
          } else {
            this.member.getvaccinecenterwithage(this.a, this.age);
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.as.signout();
        }
      }]);

      return VaccinelistComponent;
    }();

    VaccinelistComponent.ɵfac = function VaccinelistComponent_Factory(t) {
      return new (t || VaccinelistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]));
    };

    VaccinelistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VaccinelistComponent,
      selectors: [["app-vaccinelist"]],
      decls: 36,
      vars: 2,
      consts: [[1, "navbar"], ["routerLink", "/home", "routerLinkActive", "active"], [1, "dropdown"], [1, "dropbtn"], [1, "dropdown-content"], ["routerLink", "/guide", "routerLinkActive", "active"], ["routerLink", "/symptoms", "routerLinkActive", "active"], ["routerLink", "/cure", "routerLinkActive", "active"], ["routerLink", "/aboutus"], ["routerLink", "/contact", "routerLinkActive", "active"], [3, "click"], ["ngNativeValidate", ""], ["autocomplete", "off", "placeholder", "Enter Your Age Preference", "type", "text", "list", "age", "name", "age", "required", "", 3, "ngModel", "ngModelChange"], ["id", "age"], ["value", "For All Ages"], ["value", "Age 18+"], ["value", "Age 45+"], ["type", "submit", 1, "buttonk", 3, "click"], [1, "gradient-list"], [3, "click", 4, "ngFor", "ngForOf"]],
      template: function VaccinelistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Covid info ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Covid guidelines");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Covid symptoms");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Covid precautions and cure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccinelistComponent_Template_a_click_20_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Log Out");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Vaccination Camps nearby you");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VaccinelistComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.age = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "datalist", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VaccinelistComponent_Template_button_click_31_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ol", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, VaccinelistComponent_li_35_Template, 2, 2, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.member.vaccinationcenters);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:900|Raleway:400,400i,700,700i);\n\n\n\n\n\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n}\nheader[_ngcontent-%COMP%] {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  width: 100%;\n  height: 40px;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 27px;\n  color: black;\n  align-content: center;\n  text-align: center;\n  font-family: \"Times New Roman\", Times, serif;\n}\nmain[_ngcontent-%COMP%] {\n  padding: calc(var(--heading-height) + 1.5vw) 4em 0;\n}\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: floralwhite;\n  color: #050505;\n  font-family: \"Raleway\", sans-serif;\n}\nmain[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  max-width: 40rem;\n  padding: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%] {\n  counter-reset: gradient-counter;\n  list-style: none;\n  margin: 1.75rem 0;\n  padding-left: 1rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n  box-shadow: 0.25rem 0.25rem 0.6rem rgba(0, 0, 0, 0.05), 0 0.5rem 1.125rem rgba(75, 0, 0, 0.05);\n  counter-increment: gradient-counter;\n  margin-top: 1rem;\n  min-height: 3rem;\n  padding: 1rem 1rem 1rem 3rem;\n  position: relative;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before, ol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::after {\n  background: linear-gradient(135deg, #83e4e2 0%, #a2ed56 100%);\n  border-radius: 1rem 1rem 0 1rem;\n  content: \"\";\n  height: 3rem;\n  left: -1rem;\n  overflow: hidden;\n  position: absolute;\n  top: -1rem;\n  width: 3rem;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]::before {\n  align-items: flex-end;\n  content: counter(gradient-counter);\n  color: #1d1f20;\n  display: flex;\n  font: 900 1.5em/1 \"Montserrat\";\n  justify-content: flex-end;\n  padding: 0.125em 0.25em;\n  z-index: 1;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+1):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+2):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+3):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+4):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+5):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):before {\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+6):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+7):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+8):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+9):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(10n+10):hover {\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\nol.gradient-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n.navbar[_ngcontent-%COMP%] {\n  overflow: hidden;\n  background: linear-gradient(315deg, #96c8fb 0%, #ddbdfc 74%);\n  font-family: Arial;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: left;\n  font-size: 16px;\n  color: #0e0000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n}\n\n.dropdown[_ngcontent-%COMP%] {\n  float: left;\n  overflow: hidden;\n}\n\n.dropdown[_ngcontent-%COMP%]   .dropbtn[_ngcontent-%COMP%] {\n  font-size: 16px;\n  border: none;\n  outline: none;\n  color: #0e0101;\n  padding: 14px 16px;\n  background-color: inherit;\n  font-family: inherit;\n  \n  margin: 0;\n  \n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #f5eeee;\n  box-shadow: 2px 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropbtn[_ngcontent-%COMP%]:hover {\n  box-shadow: 2px 10px black;\n  cursor: pointer;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  float: none;\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left;\n}\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #ddd;\n}\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\ninput[type=text][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: none;\n  font-size: 16px;\n  height: auto;\n  margin: 0;\n  outline: 0;\n  padding: 15px;\n  margin-left: 300px;\n  width: 50%;\n  margin-top: 20px;\n  background-color: #e8eeef;\n  color: #3c474e;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;\n  margin-bottom: 20px;\n  font-family: \"Times New Roman\", Times, serif;\n  display: inline-flex;\n}\n.buttonk[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #FFF;\n  background: linear-gradient(315deg, #2a2a72 0%, #009ffd 74%);\n  font-size: 20px;\n  margin-left: 10px;\n  align-self: center;\n  text-align: center;\n  font-style: normal;\n  height: 45px;\n  width: 85px;\n  font-family: \"Times New Roman\", Times, serif;\n  border: black;\n  border-radius: 3px;\n  box-shadow: 0 -1px 0 rgba(255, 255, 255, 0.1) inset;\n}\n.buttonk[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background: #39c239;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFjY2luZWxpc3QvRTpcXE5ldyBmb2xkZXJcXFBoYXJtYWN5TWFuYWdlbWVudC9zcmNcXGFwcFxcdmFjY2luZWxpc3RcXHZhY2NpbmVsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92YWNjaW5lbGlzdC92YWNjaW5lbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ1EsNkZBQUE7QUFEUixVQUFBO0FBS0EsY0FBQTtBQUNBLFdBQUE7QUFRQSxXQUFBO0FBQ0EsZUFBQTtBQUNBO0VBQ0UsOEZBQUE7QUNURjtBRFdBO0VBQ0ksNERBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1JKO0FEVUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtBQ1BKO0FEU0E7RUFDQyxrREFBQTtBQ05EO0FEUUE7RUFDRSxlQUFBO0FDTEY7QURPQSxVQUFBO0FBQ0E7OztFQUdFLHNCQUFBO0FDSkY7QURPQTs7RUFFRSxTQUFBO0VBQ0EsVUFBQTtBQ0pGO0FEUUE7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxrQ0FBQTtBQ0xGO0FEUUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0xGO0FEU0E7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05GO0FET0U7RUFDRSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEZBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDTEo7QURNSTtFQUVFLDZEQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNMTjtBRE9JO0VBQ0UscUJBQUE7RUFFQSxrQ0FBQTtFQUNBLGNBeEZFO0VBeUZGLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDTk47QURVTTtFQUNFLDREQUFBO0FDUlI7QURPTTtFQUNFLDREQUFBO0FDTFI7QURJTTtFQUNFLDREQUFBO0FDRlI7QURDTTtFQUNFLDREQUFBO0FDQ1I7QURGTTtFQUNFLDREQUFBO0FDSVI7QURBUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ0VaO0FESlE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNNWjtBRFJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDVVo7QURaUTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtBQ2NaO0FEaEJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDa0JaO0FEZE07RUFDRSw0REFBQTtBQ2dCUjtBRGpCTTtFQUNFLDREQUFBO0FDbUJSO0FEcEJNO0VBQ0UsNERBQUE7QUNzQlI7QUR2Qk07RUFDRSw0REFBQTtBQ3lCUjtBRDFCTTtFQUNFLDREQUFBO0FDNEJSO0FEeEJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDMEJaO0FENUJRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDOEJaO0FEaENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDa0NaO0FEcENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDc0NaO0FEeENRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0FDMENaO0FEdkNJO0VBQ0UsZ0JBQUE7QUN5Q047QUQ3QkE7RUFDRSxnQkFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7QUNnQ0Y7QUQ3QkEsNEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ2dDRjtBRDdCQSwyQkFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FDZ0NGO0FEN0JBLG9CQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQXNCLGtEQUFBO0VBQ3RCLFNBQUE7RUFBVyxrREFBQTtBQ2tDYjtBRC9CQSx3REFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNrQ0Y7QUQvQkEseUNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QUNrQ0Y7QURoQ0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUNtQ0Y7QURqQ0EsOEJBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ29DRjtBRGpDQSwyREFBQTtBQUNBO0VBQ0Usc0JBQUE7QUNvQ0Y7QURoQ0Esb0NBQUE7QUFDQTtFQUNFLGNBQUE7QUNtQ0Y7QURoQ0E7O0VBRUUsb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0FDbUNGO0FEaENBO0VBQ0EsZ0JBQUE7RUFFRSxXQUFBO0VBQ0EsNERBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0YsYUFBQTtFQUNBLGtCQUFBO0VBQ0UsbURBQUE7QUNrQ0Y7QURoQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDbUNKIiwiZmlsZSI6InNyYy9hcHAvdmFjY2luZWxpc3QvdmFjY2luZWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGT05UUyAqL1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo5MDB8UmFsZXdheTo0MDAsNDAwaSw3MDAsNzAwaSk7XHJcblxyXG5cclxuXHJcbi8qIFZBUklBQkxFUyAqL1xyXG4vKiBDb2xvcnMgKi9cclxuJGJsYWNrOiAjMWQxZjIwO1xyXG4kYmx1ZTogIzgzZTRlMjtcclxuJGdyZWVuOiAjYTJlZDU2O1xyXG4keWVsbG93OiAjZmRkYzMyO1xyXG4kd2hpdGU6ICNmYWZhZmE7XHJcblxyXG5cclxuLyogRVhURU5EICovXHJcbi8qIGJveC1zaGFkb3cgKi9cclxuJWJveHNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsMCwwLDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LDAsMCwwLjA1KTtcclxufVxyXG5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5tYWluIHtcclxuXHRwYWRkaW5nOiBjYWxjKHZhcigtLWhlYWRpbmctaGVpZ2h0KSArIDEuNXZ3KSA0ZW0gMDtcclxufVxyXG5hOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBTVFlMRSAqL1xyXG4qLFxyXG4qOmJlZm9yZSxcclxuKjphZnRlciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ZmxvcmFsd2hpdGU7XHJcbiAgY29sb3I6IzA1MDUwNTtcclxuICBmb250LWZhbWlseTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXgtd2lkdGg6IDQwcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcblxyXG5vbC5ncmFkaWVudC1saXN0IHtcclxuICBjb3VudGVyLXJlc2V0OiBncmFkaWVudC1jb3VudGVyO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAxLjc1cmVtIDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gID4gbGkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuNXJlbSAwLjVyZW0gMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsMCwwLDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LDAsMCwwLjA1KTtcclxuICAgIGNvdW50ZXItaW5jcmVtZW50OiBncmFkaWVudC1jb3VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMXJlbSAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YmVmb3JlLFxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAkYmx1ZSAwJSwkZ3JlZW4gMTAwJSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMXJlbSAwIDFyZW07XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAgIGxlZnQ6IC0xcmVtO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTFyZW07XHJcbiAgICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICBAZXh0ZW5kICVib3hzaGFkb3c7XHJcbiAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoZ3JhZGllbnQtY291bnRlcik7XHJcbiAgICAgIGNvbG9yOiAkYmxhY2s7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZvbnQ6IDkwMCAxLjVlbS8xICdNb250c2VycmF0JztcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcGFkZGluZzogMC4xMjVlbSAwLjI1ZW07XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1IHtcclxuICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTVkZWcsIzk2YzhmYiAwJSwjZGRiZGZjIDc0JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoMTBuKyN7JGl9KTpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgQGZvciAkaSBmcm9tIDYgdGhyb3VnaCAxMCB7XHJcbiAgICAgICY6bnRoLWNoaWxkKDEwbisjeyRpfSk6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCM5NmM4ZmIgMCUsI2RkYmRmYyA3NCUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAZm9yICRpIGZyb20gNiB0aHJvdWdoIDEwIHtcclxuICAgICAgICAmOm50aC1jaGlsZCgxMG4rI3skaX0pOmhvdmVyIHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICArIGxpIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG9sLmdyYWRpZW50LWxpc3R7XHJcbi8vICAgbGk6aG92ZXJ7XHJcbi8vICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xyXG4vLyAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcbi8vIH1cclxuXHJcbi5uYXZiYXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuLyogTGlua3MgaW5zaWRlIHRoZSBuYXZiYXIgKi9cclxuLm5hdmJhciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IHJnYigxNCwgMCwgMCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIFRoZSBkcm9wZG93biBjb250YWluZXIgKi9cclxuLmRyb3Bkb3duIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4vKiBEcm9wZG93biBidXR0b24gKi9cclxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6IHJnYigxNCwgMSwgMSk7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIEltcG9ydGFudCBmb3IgdmVydGljYWwgYWxpZ24gb24gbW9iaWxlIHBob25lcyAqL1xyXG4gIG1hcmdpbjogMDsgLyogSW1wb3J0YW50IGZvciB2ZXJ0aWNhbCBhbGlnbiBvbiBtb2JpbGUgcGhvbmVzICovXHJcbn1cclxuXHJcbi8qIEFkZCBhIHJlZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIG5hdmJhciBsaW5rcyBvbiBob3ZlciAqL1xyXG4ubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjM4LCAyMzgpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIERyb3Bkb3duIGNvbnRlbnQgKGhpZGRlbiBieSBkZWZhdWx0KSAqL1xyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLmRyb3BidG46aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogIDJweCAxMHB4IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXHJcbi5kcm9wZG93bi1jb250ZW50IGEge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciB0byBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gXHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIGRyb3Bkb3duIG1lbnUgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sXHJcbnNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbjogMDtcclxuICBvdXRsaW5lOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWVmO1xyXG4gIGNvbG9yOiAjM2M0NzRlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgwLDAsMCwwLjAzKSBpbnNldDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uayB7XHJcbm1hcmdpbi10b3A6IDEwcHg7XHJcbiAgXHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzJhMmE3MiAwJSwgIzAwOWZmZCA3NCUpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbmJvcmRlcjogYmxhY2s7XHJcbmJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3gtc2hhZG93OiAwIC0xcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSkgaW5zZXQ7XHJcbn1cclxuLmJ1dHRvbms6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYig1NywgMTk0LCA1Nyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn0iLCIvKiBGT05UUyAqL1xuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6OTAwfFJhbGV3YXk6NDAwLDQwMGksNzAwLDcwMGkpO1xuLyogVkFSSUFCTEVTICovXG4vKiBDb2xvcnMgKi9cbi8qIEVYVEVORCAqL1xuLyogYm94LXNoYWRvdyAqL1xub2wuZ3JhZGllbnQtbGlzdCA+IGxpOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwLjI1cmVtIDAuMjVyZW0gMC42cmVtIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMC41cmVtIDEuMTI1cmVtIHJnYmEoNzUsIDAsIDAsIDAuMDUpO1xufVxuXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBjb2xvcjogYmxhY2s7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xufVxuXG5tYWluIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1oZWFkaW5nLWhlaWdodCkgKyAxLjV2dykgNGVtIDA7XG59XG5cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFNUWUxFICovXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmbG9yYWx3aGl0ZTtcbiAgY29sb3I6ICMwNTA1MDU7XG4gIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxub2wuZ3JhZGllbnQtbGlzdCB7XG4gIGNvdW50ZXItcmVzZXQ6IGdyYWRpZW50LWNvdW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMS43NXJlbSAwO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGkge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwLjVyZW0gMC41cmVtIDAuNXJlbTtcbiAgYm94LXNoYWRvdzogMC4yNXJlbSAwLjI1cmVtIDAuNnJlbSByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDAuNXJlbSAxLjEyNXJlbSByZ2JhKDc1LCAwLCAwLCAwLjA1KTtcbiAgY291bnRlci1pbmNyZW1lbnQ6IGdyYWRpZW50LWNvdW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1pbi1oZWlnaHQ6IDNyZW07XG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTo6YmVmb3JlLCBvbC5ncmFkaWVudC1saXN0ID4gbGk6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzgzZTRlMiAwJSwgI2EyZWQ1NiAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMXJlbTtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAzcmVtO1xuICBsZWZ0OiAtMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcmVtO1xuICB3aWR0aDogM3JlbTtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTo6YmVmb3JlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBjb250ZW50OiBjb3VudGVyKGdyYWRpZW50LWNvdW50ZXIpO1xuICBjb2xvcjogIzFkMWYyMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udDogOTAwIDEuNWVtLzEgXCJNb250c2VycmF0XCI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAuMTI1ZW0gMC4yNWVtO1xuICB6LWluZGV4OiAxO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMSk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMik6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMyk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNCk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNSk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rMSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzIpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbiszKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNCk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzUpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis2KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis3KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis4KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis5KTpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjOTZjOGZiIDAlLCAjZGRiZGZjIDc0JSk7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbisxMCk6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rNik6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzcpOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5vbC5ncmFkaWVudC1saXN0ID4gbGk6bnRoLWNoaWxkKDEwbis4KTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpOm50aC1jaGlsZCgxMG4rOSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbm9sLmdyYWRpZW50LWxpc3QgPiBsaTpudGgtY2hpbGQoMTBuKzEwKTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxub2wuZ3JhZGllbnQtbGlzdCA+IGxpICsgbGkge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubmF2YmFyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNWRlZywgIzk2YzhmYiAwJSwgI2RkYmRmYyA3NCUpO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbi8qIExpbmtzIGluc2lkZSB0aGUgbmF2YmFyICovXG4ubmF2YmFyIGEge1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzBlMDAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogVGhlIGRyb3Bkb3duIGNvbnRhaW5lciAqL1xuLmRyb3Bkb3duIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIERyb3Bkb3duIGJ1dHRvbiAqL1xuLmRyb3Bkb3duIC5kcm9wYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjMGUwMTAxO1xuICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbiAgbWFyZ2luOiAwO1xuICAvKiBJbXBvcnRhbnQgZm9yIHZlcnRpY2FsIGFsaWduIG9uIG1vYmlsZSBwaG9uZXMgKi9cbn1cblxuLyogQWRkIGEgcmVkIGJhY2tncm91bmQgY29sb3IgdG8gbmF2YmFyIGxpbmtzIG9uIGhvdmVyICovXG4ubmF2YmFyIGE6aG92ZXIsIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBEcm9wZG93biBjb250ZW50IChoaWRkZW4gYnkgZGVmYXVsdCkgKi9cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLmRyb3BidG46aG92ZXIge1xuICBib3gtc2hhZG93OiAycHggMTBweCBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBMaW5rcyBpbnNpZGUgdGhlIGRyb3Bkb3duICovXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vKiBBZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgdG8gZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiAwO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGVlZWY7XG4gIGNvbG9yOiAjM2M0NzRlO1xuICBib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wMykgaW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4uYnV0dG9uayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE1ZGVnLCAjMmEyYTcyIDAlLCAjMDA5ZmZkIDc0JSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDg1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIGluc2V0O1xufVxuXG4uYnV0dG9uazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzM5YzIzOTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VaccinelistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vaccinelist',
          templateUrl: './vaccinelist.component.html',
          styleUrls: ['./vaccinelist.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _services_member_service__WEBPACK_IMPORTED_MODULE_3__["MemberService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      firebase: {
        apiKey: "AIzaSyBlMgIEJ43ocRgmcTkzeiXHRaXBeoORo7g",
        authDomain: "pharmacymanagement-2b520.firebaseapp.com",
        projectId: "pharmacymanagement-2b520",
        storageBucket: "pharmacymanagement-2b520.appspot.com",
        messagingSenderId: "279163486385",
        appId: "1:279163486385:web:1a28ec61bcd679d8d72290",
        measurementId: "G-1TQC1SDQ39"
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\New folder\PharmacyManagement\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map