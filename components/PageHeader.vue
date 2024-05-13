<template>
  <div class="page-header">
    <div class="max-w-screen-xl mx-auto py-5">
      <img class="logo" src="~/assets/images/logo.png" />
    </div>
  </div>
  <div class="bg-red-600 border-t border-red-600 sticky top-0 z-10">
    <div class="max-w-screen-xl mx-auto">
      <TopMenu />
    </div>
  </div>
  <!-- <div class="bg-red-600 border-t border-red-600 sticky top-0 z-10 mt-1">
    <div class="max-w-screen-xl mx-auto">
      <TopNavMenu />
    </div>
  </div> -->
</template>

<script setup></script>

<style lang="scss" scoped>
.red1 {
  background-color: red;
}
.page-header {
  background: url(~/assets/images/header-bg.png) repeat-x center;
  @apply bg-cover;

  .logo {
    @apply block m-auto w-[90%] h-auto object-contain sm:w-[640px] md:w-[768px];
  }
}
</style>
