<template>
  <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
             class="overflow-hidden rounded-lg" indicators>
    <div class="w-full">
      <div class="aspect-[2/1] bg-blue-500 overflow-hidden relative">
        <img :src="item" class="w-full h-full object-cover object-center" draggable="false">
        <div class="absolute w-full bottom-0 left-0 bg-gray-900/[.3] text-white font-bold p-4 pb-10 text-center bg-op">11221</div>
      </div>
    </div>
  </UCarousel>
</template>

<script setup>
const items = [
  'https://picsum.photos/1920/1080?random=1',
  'https://picsum.photos/1920/1080?random=2',
  'https://picsum.photos/1920/1080?random=3',
  'https://picsum.photos/1920/1080?random=4',
  'https://picsum.photos/1920/1080?random=5',
  'https://picsum.photos/1920/1080?random=6'
]

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