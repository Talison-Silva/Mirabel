<script setup>
import ContentMain from "@UI/partials/content-main/index.vue";
import AsideBar from "@UI/partials/aside-bar/index.vue";
import { RouterView } from "vue-router";
</script>

<template>
    <div data-color-theme="light" class="relative w-full h-screen flex">
        <AsideBar />
        <ContentMain>
            <router-view />
        </ContentMain>
    </div>
</template>
