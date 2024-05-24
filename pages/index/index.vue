<template>
  <div class="divide-y">
    
    <section class="text-gray-600 py-4">
      <div class="flex flex-wrap md:flex-nowrap gap-8">
        <div class="w-full md:w-3/5">
          <Banner></Banner>
        </div>
        <TopContest></TopContest>
      </div>
    </section>
    
    <div>
      <img class="w-full h-32 object-cover m-auto" src="~/assets/images/banner-1.png" alt="">
    </div>
  
    <BlockCard>
      <ProjectList></ProjectList>
    </BlockCard>
  
    <div>
      <img class="w-full h-32 object-cover object-center" src="~/assets/images/banner-3.png" alt="">
    </div>
    
    <BlockCard>
      <ContestList></ContestList>
    </BlockCard>
  
    <BlockCard>
      <div class="flex flex-wrap select-one">
        <div class="p-4 md:w-1/2">
          <NoticeList></NoticeList>
        </div>
        <div class="p-4 md:w-1/2">
          <BroadcastList></BroadcastList>
        </div>
      </div>
    </BlockCard>
    
    <BlockCard>
      <HistoryList></HistoryList>
    </BlockCard>
    
  </div>
</template>

<script setup>
import Banner from './components/Banner.vue';
import TopContest from './components/TopContest.vue';
import BlockCard from './components/BlockCard.vue';
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
