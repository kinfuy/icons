'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var _sfc_main = vue.defineComponent({
  name: "KIcon",
  props: {
    rotate: Number,
    spin: Boolean,
    size: {
      type: Number,
      default: 16
    },
    color: String
  },
  setup(props) {
    const rotateStyle = vue.computed(() => {
      if (props.rotate) {
        return {
          transform: `rotate(${props.rotate}deg)`
        };
      }
      return {};
    });
    const sizeStyle = vue.computed(() => {
      if (props.size) {
        return {
          fontSize: `${props.size}px`
        };
      }
      return {};
    });
    const colorStyle = vue.computed(() => {
      if (props.color) {
        return {
          color: props.color
        };
      }
      return {};
    });
    return {
      rotateStyle,
      sizeStyle,
      colorStyle
    };
  }
});

exports.default = _sfc_main;
