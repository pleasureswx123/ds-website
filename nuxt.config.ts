// https://nuxt.com/docs/api/configuration/nuxt-config
const isDev = process.env.NODE_ENV !== "production";

export default defineNuxtConfig({
  devtools: { enabled: true },
  // devServer: {
  //   port: 3000,
  //   host: "localhost",
  // },
  nitro: {
    devProxy: {
      // '/proxy/test': 'http://localhost:3001',
      // '/proxy/example': { target: 'https://example.com', changeOrigin: true },
      "/app/v1": {
        target: "https://www.zgwtds.cn/app/v1",
        changeOrigin: true,
        prependPath: true
      },
      "/profile/upload": {
        target: "https://www.zgwtds.cn/app/v1/profile/upload",
        changeOrigin: true,
        prependPath: true
      },
      // "/v1-api": {
      //   target: "https://www.zgwtds.cn/app/v1",
      //   changeOrigin: true,
      //   prependPath: true
      // },
    },
    // // 该配置用于服务端请求转发
    // routeRules: {
    //   '/v1-api/**': {
    //     proxy: 'https://www.zgwtds.cn/app/v1/**'
    //   }
    // }
  },
  ssr: false,
  // debug: !!isDev,
  experimental: {
    renderJsonPayloads: false
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://www.zgwtds.cn/app/v1'
    }
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
