<template>
    <div class="h-screen flex flex-col items-center justify-center text-center">
        <p class="lg:text-3xl">Uh oh...</p>
        <p class="text-3xl">Something went wrong !</p>
        <p class="text-6xl text-black lg:text-9xl">404 error</p>
        <p class="text-3xl">The resource you are searching for doesn't exist...</p>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
export default Vue.extend({
    beforeMount() {
        document.title = `AnimeB - Not found`;
    },
});
</script>

<style></style>
