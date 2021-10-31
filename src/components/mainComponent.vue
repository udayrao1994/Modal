<template>
  <div>
    <overlay
      :opened="opened"
      :visible="visible"
      @closed="opened = visible = false"
    >
      <button class="btn btn-warning" @click="openModal">Make An Offer</button>
      <div class="modalContainer" v-if="show">
        <Modal v-on:close-modal="closeModal()" />
      </div>
    </overlay>
  </div>
</template>

<script>
import Modal from "./modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    openModal() {
      this.show = true;
    },
    closeModal() {
      this.show = false;
    },
  },
};
</script>


<style scoped>
.btn {
  height: 50px;
  width: 10%;
  background: red;
  border-radius: 5px;
}


</style>