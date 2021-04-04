export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    fallback: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'frontend',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/apollo',
        'nuxt-graphql-request',
    ],

    graphql: {
        /**
         * An Object of your GraphQL clients
         */
        clients: {
            default: {
                /**
                 * The client endpoint url
                 */
                endpoint: 'http://localhost:1337/graphql',
                /**
                 * Per-client options overrides
                 * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
                 */
                options: {},
            },
            secondClient: {
                // ...client config
            },
            // ...your other clients
        },

        /**
         * Options
         * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
         */
        options: {},
    },

    apollo: {
        clientConfigs: {
            default: '~/graphql/config.js',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
}
