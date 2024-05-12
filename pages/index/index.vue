<template>
  <div class="grid grid-cols-3 gap-3">

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>

    <div class="space-y-3 flex flex-col">
      <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
        <div>111</div>
      </UCard>
      <div class="grid grid-cols-2 gap-3">
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12">333</div>
        </UCard>
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12">444</div>
        </UCard>
      </div>
    </div>

    <div class="space-y-3 flex flex-col">
      <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
        <template #header>
          <div>标题</div>
        </template>
        <div class="bg-blue-400 h-32">66</div>
      </UCard>
      <div class="grid grid-cols-2 gap-3">
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12"></div>
        </UCard>
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12"></div>
        </UCard>
      </div>
    </div>

  </div>

  <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
    <div class="h-16">66</div>
  </UCard>


  <div class="grid grid-cols-3 gap-3">
    <UCard :ui="{ rounded: 'rounded-none' }">
      <template #header>
        <div>标题</div>
      </template>
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <template #header>
        <div>标题</div>
      </template>
      <div>11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <template #header>
        <div>标题</div>
      </template>
      <div>11</div>
    </UCard>

  </div>

  <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
    <div class="h-16">66</div>
  </UCard>

  <div class="grid grid-cols-2 gap-3">
    <UCard :ui="{ rounded: 'rounded-none' }">
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>

  </div>

  <div class="grid grid-cols-4 gap-3">
    <UCard :ui="{ rounded: 'rounded-none' }">
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>
    <UCard :ui="{ rounded: 'rounded-none' }">
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>

  </div>






</template>

<script setup>
useHead(() => ({
  title: "首页",
}));
</script>

<style lang="scss" scoped>
.panel {
  height: 50vh;
  @apply mb-3 text-stone-600;
}
</style>
