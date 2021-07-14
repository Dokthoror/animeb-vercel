<template>
  <div class="min-h-in">
    <home-anime />
    <home-best-anime />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeAnime from "../../components/Home/HomeAnime.vue";
import HomeBestAnime from "../../components/Home/HomeBestAnime.vue";

export default Vue.extend({
  components: { HomeAnime, HomeBestAnime },
  beforeMount() {
    document.title = `AnimeB - Home`;
  },
});
</script>

<style></style>
