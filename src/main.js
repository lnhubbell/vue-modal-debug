import Vue from 'vue';
import App from './app.vue';
import { SweetModal, SweetModalTab } from 'sweet-modal-vue';

new Vue({
  el: '#myapp',
  components: {
    SweetModal,
    SweetModalTab,
    App
  },
  data: {
    message: "Hello Vue"
  },
  methods: {
    openModal: function() {
        console.log(SweetModal);
        this.$refs.modal.open();
    }
  }
})