<template>
        <div class="card">
            <div class="card-header">
                <strong>{{profile.Followings.length}}</strong> followings (追蹤者)
            </div>
            <div class="card-body">
                <router-link v-for="following in profile.Followings" v-bind:key="following.id" v-bind:to="{name: 'userDetail', params: {id: following.id}}">
                    <img v-bind:src="following.image" width="60" height="60" class="avatar">
                </router-link>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        profile: {
            type: Object,
             required: true
        }
    }
}
</script>