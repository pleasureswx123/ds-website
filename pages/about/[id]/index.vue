<template>
  <div v-if="content">
    <div class="text-center text-2xl font-bold mt-10">{{ content.projectName }}</div>
    <div class="mt-5 pl-10 pr-10 " v-html="content.content"></div>
  </div>
</template>
<script setup>
const token = useCookie("token");
const curToken = computed(() => {
  return token.value;
});

const content = ref(null);
const route = useRoute();
const getDetail = async () => {
  const result = await $fetch(
    `https://sports.d.yanlingxinrui.com/app/v1/system/project/${route.params.id}`,
    { method: "GET",
    headers: {
        Authorization: `Bearer ${curToken.value}`,
      },
    },
  );
  const { code, msg, token: newToken, data } = result;
  if (code === 200) {
    content.value = data;
  }
}

getDetail()
</script>

