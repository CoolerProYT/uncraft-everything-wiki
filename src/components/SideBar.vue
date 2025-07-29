<template>
    <div class="bg-gray-950 w-full">
        <div class="px-2 py-2 w-full">
            <SideBarLink path="/Home" text="Home"/>
            <SideBarLink path="/UncraftingTable" text="Uncrafting Table"/>
            <SideBarLink path="/CommonConfig" text="Common Config"/>
            <SideBarLink path="/PerItemExpConfig" text="Per Item Exp Config"/>
        </div>
    </div>
</template>

<script setup>
import SideBarLink from "@/components/SideBarLink.vue";
</script>