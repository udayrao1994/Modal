import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

    state:{

        items: {
            fname : "Uday",
            lname : "",
            email : "",
            mobile : 1234,
            myOffer : 55555,
            years : 2021,
            make : "Maruti",
            model : 2018,
            slider1:"",
            condition : "Good",
            milage : 45,
            vin : 45677,
            message : " Hi this is my page"
        }

    },

    getters:{


    },
    mutations:{
        GET_VALUE(state, item) {
            console.log(item.key , item.value)
            if(item.key == "fname"){
                state.items.fname = item.value;
            }
            if(item.key === "lname"){
                state.items.lname = item.value;
            }
            if(item.key === "email"){
                state.items.email = item.value;
            }
            if(item.key === "mobile"){
                state.items.mobile = item.value;
            }
            if(item.key === "myOffer"){
                state.items.myOffer = item.value;
            }
            if(item.key === "years"){
                state.items.years = item.value;
            }
            if(item.key === "make"){
                state.items.make = item.value;
            }
            if(item.key === "model"){
                state.items.model = item.value;
            }
            if(item.key === "condition"){
                state.items.condition = item.value;
            }
            if(item.key === "milage"){
                state.items.milage = item.value;
            }
            if(item.key === "vin"){
                state.items.vin = item.value;
            }
            if(item.key === "message"){
                state.items.message = item.value;
            }
            if(item.key === "slider1"){
                state.items.slider1 = item.value;
            }
        }

    },
    actions:{
        getValueFromInputField({ commit }, item) {
            commit('GET_VALUE', item);
        },
        getValueFromDropdown({ commit }, item) {
            commit('GET_VALUE', item);
        },
    },
    
})