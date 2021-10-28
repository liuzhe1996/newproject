<template>
  <div>
    <div></div>
    <div>{{ personName }}好棒啊！！！</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import until from "../assets/js/common";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState("personAbout", ["personName"]),
  },
  mounted() {
    console.log(until.login())
    console.log(until.getData())
  },
};
</script>