<template>
  <div class="home">
    <div @click="gotoAbout()">About</div>
    <div class="grid">
      <div
        v-for="item in box"
        :key="item.num"
        :style="{ background: item.color }"
        :class="'div' + item.num"
      >
        {{ item.num }}
      </div>
    </div>
    <div class="flex">
      <div @click="add(1)">+</div>
      <div>{{ count }}</div>
      <div @click="sub()">--</div>
      <div>数字的10倍是{{ total }}</div>
    </div>
    <div>{{ school }}在校人数{{ number }}人</div>
    <div>学校第一名是{{ personName }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      box: [
        { num: 1, color: "green" },
        { num: 2, color: "red" },
        { num: 3, color: "yellow" },
        { num: 4, color: "pink" },
        { num: 5, color: "black" },
        { num: 6, color: "blue" },
        { num: 7, color: "purple" },
        { num: 8, color: "orange" },
        { num: 9, color: "beige" },
      ],
    };
  },
  mounted() {},
  computed: {
    ...mapState("countAbout", ["count", "school", "number"]),
    ...mapState("personAbout", ["personName"]),
    ...mapGetters("countAbout", { total: "tenCount" }),
  },
  methods: {
    ...mapMutations("countAbout", { add: "addCount" }),
    sub() {
      this.$store.commit("countAbout/subCount", 1);
    },
    gotoAbout() {
      this.$router.push({
        name: "About",
        params: {
          title: "about",
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  text-align: center;
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: center;
  font-size: 24px;
  > div {
    margin: 10px;
  }
}
.grid {
  width: 800px;
  height: 300px;
  margin: auto;
  display: grid;
  justify-content: center;
  // grid-template-columns: repeat(4, 200px);
  // grid-template-rows: repeat(4, 200px);
  // grid-gap: 10px;
  grid-auto-flow: column;
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
  }
}
</style>
