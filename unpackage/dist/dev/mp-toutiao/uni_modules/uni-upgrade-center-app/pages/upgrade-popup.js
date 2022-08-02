(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/uni-upgrade-center-app/pages/upgrade-popup"],{

/***/ 246:
/*!**********************************************************************************************************************************************!*\
  !*** E:/gitee/second-hand-house/code/uniapp/secondHandHouse/main.js?{"page":"uni_modules%2Funi-upgrade-center-app%2Fpages%2Fupgrade-popup"} ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _upgradePopup = _interopRequireDefault(__webpack_require__(/*! ./uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue */ 247));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_upgradePopup.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 247:
/*!*************************************************************************************************************************!*\
  !*** E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrade-popup.vue?vue&type=template&id=3858945d& */ 248);
/* harmony import */ var _upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade-popup.vue?vue&type=script&lang=js& */ 250);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upgrade-popup.vue?vue&type=style&index=0&lang=css& */ 252);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 248:
/*!********************************************************************************************************************************************************!*\
  !*** E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue?vue&type=template&id=3858945d& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./upgrade-popup.vue?vue&type=template&id=3858945d& */ 249);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_template_id_3858945d___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 249:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue?vue&type=template&id=3858945d& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 250:
/*!**************************************************************************************************************************************************!*\
  !*** E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./upgrade-popup.vue?vue&type=script&lang=js& */ 251);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 251:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var localFilePathKey = '__localFilePath__';
var platform_iOS = 'iOS';
var downloadTask = null;

/**
                          * 对比版本号，如需要，请自行修改判断规则
                          * 支持比对	("3.0.0.0.0.1.0.1", "3.0.0.0.0.1")	("3.0.0.1", "3.0")	("3.1.1", "3.1.1.1") 之类的
                          * @param {Object} v1
                          * @param {Object} v2
                          * v1 > v2 return 1
                          * v1 < v2 return -1
                          * v1 == v2 return 0
                          */
function compare() {var v1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0';var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';
  v1 = String(v1).split('.');
  v2 = String(v2).split('.');
  var minVersionLens = Math.min(v1.length, v2.length);

  var result = 0;
  for (var i = 0; i < minVersionLens; i++) {
    var curV1 = Number(v1[i]);
    var curV2 = Number(v2[i]);

    if (curV1 > curV2) {
      result = 1;
      break;
    } else if (curV1 < curV2) {
      result = -1;
      break;
    }
  }

  if (result === 0 && v1.length !== v2.length) {
    var v1BiggerThenv2 = v1.length > v2.length;
    var maxLensVersion = v1BiggerThenv2 ? v1 : v2;
    for (var _i = minVersionLens; _i < maxLensVersion.length; _i++) {
      var curVersion = Number(maxLensVersion[_i]);
      if (curVersion > 0) {
        v1BiggerThenv2 ? result = 1 : result = -1;
        break;
      }
    }
  }

  return result;
}var _default =

