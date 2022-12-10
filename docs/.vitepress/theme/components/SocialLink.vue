<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import { icons } from '../helpers/socialIcons.ts'
const props = defineProps<{
  icon: DefaultTheme.SocialLinkIcon
  link: string
}>()
const svg = computed(() => {
  if (typeof props.icon === 'object') return props.icon.svg
  return icons[props.icon]
})
</script>

<template>
  <a
      class="group"
      :href="link"
      target="_blank"
      rel="noopener"
  >
    <div v-html="svg" class="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300"/>
  </a>
</template>
