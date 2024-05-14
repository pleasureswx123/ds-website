<template>
  <UCard :ui="{ 
      ring: 'ring-0', 
      shadow: 'shadow-none', 
      rounded: 'rounded-none', 
      body: { 
        background: 'bg-orange-50',
        padding: '!px-4 !py-2 !pb-3'
       }, 
      header: { 
        background: 'bg-red-600',
        padding: '!p-3',
        base: 'text-center text-white font-semibold text-base'
  }
}">
    <template #header>
      <slot name="title"></slot>
    </template>

    <slot></slot>
  </UCard>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>