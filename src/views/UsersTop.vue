<template>
  <div class="container py-5">
    <NavTabs/>
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <UsersTopTest v-for="user in users" v-bind:key="user.id" v-bind:initial-user="user"/>
    </div>
  </div>
</template>

<script>
import NavTabs from '../components/NavTabs'
import UsersTopTest from '../components/UsersTopTest'
import usersAPI from '../apis/users'
import {Toast} from '../utils/helpers'

export default {
  name: 'UsersTop',
  data: function() {
    return {
      users : ''
    }
  },
  created: function() {
    this.getUsersTop()
  },
  components: {
    NavTabs,
    UsersTopTest
  },
  methods: {
    async getUsersTop() {
        try {
            const response = await usersAPI.getUsersTop()
            const {data, statusText} = response
            if (statusText !== 'OK') {
                 throw new Error(statusText)
            }
            this.users = data.users
        } catch(error) {
            Toast.fire({
                type: 'error',
                title: '資料異常，請稍後再試'
          })
        }
      
    }
  }
}
</script>