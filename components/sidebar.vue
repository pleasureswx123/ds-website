<template>
  <div class="w-full">
    <div class="bg-red-600 p-3 text-center text-white font-semibold text-base">{{title}}</div>
    <div class="bg-orange-50 px-4 pt-2 pb-3 divide-y divide-red-400 divide-dashed text-center">
      <div class="py-4 cursor-pointer hover:bg-orange-100 aria-selected:text-red-500 aria-selected:font-bold truncate"
           v-for="item in list" :key="item.value"
           :aria-selected="currentId === item.value"
           @click="currentId = item.value"
      >{{item.label}}</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  title: {
    type: String,
    default: '标题'
  },
  list: {
    type: Array,
    default: () => ([
      {
        value: 1,
        label: 'label'
      }
    ])
  }
})

const emits = defineEmits(['update:modelValue'])

const currentId = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})
</script>

<style lang="scss" scoped>
</style>