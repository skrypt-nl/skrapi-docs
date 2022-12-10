<template>
  <img :src="logo" :alt="`${site.value.title} logo`" class="hidden lg:block" v-bind="$attrs">
  <img :src="logomark" :alt="`${site.value.title} logomark`" class="lg:hidden" v-bind="$attrs">
</template>

<script>
import {useData} from "vitepress";

export default {
  name: "Logo",
  data: () => ({
    isDark: true,
    htmlObserver: null,
  }),
  computed: {
    site() {
      return useData().site
    },

    theme() {
      return useData().theme
    },

    logo() {
      if (typeof this.theme.value.logo === 'string') return this.theme.value.logo;

      return this.isDark ? this.theme.value.logo.dark : this.theme.value.logo.light;
    },

    logomark() {
      if (typeof this.theme.value.logomark === 'string') return this.theme.value.logomark;

      return this.isDark ? this.theme.value.logomark.dark : this.theme.value.logomark.light;
    }
  },
  mounted() {
    let target = document.querySelector("html");
    let options = {
      attributes: true,
    }

    this.observer = new MutationObserver((mutationList, observer) => {
      this.isDark = target.classList.contains('dark')
    });

    this.observer.observe(target, options);
  },
  unmounted() {
    this.observer && this.observer.disconnect();
  }
}
</script>

<style scoped>

</style>
