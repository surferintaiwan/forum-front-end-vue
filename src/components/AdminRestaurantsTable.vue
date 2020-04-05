<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">
          #
        </th>
        <th scope="col">
          Category
        </th>
        <th scope="col">
          Name
        </th>
        <th
          scope="col"
          width="300"
        >
          操作
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category && restaurant.Category.name }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link
            :to="{name: 'admin-restaurant', params: {id: restaurant.id}}"
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link 
            to=""
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button
            v-on:click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button"
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import adminAPI from '../apis/admin'
import {Toast} from '../utils/helpers'

export default {
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants () {
        try {
            const response = await adminAPI.restaurants.getRestaurants()
            const {data, statusText} = response
            if (statusText !== 'OK') {
                throw new Error(statusText)
            }
            this.restaurants = data.restaurants
        } catch(error) {
            Toast.fire({
                type: 'error',
                title: '餐廳資料讀取失敗'
            })
            console.log(error)
        }
    },
    async deleteRestaurant(restaurantId) {
        try {
            const response = await adminAPI.restaurants.deleteRestaurant({restaurantId})
            const {statusText} = response
            console.log(response)
            if (statusText !== 'OK') {
                throw new Error(statusText)
            }
            this.restaurants = this.restaurants.filter(restaurant => {
                return restaurant.id !== restaurantId
            })

        } catch(error) {
            Toast.fire({
                type: 'error',
                title: '刪除餐廳失敗'
            })
            console.log(error)
        }
        this.restaurants = this.restaurants.filter(restaurant => {
            return restaurant.id !== restaurantId
        })
    }
  }
}
</script>