<template>
  <UCarousel ref="carouselRef" v-slot="{ item }" :items="imgsList" :ui="{ item: 'basis-full' }"
             class="overflow-hidden rounded-lg" indicators>
    <div class="w-full">
      <div class="aspect-[2/1] bg-gray-100 overflow-hidden relative">
        <img :src="item.img" class="w-full h-full object-cover object-center" draggable="false">
        <div class="absolute w-full bottom-0 left-0 bg-gray-900/[.3] text-white font-bold p-4 pb-10 text-center bg-op">{{item.name}}</div>
      </div>
    </div>
  </UCarousel>
</template>

<script setup>
import {computed} from "vue";

const appStoreInfo = useAppStoreInfo();
const {projectList} = storeToRefs(appStoreInfo);
const {getProjectList} = appStoreInfo;

await getProjectList();

const imgsList = computed(() => {
  return (projectList.value || []).filter(item => item.carousel === 'Y').map(item =>  {
    return {
      img: getStaticPath(item.thumbnail),
      name: item.projectName
    }
  })
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