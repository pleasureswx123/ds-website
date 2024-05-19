export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    methods: {
      method1() {
        return 'method1'
      }
    },
  });

  return {
    provide: {
      test: 123
    },
  };
})