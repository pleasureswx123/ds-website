<template>
  <div class="flex gap-5 items-center header-top-menu">
    <el-avatar class="!bg-transparent cursor-pointer" @click="handleClick({ to: '/' })" :size="50" fit="cover"
      :src="LogoImg" />
    <div class="flex-1 min-w-0">
      <div class="bg-red-200 w-full">
        <client-only>
          <el-menu class="group" router :default-active="route.path" mode="horizontal" :popper-offset="0"
            style="max-width: 100%" ellipsis background-color="#dc2626" text-color="#fff" active-text-color="#ffd04b"
            @select="handleSelect">
            <template v-for="item in menuList">
              <el-sub-menu v-if="item?.children?.length" :index="item.to" :route="item.to" popper-class="menu-sub-popper">
                <template #title>
                  <span>{{ item.label }}</span>
                </template>
                <template v-for="chrItem in item.children">
                  <el-menu-item :index="chrItem.to" :route="item.to">{{ item.label }}</el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="item.to" :route="item.to">{{ item.label }}</el-menu-item>
            </template>
          </el-menu>
        </client-only>
      </div>
    </div>
    <div class="flex items-center gap-3">
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
              <p>{{ userInfo.phoneNumber }}</p>
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
const route = useRoute();
const router = useRouter();
const modal = useModal();
const toast = useToast();

const userInfoStore = useUserInfoStore();

const { user: userInfo } = storeToRefs(userInfoStore);

const handlerJump = (path) => {
  router.push(path)
};

const handleClick = (item) => {
  if (item.to) {
    router.push(item.to)
  }
}


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
              userInfoStore.setUserInfo();
              navigateTo("/");
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

var activeIndex = ref("1");

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

const menuList = [
  {
    label: '首页',
    icon: 'i-heroicons-home',
    to: '/'
  },
  {
    label: '比赛分类',
    to: '/race/1',
    children: [
      {
        to: '/race/1',
        label: 'Profile',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
      },
      {
        to: '/race/2',
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
          console.log('Edit')
        }
      }, {
        to: '/race/3',
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
      }, {
        to: '/race/4',
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
      }, {

        to: '/race/5',
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
      }, {

        to: '/race/6',
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
      }
    ]
  },
  {
    label: '我要参赛',
    to: '/join'
  },
  {
    label: '通知公告',
    to: '/notice'
  },
  {
    label: '赛事播报',
    to: '/broadcast'
  },
  {
    label: '历届赛事',
    to: '/history'
  },
  {
    label: '成绩查询',
    to: '/scores'
  },
  {
    label: '关于大赛',
    to: '/about'
  },
];
</script>

<style lang="scss" scoped>
.header-top-menu {
  .group {
    border: none!important;
  }
  .el-menu-item {
    @apply font-bold text-base hover:bg-red-500;

    &.is-active {
      @apply bg-red-700 border-b-2 border-red-950;
    }
  }
  .el-sub-menu {
    :deep() {
      .el-sub-menu__title {
        @apply font-bold text-base hover:bg-red-500;
      }
    }
    &.is-active {
      :deep() {
        .el-sub-menu__title {
          @apply bg-red-700 border-b-2 border-red-950;
        }
      }
    }
  }
}
</style>
<style>
.menu-sub-popper {
  @apply !border-0;
}
</style>
