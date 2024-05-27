<template>
  <UCarousel ref="carouselRef" v-slot="{ item }" :items="imgsList" :ui="{ item: 'basis-full' }"
             class="overflow-hidden rounded-lg" indicators>
    <div class="w-full cursor-pointer">
      <div class="aspect-[2/1] bg-gray-100 overflow-hidden relative" @click="jumpTo(item.to)">
        <img :src="item.img" class="w-full h-full object-cover object-center" draggable="false" />
        <div class="absolute w-full bottom-0 left-0 bg-gray-900/[.3] text-white font-bold p-4 pb-10 text-center bg-op">{{item.name}}</div>
      </div>
    </div>
  </UCarousel>
</template>

<script setup>
import {computed} from "vue";
const appStoreInfo = useAppStoreInfo();
const {getProjectList, getContestList, getNotificationList, getBroadcastList} = appStoreInfo;
const [projectList, contestList, notificationList, broadcastList] = await Promise.all([getProjectList(), getContestList(), getNotificationList(), getBroadcastList()]);

const jumpTo = path => {
  path && navigateTo(path);
}

const imgsList = computed(() => {
  return [(projectList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.projectId,
      to: `/about/${item.projectId}`,
      img: getStaticPath(item.thumbnail),
      name: item.projectName
    }
  }), (contestList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.contestId,
      to: `/join/${item.contestId}`,
      img: getStaticPath(item.thumbnail),
      name: item.name
    }
  }), (notificationList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.notificationId,
      to: `/notice/${item.notificationId}`,
      img: getStaticPath(item.thumbnail),
      name: item.notificationName
    }
  }), (broadcastList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.broadcastId,
      to: `/broadcast/${item.broadcastId}`,
      img: getStaticPath(item.thumbnail),
      name: item.broadcastName
    }
  })].flat().filter(item => item.carousel === 'Y')
})

const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return
    
    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }
    
    carouselRef.value.next()
  }, 3000)
})
</script>

<style lang="scss" scoped>
</style>