import {defineConfig} from 'vitepress'

export default defineConfig({
    head: [['link', { rel: 'icon', href: '/textures/uncrafting_table.png' }]],
    title: "Uncraft Everything Wiki",
    description: "Wiki for Minecraft Mod - Uncraft Everything",
    lastUpdated: true,
    themeConfig: {
        nav: [
            {component: 'VersionSwitcher'}
        ],
        sidebar: {
            '/': [
                {
                    text: 'Mod Information',
                    items: [
                        {text: 'Getting Started', link: '/getting-started'},
                        {text: 'Uncrafting Table', link: '/uncrafting-table'},
                        {text: 'Auto Uncrafting Table', link: '/auto-uncrafting-table'}
                    ]
                },
                {
                    text: "Configurations",
                    items: [
                        {text: 'Client Config', link: '/client-config'},
                        {text: 'Common Config', link: '/common-config'},
                        {text: 'Per Item Exp Config', link: '/per-item-exp-config'},
                        {text: 'FTB Quest Progression Config', link: '/ftb-quest-progression-config'},
                    ]
                }
            ],
            '/v1.8.2/': [
                {
                    text: 'Mod Information',
                    items: [
                        {text: 'Getting Started', link: '/v1.8.2/getting-started'},
                        {text: 'Uncrafting Table', link: '/v1.8.2/uncrafting-table'}
                    ]
                },
                {
                    text: "Configurations",
                    items: [
                        {text: 'Common Config', link: '/v1.8.2/common-config'},
                        {text: 'Per Item Exp Config', link: '/v1.8.2/per-item-exp-config'},
                        {text: 'FTB Quest Progression Config', link: '/v1.8.2/ftb-quest-progression-config'},
                    ]
                }
            ],
            '/v1.x.x/': [
                {
                    text: 'Mod Information',
                    items: [
                        {text: 'Getting Started', link: '/v1.x.x/getting-started'},
                        {text: 'Uncrafting Table', link: '/v1.x.x/uncrafting-table'}
                    ]
                },
                {
                    text: "Configurations",
                    items: [
                        {text: 'Common Config', link: '/v1.x.x/common-config'},
                        {text: 'Per Item Exp Config', link: '/v1.x.x/per-item-exp-config'},
                        {text: 'FTB Quest Progression Config', link: '/v1.x.x/ftb-quest-progression-config'},
                    ]
                }
            ]
        },
        socialLinks: [
            {icon: {svg: '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M4 19v-9q0-.475.213-.9t.587-.7l6-4.5q.525-.4 1.2-.4t1.2.4l6 4.5q.375.275.588.7T20 10v9q0 .825-.588 1.413T18 21h-3q-.425 0-.712-.288T14 20v-5q0-.425-.288-.712T13 14h-2q-.425 0-.712.288T10 15v5q0 .425-.288.713T9 21H6q-.825 0-1.412-.587T4 19"/></svg>'}, link: 'https://coolerpromc.com/'},
            {icon: 'github', link: 'https://github.com/CoolerProYT/UncraftEverything'},
            {icon: 'discord', link: 'http://discord.gg/hvFfqsqQm8'}
        ],
        search: {
            provider: 'local'
        },
        cleanUrls: true
    }
})
