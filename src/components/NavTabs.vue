<template>
    <ul class="nav nav-tabs mb-4">
        <li v-for="tab in tabs" v-bind:key="tab.id" li class="nav-item">
            <router-link v-bind:to="tab.path" class="nav-link">{{tab.title}}</router-link>
        </li>
    </ul>
</template>

<script>
import uuid from 'uuid/v4'
export default {
    name: 'NavTabs',
    data: function() {
        return {
            tabs: [
                 {
                    id: uuid(),
                    title: '首頁',
                    path: '/restaurants'
                },
                {
                    id: uuid(),
                    title: '最新動態',
                    path: '/restaurants/feeds'
                },
                {
                    id: uuid(),
                    title: 'Top 10 人氣餐廳',
                    path: '/restaurants/top'
                },
                {
                    id: uuid(),
                    title: '美食達人',
                    path: '/users/top'
                },
            ]
        }
    }
}
</script>