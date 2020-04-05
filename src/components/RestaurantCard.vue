<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        v-bind:src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <a href="#">
            {{restaurant.name}}
          </a>
        </p>
        <span class="badge badge-secondary">{{restaurant.Category.name}}</span>
        <p class="card-text text-truncate">
          {{restaurant.description}}
        </p>
      </div>
      <div class="card-footer">
        <button 
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-on:click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-on:click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          v-on:click.stop.prevent="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          v-on:click.stop.prevent="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'
export default {
    props: {
        initialRestaurant: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            restaurant: this.initialRestaurant
        }
    },
    methods: {
      async addFavorite(restaurantId) {
        try {
          const response = await usersAPI.addFavorite({restaurantId})
          const {data, statusText} = response
          if (statusText !== 'OK' || data.status !== 'success') {
            throw new Error(statusText)
          }
          this.restaurant = {
            ...this.restaurant,
            isFavorited: true
          }
        } catch(error) {
          Toast.fire({
            type: 'error',
            title: '無法將餐廳加入最愛，請稍後再試'
          })
        }
      },
      async deleteFavorite(restaurantId) {
        try {
          const response = await usersAPI.deleteFavorite({restaurantId})
          const {data, statusText} = response     
          if (data.status !== 'success' || statusText !== 'OK') {
            throw new Error('statusText')
          }
          this.restaurant = {
            ...this.restaurant,
            isFavorited: false
          }
        } catch(error) {
          Toast.fire({
            type: 'error',
            title: '無法將餐廳從最愛移除，請稍後再試'
          })
          console.log(error)
        }
      },
      async addLike(restaurantId) {
        try {
          const response = await usersAPI.addLike({restaurantId})
          const {data, statusText} = response
          if (data.status !== 'success' || statusText !== 'OK') {
            throw new Error(statusText)
          }
          this.restaurant = {
            ...this.restaurant,
            isLiked: true
          }
        } catch(error) {
          Toast.fire({
            type: 'error',
            title: '無法將餐廳加入Like，請稍後再試'
          })
          console.log(error)
        }
      },
      async deleteLike(restaurantId) {
        try {
          const response = await usersAPI.deleteLike({restaurantId})
          const {data, statusText} = response
          if (data.status !== 'success' || statusText !== 'OK') {
            throw new Error(statusText)
          }
          this.restaurant = {
            ...this.restaurant,
            isLiked: false
          }
        } catch(error) {
          Toast.fire({
            type: 'error',
            title: '無法將餐廳從Like移除，請稍後再試'
          })
          console.log(error)
        }
        
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      }
    }
}
</script>