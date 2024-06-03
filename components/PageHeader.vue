<template>
  <div class="page-header !bg-cover">
    <div class="max-w-screen-xl mx-auto p-5">
      <img class="block m-auto w-[90%] h-auto object-contain sm:w-[640px] md:w-[768px]"
        src="~/assets/images/logo.png" />
    </div>
  </div>
  <div class="sticky top-0 z-10">
    <div class="bg-red-600 border-t border-b border-red-600">
      <div class="max-w-screen-xl mx-auto px-5">
        <TopMenu />
      </div>
    </div>
    <div class="bg-stone-100">
      <div class="max-w-screen-xl mx-auto px-5">
        <BreadcrumbBar />
      </div>
    </div>
  </div>
  <!-- <div class="bg-red-600 border-t border-red-600 sticky top-0 z-10 mt-1">
    <div class="max-w-screen-xl mx-auto">
      <TopNavMenu />
    </div>
  </div> -->
</template>

<script setup>
</script>

<style lang="scss" scoped>
.page-header {
  background: url(~/assets/images/header-bg.png) no-repeat center;
}
</style>
