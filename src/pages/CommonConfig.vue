<template>
    <div class="w-full flex">
        <div class="md:w-10/12 px-3">
            <div class="w-full py-5 scroll-mt-18" id="commonConfig">
                <span class="text-4xl font-bold">Common Config</span>
                <div>
                    <p class="text-lg text-gray-300 mt-4">
                        This page provides information about the common configuration settings that can be used in the mod.
                    </p>
                    <p class="text-lg text-gray-300 mt-4">
                        The config file can be found in <code class="bg-gray-800 text-gray-200 px-1 rounded">config/uncrafteverything-common.toml</code> or in Uncrafting Table Screen/GUI if you have OP level 4 or in Creative Mode.
                    </p>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-4">
                        <div>
                            <img :src="configLoc" alt="Config Loc" />
                        </div>
                        <div>
                            <p>
                                The config can be access by clicking on the gear icon in the Uncrafting Table GUI.
                            </p>
                            <img :src="gui" alt="GUI"/>
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18 border-b border-gray-500 pb-4" id="restrictions">
                    <span class="text-3xl font-bold">Restrictions</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define which items can be uncrafted or crafted using the Uncrafting Table.
                            You can set a restriction type and specify a list of items that are either blacklisted or whitelisted.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Restriction Type</span>
                            <p class="text-lg text-gray-300 mt-4">
                                There are two types of restrictions:
                            </p>
                            <UniversalTable :datas="restrictionTypes" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Restriction Lists</span>
                            <p class="text-lg text-gray-300 mt-4">
                                You can define a list of items that are either blacklisted or whitelisted. The format for the items can be:
                            </p>
                            <UniversalTable :datas="restrictions" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up restrictions in the config file:
                            </p>
                            <MarkdownRenderer :source="restrictionSection" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18 border-b border-gray-500 pb-4" id="allowEnchanted">
                    <span class="text-3xl font-bold">Allow Enchanted Items</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define whether enchanted items can be uncrafted using the Uncrafting Table.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Allow Enchanted Items</span>
                            <p class="text-lg text-gray-300 mt-4">
                                It only accept two values:
                            </p>
                            <UniversalTable :datas="allowEnchanted" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up the allow enchanted items in the config file:
                            </p>
                            <MarkdownRenderer :source="allowEnchantedSection" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18 border-b border-gray-500 pb-4" id="experience">
                    <span class="text-3xl font-bold">Experience</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define the experience settings for the Uncrafting Table, if you want to set different experience for different items, use <router-link class="text-blue-500 hover:underline" to="/PerItemExpConfig">Per Item Exp Config</router-link>.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Experience Type</span>
                            <p class="text-lg text-gray-300 mt-4">
                                There are two types of experience:
                            </p>
                            <UniversalTable :datas="experienceTypes" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Restriction Lists</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Amount of experience when uncrafting, LEVEL/POINT will be deducted depending on the experience type.
                            </p>
                            <UniversalTable :datas="experiences" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up experience in the config file:
                            </p>
                            <MarkdownRenderer :source="experienceSection" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18 border-b border-gray-500 pb-4" id="allowUnSmithing">
                    <span class="text-3xl font-bold">Allow UnSmithing</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define whether items obtained by smithing (Trimmed Armor/Netherite Armor) can be uncrafted using the Uncrafting Table.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Allow UnSmithing</span>
                            <p class="text-lg text-gray-300 mt-4">
                                It only accept two values:
                            </p>
                            <UniversalTable :datas="allowUnSmithing" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up the allow unsmithing in the config file:
                            </p>
                            <MarkdownRenderer :source="allowUnSmithingSection" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18 border-b border-gray-500 pb-4" id="allowDamaged">
                    <span class="text-3xl font-bold">Allow Damaged</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define whether damaged items can be uncrafted using the Uncrafting Table. The output of the main ingredient (the repair item) will be deducted based on the durability of the item being uncrafted.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Allow Damaged</span>
                            <p class="text-lg text-gray-300 mt-4">
                                It only accept two values:
                            </p>
                            <UniversalTable :datas="allowDamaged" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up the allow damaged in the config file:
                            </p>
                            <MarkdownRenderer :source="allowDamagedSection" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18" id="preventModdedIngredients">
                    <span class="text-3xl font-bold">Prevent Modded Ingredients From Vanilla Items</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define whether vanilla items that can be crafted with modded ingredients should prevent recipe that are using modded ingredients from being uncrafted.
                        </p>
                        <p class="text-lg text-gray-300 mt-4 italic">
                            Note: This helps avoid potential duplication or unintended outputs caused by modded recipes for vanilla items.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Prevent Modded Ingredients From Vanilla Items</span>
                            <p class="text-lg text-gray-300 mt-4">
                                It only accept two values:
                            </p>
                            <UniversalTable :datas="preventModdedIngredients" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up the prevent modded ingredients from vanilla items in the config file:
                            </p>
                            <MarkdownRenderer :source="preventModdedIngredientsSection" />
                        </div>
                    </div>
                </div>
                <div class="mt-4 scroll-mt-18" id="restrictedModIngredients">
                    <span class="text-3xl font-bold">Restricted Mod Ingredients</span>
                    <div>
                        <p class="text-lg text-gray-300 mt-4">
                            The restrictions section allows you to define items from which mod ingredients should not be used when uncrafting.
                        </p>
                        <p class="text-lg text-gray-300 mt-4">
                            <code class="bg-gray-800 text-gray-200 px-1 rounded">productivetrees</code> and <code class="bg-gray-800 text-gray-200 px-1 rounded">chipped</code> are restricted by default.
                        </p>
                        <p class="text-lg text-gray-300 mt-4 italic">
                            Note: This helps avoid potential issues such as "packet failed to send" errors caused by excessive recipe combinations, and also prevents possible exploits.
                        </p>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Restricted Mod Ingredients</span>
                            <p class="text-lg text-gray-300 mt-4">
                                It accept a list of mod id, <code class="bg-gray-800 text-gray-200 px-1 rounded">minecraft</code> is not accepted, only mod id that is not vanilla.
                            </p>
                            <UniversalTable :datas="restrictedModIngredients" />
                        </div>
                        <div class="mt-4">
                            <span class="text-2xl font-bold">Example</span>
                            <p class="text-lg text-gray-300 mt-4">
                                Here is an example of how to set up the restricted mod items in the config file:
                            </p>
                            <MarkdownRenderer :source="restrictedModIngredientsSection" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-2/12 border-l border-gray-700 px-3 h-fit mt-5 py-3 sticky top-25 hidden md:block">
            <div>
                <AnchorLink id="commonConfig" name="Common Config" :active-section="activeSection" />
                <AnchorLink id="restrictions" name="Restrictions" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="allowEnchanted" name="Allow Enchanted Items" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="experience" name="Experience" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="allowUnSmithing" name="Allow UnSmithing" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="allowDamaged" name="Allow Damaged" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="preventModdedIngredients" name="Prevent Modded Ingredients From Vanilla Items" :active-section="activeSection" :is-sub="true" />
                <AnchorLink id="restrictedModIngredients" name="Restricted Mod Ingredients" :active-section="activeSection" :is-sub="true" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import AnchorLink from "@/components/AnchorLink.vue";
