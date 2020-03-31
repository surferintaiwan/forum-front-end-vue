<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm v-on:after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm'
export default {
    components: {
        AdminRestaurantForm
    },
    methods: {
        handleAfterSubmit(formData) {
            // 透過API將表單資料送到伺服器
            for (let [key, value] of formData.entries()) {
                console.log(key + ':', value)
            }
        }
    }
}
</script>