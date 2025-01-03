<script setup>
//import { ref, defineEmits, onMounted, watch } from "vue";
//import ArrowSideBar from "@/components/dashboard/arrow-aside-icon/index.vue";
//import AsideMenu from "@/components/dashboard/aside-menu/index.vue";
</script>

<template>
    <aside
        class="z-20 relative a-side w-[264px] h-full select-none transition-all transition-300"
    >
        <div class="w-full h-full overflow-x-hidden">
            <div class="w-[264px] h-full flex flex-col">
                <div
                    class="relative w-full pl-4 h-[61px] flex items-center gap-8 a-side-line"
                >
                    <h1
                        class="font-roboto-mono font-[400] text-[20px] uppercase tracking-wide"
                    >
                        Dashboard
                    </h1>
                </div>
            </div>
        </div>
    </aside>
</template>
