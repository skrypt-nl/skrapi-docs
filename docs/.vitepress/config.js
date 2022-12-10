export default {
    title: 'Skrapi',
    description: 'Laravel API boilerplate',
    appearance: 'dark',
    cleanUrls: 'with-subfolders',
    scrollOffset: 96,

    themeConfig: {
        logo: {
            light: '/skrapi-logo.svg',
            dark: '/skrapi-logo-white.svg'
        },
        logomark: {
            light: '/skrapi-logomark.svg',
            dark: '/skrapi-logomark-white.svg'
        },
        sidebar: [
            {
                title: 'Introduction',
                links: [
                    { title: 'Getting Started', href: '/' },
                    { title: 'Installation', href: '/installation' },
                ],
            },
            // {
            //     title: 'Authentication',
            //     links: [
            //         { title: 'Laravel Passport', href: '/auth/passport' },
            //         { title: 'Roles & permissions', href: '/auth/roles-permissions' },
            //         { title: 'Creating users', href: '/auth/creating-users' },
            //     ],
            // },
            // {
            //     title: 'Models & Controllers',
            //     links: [
            //         { title: 'Laravel Orion', href: '/models-controllers/orion' },
            //     ],
            // },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/skrypt-nl/skrapi' },
        ]
    }
}
