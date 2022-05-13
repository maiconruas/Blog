(function() {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Post; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ "prismic-dom");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/prismic */ "./src/services/prismic.ts");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SEO */ "./src/components/SEO.tsx");
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.module.scss */ "./src/pages/posts/post.module.scss");
/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\Nextjs\\Blog\\src\\pages\\posts\\[slug].tsx";







function Post({
  post
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  if (router.isFallback) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_5__.default, {
      title: "Post"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().post),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
          children: post.updatedAt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_6___default().content),
          dangerouslySetInnerHTML: {
            __html: post.content
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  };
};
const getStaticProps = async context => {
  const {
    slug
  } = context.params;
  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)();
  const response = await prismic.getByUID('post', String(slug), {});
  const post = {
    slug,
    title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(response.data.title),
    content: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asHtml(response.data.content),
    updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(response.last_publication_date), "d 'de' MMMM 'de' yyyy", {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_7__.ptBR
    })
  };
  return {
    props: {
      post
    },
    revalidate: 60 * 60 * 12 // 12 horas

  };
};

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "post_container__2m5md",
	"post": "post_post__3quL2",
	"content": "post_content__zGere"
};


/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prismicio/client");;

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("date-fns");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_date-fns_esm_locale_index_js","src_components_SEO_tsx-src_services_prismic_ts"], function() { return __webpack_exec__("./src/pages/posts/[slug].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3giLCJ3ZWJwYWNrOi8vbmV4dGpzLWVzc2VuY2lhbC10ZW1wbGF0ZS8uL3NyYy9wYWdlcy9wb3N0cy9wb3N0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlL2V4dGVybmFsIFwicHJpc21pYy1kb21cIiIsIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUG9zdCIsInBvc3QiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpc0ZhbGxiYWNrIiwic3R5bGVzIiwidGl0bGUiLCJ1cGRhdGVkQXQiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsInBhcmFtcyIsInByaXNtaWMiLCJnZXRQcmlzbWljQ2xpZW50IiwicmVzcG9uc2UiLCJnZXRCeVVJRCIsIlN0cmluZyIsIlJpY2hUZXh0IiwiZGF0YSIsImZvcm1hdCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJsb2NhbGUiLCJwdEJSIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV2UsU0FBU0EsSUFBVCxDQUFjO0FBQUVDO0FBQUYsQ0FBZCxFQUFtQztBQUNoRCxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLE1BQUlELE1BQU0sQ0FBQ0UsVUFBWCxFQUF1QjtBQUNyQix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxvREFBRDtBQUFLLFdBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFO0FBQU0sZUFBUyxFQUFFQyxvRUFBakI7QUFBQSw2QkFDRTtBQUFTLGlCQUFTLEVBQUVBLCtEQUFwQjtBQUFBLGdDQUNFO0FBQUEsb0JBQUtKLElBQUksQ0FBQ0s7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBT0wsSUFBSSxDQUFDTTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUNFLG1CQUFTLEVBQUVGLGtFQURiO0FBRUUsaUNBQXVCLEVBQUU7QUFBRUcsa0JBQU0sRUFBRVAsSUFBSSxDQUFDUTtBQUFmO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUEsa0JBREY7QUFnQkQ7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVk7QUFDeEQsU0FBTztBQUNMQyxTQUFLLEVBQUUsRUFERjtBQUVMQyxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQsQ0FMTTtBQU9BLE1BQU1DLGNBQThCLEdBQUcsTUFBTUMsT0FBTixJQUFpQjtBQUM3RCxRQUFNO0FBQUVDO0FBQUYsTUFBV0QsT0FBTyxDQUFDRSxNQUF6QjtBQUVBLFFBQU1DLE9BQU8sR0FBR0MsbUVBQWdCLEVBQWhDO0FBRUEsUUFBTUMsUUFBUSxHQUFHLE1BQU1GLE9BQU8sQ0FBQ0csUUFBUixDQUFpQixNQUFqQixFQUF5QkMsTUFBTSxDQUFDTixJQUFELENBQS9CLEVBQXVDLEVBQXZDLENBQXZCO0FBRUEsUUFBTWQsSUFBSSxHQUFHO0FBQ1hjLFFBRFc7QUFFWFQsU0FBSyxFQUFFZ0Isd0RBQUEsQ0FBZ0JILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjakIsS0FBOUIsQ0FGSTtBQUdYRyxXQUFPLEVBQUVhLHdEQUFBLENBQWdCSCxRQUFRLENBQUNJLElBQVQsQ0FBY2QsT0FBOUIsQ0FIRTtBQUlYRixhQUFTLEVBQUVpQixnREFBTSxDQUNmLElBQUlDLElBQUosQ0FBU04sUUFBUSxDQUFDTyxxQkFBbEIsQ0FEZSxFQUVmLHVCQUZlLEVBR2Y7QUFBRUMsWUFBTSxFQUFFQyxpREFBSUE7QUFBZCxLQUhlO0FBSk4sR0FBYjtBQVVBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0w1QjtBQURLLEtBREY7QUFJTDZCLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUpqQixDQUlxQjs7QUFKckIsR0FBUDtBQU1ELENBdkJNLEM7Ozs7Ozs7Ozs7QUNsRFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9wb3N0cy9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQYXRocywgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSAncHJpc21pYy1kb20nO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgcHRCUiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJpc21pYyc7XG5pbXBvcnQgU0VPIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU0VPJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wb3N0Lm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHBvc3Q6IHtcbiAgICBzbHVnOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgdXBkYXRlZEF0OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0IH06IFBvc3RQcm9wcykge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U0VPIHRpdGxlPVwiUG9zdFwiIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxuICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgIDx0aW1lPntwb3N0LnVwZGF0ZWRBdH08L3RpbWU+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH1cbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdC5jb250ZW50IH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHM6IEdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHBhdGhzOiBbXSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBwcmlzbWljID0gZ2V0UHJpc21pY0NsaWVudCgpO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJpc21pYy5nZXRCeVVJRCgncG9zdCcsIFN0cmluZyhzbHVnKSwge30pO1xuXG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgc2x1ZyxcbiAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHJlc3BvbnNlLmRhdGEudGl0bGUpLFxuICAgIGNvbnRlbnQ6IFJpY2hUZXh0LmFzSHRtbChyZXNwb25zZS5kYXRhLmNvbnRlbnQpLFxuICAgIHVwZGF0ZWRBdDogZm9ybWF0KFxuICAgICAgbmV3IERhdGUocmVzcG9uc2UubGFzdF9wdWJsaWNhdGlvbl9kYXRlKSxcbiAgICAgIFwiZCAnZGUnIE1NTU0gJ2RlJyB5eXl5XCIsXG4gICAgICB7IGxvY2FsZTogcHRCUiB9LFxuICAgICksXG4gIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3QsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMTIsIC8vIDEyIGhvcmFzXG4gIH07XG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicG9zdF9jb250YWluZXJfXzJtNW1kXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfcG9zdF9fM3F1TDJcIixcblx0XCJjb250ZW50XCI6IFwicG9zdF9jb250ZW50X196R2VyZVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtaWNpby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWljLWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9