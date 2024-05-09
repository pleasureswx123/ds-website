<template>
  <div class="main-container">
    <PageHeader></PageHeader>

    <UHeader :links="links">
      <template #logo>
        Nuxt UI Pro <UBadge label="Starter" variant="subtle" class="mb-0.5" />
      </template>

      <template #right>
        <UColorModeButton />

        <UButton
          to="https://github.com/nuxt-ui-pro/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="gray"
          variant="ghost"
        />
      </template>
    </UHeader>

    <main class="flex-1 box-container">
      <slot />
    </main>
    <UFooter>
      <template #left> Copyright © {{ new Date().getFullYear() }} </template>
      <template #right> sss </template>
    </UFooter>
    <PageFooter></PageFooter>

    <!-- <ClientOnly>
      <div></div>
    </ClientOnly> -->
  </div>
</template>

<script setup>
const links = [
  {
    label: "Features",
    to: "#features",
    exactHash: true,
  },
  {
    label: "Documentation",
    to: "https://ui.nuxt.com/pro",
    target: "_blank",
  },
];
</script>
<style lang="scss">
.main-container {
  @apply bg-white flex flex-col min-h-screen;
}
</style>
