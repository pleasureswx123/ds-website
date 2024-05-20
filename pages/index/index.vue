<template>
  <div class="divide-y">


    <div class="container mx-auto p-5 md-5 bg-orange-50">
      <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
        class="rounded-lg overflow-hidden" indicators>
        <img :src="item" class="w-full h-52 md:h-80 object-cover" draggable="false">
      </UCarousel>
    </div>


    <section class="text-gray-600 body-font">
      <div class="container  px-5 py-24 mx-auto flex flex-wrap bg-orange-50">
        <div class="flex w-full mb-12 flex-wrap">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 text-red-600">
            中共中央办公厅印发《通知》 在全党开展党纪学习教育11</h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            《通知》明确，要坚持以习近平新时代中国特色社会主义思想为指导，聚焦解决一些党员、干部对党规党纪不上心、不了解、不掌握等问题，组织党员特别是党员领导干部认真学习《条例》，做到学纪、知纪、明纪、守纪，搞清楚党的纪律规矩是什么，弄明白能干什么、不能干什么，把遵规守纪刻印在心，内化为言行准则，进一步强化纪律意识、加强自我约束、提高免疫能力，增强政治定力、纪律定力、道德定力、抵腐定力，始终做到忠诚干净担当。
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/500x300">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/501x301">
            </div>
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/600x360">
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img alt="gallery" class="w-full h-full object-cover object-center block"
                src="https://dummyimage.com/601x361">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/502x302">
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img alt="gallery" class="w-full object-cover h-full object-center block"
                src="https://dummyimage.com/503x303">
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div>
      <img class="w-full h-32 object-cover m-auto" src="~/assets/images/banner-1.png" alt="">
    </div>


    <section class="text-gray-600 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
<!--          <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">-->
          <img class="object-cover object-center rounded" alt="hero" src="~/assets/images/123.png"></img>
<!--          <img class="object-cover object-center rounded" alt="hero" :src="new URL(`~/assets/images/123.png`, import.meta.url).href"></img>-->
        </div>
        <div
          class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900  text-red-600">第八届 HOTELEX明日之星<br
              class="hidden lg:inline-block">厨师大赛 烹饪协会
          </h1>
          <p class="mb-8 leading-relaxed">
            由中国烹饪协会和上海博华国际展览有限公司主办，中国烹饪协会餐饮教育工作委员会、上海旅游高等专科学校承办，上海中侨职业技术大学、上海松江志达职业技能培训中心协办的第八届HOTELEX明日之星厨师大赛在上海国家会展中心举办。中国烹饪协会副会长乔杰、上海博华国际展览有限公司食品酒店及生活方式事业部总监朱美君出席开幕仪式并致辞。
          </p>
          <div class="flex justify-center">
            <button
                @click="navigateTo('/apply/8')"
              class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded text-lg">立即报名</button>
          </div>
        </div>
      </div>
    </section>
  
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
    

    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="-my-8 divide-y-2 divide-gray-100">

          <div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="w-full md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <img class="rounded md:w-2/3 object-cover object-center mb-3" src="https://dummyimage.com/722x402"
                alt="content">
              <span class="font-semibold title-font text-gray-700">11CATEGORY</span>
              <span class="mt-1 text-gray-500 text-sm">2024-05-11 09:04:15</span>
            </div>
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">书画理事主度大师出席-活动</h2>
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
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">书画理事主度大师出席-活动</h2>
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
            <div class="md:flex-grow">
              <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">书画理事主度大师出席-活动</h2>
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
import BlockCard from './components/BlockCard.vue';
import ProjectList from './components/ProjectList.vue';
import ContestList from './components/ContestList.vue';
import NoticeList from './components/NoticeList.vue';
import BroadcastList from './components/BroadcastList.vue';

useHead(() => ({
  title: "首页",
}));

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
