<template>
  <nav
    class="fixed w-screen z-50 flex justify-between items-center p-2.5 text-gray-800"
    :class="{ scrolled }"
  >
    <section>
      <router-link class="text-6xl font-black" to="/home">
        AnimeB
      </router-link>
    </section>
    <section>
      <input
        type="text"
        placeholder="Search"
        class="hidden text-3xl outline-none bg-transparent border-none mr-4 lg:block"
        v-model="searchQuery"
        @keypress.enter="search"
      />
      <router-link to="/search">
        <i class="fas fa-search text-2xl block lg:hidden"></i>
      </router-link>
    </section>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default Vue.extend({
  data() {
    return {
      scrolled: false,
      searchQuery: "",
    };
  },
  methods: {
    onScroll() {
      this.scrolled = window.scrollY > 0;
    },
    search() {
      this.$router.push(`/search/${this.searchQuery}`);
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.onScroll);
  },
});
</script>

<style scoped>
nav {
  animation: fadeOut 0.5s;
}

.scrolled {
  color: rgb(249, 250, 251);
  background-color: rgb(17, 24, 39);
  animation: fadeIn 0.5s;
}

@keyframes fadeIn {
  from {
    color: rgb(31, 41, 55);
    background-color: transparent;
  }
  to {
    color: rgb(249, 250, 251);
    background-color: rgb(17, 24, 39);
  }
}

@keyframes fadeOut {
  from {
    color: rgb(249, 250, 251);
    background-color: rgb(17, 24, 39);
  }
  to {
    color: rgb(31, 41, 55);
    background-color: transparent;
  }
}
</style>
