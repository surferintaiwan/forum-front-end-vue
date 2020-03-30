<template>
    <div class="card">
        <div class="card-header">
            <strong>{{profile.Followers.length}}</strong> followers (追隨者)
        </div>
        <div class="card-body">
            <router-link v-for="follower in profile.Followers" v-bind:key="follower.id" v-bind:to="{name: 'userDetail', params: {id: follower.id}}" >
                <img v-bind:src="follower.image" width="60" height="60" class="avatar">
            </router-link>
            
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        profile: {
            type:Object,
            required: true
        }
    }
}
</script>>