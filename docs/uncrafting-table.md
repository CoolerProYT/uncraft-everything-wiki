<script setup>
import CraftingGui from './components/CraftingGui.vue'
</script>

# Uncrafting Table

Uncrafting table is a block entity that provide ability to uncraft items.

## Obtaining

Uncrafting table can be crafted in Crafting Table.

<CraftingGui
slot_1=""
slot_2=""
slot_3=""
slot_4="minecraft:oak_planks"
slot_5="minecraft:crafting_table"
slot_6="minecraft:oak_planks"
slot_7="minecraft:oak_planks"
slot_8="minecraft:diamond"
slot_9="minecraft:oak_planks"
output="mod:uncrafting_table"
output_count="1"
/>

::: info
This recipe is not applicable to version below `v1.8.2`
:::

## Limitation

Because we cannot know what are the ingredients used to craft an item (e.g. a crafting table can be crafted with different planks), the Uncrafting Table will let player to select which type of ingredient to output instead of directly output the original used ingredients.

<img src="/limitation.png">