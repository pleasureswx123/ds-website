<template>
  <div class="space-y-5">
    <section class="text-gray-600">
      <div class="flex flex-wrap md:flex-nowrap gap-5">
        <div class="w-full md:w-3/5">
          <Banner></Banner>
        </div>
        <TopContest></TopContest>
      </div>
    </section>
    
    <div>
      <img class="w-full max-h-32 object-contain md:object-cover m-auto" src="~/assets/images/banner-1.png" alt="">
    </div>
    
    <ProjectList></ProjectList>
  
    <div>
      <img class="w-full max-h-32 object-contain  md:object-cover m-auto" src="~/assets/images/banner-3.png" alt="">
    </div>
    
    <ContestList></ContestList>
  
    <div class="text-gray-600 flex flex-wrap select-one space-y-5 md:space-y-0 md:space-x-5">
      <div class="w-full md:flex-1">
        <NoticeList></NoticeList>
      </div>
      <div class="w-full md:flex-1">
        <BroadcastList></BroadcastList>
      </div>
    </div>
    
    <HistoryList></HistoryList>
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue';
import TopContest from './components/TopContest.vue';
import ProjectList from './components/ProjectList.vue';
import ContestList from './components/ContestList.vue';
import NoticeList from './components/NoticeList.vue';
import BroadcastList from './components/BroadcastList.vue';
import HistoryList from './components/HistoryList.vue';

useHead(() => ({
  title: "首页",
}));
</script>


<style lang="scss" scoped>
</style>
