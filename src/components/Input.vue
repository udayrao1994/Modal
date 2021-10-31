
<template>
  <div class="form-outline"> 
    <input type="text" id="validationDefault02"  v-model="value"  required @change="e=>handleField(e)" :name="`${name}` ">
    <!-- <div class="mt-2">Value: {{ text }}</div> -->
  </div>
</template>

<script>
  export default {

    props: ["name"],
    data() {
      return {
        value: "",
        values:{
          key:"",
          value:"",
        }
      }

    },
     methods: {
      handleField(e) {
            this.values.key=e.target.name;
            this.values.value=e.target.value;
            this.$store.dispatch("getValueFromInputField",this.values)
        }
    }
  }
</script>



<style scoped>

#validationDefault02{
  width: 100%;
    height: 50px;
    
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 15px;
    padding-bottom: 15;
    border: 1px solid grey;
    
   
    border-radius: 5px;
}
</style>