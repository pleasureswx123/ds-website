<template>
  <UCard
    :ui="{ base: 'flex flex-col min-h-screen', header: { padding: '!p-0' }, body: { base: 'flex-1 items-stretch flex !p-0' }, footer: { padding: '!p-0' } }">
    <template #header>
      <PageHeader></PageHeader>
    </template>
    <div class="flex-1 w-full min-w-0">
      <slot />
    </div>
    <template #footer>
      <PageFooter></PageFooter>
    </template>
  </UCard>
</template>