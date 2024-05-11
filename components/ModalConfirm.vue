<template>
  <UModal>
    <UCard>
      <div class="space-y-6 text-center">
        <p>{{ message }}</p>
        <div class="flex gap-4 items-center justify-center">
          <UButton v-if="showCancelButton" @click="onCancel" color="gray">{{ cancelButtonText }}</UButton>
          <UButton @click="onSuccess">{{ confirmButtonText }}</UButton>
        </div>
      </div>
    </UCard>
  </UModal>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: '内容'
  },
  confirmButtonText: {
    type: String,
    default: '确定'
  },
  cancelButtonText: {
    type: String,
    default: '取消'
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
});

const emit = defineEmits(['success', 'cancel'])

function onSuccess() {
  emit('success')
}

function onCancel() {
  emit('cancel')
}
</script>
