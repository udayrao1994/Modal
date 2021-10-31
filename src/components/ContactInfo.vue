<template>
  <div id="pagesize">
    <div class="row">
      <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
        <label class="label label-default"
          >First Name<i class="asterisk">*</i>
        </label>
        <Input @handleInput="getValue1" name="fname" error="Invalid first name"/>
      </div>

      <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
        <label class="label label-default"
          >Last Name<i class="asterisk">*</i>
        </label>
        <Input @handleInput="getValue1" name="lname" error="Invalid last name"/>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
        <label class="label label-default"
          >Email<i class="asterisk">*</i>
        </label>
        <Input @handleInput="getValue1" name="email" error="Enter valid email" />
      </div>
      <div class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
        <label class="label label-default"
          >Phone<i class="asterisk">*</i>
        </label>
        <Input @handleInput="getValue1" name="mobile" error="Enter valid mobile number" />
      </div>
    </div>

    <br />
    <div class="row">
      <div class="col-8 col-sm col-lg col-md">
        <span class="mr-2" id="labletext">My Offer </span>
        <span class="label label-default mr-2" id="labletext2">
          Current Asking Price: $9,999</span
        >
      </div>
    </div>
    <div class="row">
      <label id="input3" class="label label-default mt-2"
        >Enter Offer<i class="asterisk">*</i>
      </label>
      <div id="input2" class="col-sm-12 col-lg-6 col-md-6 col-xs-12">
        <Input @handleInput="getValue1" name="myOffer" />
      </div>
    </div>
  </div>
</template>


<script>
import Input from "./Input.vue";

export default {
  components: {
    Input,
  },
  data: () => {
    return {
      item: {},
    };
  },
  methods: {
    getValue1(value, name) {
      this.$emit("handleInputs", value, name);
    },
  },
};
</script>

<style scoped>
#input3 {
  padding-left: 15px;
}

#pagesize {
  padding-right: 10px;
  padding-left: 10px;
}
#labletext {
  color: black;
  font-weight: bold;
  padding: 4px;
  padding-right: 10px;

  font-family: Verdana, Arial, Helvetica, sans-serif;
  font-size: xx-medium;
}

#labletext2 {
  font-style: italic;
}
.asterisk {
  color: red;
}
.label {
  padding-top: 5px;
}
</style>