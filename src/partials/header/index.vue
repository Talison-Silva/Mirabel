<script setup>
import { inject, ref, onMounted } from "vue";

const changeColorMode = inject("theme-mode");

const drop = ref(false);
</script>

<template>
    <nav
        class="nav-bar w-full h-[72px] px-10 text-[20px] flex justify-between items-center"
    >
        <div class="flex gap-6 items-center">
            <span class="icon-side-bar bi bi-layout-sidebar" />
            <article class="navbar-infor">
                <h1 class="text-white text-[24px] uppercase font-[600]">
                    Dashboard
                </h1>
                <p class="text-[#869d9c] text-[14px]">Dashboard/</p>
            </article>
        </div>

        <div class="flex items-center gap-6">
            <div class="search min-w-min h-[42px] rounded-[5px] flex">
                <buttom
                    class="w-[42px] h-[42px] flex justify-center items-center"
                >
                    <span class="bi bi-gender-neuter" />
                </buttom>
                <input
                    class="px-4 w-[180px] h-full border-x-[1px] border-dashed border-x-[#536867] bg-transparent outline-none text-white"
                />
                <buttom
                    class="w-[42px] h-[42px] flex justify-center items-center"
                >
                    <span class="bi bi-sliders" />
                </buttom>
            </div>

            <div class="separator w-[2px] h-[30px] rounded-[2px]" />

            <span class="search-icon bi bi-gender-neuter"></span>
            <!--<span class="bi bi-bell"></span>-->
            <span class="bi bi-gear"></span>

            <ToogleTheme
                :scheme="{
                    light: {
                        bootstrapIcon: 'bi bi-brightness-high',
                        onclick: changeColorMode.set,
                        value: 'light',
                    },
                    night: {
                        bootstrapIcon: 'bi bi-moon-stars',
                        onclick: changeColorMode.set,
                        value: 'night',
                    },
                }"
            />
            <div class="separator w-[2px] h-[30px] rounded-[2px]" />

            <div class="w-[32px] h-[32px] rounded-full bg-[#465757]" />

            <!--<div class="relative min-w-min min-h-min"></div>-->
        </div>
    </nav>
</template>
