<script setup>
import { defineProps } from "vue";

const props = defineProps(["toogleAside", "isToogle"]);
</script>

<template>
    <main
        class="content m-[8px] rounded-[16px] z-10 flex-grow max-h-full flex flex-col"
    >
        <!--<Header />-->
        <slot />
    </main>
</template>
