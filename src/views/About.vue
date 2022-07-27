<template>
  <div class="container">
    <div>{{ title }}</div>
    <!-- <div>{{ personName }}好棒啊！！！</div> -->
    <div class="text">{{ text }}</div>
    <div class="box">{{ box }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import until from "../assets/js/common";
export default {
  // 接受第一种props传值
  props: ["title"],
  // props: { title: String },
  // props:{
  //   title:{
  //     type:String,
  //     default:About
  //   }
  // },
  data() {
    return {
      text: "Chinese and English.",
      box: "春眠不觉晓，处处闻啼鸟。",
    };
  },
  computed: {
    ...mapState("personAbout", ["personName"]),
  },
  mounted() {
    console.log(this)
    console.log(this.$route);
    console.log(until.login());
    console.log(until.getData());
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.pad5px {
  padding: 5px;
}
.mar5px {
  margin: 5px;
}
.container {
  cursor: pointer;
}
.text {
  border: 1px solid var(--color_C2C2C2);
  color: var(--color_BLUE);
  .pad5px;
  .mar5px;
}
.box {
  border: 1px solid var(--color_C2C2C2);
  color: var(--color_BLUE);
  .pad5px;
  .mar5px;
}
</style>