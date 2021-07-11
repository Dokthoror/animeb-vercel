<template>
  <div class="h-full">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "tailwindcss/tailwind.css";
import NavBar from "./components/NavBar.vue";

export default Vue.extend({
  components: { NavBar },
  beforeMount() {
    fetch("/api/hello?name=reader").then((res) => {
      res.text().then((val) => {
        console.log(val);
      });
    });
  },
});
</script>

<style></style>
