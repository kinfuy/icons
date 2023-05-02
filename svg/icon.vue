<template>
  <i
    class="k-svg-icon"
    :class="[
      {
        [`k-animation-spin`]: spin,
      },
    ]"
    :style="[rotateStyle, sizeStyle, colorStyle]"
  >
    <slot />
  </i>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'KIcon',
  props: {
    rotate: Number,
    spin: Boolean,
    size: {
      type: Number,
      default: 16,
    },
    color: String,
  },
  setup(props) {
    const rotateStyle = computed(() => {
      if (props.rotate) {
        return {
          transform: `rotate(${props.rotate}deg)`,
        };
      }
      return {};
    });

    const sizeStyle = computed(() => {
      if (props.size) {
        return {
          fontSize: `${props.size}px`,
        };
      }
      return {};
    });

    const colorStyle = computed(() => {
      if (props.color) {
        return {
          color: props.color,
        };
      }
      return {};
    });

    return {
      rotateStyle,
      sizeStyle,
      colorStyle,
    };
  },
});
</script>
