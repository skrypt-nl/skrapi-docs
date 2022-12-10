<template>
  <header
      class="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8"
      :class="style"
  >
  <div class="mr-6 flex lg:hidden">
    <MobileNavigation />
  </div>
  <div class="relative flex flex-grow basis-0 items-center">
    <a href="/" aria-label="Home page">
      <Logo class="h-9 w-auto fill-slate-700 dark:fill-sky-100" />
    </a>
  </div>
  <div class="-my-5 mr-6 sm:mr-8 md:mr-0">
    <Search />
  </div>
  <div class="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
    <ThemeSelector class="relative z-10" />
    <div class="hidden md:flex gap-6 sm:gap-8">
      <SocialLinks :links="theme.value.socialLinks" />
    </div>
  </div>
  </header>
</template>

<script>
import Logo from "./Logo.vue";
import Search from "./Search.vue";
import MobileNavigation from "./MobileNavigation.vue";
import ThemeSelector from "./ThemeSelector.vue";
import GitHubIcon from "./icons/GitHubIcon.vue";
import SocialLinks from "./SocialLinks.vue";
import {useData} from "vitepress";

export default {
  name: "Header",
  components: {
    SocialLinks,
    Logo,
    Search,
    MobileNavigation,
    ThemeSelector,
    GitHubIcon
  },
  data: () => ({
    isScrolled: false
  }),
  computed: {
    style() {
      return this.isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent'
    },
    theme() {
      return useData().theme
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true } );
    this.handleScroll()
  },
}
</script>
