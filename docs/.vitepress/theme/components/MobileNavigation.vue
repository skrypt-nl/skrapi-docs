<template>
  <button
      type="button"
      @click="isOpen = true"
      class="relative"
      aria-label="Open navigation"
  >
    <MenuIcon class="h-6 w-6 stroke-slate-500" />
  </button>
  <Dialog
      :open="isOpen"
      @close="isOpen = false"
      class="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
      aria-label="Navigation"
  >
    <DialogPanel class="min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 dark:bg-slate-900 sm:px-6">
      <div class="flex items-center">
        <button
            type="button"
            @click="isOpen = false"
            aria-label="Close navigation"
        >
          <CloseIcon class="h-6 w-6 stroke-slate-500" />
        </button>
        <a href="/" class="ml-6" aria-label="Home page">
          <Logo />
        </a>
      </div>
      <div class="mt-5 px-1">
        <Navigation />
      </div>
      <div class="flex md:hidden gap-6 sm:gap-8 mt-10">
        <SocialLinks :links="theme.value.socialLinks" />
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script>
import MenuIcon from "./icons/MenuIcon.vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import CloseIcon from "./icons/CloseIcon.vue";
import Logo from "./Logo.vue";
import Navigation from "./Navigation.vue";
import {useData, useRoute} from "vitepress";
import SocialLinks from "./SocialLinks.vue";

export default {
  name: "MobileNavigation",
  components: {SocialLinks, Dialog, Navigation, Logo, CloseIcon, DialogPanel, MenuIcon},
  data: () => ({
    isOpen: false
  }),
  computed: {
    theme() {
      return useData().theme
    },
    currentRoute() {
      return useRoute()
    },
    currentPath() {
      return this.currentRoute.path
    },
  },
  watch: {
    currentPath() {
      this.isOpen = false;
    }
  },
}
</script>

<style scoped>

</style>
