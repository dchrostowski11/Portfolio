(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\danie\Portfolio\portfolio\src\main.ts */"zUnb");


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

/***/ "N/6L":
/*!*************************!*\
  !*** ./src/app/jobs.ts ***!
  \*************************/
/*! exports provided: JOBS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JOBS", function() { return JOBS; });
const JOBS = [
    {
        companyName: 'ConnectiveRx',
        position: 'Jr. Applications Developer',
        startDate: new Date('12/3/2019'),
        endDate: new Date('1/15/2021'),
        about: 'Company that works with biopharmaceutical manufactureres to help commercialize and maximize the benefits of specialty and branded medications.',
        summary: [
            'Developed single-page responsive designs utilizing Angular with Typescript, HTML and CSS',
            'Improved program selection speed across platform by creating a reusable component with multi-selectable clients',
            'Focused on test-driven web development with CI/CD pipelines in Azure DevOps',
            'Worked in a medium-sized team utilizing Azure Dev Ops and GitFlow as version control'
        ],
        logoUrl: '../../assets/icons/crx-logo.svg',
        state: 'default'
    },
    {
        companyName: 'Memorial Sloan Kettering Cancer Center',
        position: 'Information Systems Intern',
        startDate: new Date('6/1/2018'),
        endDate: new Date('8/31/2018'),
        about: 'A non-profit hospital that is a leader in cancer research and treatment.',
        summary: [
            'Assisted in server setup and restoring backed up servers',
            'Designed a Java program to decrease backup server search',
        ],
        logoUrl: '../../assets/icons/msk.svg',
        state: 'default'
    },
    {
        companyName: 'BMW of North America',
        position: 'Automotive Technician Intern',
        startDate: new Date('9/1/2014'),
        endDate: new Date('6/31/2015'),
        about: 'A vehicle manufacturer that provides customers with vehicles that have a great mix of luxury and performance.',
        summary: [
            'Performed automotive repairs and general maintenance while shadowing experienced technicians',
            'Performed quality checks and inspections on new vehicle and motorcycle deliveries',
        ],
        logoUrl: '../../assets/icons/bmw.svg',
        state: 'default'
    }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"], _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "XSv0":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _jobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jobs */ "N/6L");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InfoComponent_div_5_ul_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bullet_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](bullet_r4);
} }
function InfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InfoComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const jobIndex_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.cardClicked(jobIndex_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, InfoComponent_div_5_ul_17_Template, 3, 1, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@cardFlip", job_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", job_r1.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("alt", "", job_r1.companyName, " Logo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](job_r1.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](12, 9, job_r1.startDate, "MMMM yyyy"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 12, job_r1.endDate, "MMMM yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", job_r1.about, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", job_r1.summary);
} }
class InfoComponent {
    constructor() {
        this.jobs = _jobs__WEBPACK_IMPORTED_MODULE_1__["JOBS"];
    }
    ngOnInit() {
    }
    cardClicked(index) {
        console.log(index);
        if (this.jobs[index].state === 'default') {
            this.jobs[index].state = 'flipped';
        }
        else {
            this.jobs[index].state = "default";
        }
    }
}
InfoComponent.ɵfac = function InfoComponent_Factory(t) { return new (t || InfoComponent)(); };
InfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: InfoComponent, selectors: [["app-info"]], decls: 15, vars: 1, consts: [["id", "info", 1, "information"], [1, "title"], ["id", "experience-section", 1, "experience"], ["class", "card", 3, "click", 4, "ngFor", "ngForOf"], ["id", "about-me-section", 1, "about-me"], [1, "details"], [1, "card", 3, "click"], [1, "face", "front"], [1, "company-logo", 3, "src", "alt"], [1, "face", "back"], [1, "card-content"], [1, "card-header"], [1, "company-name"], [1, "position"], [1, "start-finish"], [1, "about"], [1, "position-summary"], [4, "ngFor", "ngForOf"]], template: function InfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Experience");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, InfoComponent_div_5_Template, 18, 15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " After graduating from Rutgers University with a B.S. in Computer Science, I was introduced to web development through my first job and it helped me get some experience building responsive single-page web applications in Angular. It also exposed me to the typical workflows of a software developer where I had to participate in daily standups as well as bi-weekly sprint planning meetings to discuss progress on projects. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " Recently, I have spent some time trying to learn more UX/UI to build upon the frontend experience that I have. To supplement that, I have been learning some Unity as I know that it is a very popular platform to build a variety of apps and experiences. It also happens to tie in together some of my interests including the automotive space and technology. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n\nbody[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 100vh;\n  font-family: \"Poppins\";\n  font-size: 18px;\n  background-color: black;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #6f00ff;\n  border-radius: 6px;\n}\n@media screen and (max-width: 420px) {\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    height: 100vh;\n    font-family: \"Poppins\";\n    font-size: 12px;\n    background-color: black;\n  }\n}\n.information[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.information[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #A970FF;\n  text-align: center;\n  font-size: 2rem;\n  font-family: \"Bebas Neue\";\n}\n.experience[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 2rem;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  background: #6f00ff;\n}\n.experience[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 1em 1em 1em;\n}\n.card[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  margin: 1rem 1rem;\n  width: 300px;\n  height: 300px;\n  border-radius: 16px;\n  cursor: pointer;\n  position: relative;\n  transform-style: preserve-3d;\n}\n.face[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: inherit;\n  backface-visibility: hidden;\n  -webkit-backface-visibility: hidden;\n}\n.back[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.front[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .company-name[_ngcontent-%COMP%] {\n  -webkit-text-emphasis: bold;\n          text-emphasis: bold;\n  text-align: center;\n}\n.card-content[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: black;\n  font-style: normal;\n}\n.about-me[_ngcontent-%COMP%] {\n  padding: 0 10%;\n  margin-bottom: 4rem;\n}\n.about-me[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-me[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about-me[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #A9B3B5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxpbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFUSw2RkFBQTtBQUNBLCtFQUFBO0FBSFIsOEVBQUE7QUFVQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7QUNOSjtBRFNBO0VBQ0ksbUJBaENNO0VBaUNOLGtCQUFBO0FDTko7QURVQTtFQUVJO0lBQ0ksU0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtFQ1JOO0FBQ0Y7QUF4Q0E7RUFDRSxXQUFBO0FBMENGO0FBeENFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBMENKO0FBdENBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CRGRRO0FDdURWO0FBdkNFO0VBQ0Usc0JBQUE7QUF5Q0o7QUFwQ0E7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBdUNGO0FBcENBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUF1Q0Y7QUFwQ0E7RUFDRSwwQkFBQTtBQXVDRjtBQXBDQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBdUNGO0FBbkNFO0VBQ0UsWUFBQTtBQXNDSjtBQXBDSTtFQUNFLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQXNDTjtBQW5DSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFxQ1I7QUFoQ0E7RUFFRSxjQUFBO0VBQ0EsbUJBQUE7QUFrQ0Y7QUFoQ0U7RUFDRSxrQkFBQTtBQWtDSjtBQS9CRTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQWlDSjtBQTlCRTtFQUNFLFdBQUE7QUFnQ0o7QUE5Qkk7RUFDRSxjRHRGUztBQ3NIZiIsImZpbGUiOiJpbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcCcpO1xuXG4kcHJpbWFyeTogcmdiKDExMSwgMCwgMjU1KTtcbiRwcmltYXJ5LXRleHQ6ICNBOTcwRkY7XG4kcmVndWxhci10ZXh0OiAjQTlCM0I1O1xuXG5cbmJvZHkge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDEycHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuXG4gICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgICAgICAgICBcbn1cblxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMTAwdmg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxudWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMTJweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM2ZjAwZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgYm9keSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgfVxufVxuLmluZm9ybWF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaW5mb3JtYXRpb24gLnRpdGxlIHtcbiAgY29sb3I6ICNBOTcwRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZDogIzZmMDBmZjtcbn1cbi5leHBlcmllbmNlIHVsIHtcbiAgcGFkZGluZzogMCAxZW0gMWVtIDFlbTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBtYXJnaW46IDFyZW0gMXJlbTtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLmZhY2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZnJvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNhcmQtY29udGVudCAuY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAxZW07XG59XG4uY2FyZC1jb250ZW50IC5jYXJkLWhlYWRlciAuY29tcGFueS1uYW1lIHtcbiAgdGV4dC1lbXBoYXNpczogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtY29udGVudCAuY2FyZC1oZWFkZXIgLnBvc2l0aW9uIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmFib3V0LW1lIHtcbiAgcGFkZGluZzogMCAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4uYWJvdXQtbWUgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFib3V0LW1lIGgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5hYm91dC1tZSAuZGV0YWlscyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFib3V0LW1lIC5kZXRhaWxzIHAge1xuICBjb2xvcjogI0E5QjNCNTtcbn0iXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardFlip', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('default', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('flipped', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    height: '60rem',
                    width: '20rem',
                    transform: 'rotateY(180deg)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('default => flipped', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms')
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('flipped => default', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms')
                ])
            ])
        ] } });


