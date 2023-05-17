<script setup lang="ts">
import * as icons from '../../dist';
import '../../dist/style/index.css';
import { ref } from 'vue';

const { KIcon, ...iconlist } = icons;

const copy = ref('');
const handleCopy = (name: string) => {
  copy.value = name;
  navigator.clipboard?.writeText(`<${name}>`);
  setTimeout(() => {
    copy.value = '';
  }, 3000);
};
</script>

<template>
  <div class="title">KINFUY ICONS</div>
  <div class="icons-warper">
    <div
      class="icon-item"
      @click="handleCopy(icon.name)"
      v-for="icon in iconlist"
      :key="icon.name"
    >
      <KIcon :size="40" :color="copy === icon.name ? 'green' : '#333'">
        <component :is="icon" />
      </KIcon>
      <div
        class="icon-text"
        :style="{ color: copy === icon.name ? 'green' : '#333' }"
      >
        {{ copy === icon.name ? 'copyed!' : icon.name }}
      </div>
    </div>
  </div>
</template>

<style lang="less">
.title {
  text-align: center;
  font-size: 24px;
  margin-top: 30px;
}
.icons-warper {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  .icon-item {
    width: 200px;
    height: 180px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
