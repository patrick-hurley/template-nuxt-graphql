<template>
    <div class="container container-item">
        <h1>{{ article.title }}</h1>

        <p class="item-date">{{ article.date }}</p>

        <p class="item-description">{{ article.description }}</p>

        <NuxtLink to="/">Back to home</NuxtLink>
    </div>
</template>

<script>
// import { gql } from 'nuxt-graphql-request'
import gql from 'graphql-tag'
import { singleArticleQuery } from '~/graphql/queries.js'

export default {
    async asyncData({ app, params }) {
        const { data } = await app.apolloProvider.defaultClient.query({
            query: singleArticleQuery,
            variables: {
                id: params.slug,
            },
        })
        return {
            article: data.article,
        }
    },
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
