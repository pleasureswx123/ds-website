<template>
  <div class="flex flex-col min-h-screen">
    <PageHeader></PageHeader>
    <div class="flex-1 w-full min-w-0 min-h-0 items-stretch flex">
      <div class="w-full max-w-screen-xl mx-auto p-5">
        <slot />
      </div>
    </div>
    <PageFooter></PageFooter>
  </div>
</template>