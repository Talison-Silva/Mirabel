<script setup>
import { defineProps } from "vue";
import NavBar from "@UI/partials/nav-bar/index.vue";

const props = defineProps(["toogleAside", "isToogle"]);
</script>

<template>
    <main class="z-10 flex-grow h-full flex flex-col">
        <NavBar />

        <div class="content flex-grow --bg-slate-200 shadow-inner-lg">
            <slot />
        </div>
    </main>
</template>
