<template>
  <div>
    <div class="accordion-panel">
      <div class="panel--header" @click="toggle">
        <div class="arrow">
          <div class="row">
            <div class="col-11">
              <i
                class="fa fa-dollar m-1"
                style="font-size: 25px; color: red"
              ></i>
              <span class="m-2" id="labletext"
                ><b>Review Payment options ?(optional)</b></span
              >
            </div>

            <div class="col-1">
              <h3 class="title">
                <i class="fa fa-angle-down icon"></i>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="" v-if="visible">
      <div class="accordion-body">
        <div class="col-12 payMode">
          <span
            ><input type="radio" id="cash" name="payMode" value="cash" @click="cash"/>Cash
          </span>
        </div>
        <div class="">
          <div class="col-12 payMode">
            <div @click="toggle2">
              <span>
                <input
                  type="radio"
                  id="finance"
                  name="payMode"
                  value="finance"
                  @click="finance"
                />Finance</span
              >
            </div>
            <div class="panel--body" v-if="visible2">
              <br />
              <div class="row">
                <div class="input-group col-sm-12 col-lg-6 col-md-6 col-xs-12">
                  <dropdown
                    label="How Yours Credit "
                    name="How yours Credit"
                    :yearsArr="condition"
                  />
                </div>
              </div>

              <div class="row">
                <div
                  class="input-group col-sm-12 col-lg-8 col-md-8 col-xs-12 mt-2"
                >
                  <h5><b>Estimated Monthly Payment</b></h5>
                </div>

                <div class="row transparent">
                  <div class="col-md-6 col-sm-12 clear-padding">
                    <div
                      class="
                        row
                        d-flex
                        justify-content-center
                        align-items-center
                        transparent
                      "
                    >
                      <div
                        class="row d-flex align-items-center secDD transparent"
                      >
                        <div class="col-5 clear-padding-mobile">
                          <p class="normal slideLabel">Down Payment</p>
                        </div>
                        <div class="col-7 padding-right-0">
                          <div class="group review">
                            <b-form-input
                              class="slidervalue"
                              v-model="sliderValue"
                            ></b-form-input>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 clear-padding-mobile">
                        <div class="slidecontainer">
                          <input
                            type="range"
                            min="0"
                            max="1000"
                            v-model="sliderValue"
                            class="slider"
                            step="100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12 clear-padding">
                    <div
                      class="
                        row
                        d-flex
                        justify-content-center
                        align-items-center
                        transparent
                      "
                    >
                      <div
                        class="row d-flex align-items-center secDD transparent"
                      >
                        <div class="col-5 clear-padding-mobile">
                          <p class="normal slideLabel">Term (months)</p>
                        </div>
                        <div class="col-7 padding-right-0">
                          <div class="group review">
                            <b-form-input
                              class="slidervalue"
                              v-model="sliderValue2"
                            ></b-form-input>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 clear-padding-mobile">
                        <div class="slidecontainer">
                          <input
                            type="range"
                            min="24"
                            max="72"
                            v-model="sliderValue2"
                            class="slider"
                            step="12"
                          />
                        </div>
                        <div
                          class="
                            row
                            d-flex
                            justify-content-between
                            slider-label-container
                            transparent
                          "
                        >
                          <div class="col-6">
                            <span class="slidervalue1">26</span>
                            <span class="slidervalue2">36</span>
                            <span class="slidervalue3">48</span>
                            <span class="slidervalue4">60</span>
                            <span class="slidervalue5">72</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      visible: false,
      visible2: false,
      condition: ["Good", "Excelent", "Poor"],
      sliderValue: 0,
      sliderValue2: 0,
    };
  },

  methods: {
finance(){
  this.visible=true;
},
    cash(){
this.visible  =false;
    },
    toggle2() {
      this.visible2 = !this.visible2;
    },
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>
<style scoped>
.payMode2 {
  margin: 10px 0;
  border: 2px white;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  min-height: 80px;
}
.payMode {
  margin: 10px 0;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  min-height: 80px;
}
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

.icon {
  cursor: pointer;
  transition: transform 333ms ease-out, color 333ms;
  color: black;
  margin-left: center;
  line-height: 1;
}
.title.open .icon {
  fill: #3266d5;
  -ms-transform: rotate(-180deg);
  transform: rotate(-180deg);
  color: red;
}
.arrow {
  margin: 0.5em;
}

#payment {
  padding-left: 10px;
}
.slidervalue1 {
  padding-left: "";
  font-size: 20px;
}
.slidervalue2 {
  padding-left: 37px;
  font-size: 20px;
}
.slidervalue3 {
  padding-left: 37px;
  font-size: 20px;
}
.slidervalue4 {
  padding-left: 37px;
  font-size: 20px;
}
.slidervalue5 {
  padding-left: 37px;
  font-size: 20px;
}
.slidervalue {
  width: 100%;
  height: 50px;

  padding-left: 5px;
  padding-right: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid grey;

  border-radius: 5px;
}
#t2 {
  padding-top: 50px;
}

.slider {
  background: #000;
  padding: 0;
  outline: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  opacity: 0.7;
  border: 1px solid #000;
  cursor: pointer;
}
#a {
  color: red;
}
.panel--body {
  background-color: lightgray;
}
</style>  