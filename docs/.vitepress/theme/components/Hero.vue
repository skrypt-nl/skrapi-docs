<script setup>
import blurCyanImage from '../images/blur-cyan.png'
import blurIndigoImage from '../images/blur-indigo.png'
import VButton from "./Button.vue";
</script>

<template>
  <div class="overflow-hidden bg-slate-900 dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
    <div class="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
        <div class="relative z-10 md:text-center lg:text-left">
          <img
              class="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
              :src="blurCyanImage"
              alt=""
              width="530"
              height="530"
          />
          <div class="relative">
            <p class="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              {{ $frontmatter.hero.name }}
            </p>
            <p class="mt-3 text-2xl tracking-tight text-slate-400" v-if="$frontmatter.hero.text">
              {{ $frontmatter.hero.text }}
            </p>
            <div class="mt-8 flex gap-4 md:justify-center lg:justify-start" v-if="$frontmatter.hero.actions?.length > 0">
              <VButton v-for="action in $frontmatter.hero.actions" :key="action.text" :href="action.link" :variant="action.theme" :target="action.target">
                {{ action.text }}
              </VButton>
            </div>
          </div>
        </div>
        <div class="relative lg:static xl:pl-10">
          <div class="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]">
            <HeroBackground class="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
          </div>
          <div class="relative">
            <img
                class="absolute -top-64 -right-64"
                :src="blurCyanImage"
                alt=""
                width="530"
                height="530"
            />
            <img
                class="absolute -bottom-40 -right-44"
                :src="blurIndigoImage"
                alt=""
                width="567"
                height="567"
            />
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import HeroBackground from './HeroBackground.vue'

export default {
  name: "Hero"
}
</script>

<style scoped>

</style>
