import {apiHelper} from '../utils/helpers'
const getToken = () => localStorage.getItem('token')

export default {
    categories: {
        get() {
            return apiHelper.get('/admin/categories', {
                headers: {Authorization: `Bearer ${getToken()}`}
            })
        }
    },
    restaurants: {
        getDetail({restaurantId}) {
            return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
                headers: {Authorization: `Bearer ${getToken()}`}
            })
        },
        create({formData}) {
            return apiHelper.post('/admin/restaurants', formData, {
                headers: {Authorization: `Bearer ${getToken()}`}
            })
        },
        update({restaurantId, formData}) {
            return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
                headers: {Authorization: `Bearer ${getToken()}`}
            })
        },
        getRestaurants() {
            return apiHelper.get('/admin/restaurants', {
                headers: {Authorization: `Bearer ${getToken()}`}
            })
        },
        deleteRestaurant({restaurantId}) {
            return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
                headers: {Authorization: `Bearer ${getToken()}`}                
            })
        }
    }
}