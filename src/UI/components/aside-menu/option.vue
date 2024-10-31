<script setup>
import { defineProps, ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["name", "to", "icon", "options"]);
const optionMenu = ref(false);
</script>

<template>
    <div
        v-if="props.options && props.options.length !== 0"
        class="flex flex-col"
    >
        <!--<router-link class="flex gap-4" :to="props.to">
            <span class="bi bi-grid-1x2 opacity-60 text-[20px]" />
            <p class="text-[18px]">{{ props.name }}</p>

            <span class="bi bi-arrow-down"></span>
        </router-link>-->

        <router-link
            class="mt-2 px-4 py-2 rounded-[5px] flex justify-between itesm-center hover:bg-indigo-400 hover:text-white"
            :to="props.to"
        >
            <div class="flex gap-4">
                <span class="bi bi-grid-1x2 opacity-60 text-[20px]" />
                <p class="text-[18px]">{{ props.name }}</p>
            </div>

            <span class="bi bi-arrow-down"></span>
        </router-link>

        <div v-if="!optionMenu" class="w-full h-12 bg-red-200" />
    </div>

    <router-link
        v-else
        class="mt-2 px-4 py-2 rounded-[5px] flex justify-between items-center hover:bg-indigo-400 hover:text-white"
        :to="props.to"
    >
        <div class="flex gap-4">
            <span class="bi bi-grid-1x2 opacity-60 text-[20px]" />
            <p class="text-[18px]">{{ props.name }}</p>
        </div>
    </router-link>
</template>
