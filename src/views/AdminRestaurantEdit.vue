<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleAfterSubmit" v-bind:initial-restaurant="restaurant" v-bind:is-processing="isProcessing"/>
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
import adminAPI from '../apis/admin'
import {Toast} from '../utils/helpers'

export default {
  data: function() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: ""
      },
      isProcessing: false
    };
  },
  created: function() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  components: {
    AdminRestaurantForm
  },
  beforeRouteUpdate: function(to, from, next) {
    const {id} = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const response = await adminAPI.restaurants.update({restaurantId: this.restaurant.id, formData})
        console.log(response)
        const {statusText} = response
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.$router.push({name: 'admin-restaurants'})
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          type: 'error',
          title: '資料更新失敗'
        })
        console.log(error)
      }
      
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const response = await adminAPI.restaurants.getDetail({restaurantId})
        const {data, statusText} = response
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        const restaurant = data.restaurant
        this.restaurant = {
          id: restaurant.id,
          name: restaurant.name,
          categoryId: restaurant.CategoryId,
          tel: restaurant.tel,
          address: restaurant.address,
          description: restaurant.description,
          image: restaurant.image,
          openingHours: restaurant.opening_hours
        }
      } catch(error) {
        Toast.fire({
          type: 'error',
          title: '無法取得餐廳資料'
        })
        console.log(error)
      }
    }
  }
};
</script>