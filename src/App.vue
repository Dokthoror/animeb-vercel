<template>
  <div class="min-h-screen bg-gray-200">
    <nav-bar />
    <router-view />
    <custom-footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "tailwindcss/tailwind.css";
import NavBar from "./components/NavBar.vue";
import CustomFooter from "./components/CustomFooter.vue";

export default Vue.extend({
  components: { NavBar, CustomFooter },
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
