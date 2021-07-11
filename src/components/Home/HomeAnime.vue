<template>
  <div class="min-h-screen lg:min-h-3/4 flex">
    <div class="flex-1" :style="getBackground" v-if="media.id > 0">
      <div class="z-40 pt-32 p-4 lg:pb-16 lg:pl-40">
        <p class="text-4xl font-extrabold">{{ category }} now</p>
        <p class="text-3xl font-bold">{{ media.title.english }}</p>
        <p class="text-3xl italic font-bold">{{ media.title.native }}</p>
        <p class="text-xl lg:w-1/3" v-html="animeDesc"></p>
        <div class="m-1">
          <router-link
            type="button"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 my-1 rounded"
            :to="`/anime/${media.id}`"
          >
            More infos
          </router-link>
        </div>
      </div>
    </div>
    <div v-else class="flex-1 flex justify-center items-center">
      <loader></loader>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Loader from "../Loader.vue";
import { Media as Popular } from "../../interfaces/popularAnime";
import { Media as Trending } from "../../interfaces/trendingAnimes";
export default Vue.extend({
  components: { Loader },
  data(): { category: string; media: Popular | Trending } {
    return {
      category: "",
      media: {
        title: {
          english: "",
          native: "",
        },
        coverImage: {
          extraLarge: "",
          color: "",
        },
        id: 0,
        description: "",
        episodes: 0,
        bannerImage: "",
      },
    };
  },
  computed: {
    animeDesc(): string {
      const length: number = 300;
      return this.media.description.length >= length
        ? `${this.media.description.substring(0, length - 1)}...`
        : this.media.description;
    },
    getBackground(): string {
      const color: string = this.media.coverImage.color || "#fff";
      let direction: string = "to bottom";
      let image: string | null = this.media.coverImage.extraLarge;
      if (window.screen.width >= 1024) {
        direction = "to right";
        image = this.media.bannerImage;
      }
      return `background: linear-gradient(${direction}, ${color} 25%, transparent), url(${image}) no-repeat center/cover;`;
    },
  },
  async beforeMount() {
    const queryTypes: Array<{ category: string; endpoint: string }> = [
      {
        category: "Popular",
        endpoint: "popular",
      },
      {
        category: "Trending",
        endpoint: "trending",
      },
    ];
    const query = queryTypes[Math.floor(Math.random() * queryTypes.length)];
    this.category = query.category;
    const apiAnswer: Popular | Trending = await (
      await fetch(`/api/${query.endpoint}`)
    ).json();
    this.media = apiAnswer;
  },
});
</script>

<style></style>
