<template>
  <div class="flex flex-row shadow-lg">
    <div class="menu-icon-box md:!hidden">
      <UIcon class="text-2xl text-white" name="i-heroicons-bars-3" />
      <div class="menu-nav-list">
        <div class="menu-nav-list-item" v-for="(item, index) in menuList.slice(1)"  @click="handleClick(item)" :key="index">
          <div class="label">{{item.label}}</div>
          <UIcon v-if="item.children" class="shrink-0" name="i-heroicons-chevron-right" />
          <div v-if="item.children" class="sub-nav-list">
            <div class="sub-item" v-for="(subItem, subIndex) in item.children" @click.stop="handleClick(subItem[0])" :key="subIndex">{{subItem[0].label}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="group shrink-0 inline-flex" :class="{ active: $route.path === '/' }">
      <div class="text-center w-full truncate cursor-pointer text-white px-5 md:px-10 py-2 text-base font-medium leading-loose hover:bg-red-500 group-[.active]:bg-red-700" @click="handleClick(menuList[0])">
        <UAvatar :ui="{ wrapper: 'bg-white inline-block align-middle mr-3 -mt-1' }" size="sm" :src="LogoImg" alt="职工文体" /> 首页
      </div>
    </div>
    <div class="grow hidden pr-6 md:!inline-flex">
      <template v-for="(item, index) in menuList.slice(1)">
        <div v-if="!item.children" class="group flex-1"
          :class="{ active: $route.path.length === 1 ? $route.path === item.to : item.to.startsWith($route.path) }">
          <div
            class="text-center w-full truncate cursor-pointer text-white py-2 text-base font-medium leading-loose hover:bg-red-500 group-[.active]:bg-red-700"
            @click="handleClick(item)">
            <UAvatar v-if="item.to === '/'" :ui="{ wrapper: 'bg-white inline-block align-middle mr-3 -mt-1' }" size="sm"
              :src="LogoImg" alt="职工文体" />
            {{ item.label }}
          </div>
        </div>
        <div class="group flex-1" v-else
          :class="{ active: $route.path.length === 1 ? $route.path === item.to : $route.path.startsWith(item.to) }">
          <UDropdown :items="item.children" mode="hover" :popper="{ offsetDistance: -10, placement: 'bottom-start' }"
            :ui="{ wrapper: 'w-full', rounded: 'rounded-none', item: { disabled: 'cursor-auto', inactive: 'text-white', active: 'bg-red-700 text-white' }, background: 'bg-red-600', ring: 'ring-red-500', divide: 'divide-red-500' }">
            <div
              class="text-center w-full truncate cursor-pointer text-white py-2 text-base font-medium leading-loose hover:bg-red-500 group-[.active]:bg-red-700"
              @click="handleClick(item)">{{ item.label }}
              <UIcon class="-mt-1" name="i-heroicons-chevron-down-20-solid" />
            </div>
          </UDropdown>
        </div>
      </template>
    </div>
    <div class="ml-auto shrink-0 inline-flex items-center gap-3">
      <template v-if="!userInfo">
        <UButtonGroup size="2xs" orientation="horizontal">
          <UButton @click="handleClick({ to: '/login' })" icon="i-heroicons-user-circle" label="登录"
            :color="`${route.path === '/login' ? 'sky' : 'gray'}`" />
          <UButton @click="handleClick({ to: '/register' })" icon="i-heroicons-user-plus-20-solid" label="注册"
            :color="`${route.path === '/register' ? 'sky' : 'gray'}`" color="gray" />
        </UButtonGroup>
      </template>
      <template v-else>
        <UDropdown :items="userDropdownItems" :popper="{ placement: 'bottom-end' }"
          :ui="{ item: { disabled: 'cursor-auto' } }">
          <UButtonGroup size="2xs" orientation="horizontal">
            <UButton icon="i-heroicons-user-circle" :label="userInfo.userName" color="gray" />
            <UButton icon="i-heroicons-chevron-down-20-solid" color="gray" />
          </UButtonGroup>
          <template #account>
            <div class="text-left">
              <p>{{ userInfo.email }}</p>
              <p>{{ userInfo.phonenumber }}</p>
              <p class="truncate font-medium text-gray-900 dark:text-white">
                userId: {{ userInfo.userId }}
              </p>
            </div>
          </template>
        </UDropdown>
      </template>
    </div>
  </div>
</template>

<script setup>
import LogoImg from '~/assets/images/logo-type@2x.png';
import { ModalConfirm } from "#components";
const route = useRoute()
const router = useRouter();
const modal = useModal();
const toast = useToast();

const userInfoStore = useUserInfoStore();
const { userInfo } = storeToRefs(userInfoStore);
const { logoutAction, getUserInfo } = userInfoStore;

getUserInfo();

const userDropdownItems = [
  [{
    label: 'user@example.com',
    slot: 'account',
    disabled: true
  }],
  [{
    label: '退出',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => {
      toast.add({
        timeout: 0,
        color: "lime",
        // icon: "i-heroicons-check-circle",
        title: '提示',
        description: '您确定要退出吗?',
        actions: [
          {
            variant: 'solid', color: 'red', label: '确定',
            click: () => {
              logoutAction();
            }
          },
          {
            variant: 'outline', color: 'red', label: '取消',
            click: () => { }
          }
        ],
        callback: () => {
          console.log(999)
        }
      });
      // modal.open(ModalConfirm, {
      //   title: '提示',
      //   message: '您确定要退出吗?',
      //   confirmButtonText: "确定",
      //   cancelButtonText: "取消",
      //   onSuccess: () => {
      //     userInfoStore.setUserInfo();
      //     toast.add({
      //       icon: "i-heroicons-check-circle",
      //       title: '正在退出...',
      //       callback: () => {
      //         modal.close();
      //         navigateTo("/");
      //       }
      //     })
      //   },
      //   onCancel: () => {
      //     modal.close();
      //   }
      // })
    }
  }]
]

const handleClick = (item) => {
  if (item.to) {
    if(item.target === '_blank') {
      const baseUrl = window.location.origin;
      window.open(`${baseUrl}${item.to}`, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.to)
    }
  }
}


const menuList = [
  {
    label: '首页',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: '比赛分类',
    children: [
      [{
        label: '篮球赛事项目',
        to: '/race/1',
        target: '_blank',
        click: () => {
          console.log('Edit')
        }
      }], [{
        label: '乒乓球赛事项目',
        target: '_blank',
        to: '/race/2',
        click: () => {
          console.log('Edit')
        }
      }], [{
        label: '羽毛球赛事项目',
        target: '_blank',
        to: '/race/3',
        click: () => {
          console.log('Edit')
        }
      }], [{
        label: '足球赛事项目',
        target: '_blank',
        to: '/race/4',
        click: () => {
          console.log('Edit')
        }
      }], [{
        label: '书画赛事项目',
        target: '_blank',
        to: '/race/5',
        click: () => {
          console.log('Edit')
        }
      }, {
        label: '田径赛事项目',
        target: '_blank',
        to: '/race/5',
        click: () => {
          console.log('Edit')
        }
      }]
    ]
  },
  {
    label: '我要参赛',
    to: '/join',
    // children: [
    //   [{
    //     label: '篮球赛事项目',
    //     to: '/join/1',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }], [{
    //     label: '乒乓球赛事项目',
    //     to: '/join/2',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }], [{
    //     label: '羽毛球赛事项目',
    //     to: '/join/3',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }], [{
    //     label: '足球赛事项目',
    //     to: '/join/4',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }], [{
    //     label: '书画赛事项目',
    //     to: '/join/5',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }, {
    //     label: '田径赛事项目',
    //     to: '/join/5',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }]
    // ]
  },
  {
    label: '通知公告',
    to: '/notice',
    // children: [
    //   [{
    //     label: '公告',
    //     to: '/notice/1',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }], [{
    //     label: '公示',
    //     to: '/notice/2',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }]
    // ]
  },
  {
    label: '赛事播报',
    to: '/broadcast',
    // children: [
    //   [{
    //     label: '赛事项目1',
    //     to: '/broadcast/1',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }], [{
    //     label: '球赛事项目2',
    //     to: '/broadcast/2',
    //     click: () => {
    //       console.log('Edit')
    //     }
    //   }]
    // ]
  },
  {
    label: '历届赛事',
    to: '/history'
  },
  // {
  //   label: '成绩查询',
  //   to: '/scores'
  // },
  {
    label: '关于大赛',
    to: '/about'
  },
];

const sidebarMenuList = useSidebarMenuList();
const getSidebarMenuList = (path) => {
  let res = [];
  try {
    res = menuList.filter(item => item.to !== '/').find(item => path.startsWith(item.to))?.children?.flat();
  } catch (e) {
    console.log(678, e)
  }
  return res;
}
watchEffect(() => {
  sidebarMenuList.value = getSidebarMenuList(route.path)
})

const breadcrumbData = useBreadcrumbList();

const getBreadcrumbList = (array, path) => {
  const root = array.find(item => item.to === '/');
  const findInfo = (array, home) => {
    return array.reduce((pre, item) => {
      let result = [...pre];
      if (item.to !== '/' && path.startsWith(item.to)) {
        const { children, ...info } = item;
        result.push(info);
        if (children?.length) {
          result.push(...findInfo(children.flat(), []))
        }
      }
      return result;
    }, home)
  }
  return findInfo(array, root ? [root] : [])
}

watch(() => route.path, (path) => {
  breadcrumbData.value = getBreadcrumbList(menuList, path)
})
</script>

<style lang="scss" scoped>
.menu-icon-box {
  @apply shrink-0 inline-flex px-5 items-center justify-center relative hover:bg-red-500 shadow-xl;
  .menu-nav-list {
    @apply absolute top-full left-0 hidden bg-red-600 text-white shadow-lg z-10;
    .menu-nav-list-item {
      @apply p-3 px-5 text-base cursor-pointer hover:bg-red-700 hover:font-medium flex items-center gap-2 relative  whitespace-nowrap;
      .label {
        @apply truncate grow;
      }
      &:hover .sub-nav-list{
        @apply block;
      }
      .sub-nav-list {
        @apply hidden absolute left-full top-0 z-10 bg-red-600 text-white shadow-xl;
        .sub-item {
          @apply p-3 px-5 text-base cursor-pointer hover:bg-red-700 hover:font-medium whitespace-nowrap;
        }
      }
    }
  }
  &:hover .menu-nav-list {
    @apply block;
  }
}
</style>
