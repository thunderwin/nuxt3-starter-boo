// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_URL,
      APP_BASE_URL: process.env.APP_URL,
    },
  },
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Truck Crane Expert - Special Purpose Vehicles",
      // titleTemplate: '%s %separator %siteName',
      meta: [
        // Basic SEO
        { 
          name: "description", 
          content: "Professional special purpose vehicles supplier, specializing in truck mounted cranes, aerial work platforms, and recovery vehicles. Quality guaranteed with excellent after-sales service." 
        },
        // Open Graph
        { 
          property: "og:type", 
          content: "website" 
        },
        { 
          property: "og:site_name", 
          content: "Truck Crane Expert - Special Purpose Vehicles" 
        },
        // Twitter Card
        { 
          property: "twitter:card", 
          content: "summary" 
        },
        // Search Engine Optimization
        {
          name: "keywords",
          content: "truck mounted crane, aerial work platform, recovery vehicle, special purpose vehicle, construction vehicle, XCMG crane, SANY crane"
        },
        {
          name: "robots",
          content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        },
        // Mobile Device Optimization
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1"
        },
        // Copyright Information
        {
          name: "copyright",
          content: "© 2024 Truck Crane Expert. All rights reserved."
        },
        // Author Information
        {
          name: "author",
          content: "Truck Crane Expert"
        }
      ],
    },
  },

  css: ["~/assets/scss/style.scss", "~/assets/css/dashboard.css"],

  plugins: [
    {
      src: "plugins/bootstrap.js",
      mode: "client",
    },
  ],
  components: { global: true, dirs: ["~/components"] },
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  i18n: {
    vueI18n: "./lib/i18n.config.ts",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en",
        name: "English",
        iso: "en-US", // 美式英语
      },
      {
        code: "zh",
        name: "简体中文",
        iso: "zh-CN", // 中国大陆简体中文
      },
      {
        code: "fr",
        name: "Français",
        iso: "fr-FR", // 法国法语
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
});
