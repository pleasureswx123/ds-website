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

    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="w-full mb-10 text-2xl text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900  text-red-600">明日之星厨师大赛</h1>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400"
                alt="content">
              <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">2024-05-01</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">第六届中国国际工业设计博览会 天津举办</h2>
              <p class="leading-relaxed text-base  line-clamp-5 text-ellipsis">本届博览会围绕“<strong>设计赢未来
                  奋进新征程</strong>”主题，将致力于搭建工业设计领域国内外交流合作、企业供需对接的高端平台，集中展示我国工业设计发展所取得的最新成果。<strong>本届博览会呈现四大特点</strong><strong>一、展会规模大</strong>全国22个省（区、市）精心组织了本地优秀企业全部以特装形式参展，展览面积达2万平方米，参展企业超过300家。其中，上海、武汉展区展览面积均超1000平方米，山东、湖北、广东参展面积均超500平方米，河南、甘肃、陕西、辽宁、湖南省参展面积均超过300平方米。特斯拉、茅台集团、中车长客、TCL、美的、广汽集团、烽火通信、上海联影等众多知名企业将特装参展。<strong>二、展区亮点多</strong>本届新增“未来创意概念设计展区”和“青年创意设计师展区”。前者重点展示智能化创意设计产品、数字化智能交互产品，以及智能家居、智慧教育等多场景的设计产品；后者更加突出展示国内外知名青年设计师以及设计企业优秀青年设计师的前沿性、创新性设计产品。<strong>三、办展国际化</strong>本届国际展区汇聚了众多国家的最新设计产品，德国、俄罗斯、黎巴嫩、土耳其、埃及、印尼、蒙古等国企业均到场参展。既有来自全球各地的优秀工业设计作品，也可以与国际设计师和生产制造商进行交流对接合作。展览期间，还将通过线上线下联动，邀请日本、德国、加拿大、泰国、韩国等国外设计师参会分享最新的工业设计新观点和未来发展新趋势。<strong>四、同期活动多</strong>本届博览会同期将举办<strong>开幕式、主论坛、新品发布会、设计师之夜、青年设计师沙龙，以及产教融合分论坛、数智设计分论坛</strong>等丰富多彩的配套活动，论坛期间将发布新一批国家级工业设计中心名单并授牌，同期也将发布“中国工业设计青年100人论坛倡议”。此外，作为中国工业设计界精英齐聚，分享灵感与实践的品牌活动——设计师之夜，也将于11月30日晚在武汉红T时尚创意街区举办。届时，精彩专业的演出、前沿设计理念的分享，以及博览会优秀作品的发布等多项活动将在当晚呈现。本届博览会将努力整合工业设计行业资源，进一步丰富活动内容，不断提升展会品质内涵，增强品牌影响力和号召力。届时工业和信息化部、湖北省和武汉市的领导将出席博览会相关活动并给予现场指导，各省市工业和信息化主管部门也将参加相关交流活动，博览会也将以更加国际化、市场化的方式,引导和支持工业设计等现代服务业向专业化和价值链中高端延伸，为促进我国工业设计产业发展、助力加快实现新型工业化贡献力量。<strong>提醒：</strong>第四届东方创意之星大赛颁奖典礼将在（工业设计）产教融合分论坛中举办。大赛优秀作品展、教师赛培训等大赛活动也将同期举办，欢迎关注，参与。
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/721x401"
                alt="content">
              <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">2024-05-01</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">“西泠·天元杯”第三届全国青少年书画大赛</h2>
              <p class="leading-relaxed text-base line-clamp-5 text-ellipsis">
                决赛采用线上线下同时进行的方式，经过初赛激烈的角逐，共有近千名来自全国各地的中小学生脱颖而出。决赛现场，选手们认真描绘、构思独特，尽情发挥创作天赋，展示艺术才华。他们或挥舞毛笔泼墨，或拿起画笔勾勒，或执手刻刀细琢，沉浸在自己的艺术世界中。他们的作品笔触流畅、线条准确，色彩鲜明且充满生命力，把对自然、生活、历史等理解和感悟凝聚于纸张之上，创作出独具魅力的作品，表达出青少年对美好事物的独特感受。
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/722x402"
                alt="content">
              <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">2024-05-07</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">作品征集公告丨第二届中国邮政EMS校园创客大赛</h2>
              <p class="leading-relaxed text-base  line-clamp-5 text-ellipsis">
                一、大赛背景习近平总书记曾强调：“文化是一个国家、一个民族的灵魂。要坚持中国特色社会主义文化发展道路，激发全民族文化创新创造活力，建设社会主义文化强国”。中国邮政速递物流作为行业“国家队”，始终践行总书记重要讲话精神，以新时代社会主义文化发展方向为指导，联合中国青年杂志社，面向高校、青年设计师团体成功举办了首届中国邮政EMS校园创客大赛（以下简称大赛），在文化传承、精神引领方面取得了良好的效果。首届大赛共有来自全国29个省区市以及马来西亚等海内外国家和地区的387所高校参加，参赛学生总数超过6000人，征集了大量的优秀作品。本届大赛继续依托各单位团委、青年组织力量，为高校学生提供一个展示自我、实现梦想的舞台，也为青年群体提供了一个了解中国快递物流行业“国家队”的面貌、中国邮政速递物流企业文化和为全国人民服务理念的窗口。本届大赛作为第五届东方创意之星设计大赛主题设计赛举办，由中国邮政速递物流股份有限公司、中国青年杂志社主办，中国邮政广告有限责任公司承办，东方创意之星设计大赛组委会协办，东方好创意大赛网平台提供技术支持。大赛已被江苏、重庆、新疆、福建等省区市教育厅认可，列入学科竞赛目录，纳入《艺术类竞赛指数大学生竞赛清单》（2021版、2023版）目录，得到国内高校的广泛认可。大赛将严格按照国际赛事标准，遵循公开、公平、公正的评审原则，保证大赛的透明性和权威性。<strong>二、组织机构</strong>主办单位：中国邮政速递物流股份有限公司、中国青年杂志社承办单位：中国邮政广告有限责任公司协办单位：东方创意之星设计大赛组委会、耘耕文创平台、东方创意之星设计大赛27个省赛区执委会、CDS中国设计师沙龙、未之等支持单位：中国邮政集团有限公司新闻宣传中心<strong>三、大赛主题</strong>青春速度&nbsp;未来可期<strong>四、参赛对象</strong>国内外高校在校学生、校园团队、教师1.研究生组：高等院校硕士、博士在校生；2.本科组：高等院校本科在校生；3.职院组：职业院校在校生。注：毕业3年内的大学生，亦可参赛。<strong>五、参赛作品内容方向</strong>参赛作品方案要求实用性强，兼具生活美学，易于应用、开发与批量生产，重点围绕中国邮政速递物流业务在品牌宣传、物流包装、物流作业设施、营业场所形象等相关设计需求展开，突出中国邮政速递物流或中国青年与中国邮政速递物流联名主题文化和现代创意设计的有效融合，强调“创意为美”“设计为用”，提倡“文化＋科技+实用”的设计导向。参赛作品包括但不限于以下内容：&nbsp;1.设计类作品&nbsp;端午/中秋/新年礼盒等节日礼品或礼盒设计等各类文创产品、服务设计等；平面广告、海报、产品包装（手提袋、帆布包、绿色包装箱外观设计等）、CIS设计（MI、BI、VI设计可选择部分内容）、动漫衍生品、吉祥物设计、工作服装组合设计、配套服饰设计等。2.视频类作品&nbsp;&nbsp;宣传短片、短视频、H5、动漫游戏。3.
                其他类&nbsp;&nbsp;自由主题、自由形式表达。提示：（1）中国邮政速递物流股份有限公司（简称中国邮政速递物流）是经国务院批准，由中国邮政集团公司作为主要发起人，于2010年6月发起设立的股份制公司，是中国经营历史最悠久、网络覆盖范围最广的快递物流综合服务提供商。主要经营国内速递、国际速递、合同物流等业务，国内、国际速递服务涵盖卓越、标准和经济不同时限水平和代收货款等增值服务，合同物流涵盖仓储、运输等供应链全过程。拥有享誉全球的“EMS”特快专递品牌和国内知名的“CNPL”物流品牌。（2）以上1、2类作品中，须出现大赛logo和中国邮政速递物流logo，其中，中国邮政速递物流的logo下可出现中国邮政速递物流的核心词“迅速、准确、方便、安全”。&nbsp;（3）中国青年与中国邮政速递物流联名logo、大赛主题等素材，可根据作品创作需要使用。（4）相关设计素材可通过大赛官网或“EMS中国邮政速递物流”公众号下载。
              </p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-100 p-6 rounded-lg">
              <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/723x403"
                alt="content">
              <h3 class="tracking-widest text-red-500 text-xs font-medium title-font">2024-05-01</h3>
              <h2 class="text-lg text-gray-900 font-medium title-font mb-4">第六届中国国际工业设计博览会 天津举办</h2>
              <p class="leading-relaxed text-base  line-clamp-5 text-ellipsis">本届博览会围绕“<strong>设计赢未来
                  奋进新征程</strong>”主题，将致力于搭建工业设计领域国内外交流合作、企业供需对接的高端平台，集中展示我国工业设计发展所取得的最新成果。<strong>本届博览会呈现四大特点</strong><strong>一、展会规模大</strong>全国22个省（区、市）精心组织了本地优秀企业全部以特装形式参展，展览面积达2万平方米，参展企业超过300家。其中，上海、武汉展区展览面积均超1000平方米，山东、湖北、广东参展面积均超500平方米，河南、甘肃、陕西、辽宁、湖南省参展面积均超过300平方米。特斯拉、茅台集团、中车长客、TCL、美的、广汽集团、烽火通信、上海联影等众多知名企业将特装参展。<strong>二、展区亮点多</strong>本届新增“未来创意概念设计展区”和“青年创意设计师展区”。前者重点展示智能化创意设计产品、数字化智能交互产品，以及智能家居、智慧教育等多场景的设计产品；后者更加突出展示国内外知名青年设计师以及设计企业优秀青年设计师的前沿性、创新性设计产品。<strong>三、办展国际化</strong>本届国际展区汇聚了众多国家的最新设计产品，德国、俄罗斯、黎巴嫩、土耳其、埃及、印尼、蒙古等国企业均到场参展。既有来自全球各地的优秀工业设计作品，也可以与国际设计师和生产制造商进行交流对接合作。展览期间，还将通过线上线下联动，邀请日本、德国、加拿大、泰国、韩国等国外设计师参会分享最新的工业设计新观点和未来发展新趋势。<strong>四、同期活动多</strong>本届博览会同期将举办<strong>开幕式、主论坛、新品发布会、设计师之夜、青年设计师沙龙，以及产教融合分论坛、数智设计分论坛</strong>等丰富多彩的配套活动，论坛期间将发布新一批国家级工业设计中心名单并授牌，同期也将发布“中国工业设计青年100人论坛倡议”。此外，作为中国工业设计界精英齐聚，分享灵感与实践的品牌活动——设计师之夜，也将于11月30日晚在武汉红T时尚创意街区举办。届时，精彩专业的演出、前沿设计理念的分享，以及博览会优秀作品的发布等多项活动将在当晚呈现。本届博览会将努力整合工业设计行业资源，进一步丰富活动内容，不断提升展会品质内涵，增强品牌影响力和号召力。届时工业和信息化部、湖北省和武汉市的领导将出席博览会相关活动并给予现场指导，各省市工业和信息化主管部门也将参加相关交流活动，博览会也将以更加国际化、市场化的方式,引导和支持工业设计等现代服务业向专业化和价值链中高端延伸，为促进我国工业设计产业发展、助力加快实现新型工业化贡献力量。<strong>提醒：</strong>第四届东方创意之星大赛颁奖典礼将在（工业设计）产教融合分论坛中举办。大赛优秀作品展、教师赛培训等大赛活动也将同期举办，欢迎关注，参与。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>




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
