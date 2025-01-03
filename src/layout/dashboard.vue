<script setup>
import ThemesManager from "@/themes";
import { provide } from "vue";

console.log(":. ", ThemesManager.get());
provide("theme-mode", {
    get: ThemesManager.get,
    set: ThemesManager.set,
});
</script>

<template>
    <section
        id="dashboard"
        :data-color-theme="ThemesManager.get()"
        class="relative w-full h-screen flex"
    >
        <Aside />
        <Content>
            <router-view />
        </Content>
    </section>
</template>
