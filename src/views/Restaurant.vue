<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr>
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 5,
        "name": "Mitchel Beatty",
        "tel": "171-324-8413",
        "address": "85408 Francisca Square",
        "opening_hours": "08:00",
        "description": "Aut cumque excepturi exercitationem libero voluptates impedit. Enim animi repellendus tempora doloremque. Esse in delectus sequi ullam sed animi.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794",
        "viewCounts": 93,
        "createdAt": "2020-02-28T14:38:32.000Z",
        "updatedAt": "2020-03-29T02:05:28.793Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-02-28T14:38:32.000Z"
        },
        "FavoritedUsers": [
            {
                "id": 92,
                "name": "asdasd",
                "email": "asdasd@asdasd.asdasd",
                "password": "$2a$10$J4Z/hkxNtpZYM0mj/eCaM.bBRTtTC4yOwISf4d..ia9sdB0ym/9yO",
                "isAdmin": false,
                "image": null,
                "createdAt": "2020-03-08T17:38:03.000Z",
                "updatedAt": "2020-03-08T17:38:03.000Z",
                "Favorite": {
                    "UserId": 92,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-09T06:09:07.000Z",
                    "updatedAt": "2020-03-09T06:09:07.000Z"
                }
            },
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
                "isAdmin": false,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-05T12:30:53.000Z",
                "Favorite": {
                    "UserId": 2,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-24T16:54:40.000Z",
                    "updatedAt": "2020-03-24T16:54:40.000Z"
                }
            },
            {
                "id": 232,
                "name": "wbh",
                "email": "ReadingExchange@163.com",
                "password": "$2a$10$1h2OE3ZFUTR6Lr9bojp4ee2fxUBya/NpkwveJNxpe7h2JeFe6eb0a",
                "isAdmin": false,
                "image": null,
                "createdAt": "2020-03-25T15:53:23.000Z",
                "updatedAt": "2020-03-25T15:53:23.000Z",
                "Favorite": {
                    "UserId": 232,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-27T03:30:47.000Z",
                    "updatedAt": "2020-03-27T03:30:47.000Z"
                }
            },
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z",
                "Favorite": {
                    "UserId": 1,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-28T04:41:55.000Z",
                    "updatedAt": "2020-03-28T04:41:55.000Z"
                }
            }
        ],
        "LikedUsers": [
            {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z",
                "Like": {
                    "UserId": 1,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-24T16:47:05.000Z",
                    "updatedAt": "2020-03-24T16:47:05.000Z"
                }
            },
            {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$NyaAtgRuHx3i7hHlnb5IXOC4Uk4.q1J1iQs3op.ymdCEh7.tOwcH2",
                "isAdmin": false,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-05T12:30:53.000Z",
                "Like": {
                    "UserId": 2,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-25T06:43:22.000Z",
                    "updatedAt": "2020-03-25T06:43:22.000Z"
                }
            },
            {
                "id": 232,
                "name": "wbh",
                "email": "ReadingExchange@163.com",
                "password": "$2a$10$1h2OE3ZFUTR6Lr9bojp4ee2fxUBya/NpkwveJNxpe7h2JeFe6eb0a",
                "isAdmin": false,
                "image": null,
                "createdAt": "2020-03-25T15:53:23.000Z",
                "updatedAt": "2020-03-25T15:53:23.000Z",
                "Like": {
                    "UserId": 232,
                    "RestaurantId": 5,
                    "createdAt": "2020-03-27T03:30:48.000Z",
                    "updatedAt": "2020-03-27T03:30:48.000Z"
                }
            }
        ],
        "Comments": [
            {
                "id": 5,
                "text": "Et est asperiores eaque accusantium voluptas.",
                "UserId": 3,
                "RestaurantId": 5,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2020-02-28T14:38:32.000Z",
                    "updatedAt": "2020-03-02T16:01:50.000Z"
                }
            },
            {
                "id": 55,
                "text": "Eos facilis facere debitis nam.",
                "UserId": 3,
                "RestaurantId": 5,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$VHKmtPqbcUzK46qxLllqj.w506U2N2TObMmnpdlNG2CLZPa1xzuTi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2020-02-28T14:38:32.000Z",
                    "updatedAt": "2020-03-02T16:01:50.000Z"
                }
            },
            {
                "id": 105,
                "text": "Rerum rerum quaerat voluptatem.",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2020-02-28T14:38:32.000Z",
                    "updatedAt": "2020-03-02T17:09:40.000Z"
                }
            },
            {
                "id": 3582,
                "text": "test",
                "UserId": 1,
                "RestaurantId": 5,
                "createdAt": "2020-03-05T17:45:00.000Z",
                "updatedAt": "2020-03-05T17:45:00.000Z",
                "User": {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2020-02-28T14:38:32.000Z",
                    "updatedAt": "2020-03-02T17:09:40.000Z"
                }
            }
        ]
    },
    "isFavorited": true,
    "isLiked": true
}
export default {
    data: function() {
        return {
            restaurant: {
                id: -1,
                name: '',
                categoryName: '',
                image: '',
                openingHours: '',
                tel: '',
                address: '',
                description: '',
                isFavorited: false,
                isLiked: false
            },
            restaurantComments: []
        }
    },
    created: function() {
        const {id: restaurantId} = this.$route.params
        this.fetchRestaurant(restaurantId)
    },
    methods: {
        fetchRestaurant(restaurantId) {
            console.log('fetchRestaurant id: ', restaurantId)

            this.restaurant = {
                id: dummyData.restaurant.id,
                name: dummyData.restaurant.name,
                categoryName: dummyData.restaurant.Category.name,
                image: dummyData.restaurant.image,
                openingHours: dummyData.restaurant.opening_hours,
                tel: dummyData.restaurant.tel,
                address: dummyData.restaurant.address,
                description: dummyData.restaurant.description,
                isFavorited: dummyData.isFavorited,
                isLiked: dummyData.isLiked
            }
            this.restaurantComments = dummyData.restaurant.Comments
        }
    }
}
</script>