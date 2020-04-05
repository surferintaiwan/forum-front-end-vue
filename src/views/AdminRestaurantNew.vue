<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm v-on:after-submit="handleAfterSubmit" v-bind:is-processing="isProcessing" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm'
import adminAPI from '../apis/admin'
import {Toast} from '../utils/helpers'

export default {
    data: function() {
        return {
            isProcessing: false
        }
    },
    components: {
        AdminRestaurantForm
    },
    methods: {
        async handleAfterSubmit(formData) {
            try {
                this.isProcessing = true
                const response = await adminAPI.restaurants.create({formData})
                console.log(response)
                const {statusText} = response
                if (statusText !== 'OK') {
                    throw new Error(statusText)
                }
                // 成功的話就轉址
                this.$router.push({name: 'admin-restaurants'})
            } catch(error) {
                Toast.fire({
                    type: 'error',
                    title: '無法建立餐廳，請稍後再試'
                })
                this.isProcessing = false
                console.log(error)
            }
        }
    }
}
</script>