# Getting Started

This page provide basic informations for Uncraft Everything.

## Installation

Uncraft Everything can be downloaded on CurseForge and Modrinth.

| Platform   |                                            Link                                             |
|------------|:-------------------------------------------------------------------------------------------:|
| CurseForge | [Download from CurseForge](https://www.curseforge.com/minecraft/mc-mods/uncraft-everything) |
| Modrinth   |            [Download from Modrinth](https://modrinth.com/mod/uncraft-everything)            |

## Supported Versions

A list of version that support v2.0.0+

| Mod Loader              | Minecraft Version |
|-------------------------|:-----------------:|
| NeoForge, Fabric, Forge |      1.21.11      |

::: info
`1.20.1` and `1.21.1` wil be ported to `v2.0.0` once it is stable
:::

## What's new in v2.x.x
::: details 2.0.0
#### Addition
- Added Auto Uncrafting Table
- Added new commands to open config screen
- Added new Client Config
- Added new function to auto move output stacks to player inventory when uncraft button clicked (Not applicable to Auto Uncrafting Table, can be toggle in Client Config)

#### Changes
- Removed Black Box and Status Text from Uncrafting Table GUI, replaced with input slot color overlay and tooltip to show status of the input stack
- Replaced `Experience Required` text in Uncrafting Table GUI with better design
- Uncrafting output is no longer Shaped, it will stack all same items together instead of follow original crafting shape
- Changed exp deduction calculation for uncrafting to prevent unfair if uncrafting require Level instead of Points, new calculation should be same as how Anvil works

#### Fixes
- Fixed missing filter for DataComponent/NBT based items
:::