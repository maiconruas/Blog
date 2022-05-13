exports.id = "src_components_SEO_tsx-src_services_prismic_ts";
exports.ids = ["src_components_SEO_tsx-src_services_prismic_ts"];
exports.modules = {

/***/ "./src/components/SEO.tsx":
/*!********************************!*\
  !*** ./src/components/SEO.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SEO; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "D:\\Nextjs\\Blog\\src\\components\\SEO.tsx";

function SEO({
  title,
  description,
  image,
  excludeTitleSuffix = false,
  indexPage = true
}) {
  const pageTitle = `${title} ${!excludeTitleSuffix ? '| Dev News' : ''}`;
  const pageImage = image ? `${"http://localhost:3000"}/${image}` : null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
      children: pageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 23
    }, this), pageImage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "image",
      content: pageImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }, this), !indexPage && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "robots",
      content: "noindex,nofollow"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 22
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge,chrome=1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "MobileOptimized",
      content: "320"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "HandheldFriendly",
      content: "True"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "theme-color",
      content: "#302F38"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "msapplication-TileColor",
      content: "#302F38"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "referrer",
      content: "no-referrer-when-downgrade"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "google",
      content: "notranslate"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:title",
      content: pageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:description",
      content: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:locale",
      content: "pt_BR"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:site_name",
      content: pageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image",
      content: pageImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image:secure_url",
      content: pageImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image:alt",
      content: "Thumbnail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image:type",
      content: "image/png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image:width",
      content: "1200"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      property: "og:image:height",
      content: "630"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:title",
      content: pageTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:card",
      content: "summary_large_image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:site",
      content: "@ContactstSmart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:creator",
      content: "@ContactstSmart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:image",
      content: pageImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:image:src",
      content: pageImage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:image:alt",
      content: "Thumbnail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:image:width",
      content: "1200"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
      name: "twitter:image:height",
      content: "620"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrismicClient": function() { return /* binding */ getPrismicClient; }
/* harmony export */ });
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ "@prismicio/client");
/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);

