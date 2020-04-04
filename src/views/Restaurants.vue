<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills v-bind:categories="categories" />
    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        v-bind:key="restaurant.id"
        v-bind:initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-bind:category-id="categoryId"
      v-bind:current-page="currentPage"
      v-bind:total-page="totalPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantsPagination from "../components/RestaurantsPagination";
import restaurantsAPI from "../apis/restaurants";
import {Toast} from '../utils/helpers'

export default {
  name: "Restaurants",
  data: function() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1
    };
  },
  created: function() {
    // created會在首次進入/restaurants時執行
    // 如果確實是從/restaurants進入，我們有給了預設值，page = 1, categoryId= ''，讓他去API抓資料
    // 但如果是從其他頁面如/restaurants進入，就是透過網址列上query抓下來，接著去API要資料
    const {page , categoryId} = this.$route.query
    this.fetchRestaurants({page, categoryId});
  },
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  beforeRouteUpdate: function(to, from, next) {
      
      const {page = 1, categoryId = ''} = to.query
      this.fetchRestaurants({page, categoryId})
      next()
  },
  methods: {
    fetchRestaurants: async function({ page, categoryId }) {
      // 去API要資料
      try {
        const response = await restaurantsAPI.getRestaurants({
          page,
          categoryId
        });
        // 從API要到的資料用解構賦值拆解出來
        const {data, statusText} = response
        // 如果不是OK的，就會送錯誤訊息去給catch接住
        if (statusText !== 'OK') {
            throw new Error(statusText)
        }
        this.categories = data.categories
        this.categoryId = data.categoryId
        this.currentPage = data.page
        this.restaurants = data.restaurants
        this.totalPage = data.totalPage.length
      } catch(error) {
          Toast.fire({
              type: 'error',
              title: '無法取得餐廳資料，請稍後再試'
          })
          console.log('error', error)
      }
    }
  }
};
</script>