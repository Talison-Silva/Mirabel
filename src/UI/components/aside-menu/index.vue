<script setup>
import Category from "./category.vue";

const menu = [
    {
        name: "visão geral",
        options: [
            {
                name: "Dashboard",
                href: "/dashboard/",
                icon: "bi-grid-1x2",
            },
            {
                name: "Dashboard",
                href: "/dashboard/",
                icon: "bi-grid-1x2",
                options: [{}],
            },
            {
                name: "Dashboard",
                href: "/dashboard/",
                icon: "bi-grid-1x2",
            },
        ],
    },
];
</script>

<template>
    <ul class="flex flex-col">
        <li v-for="item in menu">
            <Category
                :name="item.name"
                :options="item.options"
                :icon="item.icon"
            />
        </li>
    </ul>
</template>
