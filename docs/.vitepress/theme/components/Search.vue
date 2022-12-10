<template>
  <button
      type="button"
      class="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:bg-slate-800/75 dark:md:ring-inset dark:md:ring-white/5 dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500 lg:w-96"
      @click="onOpen"
  >
    <SearchIcon class="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400" />
    <span class="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">
      Search docs
    </span>
    <kbd class="ml-auto hidden font-medium text-slate-400 dark:text-slate-500 md:block" v-if="modifierKey">
      <kbd class="font-sans">{{ modifierKey }}</kbd>
      <kbd class="font-sans">K</kbd>
    </kbd>
  </button>
  <div id="docsearch" ref="docsearch"></div>
</template>

<script>
import docsearch from "@docsearch/js";
import SearchIcon from "./icons/SearchIcon.vue";

export default {
  name: "Search",
  components: {SearchIcon},
  methods: {
    onOpen() {
      this.$refs.docsearch.firstChild.click()
    }
  },
  computed: {
    modifierKey() {
      return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? '⌘' : 'Ctrl '
    }
  },
  mounted() {
    docsearch({
      container: '#docsearch',
      appId: 'YOUR_APP_ID',
      indexName: 'YOUR_INDEX_NAME',
      apiKey: 'YOUR_SEARCH_API_KEY',
    });
  },
}
</script>

<style scoped>
  #docsearch {
    display: none;
  }
</style>
