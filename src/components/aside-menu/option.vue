<script setup>
import { defineProps, ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps(["name", "to", "icon", "options"]);
const optionMenu = ref(false);

function OpenMenu() {
    optionMenu.value = !optionMenu.value;
}
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
            class="mt-2 px-4 py-2 rounded-[5px] flex justify-between itesm-center hover:bg-blue-200 hover:text-indigo-600"
            @click="OpenMenu"
            :to="props.to"
        >
            <div class="flex gap-4">
                <span class="bi bi-grid-1x2 opacity-60 text-[20px]" />
                <p class="text-[18px]">{{ props.name }}</p>
            </div>

            <span
                v-if="optionMenu"
                class="bi bi-chevron-down text-[20px]"
            ></span>
            <span v-else class="bi bi-chevron-left text-[20px]"></span>
        </router-link>

        <div
            v-if="optionMenu"
            class="ml-4 border-l-2 border-solid border-l-blue-200 w-full min-h-min flex flex-col"
        >
            <div
                v-for="item in props.options"
                class="mt-2 w-full h-10 hover:bg-blue-200"
            >
                <p>Hello</p>
            </div>
        </div>
    </div>

    <router-link
        v-else
        class="mt-2 px-4 py-2 rounded-[5px] flex justify-between items-center hover:bg-blue-200 hover:text-indigo-600"
        :to="props.to"
    >
        <div class="flex gap-4">
            <span class="bi bi-grid-1x2 opacity-60 text-[20px]" />
            <p class="text-[18px]">{{ props.name }}</p>
        </div>
    </router-link>
</template>
