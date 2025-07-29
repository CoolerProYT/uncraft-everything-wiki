<template>
    <div class="w-full flex">
        <div class="md:w-10/12 px-3">
            <div class="w-full border-b py-5 scroll-mt-18" id="uncraftingTable">
                <span class="text-4xl font-bold">Uncrafting Table</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The Uncrafting Table is a block that allows players to uncraft items back into their original ingredients. It is particularly useful for recovering resources from crafted items that are no longer needed.
                    </p>
                    <div>
                        <CraftingGui
                            slot_1="minecraft:crafting_table"
                            slot_2="minecraft:crafting_table"
                            slot_3=""
                            slot_4="minecraft:crafting_table"
                            slot_5="minecraft:crafting_table"
                            slot_6=""
                            slot_7=""
                            slot_8=""
                            slot_9=""
                            output="mod:uncrafting_table"
                            output_count="1"
                        />
                    </div>
                </div>
            </div>
            <div class="w-full border-b py-5 scroll-mt-18" id="limitation">
                <span class="text-4xl font-bold">Limitation</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        Because we can not know what are the ingredients used to craft an item (e.g. a crafting table can be crafted with different planks), the Uncrafting Table will let player to select which type of ingredient to output instead of directly output the original used ingredients.
                    </p>
                    <div class="mt-4">
                        <img :src="recipeSelection" alt="Recipe Selection">
                    </div>
                    <p class="text-lg text-gray-300 mt-4">
                        To prevent possible exploits, there are some limitations on what items has partial recipe available or can not be uncrafted (Mostly caused by modded recipes for vanilla items):
                    </p>
                    <ul class="mt-3 list-disc ms-5">
                        <li>Enchanted Book</li>
                        <li>Shulker Box (All colored variant only can be uncrafted to normal Shulker Box)</li>
                    </ul>
                </div>
            </div>
            <div class="w-full py-5 scroll-mt-18" id="compatibility">
                <span class="text-4xl font-bold">Compatibility</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        The mod are compatible with some recipe viewer and mod with special crafting recipes.
                    </p>
                    <div class="relative overflow-x-auto mt-4">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-400">
                            <thead class="text-xs uppercase bg-gray-700 text-gray-400">
                            <tr>
                                <th scope="col" class="px-3 md:px-6 py-3">
                                    MC Version
                                </th>
                                <th scope="col" class="px-3 md:px-6 py-3">
                                    Mod Loader
                                </th>
                                <th scope="col" class="px-3 md:px-6 py-3 text-center">
                                    Mod
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="compat in compatData" class="border-b bg-gray-800 border-gray-700">
                                <th class="px-3 md:px-6 py-4">
                                    <span class="text-lg">{{ compat.minecraftVersion }}</span>
                                </th>
                                <td class="px-3 md:px-6 py-4">
                                    <div class="flex gap-2">
                                        <img class="size-8" v-for="modLoader in compat.modLoader" :src="modLoaderIcons[modLoader]" alt="modLoader">
                                    </div>
                                </td>
                                <td class="px-3 md:px-6 py-4 text-center">
                                    <span class="text-lg">{{ compat.mod }}</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="uncraftingTable" name="Uncrafting Table" :active-section="activeSection" />
                <AnchorLink id="limitation" name="Limitation" :active-section="activeSection" />
                <AnchorLink id="compatibility" name="Compatibility" :active-section="activeSection" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import CraftingGui from "@/components/CraftingGui.vue";
import AnchorLink from "@/components/AnchorLink.vue";
import recipeSelection from "@/assets/img/recipe_selection.png"
import forge from '@/assets/img/forge.png';
import fabric from '@/assets/img/fabric.png';
import neoforge from '@/assets/img/neoforge.png';

const modLoaderIcons = {
    forge,
    fabric,
    neoforge
}
const compatData = [
    {
        minecraftVersion: '1.16.5',
        modLoader: [
            'fabric',
        ],
        mod: 'REI',
    },
    {
        minecraftVersion: '1.16.5',
        modLoader: [
            'forge',
        ],
        mod: 'JEI, REI',
    },
    {
        minecraftVersion: '1.18.2, 1.19.2, 1.20.1',
        modLoader: [
            'forge'
        ],
        mod: 'JEI, REI, GameStages / RecipeStages',
    },
    {
        minecraftVersion: '1.20.1',
        modLoader: [
            'fabric'
        ],
        mod: 'REI',
    },
    {
        minecraftVersion: '1.21.1',
        modLoader: [
            'fabric',
            'neoforge'
        ],
        mod: 'REI',
    },
    {
        minecraftVersion: '1.21.1',
        modLoader: [
            'forge',
            'neoforge'
        ],
        mod: 'JEI',
    },
    {
        minecraftVersion: '1.21.4',
        modLoader: [
            'fabric',
            'neoforge'
        ],
        mod: 'REI',
    },
    {
        minecraftVersion: '1.21.4',
        modLoader: [
            'neoforge'
        ],
        mod: 'JEI',
    },
    {
        minecraftVersion: '1.21.5',
        modLoader: [
            'fabric',
            'neoforge'
        ],
        mod: 'REI',
    },
    {
        minecraftVersion: '1.21.5',
        modLoader: [
            'neoforge'
        ],
        mod: 'JEI',
    },
    {
        minecraftVersion: '1.21.6-1.21.8',
        modLoader: [
            'fabric',
            'neoforge'
        ],
        mod: 'REI',
    },
    {
        minecraftVersion: '1.21.7-1.21.8',
        modLoader: [
            'neoforge'
        ],
        mod: 'JEI',
    },
];
const activeSection = ref(null);

const sections = ['uncraftingTable', 'limitation', 'compatibility'];

let observer;

onMounted(() => {
    const options = {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: 0,
    };

    observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeSection.value = entry.target.id;
            }
        });
    }, options);

    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
});

onBeforeUnmount(() => {
    if (observer) observer.disconnect();
});
</script>