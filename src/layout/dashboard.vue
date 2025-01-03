<script setup>
import ThemesManager from "@/themes";
import { provide, watch, ref, onMounted } from "vue";

const dashboard = ref(null);

function get() {
    var themeStorage = localStorage.getItem("prefers-color-scheme");

    if (!themeStorage) {
        var themeSystem = window.matchMedia("(prefers-color-scheme: light)");

        if (themeSystem.metches) {
            localStorage.setItem("prefers-color-scheme", "light");
            return "light";
        } else {
            localStorage.setItem("prefers-color-scheme", "night");
            return "night";
        }
    } else {
        return themeStorage;
    }
}

function set(theme) {
    var element = document.getElementById("dashboard");

    if (element) {
        element.attributes["data-color-theme"].value = theme;
        localStorage.setItem("prefers-color-scheme", theme);
    } else {
        console.error("ref not registed");
    }
}

provide("theme-mode", { get, set });
/*
provide("theme-mode", ThemeColorHelper);
onMounted(() => {
    ThemeColorHelper.register = () => {
        console.log(dashboard);
    };
    provide("theme-mode", ThemeColorHelper);
});
*/
console.log("get-theme", get());
</script>

<template>
    <div
        id="dashboard"
        ref="dashboard"
        :data-color-theme="get()"
        class="relative w-full h-screen flex"
    >
        <Aside />
        <Content>
            <router-view />
        </Content>
    </div>
</template>