{
  data: function data() {
    return {
      // 从之前下载安装
      installForBeforeFilePath: '',

      // 安装
      installed: false,
      installing: false,

      // 下载
      downloadSuccess: false,
      downloading: false,

      downLoadPercent: 0,
      downloadedSize: 0,
      packageFileSize: 0,

      tempFilePath: '', // 要安装的本地包地址

      // 默认安装包信息
      title: '更新日志',
      contents: '',
      is_mandatory: false,

      // 可自定义属性
      subTitle: '发现新版本',
      downLoadBtnTextiOS: '立即跳转更新',
      downLoadBtnText: '立即下载更新',
      downLoadingText: '安装包下载中，请稍后' };

  },
  onLoad: function onLoad(_ref)

  {var local_storage_key = _ref.local_storage_key;
    if (!local_storage_key) {
      console.error('local_storage_key为空，请检查后重试');
      uni.navigateBack();
      return;
    };

    var localPackageInfo = uni.getStorageSync(local_storage_key);
    if (!localPackageInfo) {
      console.error('安装包信息为空，请检查后重试');
      uni.navigateBack();
      return;
    };

    var requiredKey = ['version', 'url', 'type'];
    for (var key in localPackageInfo) {
      if (requiredKey.indexOf(key) !== -1 && !localPackageInfo[key]) {
        console.error("\u53C2\u6570 ".concat(key, " \u5FC5\u586B\uFF0C\u8BF7\u68C0\u67E5\u540E\u91CD\u8BD5"));
        uni.navigateBack();
        return;
      }
    }

    Object.assign(this, localPackageInfo);
    this.checkLocalStoragePackage();
  },
  onBackPress: function onBackPress() {
    // 强制更新不允许返回
    if (this.is_mandatory) {
      return true;
    }

    downloadTask && downloadTask.abort();
  },
  computed: {
    isWGT: function isWGT() {
      return this.type === 'wgt';
    },
    isiOS: function isiOS() {
      return !this.isWGT ? this.platform.includes(platform_iOS) : false;
    } },

  methods: {
    checkLocalStoragePackage: function checkLocalStoragePackage() {
      // 如果已经有下载好的包，则直接提示安装
      var localFilePathRecord = uni.getStorageSync(localFilePathKey);
      if (localFilePathRecord) {var

        version =


        localFilePathRecord.version,savedFilePath = localFilePathRecord.savedFilePath,installed = localFilePathRecord.installed;

        // 比对版本
        if (!installed && compare(version, this.version) === 0) {
          this.downloadSuccess = true;
          this.installForBeforeFilePath = savedFilePath;
          this.tempFilePath = savedFilePath;
        } else {
          // 如果保存的包版本小 或 已安装过，则直接删除
          this.deleteSavedFile(savedFilePath);
        }
      }
    },
    closeUpdate: function closeUpdate() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!
                _this.downloading) {_context.next = 5;break;}if (!
                _this.is_mandatory) {_context.next = 3;break;}return _context.abrupt("return",
                uni.showToast({
                  title: '下载中，请稍后……',
                  icon: 'none',
                  duration: 500 }));case 3:


                uni.showModal({
                  title: '是否取消下载？',
                  cancelText: '否',
                  confirmText: '是',
                  success: function success(res) {
                    if (res.confirm) {
                      downloadTask && downloadTask.abort();
                      uni.navigateBack();
                    }
                  } });return _context.abrupt("return");case 5:if (!(




                _this.downloadSuccess && _this.tempFilePath)) {_context.next = 10;break;}_context.next = 8;return (

                  _this.saveFile(_this.tempFilePath, _this.version));case 8:
                uni.navigateBack();return _context.abrupt("return");case 10:



                uni.navigateBack();case 11:case "end":return _context.stop();}}}, _callee);}))();
    },
    downloadPackage: function downloadPackage() {var _this2 = this;
      this.downloading = true;

      //下载包
      downloadTask = uni.downloadFile({
        url: this.url,
        success: function success(res) {
          if (res.statusCode == 200) {
            _this2.downloadSuccess = true;
            _this2.tempFilePath = res.tempFilePath;

            // 强制更新，直接安装
            if (_this2.is_mandatory) {
              _this2.installPackage();
            }
          }
        },
        complete: function complete() {
          _this2.downloading = false;

          _this2.downLoadPercent = 0;
          _this2.downloadedSize = 0;
          _this2.packageFileSize = 0;

          downloadTask = null;
        } });


      downloadTask.onProgressUpdate(function (res) {
        _this2.downLoadPercent = res.progress;
        _this2.downloadedSize = (res.totalBytesWritten / Math.pow(1024, 2)).toFixed(2);
        _this2.packageFileSize = (res.totalBytesExpectedToWrite / Math.pow(1024, 2)).toFixed(2);
      });
    },
    installPackage: function installPackage() {
























































    },
    restart: function restart() {
      this.installed = false;




    },
    saveFile: function saveFile(tempFilePath, version) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _yield$uni$saveFile, _yield$uni$saveFile2, err, res;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
                  uni.saveFile({
                    tempFilePath: tempFilePath }));case 2:_yield$uni$saveFile = _context2.sent;_yield$uni$saveFile2 = _slicedToArray(_yield$uni$saveFile, 2);err = _yield$uni$saveFile2[0];res = _yield$uni$saveFile2[1];if (!

                err) {_context2.next = 8;break;}return _context2.abrupt("return");case 8:


                uni.setStorageSync(localFilePathKey, {
                  version: version,
                  savedFilePath: res.savedFilePath });case 9:case "end":return _context2.stop();}}}, _callee2);}))();

    },
    deleteSavedFile: function deleteSavedFile(filePath) {
      uni.removeStorageSync(localFilePathKey);
      return uni.removeSavedFile({
        filePath: filePath });

    },
    jumpToAppStore: function jumpToAppStore() {
      plus.runtime.openURL(this.url);
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 252:
/*!**********************************************************************************************************************************************************!*\
  !*** E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./upgrade-popup.vue?vue&type=style&index=0&lang=css& */ 253);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_upgrade_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 253:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/gitee/second-hand-house/code/uniapp/secondHandHouse/uni_modules/uni-upgrade-center-app/pages/upgrade-popup.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[246,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRTovZ2l0ZWUvc2Vjb25kLWhhbmQtaG91c2UvY29kZS91bmlhcHAvc2Vjb25kSGFuZEhvdXNlL3VuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC52dWU/YWM1NiIsIndlYnBhY2s6Ly8vRTovZ2l0ZWUvc2Vjb25kLWhhbmQtaG91c2UvY29kZS91bmlhcHAvc2Vjb25kSGFuZEhvdXNlL3VuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC52dWU/OTdjMSIsIndlYnBhY2s6Ly8vRTovZ2l0ZWUvc2Vjb25kLWhhbmQtaG91c2UvY29kZS91bmlhcHAvc2Vjb25kSGFuZEhvdXNlL3VuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC52dWU/ODQ5YiIsIndlYnBhY2s6Ly8vRTovZ2l0ZWUvc2Vjb25kLWhhbmQtaG91c2UvY29kZS91bmlhcHAvc2Vjb25kSGFuZEhvdXNlL3VuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC52dWU/YjJkYSIsInVuaS1hcHA6Ly8vdW5pX21vZHVsZXMvdW5pLXVwZ3JhZGUtY2VudGVyLWFwcC9wYWdlcy91cGdyYWRlLXBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vRTovZ2l0ZWUvc2Vjb25kLWhhbmQtaG91c2UvY29kZS91bmlhcHAvc2Vjb25kSGFuZEhvdXNlL3VuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC52dWU/ZjZjNyIsIndlYnBhY2s6Ly8vRTovZ2l0ZWUvc2Vjb25kLWhhbmQtaG91c2UvY29kZS91bmlhcHAvc2Vjb25kSGFuZEhvdXNlL3VuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC52dWU/ZDQwYyJdLCJuYW1lcyI6WyJ3eCIsIl9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztzREFBQTs7O0FBR0E7QUFDQSx5SSw4RkFIQTtBQUNBQSxFQUFFLENBQUNDLGlDQUFILEdBQXVDQyxtQkFBdkMsQ0FHQUMsVUFBVSxDQUFDQyxxQkFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEg7QUFDMUg7QUFDaUU7QUFDTDtBQUNhOzs7QUFHekU7QUFDcUs7QUFDckssZ0JBQWdCLCtLQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLHdGQUFNO0FBQ1IsRUFBRSxpR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw0RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUF1bUIsQ0FBZ0IsaW9CQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2dFM25CO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUZBOztBQUlBO0FBQ0Esc0JBTEE7QUFNQSx1QkFOQTs7QUFRQTtBQUNBLDRCQVRBO0FBVUEsd0JBVkE7O0FBWUEsd0JBWkE7QUFhQSx1QkFiQTtBQWNBLHdCQWRBOztBQWdCQSxzQkFoQkEsRUFnQkE7O0FBRUE7QUFDQSxtQkFuQkE7QUFvQkEsa0JBcEJBO0FBcUJBLHlCQXJCQTs7QUF1QkE7QUFDQSx1QkF4QkE7QUF5QkEsa0NBekJBO0FBMEJBLCtCQTFCQTtBQTJCQSxtQ0EzQkE7O0FBNkJBLEdBL0JBO0FBZ0NBLFFBaENBOztBQWtDQSxPQURBLGlCQUNBLFFBREEsaUJBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQTNEQTtBQTREQSxhQTVEQSx5QkE0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBbkVBO0FBb0VBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsbUJBSUE7QUFDQTtBQUNBLEtBTkEsRUFwRUE7O0FBNEVBO0FBQ0EsNEJBREEsc0NBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFGQTs7O0FBS0EsMkJBTEEsQ0FFQSxPQUZBLENBR0EsYUFIQSxHQUtBLG1CQUxBLENBR0EsYUFIQSxDQUlBLFNBSkEsR0FLQSxtQkFMQSxDQUlBLFNBSkE7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsZUF0QkEseUJBc0JBO0FBQ0EsaUNBREE7QUFFQSxrQ0FGQTtBQUdBO0FBQ0Esb0NBREE7QUFFQSw4QkFGQTtBQUdBLCtCQUhBLEdBSEE7OztBQVNBO0FBQ0Esa0NBREE7QUFFQSxpQ0FGQTtBQUdBLGtDQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQVRBLElBVEE7Ozs7O0FBdUJBLDJEQXZCQTs7QUF5QkEsbUVBekJBO0FBMEJBLG1DQTFCQTs7OztBQThCQSxtQ0E5QkE7QUErQkEsS0FyREE7QUFzREEsbUJBdERBLDZCQXNEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQVpBO0FBYUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQXJCQTs7O0FBd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBdkZBO0FBd0ZBLGtCQXhGQSw0QkF3RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlEQSxLQWpKQTtBQWtKQSxXQWxKQSxxQkFrSkE7QUFDQTs7Ozs7QUFLQSxLQXhKQTtBQXlKQSxZQXpKQSxvQkF5SkEsWUF6SkEsRUF5SkEsT0F6SkEsRUF5SkE7QUFDQTtBQUNBLDhDQURBLEdBREEsNEdBQ0EsR0FEQSwyQkFDQSxHQURBOztBQUlBLG1CQUpBOzs7QUFPQTtBQUNBLGtDQURBO0FBRUEsa0RBRkEsSUFQQTs7QUFXQSxLQXBLQTtBQXFLQSxtQkFyS0EsMkJBcUtBLFFBcktBLEVBcUtBO0FBQ0E7QUFDQTtBQUNBLDBCQURBOztBQUdBLEtBMUtBO0FBMktBLGtCQTNLQSw0QkEyS0E7QUFDQTtBQUNBLEtBN0tBLEVBNUVBLEU7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFBQTtBQUFBO0FBQUE7QUFBeTNCLENBQWdCLDAzQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTc0QjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InVuaV9tb2R1bGVzL3VuaS11cGdyYWRlLWNlbnRlci1hcHAvcGFnZXMvdXBncmFkZS1wb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbi8vIEB0cy1pZ25vcmVcbnd4Ll9fd2VicGFja19yZXF1aXJlX1VOSV9NUF9QTFVHSU5fXyA9IF9fd2VicGFja19yZXF1aXJlX187XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vdW5pX21vZHVsZXMvdW5pLXVwZ3JhZGUtY2VudGVyLWFwcC9wYWdlcy91cGdyYWRlLXBvcHVwLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VwZ3JhZGUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4NTg5NDVkJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdXBncmFkZS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VwZ3JhZGUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3VwZ3JhZGUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidW5pX21vZHVsZXMvdW5pLXVwZ3JhZGUtY2VudGVyLWFwcC9wYWdlcy91cGdyYWRlLXBvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFx0ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xNi0wIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHRlbXBsYXRlLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay11bmktYXBwLWxvYWRlclxcXFxwYWdlLW1ldGEuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdXBncmFkZS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg1ODk0NWQmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91cGdyYWRlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS0xMi0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHNjcmlwdC5qcyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91cGdyYWRlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm1hc2sgZmxleC1jZW50ZXJcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiY29udGVudCBib3R0b24tcmFkaXVzXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC10b3BcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNvbnRlbnQtdG9wLXRleHRcIj57e3RpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0PGltYWdlIGNsYXNzPVwiY29udGVudC10b3BcIiBzdHlsZT1cInRvcDogMDtcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgc3JjPVwiLi4vaW1hZ2VzL2JnX3RvcC5wbmdcIj5cclxuXHRcdFx0XHQ8L2ltYWdlPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1oZWFkZXJcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY29udGVudC1ib2R5XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHRleHQ+e3tzdWJUaXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PCEtLSA8dGV4dCBzdHlsZT1cInBhZGRpbmctbGVmdDoyMHJweDtmb250LXNpemU6IDAuNWVtO2NvbG9yOiAjNjY2O1wiPnYue3t2ZXJzaW9ufX08L3RleHQ+IC0tPlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImJvZHlcIj5cclxuXHRcdFx0XHRcdDxzY3JvbGwtdmlldyBjbGFzcz1cImJveC1kZXMtc2Nyb2xsXCIgc2Nyb2xsLXk9XCJ0cnVlXCI+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiYm94LWRlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdHt7Y29udGVudHN9fVxyXG5cdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZvb3RlciBmbGV4LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCJpc2lPU1wiPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiY29udGVudC1idXR0b25cIiBzdHlsZT1cImJvcmRlcjogbm9uZTtjb2xvcjogI2ZmZjtcIiBwbGFpbiBAY2xpY2s9XCJqdW1wVG9BcHBTdG9yZVwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7ZG93bkxvYWRCdG5UZXh0aU9TfX1cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PHRlbXBsYXRlIHYtZWxzZT5cclxuXHRcdFx0XHRcdFx0PHRlbXBsYXRlIHYtaWY9XCIhZG93bmxvYWRTdWNjZXNzXCI+XHJcblx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJwcm9ncmVzcy1ib3ggZmxleC1jb2x1bW5cIiB2LWlmPVwiZG93bmxvYWRpbmdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwcm9ncmVzcyBjbGFzcz1cInByb2dyZXNzXCIgYm9yZGVyLXJhZGl1cz1cIjM1XCIgOnBlcmNlbnQ9XCJkb3duTG9hZFBlcmNlbnRcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmVDb2xvcj1cIiMzREE3RkZcIiBzaG93LWluZm8gc3Ryb2tlLXdpZHRoPVwiMTBcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDoxMDAlO2ZvbnQtc2l6ZTogMjhycHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+e3tkb3duTG9hZGluZ1RleHR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+KHt7ZG93bmxvYWRlZFNpemV9fS97e3BhY2thZ2VGaWxlU2l6ZX19TSk8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHYtZWxzZSBjbGFzcz1cImNvbnRlbnQtYnV0dG9uXCIgc3R5bGU9XCJib3JkZXI6IG5vbmU7Y29sb3I6ICNmZmY7XCIgcGxhaW5cclxuXHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cImRvd25sb2FkUGFja2FnZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tkb3duTG9hZEJ0blRleHR9fVxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHYtZWxzZS1pZj1cImRvd25sb2FkU3VjY2VzcyAmJiAhaW5zdGFsbGVkXCIgY2xhc3M9XCJjb250ZW50LWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9XCJib3JkZXI6IG5vbmU7Y29sb3I6ICNmZmY7XCIgcGxhaW4gOmxvYWRpbmc9XCJpbnN0YWxsaW5nXCIgOmRpc2FibGVkPVwiaW5zdGFsbGluZ1wiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiaW5zdGFsbFBhY2thZ2VcIj5cclxuXHRcdFx0XHRcdFx0XHR7e2luc3RhbGxpbmcgPyAn5q2j5Zyo5a6J6KOF4oCm4oCmJyA6ICfkuIvovb3lrozmiJDvvIznq4vljbPlronoo4UnfX1cclxuXHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHYtaWY9XCJpbnN0YWxsZWQgJiYgaXNXR1RcIiBjbGFzcz1cImNvbnRlbnQtYnV0dG9uXCIgc3R5bGU9XCJib3JkZXI6IG5vbmU7Y29sb3I6ICNmZmY7XCIgcGxhaW5cclxuXHRcdFx0XHRcdFx0XHRAY2xpY2s9XCJyZXN0YXJ0XCI+XHJcblx0XHRcdFx0XHRcdFx05a6J6KOF5a6M5q+V77yM54K55Ye76YeN5ZCvXHJcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHJcblx0XHRcdDxpbWFnZSB2LWlmPVwiIWlzX21hbmRhdG9yeVwiIGNsYXNzPVwiY2xvc2UtaW1nXCIgc3JjPVwiLi4vaW1hZ2VzL2FwcF91cGRhdGVfY2xvc2UucG5nXCJcclxuXHRcdFx0XHRAY2xpY2suc3RvcD1cImNsb3NlVXBkYXRlXCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGNvbnN0IGxvY2FsRmlsZVBhdGhLZXkgPSAnX19sb2NhbEZpbGVQYXRoX18nXHJcblx0Y29uc3QgcGxhdGZvcm1faU9TID0gJ2lPUyc7XHJcblx0bGV0IGRvd25sb2FkVGFzayA9IG51bGw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIOWvueavlOeJiOacrOWPt++8jOWmgumcgOimge+8jOivt+iHquihjOS/ruaUueWIpOaWreinhOWImVxyXG5cdCAqIOaUr+aMgeavlOWvuVx0KFwiMy4wLjAuMC4wLjEuMC4xXCIsIFwiMy4wLjAuMC4wLjFcIilcdChcIjMuMC4wLjFcIiwgXCIzLjBcIilcdChcIjMuMS4xXCIsIFwiMy4xLjEuMVwiKSDkuYvnsbvnmoRcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gdjFcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gdjJcclxuXHQgKiB2MSA+IHYyIHJldHVybiAxXHJcblx0ICogdjEgPCB2MiByZXR1cm4gLTFcclxuXHQgKiB2MSA9PSB2MiByZXR1cm4gMFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIGNvbXBhcmUodjEgPSAnMCcsIHYyID0gJzAnKSB7XHJcblx0XHR2MSA9IFN0cmluZyh2MSkuc3BsaXQoJy4nKVxyXG5cdFx0djIgPSBTdHJpbmcodjIpLnNwbGl0KCcuJylcclxuXHRcdGNvbnN0IG1pblZlcnNpb25MZW5zID0gTWF0aC5taW4odjEubGVuZ3RoLCB2Mi5sZW5ndGgpO1xyXG5cclxuXHRcdGxldCByZXN1bHQgPSAwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBtaW5WZXJzaW9uTGVuczsgaSsrKSB7XHJcblx0XHRcdGNvbnN0IGN1clYxID0gTnVtYmVyKHYxW2ldKVxyXG5cdFx0XHRjb25zdCBjdXJWMiA9IE51bWJlcih2MltpXSlcclxuXHJcblx0XHRcdGlmIChjdXJWMSA+IGN1clYyKSB7XHJcblx0XHRcdFx0cmVzdWx0ID0gMVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9IGVsc2UgaWYoY3VyVjEgPCBjdXJWMikge1xyXG5cdFx0XHRcdHJlc3VsdCA9IC0xXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVzdWx0ID09PSAwICYmICh2MS5sZW5ndGggIT09IHYyLmxlbmd0aCkpIHtcclxuXHRcdFx0Y29uc3QgdjFCaWdnZXJUaGVudjIgPSB2MS5sZW5ndGggPiB2Mi5sZW5ndGg7XHJcblx0XHRcdGNvbnN0IG1heExlbnNWZXJzaW9uID0gdjFCaWdnZXJUaGVudjIgPyB2MSA6IHYyO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gbWluVmVyc2lvbkxlbnM7IGkgPCBtYXhMZW5zVmVyc2lvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGNvbnN0IGN1clZlcnNpb24gPSBOdW1iZXIobWF4TGVuc1ZlcnNpb25baV0pXHJcblx0XHRcdFx0aWYgKGN1clZlcnNpb24gPiAwKSB7XHJcblx0XHRcdFx0XHR2MUJpZ2dlclRoZW52MiA/IHJlc3VsdCA9IDEgOiByZXN1bHQgPSAtMVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Ly8g5LuO5LmL5YmN5LiL6L295a6J6KOFXHJcblx0XHRcdFx0aW5zdGFsbEZvckJlZm9yZUZpbGVQYXRoOiAnJyxcclxuXHJcblx0XHRcdFx0Ly8g5a6J6KOFXHJcblx0XHRcdFx0aW5zdGFsbGVkOiBmYWxzZSxcclxuXHRcdFx0XHRpbnN0YWxsaW5nOiBmYWxzZSxcclxuXHJcblx0XHRcdFx0Ly8g5LiL6L29XHJcblx0XHRcdFx0ZG93bmxvYWRTdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0XHRkb3dubG9hZGluZzogZmFsc2UsXHJcblxyXG5cdFx0XHRcdGRvd25Mb2FkUGVyY2VudDogMCxcclxuXHRcdFx0XHRkb3dubG9hZGVkU2l6ZTogMCxcclxuXHRcdFx0XHRwYWNrYWdlRmlsZVNpemU6IDAsXHJcblxyXG5cdFx0XHRcdHRlbXBGaWxlUGF0aDogJycsIC8vIOimgeWuieijheeahOacrOWcsOWMheWcsOWdgFxyXG5cclxuXHRcdFx0XHQvLyDpu5jorqTlronoo4XljIXkv6Hmga9cclxuXHRcdFx0XHR0aXRsZTogJ+abtOaWsOaXpeW/lycsXHJcblx0XHRcdFx0Y29udGVudHM6ICcnLFxyXG5cdFx0XHRcdGlzX21hbmRhdG9yeTogZmFsc2UsXHJcblxyXG5cdFx0XHRcdC8vIOWPr+iHquWumuS5ieWxnuaAp1xyXG5cdFx0XHRcdHN1YlRpdGxlOiAn5Y+R546w5paw54mI5pysJyxcclxuXHRcdFx0XHRkb3duTG9hZEJ0blRleHRpT1M6ICfnq4vljbPot7Povazmm7TmlrAnLFxyXG5cdFx0XHRcdGRvd25Mb2FkQnRuVGV4dDogJ+eri+WNs+S4i+i9veabtOaWsCcsXHJcblx0XHRcdFx0ZG93bkxvYWRpbmdUZXh0OiAn5a6J6KOF5YyF5LiL6L295Lit77yM6K+356iN5ZCOJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKHtcclxuXHRcdFx0bG9jYWxfc3RvcmFnZV9rZXlcclxuXHRcdH0pIHtcclxuXHRcdFx0aWYgKCFsb2NhbF9zdG9yYWdlX2tleSkge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2xvY2FsX3N0b3JhZ2Vfa2V55Li656m677yM6K+35qOA5p+l5ZCO6YeN6K+VJylcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRjb25zdCBsb2NhbFBhY2thZ2VJbmZvID0gdW5pLmdldFN0b3JhZ2VTeW5jKGxvY2FsX3N0b3JhZ2Vfa2V5KTtcclxuXHRcdFx0aWYgKCFsb2NhbFBhY2thZ2VJbmZvKSB7XHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcign5a6J6KOF5YyF5L+h5oGv5Li656m677yM6K+35qOA5p+l5ZCO6YeN6K+VJylcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRjb25zdCByZXF1aXJlZEtleSA9IFsndmVyc2lvbicsICd1cmwnLCAndHlwZSddXHJcblx0XHRcdGZvciAobGV0IGtleSBpbiBsb2NhbFBhY2thZ2VJbmZvKSB7XHJcblx0XHRcdFx0aWYgKHJlcXVpcmVkS2V5LmluZGV4T2Yoa2V5KSAhPT0gLTEgJiYgIWxvY2FsUGFja2FnZUluZm9ba2V5XSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcihg5Y+C5pWwICR7a2V5fSDlv4XloavvvIzor7fmo4Dmn6XlkI7ph43or5VgKVxyXG5cdFx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRPYmplY3QuYXNzaWduKHRoaXMsIGxvY2FsUGFja2FnZUluZm8pXHJcblx0XHRcdHRoaXMuY2hlY2tMb2NhbFN0b3JhZ2VQYWNrYWdlKClcclxuXHRcdH0sXHJcblx0XHRvbkJhY2tQcmVzcygpIHtcclxuXHRcdFx0Ly8g5by65Yi25pu05paw5LiN5YWB6K646L+U5ZueXHJcblx0XHRcdGlmICh0aGlzLmlzX21hbmRhdG9yeSkge1xyXG5cdFx0XHRcdHJldHVybiB0cnVlXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGRvd25sb2FkVGFzayAmJiBkb3dubG9hZFRhc2suYWJvcnQoKVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGlzV0dUKCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnR5cGUgPT09ICd3Z3QnXHJcblx0XHRcdH0sXHJcblx0XHRcdGlzaU9TKCkge1xyXG5cdFx0XHRcdHJldHVybiAhdGhpcy5pc1dHVCA/IHRoaXMucGxhdGZvcm0uaW5jbHVkZXMocGxhdGZvcm1faU9TKSA6IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRjaGVja0xvY2FsU3RvcmFnZVBhY2thZ2UoKSB7XHJcblx0XHRcdFx0Ly8g5aaC5p6c5bey57uP5pyJ5LiL6L295aW955qE5YyF77yM5YiZ55u05o6l5o+Q56S65a6J6KOFXHJcblx0XHRcdFx0Y29uc3QgbG9jYWxGaWxlUGF0aFJlY29yZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhsb2NhbEZpbGVQYXRoS2V5KVxyXG5cdFx0XHRcdGlmIChsb2NhbEZpbGVQYXRoUmVjb3JkKSB7XHJcblx0XHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRcdHZlcnNpb24sXHJcblx0XHRcdFx0XHRcdHNhdmVkRmlsZVBhdGgsXG5cdFx0XHRcdFx0XHRpbnN0YWxsZWRcclxuXHRcdFx0XHRcdH0gPSBsb2NhbEZpbGVQYXRoUmVjb3JkXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvLyDmr5Tlr7nniYjmnKxcclxuXHRcdFx0XHRcdGlmICghaW5zdGFsbGVkICYmIGNvbXBhcmUodmVyc2lvbiwgdGhpcy52ZXJzaW9uKSA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRvd25sb2FkU3VjY2VzcyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHRoaXMuaW5zdGFsbEZvckJlZm9yZUZpbGVQYXRoID0gc2F2ZWRGaWxlUGF0aDtcclxuXHRcdFx0XHRcdFx0dGhpcy50ZW1wRmlsZVBhdGggPSBzYXZlZEZpbGVQYXRoXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDlpoLmnpzkv53lrZjnmoTljIXniYjmnKzlsI8g5oiWIOW3suWuieijhei/h++8jOWImeebtOaOpeWIoOmZpFxyXG5cdFx0XHRcdFx0XHR0aGlzLmRlbGV0ZVNhdmVkRmlsZShzYXZlZEZpbGVQYXRoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0YXN5bmMgY2xvc2VVcGRhdGUoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuZG93bmxvYWRpbmcpIHtcclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzX21hbmRhdG9yeSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfkuIvovb3kuK3vvIzor7fnqI3lkI7igKbigKYnLFxyXG5cdFx0XHRcdFx0XHRcdGljb246ICdub25lJyxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogNTAwXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICfmmK/lkKblj5bmtojkuIvovb3vvJ8nLFxyXG5cdFx0XHRcdFx0XHRjYW5jZWxUZXh0OiAn5ZCmJyxcclxuXHRcdFx0XHRcdFx0Y29uZmlybVRleHQ6ICfmmK8nLFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZG93bmxvYWRUYXNrICYmIGRvd25sb2FkVGFzay5hYm9ydCgpXHJcblx0XHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuZG93bmxvYWRTdWNjZXNzICYmIHRoaXMudGVtcEZpbGVQYXRoKSB7XHJcblx0XHRcdFx0XHQvLyDljIXlt7Lnu4/kuIvovb3lrozmr5XvvIznqI3lkI7lronoo4XvvIzlsIbljIXkv53lrZjlnKjmnKzlnLBcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMuc2F2ZUZpbGUodGhpcy50ZW1wRmlsZVBhdGgsIHRoaXMudmVyc2lvbilcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZUJhY2soKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpXHJcblx0XHRcdH0sXHJcblx0XHRcdGRvd25sb2FkUGFja2FnZSgpIHtcclxuXHRcdFx0XHR0aGlzLmRvd25sb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHRcdFx0Ly/kuIvovb3ljIVcclxuXHRcdFx0XHRkb3dubG9hZFRhc2sgPSB1bmkuZG93bmxvYWRGaWxlKHtcclxuXHRcdFx0XHRcdHVybDogdGhpcy51cmwsXHJcblx0XHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5kb3dubG9hZFN1Y2Nlc3MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudGVtcEZpbGVQYXRoID0gcmVzLnRlbXBGaWxlUGF0aFxyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyDlvLrliLbmm7TmlrDvvIznm7TmjqXlronoo4VcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5pc19tYW5kYXRvcnkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuaW5zdGFsbFBhY2thZ2UoKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjb21wbGV0ZTogKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmRvd25sb2FkaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0XHR0aGlzLmRvd25Mb2FkUGVyY2VudCA9IDBcclxuXHRcdFx0XHRcdFx0dGhpcy5kb3dubG9hZGVkU2l6ZSA9IDBcclxuXHRcdFx0XHRcdFx0dGhpcy5wYWNrYWdlRmlsZVNpemUgPSAwXHJcblxyXG5cdFx0XHRcdFx0XHRkb3dubG9hZFRhc2sgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRkb3dubG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZShyZXMgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5kb3duTG9hZFBlcmNlbnQgPSByZXMucHJvZ3Jlc3M7XHJcblx0XHRcdFx0XHR0aGlzLmRvd25sb2FkZWRTaXplID0gKHJlcy50b3RhbEJ5dGVzV3JpdHRlbiAvIE1hdGgucG93KDEwMjQsIDIpKS50b0ZpeGVkKDIpO1xyXG5cdFx0XHRcdFx0dGhpcy5wYWNrYWdlRmlsZVNpemUgPSAocmVzLnRvdGFsQnl0ZXNFeHBlY3RlZFRvV3JpdGUgLyBNYXRoLnBvdygxMDI0LCAyKSkudG9GaXhlZCgyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0aW5zdGFsbFBhY2thZ2UoKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0Ly8gd2d06LWE5rqQ5YyF5a6J6KOFXHJcblx0XHRcdFx0aWYgKHRoaXMuaXNXR1QpIHtcclxuXHRcdFx0XHRcdHRoaXMuaW5zdGFsbGluZyA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRwbHVzLnJ1bnRpbWUuaW5zdGFsbCh0aGlzLnRlbXBGaWxlUGF0aCwge1xyXG5cdFx0XHRcdFx0Zm9yY2U6IGZhbHNlXHJcblx0XHRcdFx0fSwgYXN5bmMgcmVzID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuaW5zdGFsbGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5pbnN0YWxsZWQgPSB0cnVlO1xyXG5cclxuXHRcdFx0XHRcdC8vIHdndOWMhe+8jOWuieijheWQjuS8muaPkOekuiDlronoo4XmiJDlip/vvIzmmK/lkKbph43lkK9cclxuXHRcdFx0XHRcdGlmICh0aGlzLmlzV0dUKSB7XHJcblx0XHRcdFx0XHRcdC8vIOW8uuWItuabtOaWsOWuieijheWujOaIkOmHjeWQr1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5pc19tYW5kYXRvcnkpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICflronoo4XmiJDlip/vvIzmraPlnKjph43lkK/igKbigKYnXHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHR1bmkuaGlkZUxvYWRpbmcoKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZXN0YXJ0KCk7XHJcblx0XHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNvbnN0IGxvY2FsRmlsZVBhdGhSZWNvcmQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMobG9jYWxGaWxlUGF0aEtleSlcblx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhsb2NhbEZpbGVQYXRoS2V5LCB7XG5cdFx0XHRcdFx0XHRcdC4uLmxvY2FsRmlsZVBhdGhSZWNvcmQsXG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZDogdHJ1ZVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgYXN5bmMgZXJyID0+IHtcclxuXHRcdFx0XHRcdC8vIOWmguaenOaYr+WuieijheS5i+WJjeeahOWMhe+8jOWuieijheWksei0peWQjuWIoOmZpOS5i+WJjeeahOWMhVxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaW5zdGFsbEZvckJlZm9yZUZpbGVQYXRoKSB7XHJcblx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuZGVsZXRlU2F2ZWRGaWxlKHRoaXMuaW5zdGFsbEZvckJlZm9yZUZpbGVQYXRoKVxyXG5cdFx0XHRcdFx0XHR0aGlzLmluc3RhbGxGb3JCZWZvcmVGaWxlUGF0aCA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIOWuieijheWksei0pemcgOimgemHjeaWsOS4i+i9veWuieijheWMhVxyXG5cdFx0XHRcdFx0dGhpcy5pbnN0YWxsaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmluc3RhbGxlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRcdHVuaS5zaG93TW9kYWwoe1xyXG5cdFx0XHRcdFx0XHR0aXRsZTogYOabtOaWsOWksei0pSR7dGhpcy5pc1dHVCA/ICcnIDogJ++8jEFQS+aWh+S7tuS4jeWtmOWcqCd977yM6K+36YeN5paw5LiL6L29YCxcclxuXHRcdFx0XHRcdFx0Y29udGVudDogZXJyLm1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdHNob3dDYW5jZWw6IGZhbHNlXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8g6Z2ed2d05YyF77yM5a6J6KOF6Lez5Ye66KaG55uW5a6J6KOF77yM5q2k5aSE55u05o6l6L+U5Zue5LiK5LiA6aG1XHJcblx0XHRcdFx0aWYgKCF0aGlzLmlzV0dUKSB7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKClcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlc3RhcnQoKSB7XHJcblx0XHRcdFx0dGhpcy5pbnN0YWxsZWQgPSBmYWxzZTtcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHQvL+abtOaWsOWujOmHjeWQr2FwcFxyXG5cdFx0XHRcdHBsdXMucnVudGltZS5yZXN0YXJ0KCk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGFzeW5jIHNhdmVGaWxlKHRlbXBGaWxlUGF0aCwgdmVyc2lvbikge1xyXG5cdFx0XHRcdGNvbnN0IFtlcnIsIHJlc10gPSBhd2FpdCB1bmkuc2F2ZUZpbGUoe1xyXG5cdFx0XHRcdFx0dGVtcEZpbGVQYXRoXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhsb2NhbEZpbGVQYXRoS2V5LCB7XHJcblx0XHRcdFx0XHR2ZXJzaW9uLFxyXG5cdFx0XHRcdFx0c2F2ZWRGaWxlUGF0aDogcmVzLnNhdmVkRmlsZVBhdGhcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkZWxldGVTYXZlZEZpbGUoZmlsZVBhdGgpIHtcclxuXHRcdFx0XHR1bmkucmVtb3ZlU3RvcmFnZVN5bmMobG9jYWxGaWxlUGF0aEtleSlcclxuXHRcdFx0XHRyZXR1cm4gdW5pLnJlbW92ZVNhdmVkRmlsZSh7XHJcblx0XHRcdFx0XHRmaWxlUGF0aFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGp1bXBUb0FwcFN0b3JlKCkge1xyXG5cdFx0XHRcdHBsdXMucnVudGltZS5vcGVuVVJMKHRoaXMudXJsKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0cGFnZSB7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHR9XHJcblxyXG5cdC5mbGV4LWNlbnRlciB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5cclxuXHQubWFzayB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC42NSk7XHJcblx0fVxyXG5cclxuXHQuYm90dG9uLXJhZGl1cyB7XHJcblx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHJweDtcclxuXHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5jb250ZW50IHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdHdpZHRoOiA2MDBycHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdHBhZGRpbmc6IDAgNTBycHg7XHJcblx0XHRmb250LWZhbWlseTogU291cmNlIEhhbiBTYW5zIENOO1xyXG5cdH1cclxuXHJcblx0LnRleHQge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGxpbmUtaGVpZ2h0OiAyMDBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQtdG9wIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTE5NXJweDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHR3aWR0aDogNjAwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyNzBycHg7XHJcblx0fVxyXG5cclxuXHQuY29udGVudC10b3AtdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDQ1cnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRjb2xvcjogI0Y4RjhGQTtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMTIwcnB4O1xyXG5cdFx0bGVmdDogNTBycHg7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQtaGVhZGVyIHtcclxuXHRcdGhlaWdodDogNzBycHg7XHJcblx0fVxyXG5cclxuXHQudGl0bGUge1xyXG5cdFx0Zm9udC1zaXplOiAzM3JweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0Y29sb3I6ICMzREE3RkY7XHJcblx0XHRsaW5lLWhlaWdodDogMzhweDtcclxuXHR9XHJcblxyXG5cdC5mb290ZXIge1xyXG5cdFx0aGVpZ2h0OiAxNTBycHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdH1cclxuXHJcblx0LmJveC1kZXMtc2Nyb2xsIHtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRwYWRkaW5nOiAwIDQwcnB4O1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cdH1cclxuXHJcblx0LmJveC1kZXMge1xyXG5cdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdGNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0bGluZS1oZWlnaHQ6IDUwcnB4O1xyXG5cdH1cclxuXHJcblx0LnByb2dyZXNzLWJveCB7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdC5wcm9ncmVzcyB7XHJcblx0XHR3aWR0aDogOTAlO1xyXG5cdFx0aGVpZ2h0OiA0MHJweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcblx0fVxyXG5cclxuXHQuY2xvc2UtaW1nIHtcclxuXHRcdHdpZHRoOiA3MHJweDtcclxuXHRcdGhlaWdodDogNzBycHg7XHJcblx0XHR6LWluZGV4OiAxMDAwO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtMTIwcnB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSA3MHJweCAvIDIpO1xyXG5cdH1cclxuXHJcblx0LmNvbnRlbnQtYnV0dG9uIHtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmb250LXNpemU6IDMwcnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdGNvbG9yOiAjRkZGRkZGO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNDBycHg7XHJcblx0XHRtYXJnaW46IDAgMThycHg7XHJcblxyXG5cdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHJweDtcclxuXHJcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMxNzg1ZmYsICMzREE3RkYpO1xyXG5cdH1cclxuXHJcblx0LmZsZXgtY29sdW1uIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cXFxcZGlzdFxcXFxsb2FkZXIuanM/P3JlZi0tNi1vbmVPZi0xLTAhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcY3NzLWxvYWRlclxcXFxkaXN0XFxcXGNqcy5qcz8/cmVmLS02LW9uZU9mLTEtMSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGxvYWRlcnNcXFxcc3R5bGVQb3N0TG9hZGVyLmpzIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlclxcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMiFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxwb3N0Y3NzLWxvYWRlclxcXFxzcmNcXFxcaW5kZXguanM/P3JlZi0tNi1vbmVPZi0xLTMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx3ZWJwYWNrLXVuaS1tcC1sb2FkZXJcXFxcbGliXFxcXHN0eWxlLmpzIS4vdXBncmFkZS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxcXFxkaXN0XFxcXGxvYWRlci5qcz8/cmVmLS02LW9uZU9mLTEtMCFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxjc3MtbG9hZGVyXFxcXGRpc3RcXFxcY2pzLmpzPz9yZWYtLTYtb25lT2YtMS0xIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcbG9hZGVyc1xcXFxzdHlsZVBvc3RMb2FkZXIuanMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTYtb25lT2YtMS0yIUQ6XFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXHBvc3Rjc3MtbG9hZGVyXFxcXHNyY1xcXFxpbmRleC5qcz8/cmVmLS02LW9uZU9mLTEtMyFEOlxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhRDpcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHdlYnBhY2stdW5pLW1wLWxvYWRlclxcXFxsaWJcXFxcc3R5bGUuanMhLi91cGdyYWRlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY1NzAxNzcxMTAzMFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=