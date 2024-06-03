<template>
  <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="imgsList"
      :ui="{ item: 'basis-full', wrapper: 'relative w-full h-full rounded-lg overflow-hidden shadow hover:shadow-lg ring-1 ring-gray-200', container: 'h-full' }"
      indicators>
      <div class="w-full h-full cursor-pointer overflow-hidden relative" @click="jumpTo(item.to)">
        <div class="aspect-[2/1] overflow-hidden">
          <img :src="item.img" class="w-full h-full object-scale-down !object-cover" draggable="false" />
        </div>
        <div class="absolute w-full bottom-0 left-0 bg-gradient-to-b from-gray-100/5 to-red-500 to-50% text-white font-bold p-4 pb-10 text-center">{{item.name}}</div>
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
      img: item.thumbnail,
      name: item.projectName
    }
  }), (contestList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.contestId,
      to: `/join/${item.contestId}`,
      img: item.thumbnail,
      name: item.name
    }
  }), (notificationList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.notificationId,
      to: `/notice/${item.notificationId}`,
      img: item.thumbnail,
      name: item.notificationName
    }
  }), (broadcastList || []).map(item => {
    return {
      carousel: item.carousel || '',
      id: item.broadcastId,
      to: `/broadcast/${item.broadcastId}`,
      img: item.thumbnail,
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