import { defineConfig } from "vitepress";

export default defineConfig({
    head: [
        [
            'link',
            { rel: 'icon', href: '/image/logo.png' }
        ]
    ],
    lastUpdated: true,
    themeConfig: {
        logo: "/image/logo.png",
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path'
        },
        nav: [
            { text: 'Guide', link: '/guide/index.md' },
            {
                text: 'Dropdown Menu',
                items: [
                    {
                        // Title for the section.
                        text: 'Section A Title',
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' }
                        ]
                    }
                ]
            },
            {
                text: 'Dropdown Menu',
                items: [
                    {
                        // You may also omit the title.
                        items: [
                            { text: 'Section A Item A', link: '...' },
                            { text: 'Section B Item B', link: '...' }
                        ]
                    }
                ]
            }
        ],
        sidebar: {
            // This sidebar gets displayed when a user
            // is on `guide` directory.
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Index', link: './guide/' },
                        { text: 'One', link: '/guide/one' },
                        { text: 'Two', link: '/guide/two' }
                    ]
                }
            ],

            // This sidebar gets displayed when a user
            // is on `config` directory.
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        { text: 'Index', link: '/config/' },
                        { text: 'Three', link: '/config/three' },
                        { text: 'Four', link: '/config/four' }
                    ]
                }
            ]
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        algolia: {
            appId: '...',
            apiKey: '...',
            indexName: '...'
        },
        carbonAds: {
            code: 'your-carbon-code',
            placement: 'your-carbon-placement'
        }
    }
})