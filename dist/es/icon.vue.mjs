import _sfc_main from './icon.vue2.mjs';
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from 'vue';
import _export_sfc from './_virtual/_plugin-vue_export-helper.mjs';

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "i",
    {
      class: normalizeClass(["k-svg-icon", [
        {
          [`k-animation-spin`]: _ctx.spin
        }
      ]]),
      style: normalizeStyle([_ctx.rotateStyle, _ctx.sizeStyle, _ctx.colorStyle])
    },
    [
      renderSlot(_ctx.$slots, "default")
    ],
    6
    /* CLASS, STYLE */
  );
}
var icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yangyangyang/Documents/\u9879\u76EE/icons/package/libs/icon.vue"]]);

export { icon as default };
