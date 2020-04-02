<template>
    <div class="container py-5">
    <form class="w-100" v-on:submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">
          Sign In
        </h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          required
          autofocus
        >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          required
        >
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">Sign Up</router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '../apis/authorization'
import { Toast } from '../utils/helpers'
export default {
    name: "SignIn",
    data: function() {
        return {
        email: '',
        password: ''
        }
    },
    methods: {
        handleSubmit() {
            // 如果email或password為空，則使用Toast提示
            // 然後就return不往後執行
            if(!this.email || !this.password) {
              Toast.fire({
                type: 'warning',
                title: '請填入email和password'
              })
              return
            }

            authorizationAPI.signIn({
              email: this.email,
              password: this.password
            }).then(response => {
              console.log('response', response)
              const {data} = response
              // 將token存放在localstorage
              localStorage.setItem('token', data.token)

              // 成功登入後轉址到餐廳首頁
              this.$router.push('/restaurants')
            }).catch(error => {
              // 把密碼欄位清空
              this.password = ''

              // 顯示錯誤提示
              Toast.fire({
                type: 'warning',
                title: '您輸入的帳號密碼錯誤'
              })
              console.log('error', error)            
            })
        }
    }
}
</script>>