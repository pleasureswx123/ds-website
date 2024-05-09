<template>
  <div class="hd-top-box">
    <div class="top-bar box-wrapper">
      <div class="rt-box" v-if="userInfo" :key="userInfo.userId">
        <div class="item" @click="handleJump('/apply')">报名</div>
        <div class="line"></div>
        <div class="item">
          <el-dropdown>
            <div class="cursor-pointer flex items-center leading-[23px]">
              <span>{{ userInfo.nickName }}</span>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>用户中心</el-dropdown-item>
                <el-dropdown-item @click="handleLogout" divided
                  >退出</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
      <div class="rt-box" v-else>
        <div class="item" @click="handleJump('/login')">登录</div>
        <div class="line"></div>
        <div class="item" @click="handleJump('/register')">注册</div>
      </div>
      <div class="logo"></div>
    </div>
  </div>
  <div class="menu-box sticky top-0 z-10">
    <ul class="menu box-wrapper">
      <li
        class="item"
        v-for="(item, index) in navMenuList"
        :key="item.path"
        :class="{ active: $route.path === item.path }"
        @click="handleJump(item.path)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
const circleUrl =
  "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
const navMenuList = [
  { name: "首页", path: "/" },
  { name: "比赛分类", path: "/race" },
  { name: "通知公告", path: "/notice" },
  { name: "赛事播报", path: "/broadcast" },
  { name: "历届赛事", path: "/history" },
  { name: "成绩查询", path: "/scores" },
  { name: "关于大赛", path: "/about" },
];
const router = useRouter();
const handleJump = (path) => {
  router.push({ path });
};

const userInfoStore = useUserInfoStore();

const { user: userInfo } = storeToRefs(userInfoStore);

const handleLogout = () => {
  ElMessageBox.confirm("确定要退出吗?", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  })
    .then(() => {
      userInfoStore.setUserInfo();
      ElMessage({
        type: "success",
        message: "退出成功！",
      });
      navigateTo("/");
    })
    .catch(() => {});
};
</script>

<style lang="scss" scoped>
.hd-top-box {
  @apply h-[180px];
  background: #f9968d url(~/assets/images/bg-hd.png) no-repeat center bottom;
  // background-image: radial-gradient(circle at 0 50%, #ef3026 0%, #b81810 100%);
  .top-bar {
    @apply relative h-full;
  }
  .logo {
    width: 600px;
    max-width: 80vw;
    height: 180px;
    background: url(~/assets/images/logo.png) no-repeat center;
    background-size: contain;
    @apply absolute top-0 left-0;
  }
  .rt-box {
    @apply pt-6 pr-14 text-stone-600 text-base flex justify-end items-center gap-5;
    .item {
      background: red;
      @apply bg-gray-100 rounded px-3 py-1 cursor-pointer;
    }
    .line {
      @apply w-[1px] h-[15px] bg-stone-400;
    }
  }
}
.menu-box {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  @apply shadow  bg-[#e33026];
  .menu {
    @apply flex text-white text-lg;
  }
  .item {
    border-right: 1px solid #ed3e34;
    &:last-child {
      border-right: none;
    }
    @apply cursor-pointer flex-1 h-[60px] leading-[60px] text-center;
    &:hover {
      @apply bg-[#ed3e34];
    }
    &.active {
      @apply bg-[#c21107] font-bold;
    }
  }
}
</style>
