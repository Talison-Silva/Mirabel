<script setup>
import Option from "./option.vue";
import { defineProps } from "vue";

const props = defineProps(["name", "options"]);
</script>

<template>
    <div class="mt-4 mx-4 min-h-min">
        <h1
            class="uppercase font-[600] text-[12px] text-[#614edc] tracking-widest"
        >
            {{ props.name }}
        </h1>

        <ul>
            <li v-for="item in props.options">
                <Option
                    :name="item.name"
                    :to="item.href"
                    :options="item.options"
                />
            </li>
        </ul>
    </div>
</template>
