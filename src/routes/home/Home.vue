<template>
  <div class="h-full">
    <home-anime></home-anime>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeAnime from "../../components/Home/HomeAnime.vue";
export default Vue.extend({
  components: { HomeAnime },
  beforeMount() {
    document.title = `AnimeB - Home`;
  },
});
</script>

<style></style>
