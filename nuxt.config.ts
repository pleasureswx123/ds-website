// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  devtools: { enabled: true },
  // devServer: {
  //   port: 3000,
  //   host: "localhost",
  // },
  debug: !!isDev,
  experimental: {
    renderJsonPayloads: false
  },
  modules: [
    "@vueuse/nuxt",
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
  ],
  ui: {
    icons: ["heroicons", "simple-icons"],
    // safelistColors: ["primary", "red", "orange", "green"],
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  // routeRules: {
  //   "/docs": { redirect: "/docs/getting-started", prerender: false },
  // },
  // typescript: {
  //   strict: false,
  // },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@use "~/assets/scss/element/index.scss" as element;`,
  //       },
  //     },
  //   },
  // },
  // elementPlus: {
  //   icon: "ElIcon",
  //   importStyle: "scss",
  //   themes: ["dark"],
  // },
});
