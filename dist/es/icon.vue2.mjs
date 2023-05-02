import { defineComponent, computed } from 'vue';

var _sfc_main = defineComponent({
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
    const rotateStyle = computed(() => {
      if (props.rotate) {
        return {
          transform: `rotate(${props.rotate}deg)`
        };
      }
      return {};
    });
    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: `${props.size}px`
        };
      }
      return {};
    });
    const colorStyle = computed(() => {
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

export { _sfc_main as default };
