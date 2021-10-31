<template>
<div>
<label class="float-start label">{{label}} <span >*</span></label>
<div class="input-group mb-2 dropdown">   

<div class="input-group mb-2">
            <select id="t" class="form-select"  :name="`${name}`" @change="e=>getDD(e)">
               <option selected>{{label}}</option>
  
              <option v-for="year in yearsArr" :key="year">{{ year }}</option>
            </select>
          </div>


  
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      item:{
        key:"",
        value:"",
      }
    }
  },
  props: ["name","yearsArr","label" ,"label2"],
  methods:{
    getDD(e){
      this.item.key=e.target.name;
      this.item.value=e.target.value;
      this.$store.dispatch("getValueFromDropdown",this.item)
    }
  }
};
</script>

<style scoped>
input[type="text"], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  padding-top: 10px;
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


</style>
