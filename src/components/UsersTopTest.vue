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
            v-on:click.stop.prevent="unFollow"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            v-on:click.stop.prevent="follow"
          >
            追蹤
          </button>
        </p>
      </div>
</template>

<script>
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
    follow() {
      this.initialUser.isFollowed = true
    },
    unFollow() {
      this.initialUser.isFollowed = false
    }
  }

}
</script>