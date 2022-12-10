<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import SocialLink from "./SocialLink.vue";
defineProps<{
  links: DefaultTheme.SocialLink[]
}>()
</script>

<template>
  <SocialLink
      v-for="{ link, icon } in links"
      :key="link"
      :icon="icon"
      :link="link"
  />
</template>
