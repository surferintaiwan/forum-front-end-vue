<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div v-for="comment in comments" v-bind:key="comment.id">
        <h4>
          <a href="#">
            {{comment.Restaurant? comment.Restaurant.name: 'No data'}}
          </a>
        </h4>
        <p>{{comment.text}}</p>by
        <a href="#">
          {{comment.User.name}}
        </a>
        at {{comment.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import {fromNowFilter} from '../utils/mixins'
export default {
    mixins: [fromNowFilter],
    props: {
        comments: {
            type: Array,
            required: true
        }
    }
}
</script>