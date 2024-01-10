"use strict";
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 971:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   diagram: () => (/* binding */ diagram)
/* harmony export */ });
/* harmony import */ var _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(913);
/* harmony import */ var _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(914);
/* harmony import */ var _mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(574);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var dagre_d3_es_src_graphlib_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(712);
/* harmony import */ var dagre_d3_es_src_dagre_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(787);
/* harmony import */ var dagre_d3_es_src_graphlib_json_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(911);
/* harmony import */ var ts_dedent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var dagre_d3_es_src_dagre_js_label_add_html_label_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(894);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
/* harmony import */ var _braintree_sanitize_url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(573);





















const diagram = {
  parser: _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_9__.p,
  db: _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_9__.f,
  renderer: _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_10__.f,
  styles: _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_10__.a,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    (0,_mermaid_934d9bea_js__WEBPACK_IMPORTED_MODULE_11__.p)({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    _styles_b966c4ae_js__WEBPACK_IMPORTED_MODULE_10__.f.setConf(cnf.flowchart);
    _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_9__.f.clear();
    _flowDb_170db09d_js__WEBPACK_IMPORTED_MODULE_9__.f.setGen("gen-2");
  }
};



/***/ })

};
;
//# sourceMappingURL=11.extension.js.map