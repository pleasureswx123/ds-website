<template>
    <div class="flex h-full gap-4">
        <div class="w-72">
            <slot name="sidebar"></slot>
        </div>
        <div class="flex-1 min-w-0">
            <slot></slot>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
