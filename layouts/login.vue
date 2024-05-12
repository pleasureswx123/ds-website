<template>
  <div class="flex flex-col min-h-screen">
    <PageHeader></PageHeader>
    <div class="flex-1 w-full min-w-0 min-h-0 items-stretch flex">
      <div class="w-full space-y-4">
        <slot />
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>