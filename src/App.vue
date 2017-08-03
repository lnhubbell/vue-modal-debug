<template>
  <div id="app">
    <h3>{{ message }}</h3>
    Accurate
    <button @click="openModal">Open Modal</button>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'app',
  data () {
    return {
      message: 'Hello Vue!!!'
    }
  },
  methods: {
    openModal () {
      swal({
        title: 'I\m an awesome modal!',
        text: 'Am I better than SweetModal? :)',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yep!',
        closeOnConfirm: true
      }, isConfirm => {
        if (isConfirm) {
          console.log('thanks!! 😄') // do stuff
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "~sweetalert/dev/sweetalert";
@import "~sweetalert/themes/facebook/facebook";
</style>
