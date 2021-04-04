import { onError } from 'apollo-link-error'

export default function () {
    const link = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
                console.log(
                    `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                )
            )
        if (networkError) console.log(`[Network error]: ${networkError}`)
    })
    return {
        link: link,
        // required
        httpEndpoint:
            process.env.BACKEND_URL || 'http://localhost:1337/graphql',

        httpLinkOptions: {
            credentials: 'same-origin',
        },
    }
}
