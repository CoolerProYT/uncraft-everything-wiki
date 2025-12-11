import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "Uncraft Everything Wiki",
    description: "Wiki for Minecraft Mod - Uncraft Everything",
    themeConfig: {
        nav: [
            {component: 'VersionSwitcher'}
        ],
        sidebar: [
            {
                text: 'Mod Information',
                items: [
                    {text: 'Getting Started', link: '/v2.x.x/getting-started'},
                    {text: 'Uncrafting Table', link: '/v2.x.x/uncrafting-table'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/CoolerProYT/UncraftEverything'},
            {icon: 'discord', link: 'http://discord.gg/hvFfqsqQm8'}
        ]
    }
})
