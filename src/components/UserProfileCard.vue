<template>
    <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img v-bind:src="profile.image" width="300px" height="300px">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title"> {{profile.name}} </h5>
                    <p class="card-text"> {{profile.email}} </p>
                    <ul class="list-unstyled list-inline">
                        <li><strong> {{profile.Comments.length}} </strong> 已評論餐廳</li>
                        <li><strong> {{profile.FavoritedRestaurants.length}} </strong> 收藏的餐廳</li>
                        <li><strong> {{profile.Followings.length}} </strong> followings (追蹤者)</li>
                        <li><strong> {{profile.Followers.length}} </strong> followers (追隨者)</li>
                    </ul>
                    <form action="/following/3?_method=DELETE" method="POST" style="display: contents;">
                        <router-link to="#" v-if="verifyEditButton" class="btn btn-primary"> Edit </router-link>
                        <template v-else>
                            <button v-if="isFollowed" v-on:click.stop.prevent="deleteFollow" type="submit" class="btn btn-danger">取消追蹤</button>
                            <button v-else v-on:click.stop.prevent="addFollow" type="submit" class="btn btn-primary">加入追蹤</button>
                        </template>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        initialProfile: {
            type: Object,
            required: true
        },
        initialIsFollowed: {
            type: Boolean,
            required: true
        },
        currentUser: {
            type: Object,
            required: true
        }
    },
    data: function() {
         return {
             profile: this.initialProfile,
             isFollowed: this.initialIsFollowed,
         }
    },
    computed: {
        // 判斷當前使用者是不是這個頁面的主人
        verifyEditButton() {
            if (Number(this.currentUser.id) === Number(this.profile.id)) {
                return true
            }
            return false
        }
    },
    methods: {
        addFollow() {
            this.isFollowed = true
        },
        deleteFollow() {
            this.isFollowed = false
        }
    }

}
</script>