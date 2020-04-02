import {apiHelper} from '../utils/helpers'

export default  {
    signIn({email, password}) {
        // return 回來是會是一個Promise
        return apiHelper.post('/signin', {
            email,
            password
        })
    }
}