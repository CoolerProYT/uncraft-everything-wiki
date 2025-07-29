<template>
    <div class="w-full flex">
        <div class="md:w-10/12 px-3">
            <div class="w-full py-5 scroll-mt-18" id="perItemExpConfig">
                <span class="text-4xl font-bold">Per Item Exp Config</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        This page provides information about the per item experience configuration in the mod. It allows you to customize the experience points/levels that will be consumed when uncrafting.
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        The config file can be found in <code class="bg-gray-800 text-gray-200 px-1 rounded">config/uncrafteverything-exp.json</code> or in Uncrafting Table Screen/GUI if you have OP level 4 or in Creative Mode.
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                        <div>
                            <img :src="configLoc" alt="Config Loc" />
                        </div>
                        <div>
                            <p>
                                The config can be access by clicking on the xp bottle icon in the Uncrafting Table GUI.
                            </p>
                            <img :src="gui" alt="GUI"/>
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18" id="format">
                    <span class="text-3xl font-bold">Format</span>
                    <div>
                        <div class="mt-4">
                            <p class="text-lg text-gray-300 mt-4">
                                Per Item Exp Config use json key-value pair format. The key is the item format and the value is the experience points/levels that will be consumed when uncrafting.
                            </p>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is the format of the key:
                            </p>
                            <UniversalTable :datas="restrictions" />
                        </div>
                        <div class="mt-4">
                            <p class="text-lg text-gray-300 mt-4">
                                For the value, you can use any positive integer value that you want. The value will be the experience points/levels depending on the experience type config in <router-link to="/CommonConfig#experience" class="text-blue-400 hover:underline">Common Config</router-link>.
                            </p>
                            <UniversalTable :datas="experiences" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18" id="example">
                    <span class="text-3xl font-bold">Example</span>
                    <div>
                        <div class="mt-4">
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of the per item experience config:
                            </p>
                        </div>
                        <div class="mt-4">
                            <MarkdownRenderer :source="perItemExpConfig" language="json" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="perItemExpConfig" name="Per Item Exp Config" :active-section="activeSection" />
                <AnchorLink id="format" name="Format" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="example" name="Example" :active-section="activeSection" :is-sub="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AnchorLink from "@/components/AnchorLink.vue";
import configLoc from "@/assets/img/exp_config.png";
import gui from "@/assets/img/gui.png";
import UniversalTable from "@/components/UniversalTable.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";

const activeSection = ref(null);

const sections = ['perItemExpConfig', 'format', 'example'];

const restrictions = [
    { format: "minecraft:oak_log", description: "It will select oak log from minecraft." },
    { format: "minecraft:oak*", description: "It will select any item that starts with 'oak' under minecraft namespace." },
    { format: "minecraft:*_log", description: "It will select item that end with '_log' under minecraft namespace." },
    { format: "minecraft:*", description: "It will select all item that is under minecraft namespace." },
    { format: "minecraft:green_*_glass", description: "It will select item that start with 'green_' and end with '_glass' under minecraft namespace." },
    { format: "#minecraft:planks", description: "It will select all item under this item tag." },
];
const experiences = [
    { format: "1", description: "It can be any positive numbers." },
];

const perItemExpConfig = `{
  "minecraft:crafting_table": 2,
  "minecraft:*": 3,
  "minecraft:*_glass": 4,
  "minecraft:black_*": 1,
  "minecraft:green_*_glass": 0,
  "#minecraft:planks": 8
}
`;

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