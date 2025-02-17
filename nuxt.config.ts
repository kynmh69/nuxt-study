import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
    modules: [
        '@primevue/nuxt-module'
    ],
    primevue: {
        options: {
            theme: {
                preset: Aura
            }
        },
        autoImport: true
    },
    css: [
        '~/assets/css/main.css',
        'primeicons/primeicons.css',
    ],
    compatibilityDate: '2025-01-20',
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: {
        enabled: true,
        timeline: {
            enabled: true,
        }
    },
})
