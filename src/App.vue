<template>
  <div class="h-full">
    <nav-bar />
    <router-view />
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

<style>
.fade-enter-active {
  animation: fade 1s;
}

.fade-leave-active {
  animation: fade 0.5s reverse;
}

@keyframes fade {
  0% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
}
</style>
