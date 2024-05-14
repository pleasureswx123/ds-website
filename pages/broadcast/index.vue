<template>
  <div class="flex">
    <ContentWrapper>
      <template #sidebar>
        <CardArea>
          <template #title>
            <div class="">赛事播报</div>
          </template>
          <div class="divide-y divide-red-400 divide-dashed text-center">
            <div class="py-4 cursor-pointer hover:bg-orange-100 aria-selected:text-red-500 aria-selected:font-bold"
              v-for="(item, index) in projectList" :key="index" @click="handleClick(item)">{{ item.projectName }}</div>
          </div>
        </CardArea>
      </template>
    </ContentWrapper>
    <div class="flex-1 pl-10">

      <div class="p-5 flex border-b justify-between cursor-pointer" v-for="(item, index) in broadcastList" :key="index">
          <p class="truncate hover:text-red-500 cursor-pointer"  @click="goDetail(item)">{{ item.broadcastName }}</p>
          <p class="text-sm text-gray-500">{{ item.createTime }}</p>
        </div>

        <div class="flex justify-center items-center" v-if="broadcastList.length === 0">
          <el-empty :image-size="200" description="暂无数据~" />
        </div>


    </div>
  </div>
</template>

<script setup>

import  city  from '@/utils/city.js';
// definePageMeta({
//   layout: 'join'
// })

const VITE_APP_BASE_API = 'https://sports.d.yanlingxinrui.com/app/v1';
const breadcrumbData = useBreadcrumbList();


const token = useCookie("token");
const curToken = computed(() => {
  return token.value;
});

const projectList = ref([]);
const handleProList = async (params) => {
  const result = await $fetch(
    "https://sports.d.yanlingxinrui.com/app/v1/system/project/list?pageNum=1&pageSize=10",
    { method: "GET",
    headers: {
        Authorization: `Bearer ${curToken.value}`,
      },
    },
  );
  const { code, msg, token: newToken, rows } = result;
  if (code === 200) {
    projectList.value = rows;
    handleClick(rows[0])
  }
}

handleProList()


const broadcastList = ref([]);
const handleClick = async (item)=>{
  const result = await $fetch(
    `https://sports.d.yanlingxinrui.com/app/v1/system/broadcast/list?pageNum=1&pageSize=10&projectId=${item.projectId}`,
      { method: "GET",
      headers: {
          Authorization: `Bearer ${curToken.value}`,
        },
      },
    );
    const { code, msg, token: newToken, rows } = result;
    if (code === 200) {
      broadcastList.value = rows;
    }
}

const router = useRouter();
const goDetail = (item) => {
  router.push('/broadcast/'+item.broadcastId);
}


</script>

<style lang="scss" scoped></style>
