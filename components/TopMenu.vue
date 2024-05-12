<template>
  <div class="flex gap-20">
    <div class="flex-1 flex min-w-0">
      <template v-for="(item, index) in menuList">
        <div v-if="!item.children" class="group flex-1 min-w-0" :class="{ active: route.path === item.to }">
          <div
            class="text-center w-full truncate cursor-pointer text-white text-base font-bold h-10 leading-10 hover:bg-red-500 group-[.active]:bg-red-700"
            @click="handleClick(item)">{{ item.label }}</div>
        </div>
        <div class="group flex-1 min-w-0" :class="{ active: route.path === item.to }" v-else>
          <UDropdown :items="item.children" mode="hover" :popper="{ placement: 'bottom-start' }"
            :ui="{ wrapper: 'w-full', item: { disabled: 'cursor-auto' } }">
            <div
              class="text-center w-full truncate cursor-pointer text-white text-base font-bold h-10 leading-10 hover:bg-red-500 group-[.active]:bg-red-700"
              @click="handleClick(item)">{{ item.label }}</div>
          </UDropdown>
        </div>
      </template>
    </div>
    <div class="flex items-center gap-3 curs">
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
          <template #account="{ item }">
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
import { ModalConfirm } from "#components";
const route = useRoute()
const router = useRouter();
const modal = useModal();
const toast = useToast();

const userInfoStore = useUserInfoStore();

const { user: userInfo } = storeToRefs(userInfoStore);

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

const handleClick = (item) => {
  if (item.to) {
    router.push(item.to)
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
    to: '/race',
    children: [
      [{
        label: 'Profile',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        }
      }], [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        shortcuts: ['E'],
        click: () => {
          console.log('Edit')
        }
      }, {
        label: 'Duplicate',
        icon: 'i-heroicons-document-duplicate-20-solid',
        shortcuts: ['D'],
        disabled: true
      }], [{
        label: 'Archive',
        icon: 'i-heroicons-archive-box-20-solid'
      }, {
        label: 'Move',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
      }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        shortcuts: ['⌘', 'D']
      }]
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
