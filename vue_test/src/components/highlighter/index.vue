<template>
  <div>
    <span
      >测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</span
    >
    <div>
      <span
        >testtesttesttesttesttesttesttesttesttesttesttesttes<img />bbbbbbbbbbbbbbbbbbbbbbbbbbb<span>cccccc</span>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Highlighter from "web-highlighter";

export default {
  name: "highlighter",
  data() {
    return {};
  },
  mounted() {
    // 1. 实例化
    const highlighter = new Highlighter();

    // 2. 从后端获取高亮信息，还原至网页
    // getRemoteData().then(s => highlighter.fromStore(s.startMeta, s.endMeta, s.id, s.text));

    // 3. 监听高亮笔记创建事件，并将信息存至后端
    highlighter.on(Highlighter.event.CREATE, ({ sources }) => {
      console.log(111, sources);
    });

    // 4. 开启自动划词高亮
    highlighter.run();
  },
};
</script>

<style>
</style>