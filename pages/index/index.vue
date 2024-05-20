<template>
  <div class="divide-y">
    
    <section class="text-gray-600 py-12">
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
    

    <section class="text-gray-600 overflow-hidden py-12">
      
      <h1 class="text-lg p-4 border-b border-gray-300 font-medium text-gray-600 text-justify bg-red-600 text-white rounded-lg">历届赛事</h1>
      
      <div class="divide-y-2 divide-gray-100">

        <div class="py-8 flex flex-wrap md:flex-nowrap">
          <div class="w-full md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img class="rounded md:w-2/3 object-cover object-center mb-3" src="https://dummyimage.com/722x402"
              alt="content">
            <span class="font-semibold title-font text-gray-700">11CATEGORY</span>
            <span class="mt-1 text-gray-500 text-sm">2024-05-11 09:04:15</span>
          </div>
          <div class="md:grow">
            <h2 class="text-2xl font-medium text-red-600 title-font mb-2">书画理事主度大师出席-活动</h2>
            <p class="leading-relaxed line-clamp-3 text-ellipsis">
              本届国际展区汇聚了众多国家的最新设计产品，德国、俄罗斯、黎巴嫩、土耳其、埃及、印尼、蒙古等国企业均到场参展。既有来自全球各地的优秀工业设计作品，也可以与国际设计师和生产制造商进行交流对接合作。展览期间，还将通过线上线下联动，邀请日本、德国、加拿大、泰国、韩国等国外设计师参会分享最新的工业设计新观点和未来发展新趋势。
            </p>
            <a class="text-red-500 inline-flex items-center mt-4">查看详情
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="py-8 flex flex-wrap md:flex-nowrap gap-3">
          <div class="w-full md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img class="rounded md:w-2/3 object-cover object-center mb-3" src="https://dummyimage.com/722x402"
              alt="content">
            <span class="font-semibold title-font text-gray-700">CATEGORY</span>
            <span class="mt-1 text-gray-500 text-sm">2024-05-11 09:04:15</span>
          </div>
          <div class="md:grow">
            <h2 class="text-2xl font-medium text-red-600 title-font mb-2">书画理事主度大师出席-活动</h2>
            <p class="leading-relaxed line-clamp-3 text-ellipsis">
              本届国际展区汇聚了众多国家的最新设计产品，德国、俄罗斯、黎巴嫩、土耳其、埃及、印尼、蒙古等国企业均到场参展。既有来自全球各地的优秀工业设计作品，也可以与国际设计师和生产制造商进行交流对接合作。展览期间，还将通过线上线下联动，邀请日本、德国、加拿大、泰国、韩国等国外设计师参会分享最新的工业设计新观点和未来发展新趋势。
            </p>
            <a class="text-red-500 inline-flex items-center mt-4">查看详情
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="py-8 flex flex-wrap md:flex-nowrap gap-3">
          <div class="w-full md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <img class="rounded md:w-2/3 object-cover object-center mb-3" src="https://dummyimage.com/722x402"
              alt="content">
            <span class="font-semibold title-font text-gray-700">CATEGORY</span>
            <span class="mt-1 text-gray-500 text-sm">2024-05-11 09:04:15</span>
          </div>
          <div class="md:grow">
            <h2 class="text-2xl font-medium text-red-600 title-font mb-2">书画理事主度大师出席-活动</h2>
            <p class="leading-relaxed line-clamp-3 text-ellipsis">
              本届国际展区汇聚了众多国家的最新设计产品，德国、俄罗斯、黎巴嫩、土耳其、埃及、印尼、蒙古等国企业均到场参展。既有来自全球各地的优秀工业设计作品，也可以与国际设计师和生产制造商进行交流对接合作。展览期间，还将通过线上线下联动，邀请日本、德国、加拿大、泰国、韩国等国外设计师参会分享最新的工业设计新观点和未来发展新趋势。
            </p>
            <a class="text-red-500 inline-flex items-center mt-4">查看详情
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
    
<!--
    


    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/421x261">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/422x262">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/423x263">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/424x264">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
              <p class="mt-1">$16.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/425x265">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
              <p class="mt-1">$21.15</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/427x267">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
              <p class="mt-1">$12.00</p>
            </div>
          </div>
          <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a class="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" class="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/428x268">
            </a>
            <div class="mt-4">
              <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
              <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
              <p class="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn
            asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke
                farm.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-6 h-6" viewBox="0 0 24 24">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke
                farm.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke
                farm.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke
                farm.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke
                farm.</p>
            </div>
          </div>
          <div class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div
                class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  class="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Ramona Falls</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke
                farm.</p>
            </div>
          </div>
        </div>
        <button
          class="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
      </div>
    </section>-->

  </div>
<!--
  <div class="grid grid-cols-3 gap-3">


    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>

    <div class="space-y-3 flex flex-col">
      <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
        <div>111</div>
      </UCard>
      <div class="grid grid-cols-2 gap-3">
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12">333</div>
        </UCard>
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12">444</div>
        </UCard>
      </div>
    </div>

    <div class="space-y-3 flex flex-col">
      <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
        <template #header>
          <div>标题</div>
        </template>
        <div class="bg-blue-400 h-32">66</div>
      </UCard>
      <div class="grid grid-cols-2 gap-3">
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12"></div>
        </UCard>
        <UCard :ui="{ rounded: 'rounded-none' }">
          <div class="h-12"></div>
        </UCard>
      </div>
    </div>

  </div>



  <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
    <div class="h-16">66</div>
  </UCard>


  <div class="grid grid-cols-3 gap-3">
    <UCard :ui="{ rounded: 'rounded-none' }">
      <template #header>
        <div>标题</div>
      </template>
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <template #header>
        <div>标题</div>
      </template>
      <div>11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <template #header>
        <div>标题</div>
      </template>
      <div>11</div>
    </UCard>

  </div>

  <UCard :ui="{ base: 'flex-1', rounded: 'rounded-none' }">
    <div class="h-16">66</div>
  </UCard>

  <div class="grid grid-cols-2 gap-3">
    <UCard :ui="{ rounded: 'rounded-none' }">
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>

  </div>

  <div class="grid grid-cols-4 gap-3">
    <UCard :ui="{ rounded: 'rounded-none' }">
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>
    <UCard :ui="{ rounded: 'rounded-none' }">
      <div class="h-40">11</div>
    </UCard>

    <UCard :ui="{ rounded: 'rounded-none' }">
      <div>11</div>
    </UCard>

  </div>
  
  
  -->
</template>

<script setup>
import Banner from './components/Banner.vue';
import TopContest from './components/TopContest.vue';
import BlockCard from './components/BlockCard.vue';
import ProjectList from './components/ProjectList.vue';
import ContestList from './components/ContestList.vue';
import NoticeList from './components/NoticeList.vue';
import BroadcastList from './components/BroadcastList.vue';

useHead(() => ({
  title: "首页",
}));
</script>


<style lang="scss" scoped>
</style>
