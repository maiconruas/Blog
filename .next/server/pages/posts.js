(function() {
var exports = {};
exports.id = "pages/posts";
exports.ids = ["pages/posts"];
exports.modules = {

/***/ "./src/pages/posts/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/posts/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Posts; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prismicio/client */ "@prismicio/client");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-dom */ "prismic-dom");
/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SEO */ "./src/components/SEO.tsx");
/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/prismic */ "./src/services/prismic.ts");
/* harmony import */ var _posts_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts.module.scss */ "./src/pages/posts/posts.module.scss");
/* harmony import */ var _posts_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_posts_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");


var _jsxFileName = "D:\\Nextjs\\Blog\\src\\pages\\posts\\index.tsx";








function Posts({
  posts
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SEO__WEBPACK_IMPORTED_MODULE_4__.default, {
      title: "Posts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_posts_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_posts_module_scss__WEBPACK_IMPORTED_MODULE_7___default().posts),
        children: posts.map(post => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: `/posts/${post.slug}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("time", {
              children: post.updatedAt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
              children: post.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: post.excerpt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, this)
        }, post.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
const getStaticProps = async () => {
  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_5__.getPrismicClient)();
  const response = await prismic.query([_prismicio_client__WEBPACK_IMPORTED_MODULE_1___default().predicates.at('document.type', 'post')], {
    fetch: ['post.title', 'post.content']
  });
  const posts = response.results.map(post => {
    var _post$data$content$fi, _post$data$content$fi2;

    return {
      slug: post.uid,
      title: prismic_dom__WEBPACK_IMPORTED_MODULE_2__.RichText.asText(post.data.title),
      excerpt: (_post$data$content$fi = (_post$data$content$fi2 = post.data.content.find(content => content.type === 'paragraph')) === null || _post$data$content$fi2 === void 0 ? void 0 : _post$data$content$fi2.text) !== null && _post$data$content$fi !== void 0 ? _post$data$content$fi : '',
      updatedAt: (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.format)(new Date(post.last_publication_date), "d 'de' MMMM 'de' yyyy", {
        locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_8__.ptBR
      })
    };
  });
  return {
    props: {
      posts
    },
    revalidate: 60 * 60 * 12 // 12 horas

  };
};

/***/ }),

/***/ "./src/pages/posts/posts.module.scss":
/*!*******************************************!*\
  !*** ./src/pages/posts/posts.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "posts_container__3KHqb",
	"posts": "posts_posts__3Dt6k"
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_date-fns_esm_locale_index_js","vendors-node_modules_next_link_js","src_components_SEO_tsx-src_services_prismic_ts"], function() { return __webpack_exec__("./src/pages/posts/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL3Bvc3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL3Bvc3RzL3Bvc3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvZXh0ZXJuYWwgXCJAcHJpc21pY2lvL2NsaWVudFwiIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWVzc2VuY2lhbC10ZW1wbGF0ZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWVzc2VuY2lhbC10ZW1wbGF0ZS9leHRlcm5hbCBcInByaXNtaWMtZG9tXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWVzc2VuY2lhbC10ZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWVzc2VuY2lhbC10ZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLWVzc2VuY2lhbC10ZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL25leHRqcy1lc3NlbmNpYWwtdGVtcGxhdGUvaWdub3JlZHxEOlxcTmV4dGpzXFxCbG9nXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiUG9zdHMiLCJwb3N0cyIsInN0eWxlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwidXBkYXRlZEF0IiwidGl0bGUiLCJleGNlcnB0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcmlzbWljIiwiZ2V0UHJpc21pY0NsaWVudCIsInJlc3BvbnNlIiwicXVlcnkiLCJQcmlzbWljIiwiZmV0Y2giLCJyZXN1bHRzIiwidWlkIiwiUmljaFRleHQiLCJkYXRhIiwiY29udGVudCIsImZpbmQiLCJ0eXBlIiwidGV4dCIsImZvcm1hdCIsIkRhdGUiLCJsYXN0X3B1YmxpY2F0aW9uX2RhdGUiLCJsb2NhbGUiLCJwdEJSIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYWUsU0FBU0EsS0FBVCxDQUFlO0FBQUVDO0FBQUYsQ0FBZixFQUFzQztBQUNuRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLG9EQUFEO0FBQUssV0FBSyxFQUFDO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxlQUFTLEVBQUVDLHFFQUFqQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRUEsaUVBQWhCO0FBQUEsa0JBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVQyxJQUFJLGlCQUNiLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFHLFVBQVNBLElBQUksQ0FBQ0MsSUFBSyxFQUFoQztBQUFBLGlDQUNFO0FBQUEsb0NBQ0U7QUFBQSx3QkFBT0QsSUFBSSxDQUFDRTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBLHdCQUFTRixJQUFJLENBQUNHO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFO0FBQUEsd0JBQUlILElBQUksQ0FBQ0k7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFdBQXdDSixJQUFJLENBQUNDLElBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUEsa0JBREY7QUFrQkQ7QUFFTSxNQUFNSSxjQUE4QixHQUFHLFlBQVk7QUFDeEQsUUFBTUMsT0FBTyxHQUFHQyxtRUFBZ0IsRUFBaEM7QUFFQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUYsT0FBTyxDQUFDRyxLQUFSLENBQ3JCLENBQUNDLHNFQUFBLENBQXNCLGVBQXRCLEVBQXVDLE1BQXZDLENBQUQsQ0FEcUIsRUFFckI7QUFDRUMsU0FBSyxFQUFFLENBQUMsWUFBRCxFQUFlLGNBQWY7QUFEVCxHQUZxQixDQUF2QjtBQU9BLFFBQU1kLEtBQUssR0FBR1csUUFBUSxDQUFDSSxPQUFULENBQWlCYixHQUFqQixDQUFxQkMsSUFBSSxJQUFJO0FBQUE7O0FBQ3pDLFdBQU87QUFDTEMsVUFBSSxFQUFFRCxJQUFJLENBQUNhLEdBRE47QUFFTFYsV0FBSyxFQUFFVyx3REFBQSxDQUFnQmQsSUFBSSxDQUFDZSxJQUFMLENBQVVaLEtBQTFCLENBRkY7QUFHTEMsYUFBTyxxREFDTEosSUFBSSxDQUFDZSxJQUFMLENBQVVDLE9BQVYsQ0FBa0JDLElBQWxCLENBQXVCRCxPQUFPLElBQUlBLE9BQU8sQ0FBQ0UsSUFBUixLQUFpQixXQUFuRCxDQURLLDJEQUNMLHVCQUFpRUMsSUFENUQseUVBRUwsRUFMRztBQU1MakIsZUFBUyxFQUFFa0IsZ0RBQU0sQ0FDZixJQUFJQyxJQUFKLENBQVNyQixJQUFJLENBQUNzQixxQkFBZCxDQURlLEVBRWYsdUJBRmUsRUFHZjtBQUFFQyxjQUFNLEVBQUVDLGlEQUFJQTtBQUFkLE9BSGU7QUFOWixLQUFQO0FBWUQsR0FiYSxDQUFkO0FBZUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTDVCO0FBREssS0FERjtBQUlMNkIsY0FBVSxFQUFFLEtBQUssRUFBTCxHQUFVLEVBSmpCLENBSXFCOztBQUpyQixHQUFQO0FBTUQsQ0EvQk0sQzs7Ozs7Ozs7OztBQzFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvcG9zdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFByaXNtaWMgZnJvbSAnQHByaXNtaWNpby9jbGllbnQnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFNFTyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NFTyc7XG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJpc21pYyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdHMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgcHRCUiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5cbmludGVyZmFjZSBQb3N0IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBleGNlcnB0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUG9zdHNQcm9wcyB7XG4gIHBvc3RzOiBQb3N0W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RzKHsgcG9zdHMgfTogUG9zdHNQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U0VPIHRpdGxlPVwiUG9zdHNcIiAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0c30+XG4gICAgICAgICAge3Bvc3RzLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdHMvJHtwb3N0LnNsdWd9YH0ga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8dGltZT57cG9zdC51cGRhdGVkQXR9PC90aW1lPlxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QudGl0bGV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPHA+e3Bvc3QuZXhjZXJwdH08L3A+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wczogR2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KCk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLnF1ZXJ5KFxuICAgIFtQcmlzbWljLnByZWRpY2F0ZXMuYXQoJ2RvY3VtZW50LnR5cGUnLCAncG9zdCcpXSxcbiAgICB7XG4gICAgICBmZXRjaDogWydwb3N0LnRpdGxlJywgJ3Bvc3QuY29udGVudCddLFxuICAgIH0sXG4gICk7XG5cbiAgY29uc3QgcG9zdHMgPSByZXNwb25zZS5yZXN1bHRzLm1hcChwb3N0ID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2x1ZzogcG9zdC51aWQsXG4gICAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHBvc3QuZGF0YS50aXRsZSksXG4gICAgICBleGNlcnB0OlxuICAgICAgICBwb3N0LmRhdGEuY29udGVudC5maW5kKGNvbnRlbnQgPT4gY29udGVudC50eXBlID09PSAncGFyYWdyYXBoJyk/LnRleHQgPz9cbiAgICAgICAgJycsXG4gICAgICB1cGRhdGVkQXQ6IGZvcm1hdChcbiAgICAgICAgbmV3IERhdGUocG9zdC5sYXN0X3B1YmxpY2F0aW9uX2RhdGUpLFxuICAgICAgICBcImQgJ2RlJyBNTU1NICdkZScgeXl5eVwiLFxuICAgICAgICB7IGxvY2FsZTogcHRCUiB9LFxuICAgICAgKSxcbiAgICB9O1xuICB9KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0cyxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDYwICogNjAgKiAxMiwgLy8gMTIgaG9yYXNcbiAgfTtcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwb3N0c19jb250YWluZXJfXzNLSHFiXCIsXG5cdFwicG9zdHNcIjogXCJwb3N0c19wb3N0c19fM0R0NmtcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWljaW8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJkYXRlLWZuc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcmlzbWljLWRvbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=