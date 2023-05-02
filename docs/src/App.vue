<script setup lang="ts">
import * as icons from '../../dist';
import { Kicon } from '../../dist';
import '../../dist/style/index.css';
</script>

<template>
  <div class="title">KINFUY ICONS</div>
  <div class="icons-warper">
    <div class="icon-item" v-for="icon in icons" :key="icon.name">
      <Kicon :size="40">
        <component :is="icon" />
      </Kicon>
      <div class="icon-text">{{ icon.name }}</div>
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