/***/ }),

/***/ "XWKS":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 6, vars: 0, consts: [[1, "hero"], [1, "welcome"], [1, "name"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello, my name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Daniel Chrostowski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ", and welcome to my portfolio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n\nbody[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 100vh;\n  font-family: \"Poppins\";\n  font-size: 18px;\n  background-color: black;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #6f00ff;\n  border-radius: 6px;\n}\n@media screen and (max-width: 420px) {\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    height: 100vh;\n    font-family: \"Poppins\";\n    font-size: 12px;\n    background-color: black;\n  }\n}\n.hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n  font-family: \"Bebas Neue\";\n}\n.hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n  color: #c5d5d8;\n  font-size: 5rem;\n  width: 60%;\n  float: left;\n  line-height: 5rem;\n}\n.hero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #A970FF;\n}\n.hero[_ngcontent-%COMP%]   .meet[_ngcontent-%COMP%] {\n  color: #A9B3B5;\n  letter-spacing: 0.05em;\n  animation-name: meet-bounce;\n  animation-duration: 4s;\n  animation-iteration-count: infinite;\n}\n@keyframes meet-bounce {\n  0% {\n    left: 0px;\n    top: 0px;\n  }\n  100% {\n    left: 0px;\n    top: 20px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .hero[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    height: 100vh;\n    font-family: \"Bebas Neue\";\n  }\n  .hero[_ngcontent-%COMP%]   .welcome[_ngcontent-%COMP%] {\n    color: #A9B3B5;\n    font-size: 3rem;\n    width: 60%;\n    float: left;\n    line-height: 3rem;\n  }\n  .hero[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-weight: 700;\n    color: #A970FF;\n  }\n  .hero[_ngcontent-%COMP%]   .meet[_ngcontent-%COMP%] {\n    padding-top: 4rem;\n    color: #A9B3B5;\n    letter-spacing: 0.05em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxoZXJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFUSw2RkFBQTtBQUNBLCtFQUFBO0FBSFIsOEVBQUE7QUFVQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNOSjtBRFNBO0VBQ0kscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtBQ05KO0FEU0E7RUFDSSxXQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7QUNOSjtBRFNBO0VBQ0ksbUJBaENNO0VBaUNOLGtCQUFBO0FDTko7QURVQTtFQUVJO0lBQ0ksU0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGVBQUE7SUFDQSx1QkFBQTtFQ1JOO0FBQ0Y7QUF4Q0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBMENKO0FBeENJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLGlCQUFBO0FBeUNSO0FBdENJO0VBQ0ksZ0JBQUE7RUFDQSxjRGZPO0FDdURmO0FBdENJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0FBd0NSO0FBcENBO0VBQ0k7SUFBTSxTQUFBO0lBQVUsUUFBQTtFQXlDbEI7RUF4Q0U7SUFBTSxTQUFBO0lBQVUsU0FBQTtFQTRDbEI7QUFDRjtBQTFDQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLHVCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSx5QkFBQTtFQTRDTjtFQTFDTTtJQUNJLGNBQUE7SUFDQSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFFQSxpQkFBQTtFQTJDVjtFQXhDTTtJQUNJLGdCQUFBO0lBQ0EsY0RuREc7RUM2RmI7RUF4Q007SUFDSSxpQkFBQTtJQUNBLGNBQUE7SUFDQSxzQkFBQTtFQTBDVjtBQUNGIiwiZmlsZSI6Imhlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7XG5cbiRwcmltYXJ5OiByZ2IoMTExLCAwLCAyNTUpO1xuJHByaW1hcnktdGV4dDogI0E5NzBGRjtcbiRyZWd1bGFyLXRleHQ6ICNBOUIzQjU7XG5cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG5cbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAgICAgICAgIFxufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzZmMDBmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG59XG4uaGVybyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG59XG4uaGVybyAud2VsY29tZSB7XG4gIGNvbG9yOiAjYzVkNWQ4O1xuICBmb250LXNpemU6IDVyZW07XG4gIHdpZHRoOiA2MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBsaW5lLWhlaWdodDogNXJlbTtcbn1cbi5oZXJvIC5uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICNBOTcwRkY7XG59XG4uaGVybyAubWVldCB7XG4gIGNvbG9yOiAjQTlCM0I1O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBhbmltYXRpb24tbmFtZTogbWVldC1ib3VuY2U7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIG1lZXQtYm91bmNlIHtcbiAgMCUge1xuICAgIGxlZnQ6IDBweDtcbiAgICB0b3A6IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgdG9wOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVybyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogXCJCZWJhcyBOZXVlXCI7XG4gIH1cbiAgLmhlcm8gLndlbGNvbWUge1xuICAgIGNvbG9yOiAjQTlCM0I1O1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xuICB9XG4gIC5oZXJvIC5uYW1lIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjQTk3MEZGO1xuICB9XG4gIC5oZXJvIC5tZWV0IHtcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICBjb2xvcjogI0E5QjNCNTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICB9XG59Il19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"],
        _info_info_component__WEBPACK_IMPORTED_MODULE_5__["InfoComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToElement($element) {
        console.log($element);
        $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 0, consts: [[1, "header"], ["href", "../../assets/files/danielChrostowskiResume2021.pdf", "target", "_blank"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Resume");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n\nbody[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 100vh;\n  font-family: \"Poppins\";\n  font-size: 18px;\n  background-color: black;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #6f00ff;\n  border-radius: 6px;\n}\n@media screen and (max-width: 420px) {\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    height: 100vh;\n    font-family: \"Poppins\";\n    font-size: 12px;\n    background-color: black;\n  }\n}\nheader[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0);\n  top: 0;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  margin: 0 auto;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c5d5d8;\n  display: block;\n  padding: 0.5em 2em;\n}\nheader[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #A970FF;\n}\n@media screen and (max-width: 420px) {\n  header[_ngcontent-%COMP%] {\n    top: 0;\n    height: 2.5rem;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    width: 100%;\n    margin: 0 auto;\n  }\n  header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  header[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: whitesmoke;\n    display: block;\n  }\n\n  a[_ngcontent-%COMP%]:hover {\n    color: #A970FF;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVRLDZGQUFBO0FBQ0EsK0VBQUE7QUFIUiw4RUFBQTtBQVVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDTko7QURTQTtFQUNJLHFCQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7QUNOSjtBRFNBO0VBQ0ksV0FBQTtBQ05KO0FEU0E7RUFDSSxtQkFoQ007RUFpQ04sa0JBQUE7QUNOSjtBRFVBO0VBRUk7SUFDSSxTQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VDUk47QUFDRjtBQXhDQTtFQUNJLHdDQUFBO0VBQ0EsTUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBMENKO0FBdENJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBd0NSO0FBdENRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQXdDWjtBQXRDUTtFQUNJLGNEbEJHO0FDMERmO0FBakNBO0VBQ0k7SUFDSSxNQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUFvQ047RUFsQ007SUFDSSxhQUFBO0lBQ0EsdUJBQUE7RUFvQ1Y7RUFsQ1U7SUFDSSxpQkFBQTtJQUNBLGNBQUE7RUFvQ2Q7O0VBL0JFO0lBQ0ksY0QvQ087RUNpRmI7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAxMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwJyk7XG5cbiRwcmltYXJ5OiByZ2IoMTExLCAwLCAyNTUpO1xuJHByaW1hcnktdGV4dDogI0E5NzBGRjtcbiRyZWd1bGFyLXRleHQ6ICNBOUIzQjU7XG5cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG5cbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAgICAgICAgIFxufVxuXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CZWJhcytOZXVlJmRpc3BsYXk9c3dhcFwiKTtcbmJvZHkge1xuICBtYXJnaW46IDAgYXV0bztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzZmMDBmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICBib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB9XG59XG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMi41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuaGVhZGVyIHVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5oZWFkZXIgdWwgYSB7XG4gIGNvbG9yOiAjYzVkNWQ4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xufVxuaGVhZGVyIHVsIGE6aG92ZXIge1xuICBjb2xvcjogI0E5NzBGRjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgaGVhZGVyIHtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIGhlYWRlciB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBoZWFkZXIgdWwgYSB7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0E5NzBGRjtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 22, vars: 0, consts: [[1, "footer"], [1, "left"], [1, "title"], [1, "details"], [1, "right"], ["href", "https://www.linkedin.com/in/dchrostowski/", "target", "_blank"], ["src", "../../assets/icons/linkedin_icon_circle.svg", "alt", "GitHub logo"], ["href", "https://github.com/dchrostowski11", "target", "_blank"], ["src", "../../assets/icons/github_icon.svg", "alt", "GitHub logo"], ["href", "mailto:danielchrostowski11@gmail.com"], ["src", "../../assets/icons/email-icon.svg", "alt", "Email"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Let's Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " My most recent job helped me get a foot in the door into the world of software development and I want to continue growing within it. Since I am still fairly new to the world of software engineering, I would love to hear some feedback on my portfolio as well as any suggestions on how I can make it better. Lastly, if you have any open career opportunities that you think I might be qualified for, or would just like to chat feel free to reach out and connect with me!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Built by Daniel Chrostowski using Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap\");\n\nbody[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  height: 100vh;\n  font-family: \"Poppins\";\n  font-size: 18px;\n  background-color: black;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #6f00ff;\n  border-radius: 6px;\n}\n@media screen and (max-width: 420px) {\n  body[_ngcontent-%COMP%] {\n    margin: 0;\n    height: 100vh;\n    font-family: \"Poppins\";\n    font-size: 12px;\n    background-color: black;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n  width: 100%;\n  height: 30vh;\n  background-color: #6f00ff;\n}\n.footer[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #c5d5d8;\n  text-align: center;\n  font-size: 2rem;\n  font-family: \"Bebas Neue\";\n}\n.details[_ngcontent-%COMP%] {\n  display: grid;\n  place-content: center;\n}\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #c5d5d8;\n}\n.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\n  background-color: #6f00ff;\n  text-align: left;\n}\nfooter[_ngcontent-%COMP%] {\n  height: 100%;\n  display: grid;\n}\nimg[_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 3rem;\n}\n.left[_ngcontent-%COMP%] {\n  padding: 0 10%;\n}\n.left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.right[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.right[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  float: left;\n  text-align: center;\n  padding: 0.5rem;\n}\n.right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c5d5d8;\n}\nspan[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.8rem;\n  display: flex;\n  justify-content: center;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3R5bGVzLnNjc3MiLCIuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVRLDZGQUFBO0FBQ0EsK0VBQUE7QUFIUiw4RUFBQTtBQVVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ05KO0FEU0E7RUFDSSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDTko7QURTQTtFQUNJLHFCQUFBO0FDTko7QURTQTtFQUNJLFdBQUE7QUNOSjtBRFNBO0VBQ0ksV0FBQTtBQ05KO0FEU0E7RUFDSSxtQkFoQ007RUFpQ04sa0JBQUE7QUNOSjtBRFVBO0VBRUk7SUFDSSxTQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VDUk47QUFDRjtBQXhDQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkRETTtBQzJDVjtBQXhDSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQTBDUjtBQXRDQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQXlDSjtBQXZDSTtFQUNJLGNBQUE7QUF5Q1I7QUFyQ0E7RUFDSSx5QkRyQk07RUNzQk4sZ0JBQUE7QUF3Q0o7QUFyQ0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQXdDSjtBQXJDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBd0NKO0FBckNBO0VBQ0ksY0FBQTtBQXdDSjtBQXRDSTtFQUNJLGdCQUFBO0FBd0NSO0FBcENBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBdUNKO0FBckNJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXVDUjtBQXBDSTtFQUNJLGNBQUE7QUFzQ1I7QUFsQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBcUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDEwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmViYXMrTmV1ZSZkaXNwbGF5PXN3YXAnKTtcblxuJHByaW1hcnk6IHJnYigxMTEsIDAsIDI1NSk7XG4kcHJpbWFyeS10ZXh0OiAjQTk3MEZGO1xuJHJlZ3VsYXItdGV4dDogI0E5QjNCNTtcblxuXG5ib2R5IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMnB4O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcblxuICAgIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgfVxuICAgICAgICAgICAgXG59XG5cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRAMTAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJlYmFzK05ldWUmZGlzcGxheT1zd2FwXCIpO1xuYm9keSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDEycHg7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjNmYwMGZmO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIH1cbn1cbi5mb290ZXIge1xuICBtYXJnaW4tdG9wOiA2cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmYwMGZmO1xufVxuLmZvb3RlciAudGl0bGUge1xuICBjb2xvcjogI2M1ZDVkODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtZmFtaWx5OiBcIkJlYmFzIE5ldWVcIjtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGV0YWlscyBwIHtcbiAgY29sb3I6ICNjNWQ1ZDg7XG59XG5cbi5sZWZ0LCAucmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmYwMGZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5mb290ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbmltZyB7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG59XG5cbi5sZWZ0IHtcbiAgcGFkZGluZzogMCAxMCU7XG59XG4ubGVmdCBoMSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnJpZ2h0IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuLnJpZ2h0IGEge1xuICBjb2xvcjogI2M1ZDVkODtcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG59Il19 */"] });


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero/hero.component */ "XWKS");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', component: _hero_hero_component__WEBPACK_IMPORTED_MODULE_2__["HeroComponent"] },
    { path: 'experience', component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"] },
    { path: 'connect', component: _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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