import MarkdownRenderer from "@/components/MarkdownRenderer.vue";
import configLoc from "@/assets/img/config_loc.png";
import gui from "@/assets/img/gui.png";
import UniversalTable from "@/components/UniversalTable.vue";

const activeSection = ref(null);

const sections = ['commonConfig', 'restrictions', 'allowEnchanted', 'experience', 'allowUnSmithing', 'allowDamaged', 'preventModdedIngredients', 'restrictedModIngredients'];

const restrictionTypes = [
    { restriction_type: 'BLACKLIST', description: 'Item defined in restrictions will not be able to uncraft.' },
    { restriction_type: 'WHITELIST', description: 'Only item defined in restrictions will be able to uncraft.' }
];

const restrictions = [
    { format: "minecraft:oak_log", description: "It will select oak log from minecraft." },
    { format: "minecraft:oak*", description: "It will select any item that starts with 'oak' under minecraft namespace." },
    { format: "minecraft:*_log", description: "It will select item that end with '_log' under minecraft namespace." },
    { format: "minecraft:*", description: "It will select all item that is under minecraft namespace." },
    { format: "minecraft:green_*_glass", description: "It will select item that start with 'green_' and end with '_glass' under minecraft namespace." },
    { format: "#minecraft:planks", description: "It will select all item under this item tag." },
];

const allowEnchanted = [
    { allow_enchanted: 'true', description: 'Allow enchanted items to be uncrafted.' },
    { allow_enchanted: 'false', description: 'Disallow enchanted items to be uncrafted.' }
];

const experienceTypes = [
    { experience_type: 'LEVEL', description: 'Use experience level to uncraft.' },
    { experience_type: 'POINT', description: 'Use experience points to uncraft.' },
];

const experiences = [
    { format: "1", description: "It can be any positive numbers." },
];

const allowUnSmithing = [
    { allow_un_smithing: 'true', description: 'Allow items obtained by smithing to be uncrafted.' },
    { allow_un_smithing: 'false', description: 'Disallow items obtained by smithing to be uncrafted.' }
];

const allowDamaged = [
    { allow_damaged: 'true', description: 'Allow damaged items to be uncrafted.' },
    { allow_damaged: 'false', description: 'Disallow damaged items to be uncrafted.' }
];

const preventModdedIngredients = [
    { prevent_modded_ingredients: 'true', description: 'Prevent modded recipes with modded ingredients from being outputted when uncrafting vanilla items.' },
    { prevent_modded_ingredients: 'false', description: 'Allow modded recipes with modded ingredients from being outputted when uncrafting vanilla items.' }
];

const restrictedModIngredients = [
    { format: 'productivetrees', description: 'All items from productivetrees will no longer able to be selected when uncrafting.' },
    { format: 'chipped', description: 'All items from chipped will no longer able to be selected when uncrafting.' },
];

const restrictionSection = `# Press F3 + h in game and hover over item to check their modid:name
[Restrictions]
\trestrictionType = "BLACKLIST"
\trestrictions = ["minecraft:dirt", "minecraft:oak*"]
# Ofcourse, \`_\` is not strictly required before or after \`*\`, any combination of \`modid:item_name\` can be accepted as long as \`:\` separator is there
`;

const allowEnchantedSection = `[AllowEnchantedItems]
\tallowEnchantedItems = true
`;

const experienceSection = `[Experience]
\texperienceType = "POINT"
\texperiences = 1
`;

const allowUnSmithingSection = `[AllowUnSmithing]
\tallowUnSmithing = true
`;

const allowDamagedSection = `[AllowDamaged]
\tallowDamaged = false
`;

const preventModdedIngredientsSection = `[PreventModdedIngredientsFromVanillaItems]
\tpreventModdedIngredientsFromVanillaItems = true
`;

const restrictedModIngredientsSection = `[RestrictedModIngredients]
\trestrictedModIngredients = ["productivetrees", "chipped"]`;

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