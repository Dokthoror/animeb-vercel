<template>
  <div class="h-full bg-gray-200">
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
