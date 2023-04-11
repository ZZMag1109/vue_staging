<template>
  <div class="water-mask" ref="container">
    <el-button @click="showDialog">弹出框</el-button>
    <el-dialog
       title="提示"
      :visible.sync="dialogVisible"></el-dialog>
  </div>
</template>

<script>
import waterMark from './tool';
export default {
    name: "waterMark",
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        showDialog() {
            this.dialogVisible = true;
            // waterMark.set("水印内容", this.$refs.container);
        },
    },
    mounted() {
        waterMark.set("水印内容", this.$refs.container);
    }
}
</script>

<style>
.water-mask {
    height: 500px;
    width: 500px;
}
</style>