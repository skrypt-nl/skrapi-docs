<script setup>
import {useData, useRoute} from 'vitepress'
import Hero from "../components/Hero.vue";

const { page, theme } = useData()
const { path } = useRoute()
</script>

<template>
  <Header />
  <Hero v-if="$frontmatter.hero" />
  <div class="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-12">
    <div class="hidden lg:relative lg:block lg:flex-none">
      <div class="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
      <div class="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
      <div class="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
      <div class="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
        <Navigation
            class="w-64 pr-8 xl:w-72 xl:pr-16"
        />
      </div>
    </div>
    <div class="min-w-0 max-w-2xl flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      <article id="article">
        <header class="mb-9 space-y-1">
          <p class="font-display text-sm font-medium text-sky-500" v-if="currentRouteGroup">
            {{ currentRouteGroup }}
          </p>
          <h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white" v-if="page.title">
            {{ page.title }}
          </h1>
        </header>
        <Prose>
          <Content />
        </Prose>
      </article>
      <dl class="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
        <div v-if="previousPage">
          <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
            Previous
          </dt>
          <dd class="mt-1">
            <a
                :href="previousPage.href"
                class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span aria-hidden="true">&larr;</span> {{previousPage.title}}
            </a>
          </dd>
        </div>
        <div class="ml-auto text-right" v-if="nextPage">
          <dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
            Next
          </dt>
          <dd class="mt-1">
            <a
                :href="nextPage.href"
                class="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              {{ nextPage.title }} <span aria-hidden="true">&rarr;</span>
            </a>
          </dd>
        </div>
      </dl>
    </div>
    <div class="hidden xl:sticky xl:top-[4.5rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" class="w-56" v-if="page.headers.length > 0">
        <h2
            id="on-this-page-title"
            class="font-display text-sm font-medium text-slate-900 dark:text-white"
        >
          On this page
        </h2>
        <ol role="list" class="mt-4 space-y-3 text-sm">
          <li v-for="section in page.headers" :key="section.slug">
            <h3>
              <a
                  :href="section.link"
                  :class="isActive(section) ? 'text-sky-500' : 'font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'"
              >
                {{ section.title }}
              </a>
            </h3>
            <ol
                v-if="section.children.length > 0"
                role="list"
                class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400"
            >
              <li v-for="subSection in section.children" :key="subSection.slug">
                <a
                    :href="subSection.link"
                    :class="isActive(subSection) ? 'text-sky-500' : 'hover:text-slate-600 dark:hover:text-slate-300'"
                >
                  {{ subSection.title }}
                </a>
              </li>
            </ol>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>

<script>
// import MobileNavigation from '../components/MobileNavigation.vue'
import Navigation from '../components/Navigation.vue'
import VButton from '../components/Button.vue'
import Header from "../components/Header.vue";
import Prose from "../components/Prose.vue";
import {useData, useRoute} from "vitepress";

export default {
  name: "DefaultLayout",
  data: () => ({
    currentSection: null
  }),
  components: {
    Prose,
    Header,
    VButton,
    Navigation
  },
  computed: {
    currentRoute() {
      return useRoute()
    },
    currentPath() {
      return this.currentRoute.path
    },
    theme() {
      return useData().theme
    },
    page() {
      return useData().page
    },
    currentRouteGroup() {
      return this.theme.value.sidebar.find((group) => group.links.map((link) => link.href).includes(this.currentRoute.path))?.title
    },
    allRoutes() {
      return this.theme.value.sidebar.map((group) => group.links).flat(1)
    },
    previousPage() {
      const pageIndex = this.allRoutes.map((link) => link.href).indexOf(this.currentRoute.path)
      return pageIndex > 0 ? this.allRoutes[pageIndex - 1] : null;
    },
    nextPage() {
      const pageIndex = this.allRoutes.map((link) => link.href).indexOf(this.currentRoute.path)
      return pageIndex < this.allRoutes.length - 1 ? this.allRoutes[pageIndex + 1] : null;
    },
    headings() {
      let result = [];

      for (let heading of this.page.value.headers)
      {
        result.push(heading)
        if (heading.children) {
          result = [...result, ...heading.children]
        }
      }

      return result;
    },

  },
  watch: {
    currentPath() {
      this.onScroll();
    }
  },
  methods: {
    isActive(section) {
      if (section.slug === this.currentSection) {
        return true
      }

      if (!section.children) {
        return false
      }

      return section.children.map((child) => child.slug).indexOf(this.currentSection) > -1
    },
    onScroll() {
      let current = this.headings[0]
      for (let heading of this.headings) {
        const element = document.getElementById(heading.slug)
        if (element && element.getBoundingClientRect().bottom < 160) {
          current = heading
        } else {
          break
        }
      }
      this.currentSection = current.slug
    }
  },
  mounted() {
    document.body.classList.add('bg-white', 'dark:bg-slate-900')

    this.onScroll()
    window.addEventListener('scroll', this.onScroll, { passive: true })
  }
}
</script>
