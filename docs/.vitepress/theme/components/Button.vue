<template>
  <component :is="buttonType" :href="href" :class="style" :target="href ?? target">
    <slot />
  </component>
</template>

<script>
export default {
  name: "VButton",
  props: {
    variant: {
      type: String,
      default:  'primary',
      required: false,
    },
    href: {
      type: String,
      default: null,
      required: false,
    },
    target: {
      type: String,
      default: '_self',
      required: false,
    },
  },
  computed: {
    buttonType() {
      return this.href !== null ? 'a' : 'button';
    },
    style() {
      switch (this.variant) {
        case 'primary':
          return 'rounded-full bg-sky-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-sky-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300/50 active:bg-sky-500'
        case 'secondary':
          return 'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400'
        default:
          return 'rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400'
      }
    }
  },
}
</script>

<style scoped>

</style>
