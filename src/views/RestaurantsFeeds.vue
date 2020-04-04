<template>
  <div class="container py-5">
    <NavTabs/>
    <h1 class="mt-5">
      最新動態
    </h1>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <NewestRestaurants v-bind:restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <h3>最新評論</h3>
        <NewestComments v-bind:comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import NewestRestaurants from '../components/NewestRestaurants'
import NewestComments from '../components/NewestComments'
import restaurantsAPI from '../apis/restaurants'
import {Toast} from '../utils/helpers'

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data: function() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created: function() {
    this.fetchFeeds()
  }
  ,
  methods: {
    async fetchFeeds() {
      try {
        const response = await restaurantsAPI.getRestaurantsFeeds()
        console.log(response)
        const {data, statusText} = response
        if (statusText !== 'OK') {
            throw new Error(statusText)
        }
        this.restaurants = data.restaurants
        this.comments = data.comments
      } catch(error) {
          Toast.fire({
              type: 'error',
              title: '無法取得餐廳資料'
          })
          console.log('error', error)
      }
    }
  }
}
</script>