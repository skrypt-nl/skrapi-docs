

<template>
  <Listbox
      as="div"
      v-model="selectedTheme"
  >
    <ListboxLabel class="sr-only">Theme</ListboxLabel>
    <ListboxButton
        class="flex h-6 w-6 items-center justify-center rounded-lg shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5"
        :aria-label="selectedTheme?.name"
    >
      <LightIcon class="hidden h-4 w-4 fill-sky-400 [[data-theme=light]_&]:block" />
      <DarkIcon class="hidden h-4 w-4 fill-sky-400 [[data-theme=dark]_&]:block" />
      <LightIcon class="hidden h-4 w-4 fill-slate-400 [:not(.dark)[data-theme=system]_&]:block" />
      <DarkIcon class="hidden h-4 w-4 fill-slate-400 [.dark[data-theme=system]_&]:block" />
    </ListboxButton>
    <ListboxOptions class="absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium shadow-md shadow-black/5 ring-1 ring-black/5 dark:bg-slate-800 dark:ring-white/5">
      <ListboxOption
          v-for="theme in themes"
          :key="theme.value"
          :value="theme"
          v-slot="{ active, selected }"
        >
        <div class="flex cursor-pointer select-none items-center rounded-[0.625rem] p-1"
            :class="{
              'text-sky-500': selected,
              'text-slate-900 dark:text-white': active && !selected,
              'text-slate-700 dark:text-slate-400': !active && !selected,
              'bg-slate-100 dark:bg-slate-900/40': active,
            }">
          <div class="rounded-md bg-white p-1 shadow ring-1 ring-slate-900/5 dark:bg-slate-700 dark:ring-inset dark:ring-white/5">
            <component
                :is="theme.icon"
                :class="selected ? 'fill-sky-400 dark:fill-sky-400' : 'fill-slate-400'"
                class="h-4 w-4"
            />
          </div>
          <div class="ml-3">{{ theme.name }}</div>
        </div>
      </ListboxOption>
    </ListboxOptions>
  </Listbox>
</template>

<script>
import {Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions} from "@headlessui/vue";
import DarkIcon from "./icons/DarkIcon.vue";
import LightIcon from "./icons/LightIcon.vue";
import SystemIcon from "./icons/SystemIcon.vue";
import { markRaw } from "vue";

export default {
  name: "ThemeSelector",
  components: {ListboxOption, ListboxOptions, LightIcon, DarkIcon, ListboxButton, ListboxLabel, Listbox},
  data: () => ({
    selectedTheme: null,
    themes: [
      { name: 'Light', value: 'light', icon: markRaw(LightIcon) },
      { name: 'Dark', value: 'dark', icon: markRaw(DarkIcon) },
      { name: 'System', value: 'system', icon: markRaw(SystemIcon) },
    ]
  }),
  watch: {
    selectedTheme(theme) {
      this.setSelectedTheme(theme);
      document.documentElement.setAttribute('data-theme', theme.value);

      switch (theme.value) {
        case 'light':
          this.setLightMode()
          break;
        case 'dark':
          this.setDarkMode()
          break;
        default:
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.setDarkMode()
          } else {
            this.setLightMode()
          }
          break;
      }
    }
  },
  methods: {
    setSelectedTheme(theme) {
      localStorage.setItem("theme", theme?.value ?? 'system')
    },
    setDarkMode() {
      document.documentElement.classList.add('dark');
    },
    setLightMode() {
      document.documentElement.classList.remove('dark');
    }
  },
  mounted() {
    const theme = window.localStorage.theme ?? 'system'

    switch (theme) {
      case 'light':
        this.selectedTheme = this.themes.find((theme) => theme.value === 'light');
        break;
      case 'dark':
        this.selectedTheme = this.themes.find((theme) => theme.value === 'dark');
        break;
      default:
        this.selectedTheme = this.themes.find((theme) => theme.value === 'system');
        break;
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      if (window.localStorage.theme === 'system') {
        event.matches ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
      }
    });
  },
}
</script>

<style scoped>

</style>
