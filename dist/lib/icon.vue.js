'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var icon_vue_vue_type_script_lang = require('./icon.vue2.js');
var vue = require('vue');
var _pluginVue_exportHelper = require('./_virtual/_plugin-vue_export-helper.js');

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock(
    "i",
    {
      class: vue.normalizeClass(["k-svg-icon", [
        {
          [`k-animation-spin`]: _ctx.spin
        }
      ]]),
      style: vue.normalizeStyle([_ctx.rotateStyle, _ctx.sizeStyle, _ctx.colorStyle])
    },
    [
      vue.renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
var icon = /* @__PURE__ */ _pluginVue_exportHelper.default(icon_vue_vue_type_script_lang.default, [["render", _sfc_render], ["__file", "/Users/yangyangyang/Documents/\u9879\u76EE/icons/package/libs/icon.vue"]]);

exports.default = icon;
