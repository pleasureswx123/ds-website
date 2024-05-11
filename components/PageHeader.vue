<template>
  <div class="page-header">
    <div class="max-w-screen-xl mx-auto py-5">
      <img class="logo" src="~/assets/images/logo.png" />
    </div>
  </div>
  <div class="bg-red-600 border-t border-red-600">
    <div class="max-w-screen-xl mx-auto">
      <TopMenu />
      <!-- <UHorizontalNavigation :links="links" :ui="{
        container: 'gap-7',
        base: 'text-base',
        after: 'after:absolute after:bottom-0 after:inset-x-2.5 after:block after:h-[2px] after:mt-2',
        active: 'text-white hover:text-black rounded-none bg-red-700 font-bold',
        inactive: 'text-white font-normal',
        icon: { inactive: 'text-red-200', active: 'text-white group-hover:text-black' }
      }" /> -->
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page-header {
  background: url(~/assets/images/header-bg.png) repeat-x center;
  @apply bg-cover;

  .logo {
    @apply block m-auto w-[90%] h-auto object-contain sm:w-[640px] md:w-[768px]
  }
}
</style>
