<template>
  <div class="min-h-screen" :style="getBackground">
    <div class="h-auto px-4 pt-28 pb-8 lg:flex lg:items-center lg:px-24">
      <img
        class="hidden mr-4 shadow-2xl max-w-md h-auto lg:block"
        :src="coverImage"
        :alt="enTitle ? enTitle : naTitle"
      />
      <div class="lg:flex lg:flex-col">
        <p class="text-3xl lg:text-5xl font-bold">{{ enTitle }}</p>
        <p class="text-3xl lg:text-5xl italic font-bold">{{ naTitle }}</p>
        <p class="text-lg lg:text-3xl" v-if="episodes > 0">
          Number of episodes: <span class="font-bold">{{ episodes }}</span>
        </p>
        <br />
        <p class="text-lg lg:text-2xl" v-html="desc"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    enTitle: {
      type: String,
      required: false,
    },
    naTitle: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
    },
    episodes: {
      type: Number,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    bannerImage: {
      type: String,
      required: false,
    },
  },
  computed: {
    getBackground(): string {
      const color: string = `${this.color || "#ffffff"}AA`;
      return `background: linear-gradient(${color}, ${color}), url(${this.bannerImage}) no-repeat center/cover`;
    },
  },
});
</script>

<style></style>
