<template>
  <div class="result-page col-sm col-lg col-md col-xl">
    <div class="result-page-body">
      <div id="heading">
        <h3>Result Page</h3>
        <simple-input></simple-input>
      </div>

       <div class="row border">
            <div class="col-4 text-start bg-dark text-white"><strong>First Name</strong></div><div class="col-8 border-bottom">{{items.fname}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Last Name</strong></div><div class="col-8 border-bottom">{{items.lname}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Email</strong></div><div class="col-8 border-bottom">{{items.email}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Mobile</strong></div><div class="col-8 border-bottom">{{items.mobile}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>My Offer</strong></div><div class="col-8 border-bottom">{{items.myOffer}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Years</strong></div><div class="col-8 border-bottom">{{items.years}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Make</strong></div><div class="col-8 border-bottom">{{items.make}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Model</strong></div><div class="col-8 border-bottom">{{items.model}} </div>
            <div class="col-4 text-start bg-dark text-white"><strong>Condition</strong> </div><div class="col-8 border-bottom">{{items.condition}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Milage</strong></div><div class="col-8 border-bottom">{{items.milage}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>VIN</strong></div><div class="col-8 border-bottom">{{items.vin}}</div>
            <div class="col-4 text-start bg-dark text-white"><strong>Message</strong></div><div class="col-8">{{items.message}}</div>
                    <div class="col-4 text-start bg-dark text-white"><strong>How are you credit</strong></div><div class="col-8 border-bottom">{{items.credit}}</div>
        </div>

      <!-- <div class="row">
        <div class="col-8">
          <b>First Name: {{ items.fname }}</b>
        </div>
        <div class="col-8">
          <b>Last Name: {{ items.lname }}</b>
        </div>
        <div class="col-8">
          <b>Email Id: {{ items.email }}</b>
        </div>
        <div class="col-8">
          <b>Phone No: {{ items.mobile }}</b>
        </div>
        <div class="col-8">
          <b>MyOffer: {{ items.myOffer }}</b>
        </div>
        <div class="col-8">
          <b>Make: {{ items.make }}</b>
        </div>
        <div class="col-8">
          <b>Model: {{ items.model }}</b>
        </div>
        <div class="col-8">
          <b>Condition: {{ items.condition }}</b>
        </div>
        <div class="col-8">
          <b>Vin: {{ items.vin }}</b>
        </div>
      </div>
    </div> -->

    </div>

    <div class="footer">
      <button
        data-v-3b10493a=""
        class="
          button
          basic
          enabled
          label
          col-sm-6 col-lg-6
          label-default
          submit
        "
        @click="closeModal()"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
  computed: {
    ...mapState({
      items: "items",
    }),
  },

  components: {},
};
</script>

<style >
.accordion-panel {
  box-shadow: 1px 1px 2px #aaa;
  background: white;
}
.accordion-panel + .accordion-panel {
  margin-top: 0.5em;
}
.panel--header {
  padding: 0.5em;
}

.panel--header {
  border-top: 1px solid #ccc;
}
.pannel--header {
  cursor: pointer;
}
</style>

<style scoped>
#heading {
  text-align: center;
}

.footer {
  text-align: center;
  height: 55px;
  font-weight: 600;
  padding-top: 100px;

  font-size: 20px;

  -webkit-box-align: center;
  color: rgb(61, 61, 61);
  border-radius: 6px;
  margin: auto;
   
}
</style>