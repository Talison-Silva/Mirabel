<script setup>
import { defineProps } from "vue";

const props = defineProps(["status", "callBack"]);
</script>
<template>
    <span
        v-if="props.status"
        @click="props.callBack"
        class="z-30 absolute top-[10px] right-[-14px] .icon-arrow bi bi-arrow-left-square-fill text-[28px]"
    />
    <span
        v-else
        @click="props.callBack"
        class="z-30 absolute top-[10px] right-[-14px] .icon-arrow bi bi-arrow-right-square-fill text-[28px]"
    />
</template>
