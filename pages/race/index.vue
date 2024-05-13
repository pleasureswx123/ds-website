<template>
  <ContentWrapper>
    <template #sidebar>
      <CardArea>
        <template #title>
          <div class="">赛事项目</div>
        </template>
        <div class="divide-y divide-red-400 divide-dashed text-center">
          <div class="py-4 cursor-pointer" v-for="item in sidebarList" :key="item.id">{{ item.name }}</div>
        </div>
      </CardArea>
    </template>
    <div>{{ breadcrumbData }}</div>
  </ContentWrapper>
</template>

<script setup>
const sidebarList = [
  {name: '篮球赛事项目', id: 1},
  {name: '乒乓球赛事项目', id: 2},
  {name: '羽毛球赛事项目', id: 3},
  {name: '足球赛事项目', id: 4},
  {name: '书画赛事项目', id: 5},
  {name: '田径赛事项目', id: 6},
];

const breadcrumbData = useBreadcrumbList();
</script>

<style lang="scss" scoped></style>
