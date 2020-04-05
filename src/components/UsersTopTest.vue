<template>
      <div class="col-3">
        <a href="#">
          <img
            v-bind:src="user.image"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數： {{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            v-on:click.stop.prevent="unFollow(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            v-on:click.stop.prevent="follow(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
</template>

<script>
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'

export default {
  props: {
    initialUser: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return {
      user : this.initialUser
    }
  },
  methods: {
    async follow(userId) {
      try {
        const response = await usersAPI.addFollowing({userId})
        const {statusText} = response
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.user.isFollowed = true
        this.user.FollowerCount += 1
      } catch(error) {
        Toast.fire({
          type: 'error',
          title: '無法加入追蹤'
        })
      }
    },
    async unFollow(userId) {
      try {
        const response = await usersAPI.deleteFollowing({userId})
        const {statusText} = response
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        this.user.isFollowed = false
        this.user.FollowerCount = this.user.FollowerCount - 1
      } catch(error) {
        Toast.fire({
          type: 'error',
          title: '無法取消追蹤'
        })
      }
    }
  }

}
</script>