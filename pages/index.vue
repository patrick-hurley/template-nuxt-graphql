<template>
    <div class="container">
        <h1>Lyric Blog</h1>
        <div class="sections">
            <div v-if="articles" class="group">
                <div
                    v-for="article in articles"
                    :key="article.id"
                    class="section"
                >
                    <NuxtLink
                        :to="{
                            path: 'article/' + article.slug + '/' + article.id,
                            query: { id: article.id },
                        }"
                        >{{ article.title }}
                    </NuxtLink>

                    <p class="date">{{ article.date }}</p>

                    <p class="description">{{ article.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { allArticlesQuery } from '~/graphql/queries'
export default {
    data() {
        return {
            articles: [],
        }
    },
    apollo: {
        articles: {
            query: allArticlesQuery,
        },
    },
}
</script>

<style>
h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 70px;
    margin-bottom: 30px;
}
.container {
    max-width: 900px;
    margin: 50px auto;
}

.section {
    padding: 30px 0;
    border-bottom: 1px solid #c9c9c9;
}

.section a {
    color: #07bd95;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    float: left;
    overflow: auto;
    display: block;
    margin: 10px 0;
}
.date {
    float: right;
    font-size: 20px;
    color: #a1a1a1;
    font-weight: bold;
    margin-top: 15px;
}

.description {
    clear: left;
    font-size: 20px;
}
</style>
