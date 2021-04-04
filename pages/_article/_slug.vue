<template>
    <div class="container container-item">
        <h1>{{ article.title }}</h1>

        <p class="item-date">{{ article.date }}</p>

        <p class="item-description">{{ article.description }}</p>

        <NuxtLink to="/">Back to home</NuxtLink>
    </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request'

export default {
    // // using params
    // async asyncData({ $graphql, params }) {
    //     const query = gql`
    //         query singleArticleQuery($id: ID!) {
    //             article(id: $id) {
    //                 id
    //                 title
    //                 date
    //                 body
    //                 description
    //                 slug
    //             }
    //         }
    //     `
    //     const variables = { id: params.slug }
    //     const article = await $graphql.default.request(query, variables)
    //     return article
    // },
    async asyncData({ $graphql, route }) {
        const query = gql`
            query singleArticleQuery($id: ID!) {
                article(id: $id) {
                    id
                    title
                    date
                    body
                    description
                    slug
                }
            }
        `
        const variables = { id: route.query.id }
        const article = await $graphql.default.request(query, variables)
        return article
    },
    // apollo: {
    //     article: {
    //         query: gql`
    //             query singleArticleQuery($id: ID!) {
    //                 article(id: $id) {
    //                     id
    //                     title
    //                     date
    //                     body
    //                     description
    //                     slug
    //                 }
    //             }
    //         `,
    //         variables() {
    //             return {
    //                 id: this.$route.query.id,
    //             }
    //         },
    //     },
    // },
}
</script>

<style>
.center {
    text-align: center;
}

.container-item {
    text-align: center;
}
.container-item p {
    font-size: 30px;
    margin-bottom: 30px;
}
.container-item p.item-date {
    font-size: 20px;
    color: #a1a1a1;
}

.container-item a {
    display: inline-block;
    margin-top: 50px;
    padding: 15px 30px;
    border: 1px solid #07bd95;
    text-decoration: none;
    color: #07bd95;
    font-size: 20px;
    box-shadow: 2px 2px #eee;
}
</style>
