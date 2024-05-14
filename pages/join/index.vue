<template>
  <div class="flex">
    <ContentWrapper>
      <template #sidebar>
        <CardArea>
          <template #title>
            <div class="">赛事项目</div>
          </template>
          <div class="divide-y divide-red-400 divide-dashed text-center">
            <div class="py-4 cursor-pointer hover:bg-orange-100 aria-selected:text-red-500 aria-selected:font-bold"
              v-for="(item, index) in projectList" :key="index" @click="handleClick(item)">{{ item.projectName }}</div>
          </div>
        </CardArea>
      </template>
    </ContentWrapper>
    <div class="flex flex-wrap">

      <div class="w-72 border rounded m-2 flex-wrap relative" v-for="(item, index) in contestList" :key="index">
                <el-image :src="VITE_APP_BASE_API+item.thumbnail" fit="cover" class="cursor-pointer"  @click="goDetail(item)"/>
                <div class="absolute right-1 top-1 bg-red-500 text-white rounded p-1 text-sm">{{ city.city_list[item.cityId] }}</div>
                <div class="p-2">
                  <p class="font-bold truncate cursor-pointer"  @click="goDetail(item)">{{ item.name }}</p>
                  <p class="mt-2 text-sm text-gray-500">起至时间：{{ item.beginTime }}至{{ item.endTime }}</p>
                </div>
                <div class="mt-1 mb-3 flex items-center justify-center cursor-pointer"  @click="goSignUp(item)"><el-button  type="danger" round>我要报名</el-button></div>
      </div>

      <div class="w-72 border rounded m-2 flex-wrap relative" v-for="(item, index) in contestList" :key="index">
                <el-image :src="VITE_APP_BASE_API+item.thumbnail" fit="cover"  class="cursor-pointer"  @click="goDetail(item)"/>
                <div class="absolute right-1 top-1 bg-red-500 text-white rounded p-1 text-sm">{{ city.city_list[item.cityId] }}</div>
                <div class="p-2">
                  <p class="font-bold truncate cursor-pointer"  @click="goDetail(item)">{{ item.name }}</p>
                  <p class="mt-2 text-sm text-gray-500">起至时间：{{ item.beginTime }}至{{ item.endTime }}</p>
                </div>
                <div class="mt-1 mb-3 flex items-center justify-center cursor-pointer"  @click="goSignUp(item)"><el-button  type="danger" round>我要报名</el-button></div>
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


const contestList = ref([]);
const handleClick = async (item)=>{
  const result = await $fetch(
    `https://sports.d.yanlingxinrui.com/app/v1/system/contest/list?pageNum=1&pageSize=10&projectId=${item.projectId}`,
      { method: "GET",
      headers: {
          Authorization: `Bearer ${curToken.value}`,
        },
      },
    );
    const { code, msg, token: newToken, rows } = result;
    if (code === 200) {
      contestList.value = rows;
    }
}

const router = useRouter();
const goDetail = (item) => {
  router.push('/content/'+item.contestId);
}

const goSignUp = (item) => {
  router.push('/apply/');
}


</script>

<style lang="scss" scoped></style>
