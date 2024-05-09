<template>
  <div class="main-container">
    <PageHeader></PageHeader>
    <main class="flex-1 box-container">
      <slot />
    </main>
    <PageFooter></PageFooter>

    <!-- <ClientOnly>
      <div></div>
    </ClientOnly> -->
  </div>
</template>

<script setup></script>
<style lang="scss">
.main-container {
  @apply bg-white flex flex-col min-h-screen;
}
</style>
