<template>
  <div id="pagesize" class="conatiner">
    <div class="row">
      <div class="col-11">
        <h4 id="makeoffer">Make An Offer</h4>
      </div>
      <div class="col-1 btn">
        <span @click="close()">
          <i class="fa fa-close" style="font-size: 25px"></i
        ></span>
      </div>
    </div>
    <div class="land-page">
      <div class="land-page-body">
        <div class="row" id="heading">
          <div class="col-12">
            <h5><b id="headingtop">Contact Information</b></h5>
          </div>
          <div class="col-12">
            <h6 id="required">
              <b><i id="a">*</i> Required</b>
            </h6>
          </div>
        </div>
        <div class="fixsize">
          <ContactInfo @handleInputs="getValue2" />
          <div class="top-padding">
            <HaveTradersIn @handleInputs="getValue2" />
          </div>
          <Payment @handleInputs="getValue2"/>

          <Comment />
        </div>
      </div>
      <div class="footer">
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import ContactInfo from "./ContactInfo.vue";
import HaveTradersIn from "./HaveTradersIn.vue";
import Payment from "./Payment.vue";
import Comment from "./Comment.vue";

export default {
  components: {
    ContactInfo,
    HaveTradersIn,

    Payment,
    Comment,
  },
  methods: {
    getValue2(value, name) {
      this.$emit("handleInputs1", value, name);
    },
    close() {
      this.$emit("close-close");
    },
  },
};
</script>

<style scoped>
.btn-submit1 {
  text-align: center;
  justify-content: center;
  font-size: 20px;
  height: 50px;
  width: 300px;
  color: white;
  background: darkslategrey;
  border-radius: 5px;
  margin: auto;
}

#heading {
  text-align: left;
  padding-left: 12px;
}
.land-page {
  background-color: white;
  width: 610px;
  height: 350px;

  overflow-y: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px;
}

input {
  height: 50px;
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  white-space: pre-line;
  position: relative;
  top: -7px;
}
#focus:focus {
  background-color: #b5251920;

  outline-style: solid;
  outline-color: red;
}
#pagesize {
  padding-right: 10px;
  padding-left: 10px;
}
#heading {
  padding-top: 30px;
}
#headingtop {
  font-size: 15px;

  padding: 15px 0;
  margin: 0;
}
#makeoffer {
  float: left;
  width: auto;
  font-size: 30px;
  width: 90%;
}
#required {
  padding-top: 2px;
}
#a {
  color: red;
}

.top-padding {
  padding-top: 2px;
}

@media only screen and (max-width: 600px) {
  .fixsize {
    width: 60%;
  }
}
</style>