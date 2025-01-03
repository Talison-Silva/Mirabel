<script setup>
import { defineProps } from "vue";

const props = defineProps(["toogleAside", "isToogle"]);
</script>

<template>
    <main class="z-10 flex-grow h-full flex flex-col">
        <Header />

        <div class="content flex-grow .shadow-inner-lg">
            <slot />
        </div>
    </main>
</template>
