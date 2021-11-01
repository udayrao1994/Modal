    <template>
  <div>
    <div class="accordion-panel">
      <div class="panel--header" @click="showMenu">
        <div class="arrow">
          <div class="row">
            <div class="col-11">
              <i
                class="fa fa-motorcycle mr-2"
                style="font-size: 25px; color: red"
              ></i>
              <span class="" id="labletext"
                ><b>Have a Trade-in ?(optional)</b></span
              >
            </div>

            <div class="col-1">
              <h3 class="title">
                <span v-if="!openAccordion"><i class="fa fa-angle-down icon"></i></span>
                 <span v-if="openAccordion"><i class="fa fa-angle-up icon"></i></span>

              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="panel--body" v-if="openAccordion">
      <div class="accordion-body"></div>

      <div class="row">
        <div class="btn-group col-sm-12 col-md-6">
          <button
            class="col-6 b-option left-button"
            :class="{ highlight: !tradeIn }"
            @click="noTrade"
          >
            No Trade in
          </button>
          <button
            class="col-6 b-option right-button"
            :class="{ highlight: tradeIn }"
            @click="TradeIn"
          >
            Yes, I have a Trade-in
          </button>
        </div>
      </div>

      <div class="row" v-if="tradeIn">
        <div class=" dropdown col-sm-12 col-lg-6 col-md-6 col-xs-12">
        <dropdown label="Select Year" @handledropdown="getValue" name="years" :yearsArr="yearsArr" />
         
        </div>
        <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-2">
          <label class="label label-default">Make<i id="a">*</i> </label>
          <Input @handleInput="getValue1" name="make" />
        </div>
      </div>
      <div class="row" v-if="tradeIn">
        <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 mt-2">
          <label class="label label-default">Model<i id="a">*</i> </label>
          <Input @handleInput="getValue1" name="model" />
        </div>
        <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
          <dropdown label="Condition" name="condition" :yearsArr="condition" />
        </div>
      </div>
      <div class="row" v-if="tradeIn">
        <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
          <label class="label label-default"
            >Estimated Mileage<i id="a">*</i>
          </label>
          <Input @handleInput="getValue1" name="milage" />
        </div>
        <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12 ">
          <label class="label label-default">VIN<i id="a">*</i> </label>
          <Input @handleInput="getValue1" name="vin" />
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import Input from "./Input.vue";
import Dropdown from "./Dropdown.vue";
export default {
  data() {
    return {
      openAccordion: false,
      tradeIn: false,
      condition: ["Good", "Excelent", "Poor"],
      visible: false,
      visible2: false,
      yearsArr:[],
    };
  },
  components: {
    Input,
    Dropdown,
  },

  methods: {
    getValue1(value, name) {
      this.$emit("handleInputs", value, name);
    },

    showMenu() {
      this.openAccordion = !this.openAccordion;
    },

    noTrade() {
      this.tradeIn = false;
    },
    TradeIn() {
      this.tradeIn = true;
    },
    toggle() {
      this.visible = !this.visible;
    },

    toggle2() {
      this.visible2 = !this.visible2;
    },

    toggle3() {
      this.visible3 = !this.visible3;
    },
    

  },
  created(){
      const year = new Date().getFullYear()
      this.yearsArr=Array.from({length: year - 1990}, (value, index) => 1991 + index);
    },
};
</script>




    <style scoped>
 .arrow {
  margin: 0.5em;
} 
button {
  height: 60px;
}

::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  white-space: pre-line;
  position: relative;
  top: -7px;
}
#focus:focus {
  font-weight: 700;
  border: 2px solid var(--accent-color-dark);
  background-color: var(--accent-color-light);
  --accent-color-light: #b5251920;
  --accent-color-dark: #b52519;
}

#pagesize {
  padding-right: 10px;
  padding-left: 10px;
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
  margin-top:5px;
}
.pannel--header {
  cursor: pointer;
}

#t {
  width: 100%;
  height: 50px;

  padding-left: 5px;
  padding-right: 5px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 1px solid grey;

  border-radius: 5px;
}

#a {
  color: red;
}
.b-option {
  outline: none;
  font-size: 14px;
  height: 50px;
  margin-top: 5px;
  margin-bottom: 30px;
  font-weight: 400;
  background: #fff;
  border: 1px solid grey;
}

.highlight {
  font-weight: 700;
  border: 2px solid #b52519;
  background-color: #b5251920;
}
.left-button {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.right-button {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.motor {
  padding: 8px;
  font-size:20px;
  color:red;
  border: 1px solid red;
  margin-right: 10px;
  border-radius: 50%;
}

</style>