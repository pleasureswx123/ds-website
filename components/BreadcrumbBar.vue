<template>
  <div class="py-1 flex items-center gap-2" v-if="breadcrumbList.length > 1">
    <template v-for="(item, index) in breadcrumbList">
      <UButton :ui="{ rounded: 'rounded-full', color: { gray: { link: '!no-underline hover:text-red-500'}}}" size="sm"
        color="gray" variant="link" @click="handleJump(item)">{{ item.label }}</UButton>
      <div class="last:hidden flex items-center">
        <UIcon name="i-heroicons-chevron-right-20-solid" />
      </div>
    </template>
  </div>

</template>

<script setup>
const router = useRouter();
const breadcrumbList = useBreadcrumbList();
const handleJump = ({to}) => {
  if (to) {
    router.push(to)
  }
}
</script>

<style lang="scss" scoped>

</style>