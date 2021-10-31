<template>
        <div class="popup">
            <div class="pop-inner">

                <div class="land-page" v-if="showLandPage">
                    <LandPage @handleInputs1="getvalue3" v-on:close-close="$emit('close-modal')" />
                </div>
                <div class="result-page"  v-if="showResultPage">
                    <ResultPage :item="item" v-on:close-modal="$emit('close-modal')" />
                </div>

                    
<div>

      <div>

<br>
<div class="row">
  
        <button v-if="showLandPage"
          data-v-3b10493a="" @click="submit()"    
          id="submit-offer-button"   
          class="button basic enabled label col-sm-6 col-lg-6 label-default submit" 
        >
        
          <p data-v-3b10493a="" class="pr2">Submit</p>
        </button>
    </div>
    </div>

        </div>
    </div>
            </div>
      

</template>
<script>
import LandPage from './landPage.vue'
import ResultPage from './resultPage.vue'


export default {
    components: {
        LandPage,
        ResultPage,
        
    },
    data(){
        return{



            item:{},
            showLandPage:true,
            showResultPage:false,
        }
    },
    methods: {

        submit() {

            this.showLandPage = false;
            this.showResultPage = true;
            
        },
        getvalue3(value,name){
            if(name === "fname"){
        
                this.item.fname =  value;
    
            }
            if(name === "lname"){
                this.item.lname =  value;
            }
            if(name === "email"){
                this.item.email =  value;
            }
            if(name === "mobile"){
                this.item.mobile =  value;
            }
            if(name === "myOffer"){
                this.item.myOffer =  value;
            }
            if(name === "make"){
                this.item.make =  value;
            }
                if(name === "model"){
                this.item.model =  value;
            }
               if(name === "milage"){
                this.item.milage =  value;
            }
               if(name === "vin"){
                this.item.vin =  value;
            }
              if(name === "condition"){
                this.item.condition =  value;
            }
            
            
            
                        
        console.log(this.item)
        }
    }
}
</script>

<style scoped>

.popup {
    position: fixed;
    padding-top:80px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    
    
}
.pop-inner {
    margin-top: 0;
    height: 85%;
    width: 50%;
    padding-right:5px;
    background: #fff;
    padding: 0;
     border: 2px white;
  padding: 10px;
  border-radius: 25px;
   
}

@media only screen and (max-width: 600px) {
  .pop-inner {
    width:100%;
    
    
  }
}

@media screen and (max-width: 600px) {
    .container-modal{
        width: 90vw;
    }
}
@media (min-width: 991px){
   .container-modal{
        width: 50%;
    } 
}


.button.enabled[data-v-3b10493a] {
    background-color: rgb(61, 61, 61);
    color: rgb(255, 255, 255);
    cursor: pointer;
}
.back-button[data-v-3b10493a], .button[data-v-3b10493a] {
    height: 50px;
    font-weight: 600;
    background-color: rgb(255, 255, 255);
    color: rgb(178, 178, 178);
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    outline: none;
    
}
.button[data-v-3b10493a] {
    
    opacity: 1;
   
    border-radius: 5px;
    border: 1px solid rgb(178, 178, 178);
    margin: auto;
    padding-top: 20px;
}
</style>