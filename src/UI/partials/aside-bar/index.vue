<script setup>
import { ref, defineEmits, onMounted, watch } from "vue";
import ArrowSideBar from "@UI/components/ArrowSideBar/index.vue";
import AsideMenu from "@UI/components/aside-menu/index.vue";

const isToogle = ref(true);
const aside = ref(null);
const coldtime = ref(false);

function toogleAside(toogle) {
    toogle
        ? (aside.value.style.width = "264px")
        : (aside.value.style.width = "70px");
}

function hoverToogle(toogle) {
    if (!isToogle.value && coldtime.value) {
        toogleAside(toogle);
    }
}

function toogle() {
    isToogle.value = !isToogle.value;

    setTimeout(() => {
        coldtime.value = !coldtime.value;
    }, 300);
}

onMounted(() => {
    toogleAside(isToogle.value);
});

watch(isToogle, (now) => {
    toogleAside(isToogle.value);
});
</script>

<template>
    <aside
        ref="aside"
        class="z-20 relative a-side w-[264px] h-full select-none transition-all transition-300"
        @mouseover="hoverToogle(true)"
        @mouseleave="hoverToogle(false)"
    >
        <ArrowSideBar :status="isToogle" :call-back="toogle" />

        <div class="w-full h-full overflow-x-hidden">
            <div class="w-[264px] h-full flex flex-col">
                <div
                    class="relative w-full pl-4 h-[61px] border-b border-solid border-[#d1d4dd] flex items-center gap-8"
                >
                    <h1
                        v-if="isToogle"
                        class="font-roboto-mono font-[400] text-[20px] uppercase tracking-wide"
                    >
                        Dashboard
                    </h1>
                    <h1
                        v-else
                        class="ml-2 font-roboto-mono font-[800] text-[32px] uppercase tracking-wide"
                    >
                        D
                    </h1>
                </div>
                <AsideMenu />
            </div>
        </div>
    </aside>
</template>
