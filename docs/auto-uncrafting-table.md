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

## Known Issues
As of `v2.0.0`, a beta version, there is several known issues that is not fixed due to no solution are found yet.

::: info Known Bugs
- If the selected recipe is not the first one, it will always select the first recipe once when it starts to uncraft.
- When a player is opening the GUI with active redstone signal and inserted input stack, it will always use the first recipe instead of the selected one. (NeoForge)
:::