<template>
  <form v-on:submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="text-right">
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import uuid from 'uuid/v4'
export default {
    props: {
        restaurantId: {
            type: Number,
            required: true
        }
    },
    data: function() {
        return {
            text: ''
        } 
    },
    methods: {
        handleSubmit() {
            this.$emit('after-create-comment', {
                id: uuid(),
                text: this.text,
                restaurantId: this.restaurantId
            })
            this.text = ''
            console.log(this.text)
        }
    }
}
</script>