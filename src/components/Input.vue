
<template>
  <div class="form-outline" :class="{invalid: usernameValidity ==='invalid'}">
    <input
      type="text"
      class="inputtext"
      v-model.trim="value"
      required
      @change="(e) => handleField(e)"
      :name="`${name}`"
      @blur="validateInput"
    />
      <div  class="inputtexterror" v-if="usernameValidity === 'invalid'">{{error}} </div>
  </div>
</template>

<script>
export default {
  props: ["name","error"],
  data() {
    return {
      value: "",
      values: {
        key: "",
        value: "",
        usernameValidity:'pending',
      },
    };
  },
  methods: {
    handleField(e) {
      this.values.key = e.target.name;
      this.values.value = e.target.value;
      this.$store.dispatch("getValueFromInputField", this.values);
    },
    validateInput(){
      if(this.value=== ""){
        this.usernameValidity='invalid';

      }
      else{

        this.usernameValidity="valid";
      }


    }
  },
};
</script>



<style scoped>
.inputtext{
  width: 100%;
  height: 50px;
  padding: 10px 10px;
  /* padding-left: 5px;
  padding-right: 5px;
  padding-top: 15px;
  padding-bottom: 15; */
  border: 1px solid grey;

  border-radius: 5px;
}
.inputtexterror{

color:red
  
}
</style>