function getPrismicClient(req) {
  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });
  return prismic;
}

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvU0VPLnRzeCIsIndlYnBhY2s6Ly9uZXh0anMtZXNzZW5jaWFsLXRlbXBsYXRlLy4vc3JjL3NlcnZpY2VzL3ByaXNtaWMudHMiXSwibmFtZXMiOlsiU0VPIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiZXhjbHVkZVRpdGxlU3VmZml4IiwiaW5kZXhQYWdlIiwicGFnZVRpdGxlIiwicGFnZUltYWdlIiwicHJvY2VzcyIsImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsImVudiIsIlBSSVNNSUNfRU5EUE9JTlQiLCJhY2Nlc3NUb2tlbiIsIlBSSVNNSUNfQUNDRVNTX1RPS0VOIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQVVlLFNBQVNBLEdBQVQsQ0FBYTtBQUMxQkMsT0FEMEI7QUFFMUJDLGFBRjBCO0FBRzFCQyxPQUgwQjtBQUkxQkMsb0JBQWtCLEdBQUcsS0FKSztBQUsxQkMsV0FBUyxHQUFHO0FBTGMsQ0FBYixFQU1GO0FBQ1gsUUFBTUMsU0FBUyxHQUFJLEdBQUVMLEtBQU0sSUFBRyxDQUFDRyxrQkFBRCxHQUFzQixZQUF0QixHQUFxQyxFQUFHLEVBQXRFO0FBRUEsUUFBTUcsU0FBUyxHQUFHSixLQUFLLEdBQ2xCLEdBQUVLLHVCQUFpQyxJQUFHTCxLQUFNLEVBRDFCLEdBRW5CLElBRko7QUFHQSxzQkFDRSw4REFBQyxrREFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQVFHO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBR0dKLFdBQVcsaUJBQUk7QUFBTSxVQUFJLEVBQUMsYUFBWDtBQUF5QixhQUFPLEVBQUVBO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIbEIsRUFJR0ssU0FBUyxpQkFBSTtBQUFNLFVBQUksRUFBQyxPQUFYO0FBQW1CLGFBQU8sRUFBRUE7QUFBNUI7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QUE7QUFBQTtBQUFBLFlBL0JGLGVBZ0NFO0FBQU0sVUFBSSxFQUFDLG1CQUFYO0FBQStCLGFBQU8sRUFBRUE7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRixlQWlDRTtBQUFNLFVBQUksRUFBQyxtQkFBWDtBQUErQixhQUFPLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRixlQWtDRTtBQUFNLFVBQUksRUFBQyxxQkFBWDtBQUFpQyxhQUFPLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxDRixlQW1DRTtBQUFNLFVBQUksRUFBQyxzQkFBWDtBQUFrQyxhQUFPLEVBQUM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdERDtBQUVPLFNBQVNFLGdCQUFULENBQTBCQyxHQUExQixFQUF5QztBQUM5QyxRQUFNQyxPQUFPLEdBQUdDLCtEQUFBLENBQWVKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZQyxnQkFBM0IsRUFBNkM7QUFDM0RKLE9BRDJEO0FBRTNESyxlQUFXLEVBQUVQLE9BQU8sQ0FBQ0ssR0FBUixDQUFZRztBQUZrQyxHQUE3QyxDQUFoQjtBQUtBLFNBQU9MLE9BQVA7QUFDRCxDIiwiZmlsZSI6InNyY19jb21wb25lbnRzX1NFT190c3gtc3JjX3NlcnZpY2VzX3ByaXNtaWNfdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbnRlcmZhY2UgU0VPUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIGV4Y2x1ZGVUaXRsZVN1ZmZpeD86IGJvb2xlYW47XG4gIGluZGV4UGFnZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2UsXG4gIGV4Y2x1ZGVUaXRsZVN1ZmZpeCA9IGZhbHNlLFxuICBpbmRleFBhZ2UgPSB0cnVlLFxufTogU0VPUHJvcHMpIHtcbiAgY29uc3QgcGFnZVRpdGxlID0gYCR7dGl0bGV9ICR7IWV4Y2x1ZGVUaXRsZVN1ZmZpeCA/ICd8IERldiBOZXdzJyA6ICcnfWA7XG5cbiAgY29uc3QgcGFnZUltYWdlID0gaW1hZ2VcbiAgICA/IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NJVEVfVVJMfS8ke2ltYWdlfWBcbiAgICA6IG51bGw7XG4gIHJldHVybiAoXG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3BhZ2VUaXRsZX08L3RpdGxlPlxuXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+fVxuICAgICAge3BhZ2VJbWFnZSAmJiA8bWV0YSBuYW1lPVwiaW1hZ2VcIiBjb250ZW50PXtwYWdlSW1hZ2V9IC8+fVxuICAgICAgeyFpbmRleFBhZ2UgJiYgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJub2luZGV4LG5vZm9sbG93XCIgLz59XG5cbiAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIngtdWEtY29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlLGNocm9tZT0xXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJNb2JpbGVPcHRpbWl6ZWRcIiBjb250ZW50PVwiMzIwXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJIYW5kaGVsZEZyaWVuZGx5XCIgY29udGVudD1cIlRydWVcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD1cIiMzMDJGMzhcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiMzMDJGMzhcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInJlZmVycmVyXCIgY29udGVudD1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJnb29nbGVcIiBjb250ZW50PVwibm90cmFuc2xhdGVcIiAvPlxuXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwicHRfQlJcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cGFnZUltYWdlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgY29udGVudD17cGFnZUltYWdlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTphbHRcIiBjb250ZW50PVwiVGh1bWJuYWlsXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGNvbnRlbnQ9XCJpbWFnZS9wbmdcIiAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XG5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiQENvbnRhY3RzdFNtYXJ0XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiQENvbnRhY3RzdFNtYXJ0XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17cGFnZUltYWdlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2U6c3JjXCIgY29udGVudD17cGFnZUltYWdlfSAvPlxuICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2U6YWx0XCIgY29udGVudD1cIlRodW1ibmFpbFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MjBcIiAvPlxuICAgIDwvSGVhZD5cbiAgKTtcbn1cbiIsImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxPzogdW5rbm93bikge1xuICBjb25zdCBwcmlzbWljID0gUHJpc21pYy5jbGllbnQocHJvY2Vzcy5lbnYuUFJJU01JQ19FTkRQT0lOVCwge1xuICAgIHJlcSxcbiAgICBhY2Nlc3NUb2tlbjogcHJvY2Vzcy5lbnYuUFJJU01JQ19BQ0NFU1NfVE9LRU4sXG4gIH0pO1xuXG4gIHJldHVybiBwcmlzbWljO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==