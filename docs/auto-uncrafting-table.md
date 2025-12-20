<script setup>
import CraftingGui from './components/CraftingGui.vue'
</script>

# Auto Uncrafting Table

Auto Uncrafting table is a block entity that automate the uncrafting process. It will perform uncrafting when redstone signal is active instead of needing player to click uncraft button. It is added in `v2.0.0`.

## Obtaining

Auto Uncrafting table can be crafted in Crafting Table.

<CraftingGui
slot_1="minecraft:iron_ingot"
slot_2="minecraft:iron_ingot"
slot_3="minecraft:iron_ingot"
slot_4="minecraft:iron_ingot"
slot_5="mod:uncrafting_table"
slot_6="minecraft:iron_ingot"
slot_7="minecraft:redstone"
slot_8="minecraft:dropper"
slot_9="minecraft:redstone"
output="mod:auto_uncrafting_table"
output_count="1"
/>