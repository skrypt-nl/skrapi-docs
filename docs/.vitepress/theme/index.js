import DefaultLayout from './layouts/Default.vue'
import './css/tailwind.css'
import './css/docsearch.css'
import './css/fonts.css'
import './css/prism.css'
import './css/markdown.css'

export default {
    Layout: DefaultLayout,

    NotFound: () => 'custom 404',

    enhanceApp({ app, router, siteData }) {
    },

    setup() {
    },
}
