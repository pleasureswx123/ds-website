<template>
  <LayoutCommon>
    <ContentWrapper>
      <template #sidebar>
        <CardArea>
          <template #title>
            <div class="">技能竞赛</div>
          </template>
          <div class="divide-y divide-red-400 divide-dashed text-center group">
            <div class="py-4 cursor-pointer hover:bg-orange-100 aria-selected:text-red-500 aria-selected:font-bold"
              :aria-selected="`${$route.path === item.to}`" @click="handleClick(item)"
              v-for="(item, index) in sidebarMenuList" :key="index">{{ item.label }}</div>
          </div>
        </CardArea>
      </template>
      <slot />
    </ContentWrapper>
  </LayoutCommon>
</template>

<script setup>
const router = useRouter();
const sidebarMenuList = useSidebarMenuList();
const handleClick = (item) => {
  item?.to && router.push(item.to)
} 
</script>

<style lang="scss" scoped>
</style>