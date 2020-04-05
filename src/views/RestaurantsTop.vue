<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />

    <div
      v-for="restaurant in restaurants"
      v-bind:key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <router-link v-bind:to="{name: 'restaurant', params: {id: restaurant.id}}">
            <img class="card-img" v-bind:src="restaurant.image" />
          </router-link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{restaurant.name}}</h5>
            <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
            <p class="card-text">{{restaurant.description}}</p>
            <router-link
              v-bind:to="{name: 'restaurant', params: {id: restaurant.id}}"
              class="btn btn-primary mr-2"
            >Show</router-link>
            <button
              v-if="restaurant.isFavorited"
              v-on:click.stop.prevent="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >移除最愛</button>
            <button
              v-else
              v-on:click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >加到最愛</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import restaurantsAPI from "../apis/restaurants";
import { Toast } from "../utils/helpers";
import usersAPI from "../apis/users";

export default {
  name: "RestaurantsTop",
  data: function() {
    return {
      restaurants: []
    };
  },
  components: {
    NavTabs
  },
  created: function() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const response = await restaurantsAPI.getRestaurantsTop();
        const { data, statusText } = response;
        console.log(data);
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        this.restaurants = data.restaurants;
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法獲取資料"
        });
        console.log(error);
      }
    },
    async addFavorite(restaurantId) {
      try {
        const response = await usersAPI.addFavorite({ restaurantId });
        const { statusText } = response;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }
        // 如果有response回來，就對restaurants資料一個一個拿出來比對，找到要的那一個把isFavorited塞回去渲染
        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id === restaurantId) {
            
            return {
              ...restaurant,
              isFavorited: true,
              FavoriteCount: restaurant.FavoriteCount + 1
            };
          }
          return restaurant;
        });
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法加入最愛"
        });
        console.log(error);
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const response = await usersAPI.deleteFavorite({restaurantId});
        const { statusText } = response;
        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.restaurants = this.restaurants.map(restaurant => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              isFavorited: false,
              FavoriteCount: restaurant.FavoriteCount - 1
            }
          }
          return restaurant;
        });
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法刪除最愛"
        });
        console.log(error);
      }
    }
  }
};
</script>