<script setup>
import { ref, defineProps, inject } from "vue";

const theme = inject("theme-mode");
const props = defineProps(["scheme"]);

const current_value = ref(theme.get());
const open = ref(false);

function update() {
    current_value.value = theme.get();
}

function hoverToogle(state) {
    if (!state) {
        open.value = !open.value;
    }
}

console.log(
    "default-value :. ",
    props.scheme[props.valueDefault],
    props.valueDefault,
);
</script>

<template>
    <div
        class="relative min-w-min min-h-min"
        @mouseover="hoverToogle(true)"
        @mouseleave="hoverToogle(false)"
    >
        <span
            :class="props.scheme[current_value].bootstrapIcon"
            @click="
                () => {
                    open = !open;
                }
            "
        />
        <div
            v-if="open"
            class="absolute top-[125%] right-0 min-w-min min-h-min flex flex-col"
        >
            <ul
                class="relative p-2 toogle-theme rounded-[10px] min-w-[42px] min-h-min flex flex-col justify-center items-center"
            >
                <div
                    class="absolute bottom-full right-[10%] toogle-theme-triangle"
                />
                <li v-for="item in props.scheme">
                    <span
                        v-if="item.value !== current_value"
                        :class="`${item.bootstrapIcon} text-[20px]`"
                        @click="
                            () => {
                                item.onclick(item.value);
                                update();
                            }
                        "
                    />
                </li>
            </ul>
        </div>
    </div>
</template>
