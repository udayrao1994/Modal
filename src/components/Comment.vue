<template>
  <div class="accordian">
    <div class="accordion-panel">
      <div class="panel--header" @click="toggle">
        <div class="arrow">
          <div class="row">
            <div class="col-11">
              <i
                class="far fa-edit mr-2"
                style="font-size: 25px; color: red"
              ></i>
              <span class="label label-default" id="labletext"
                ><b>Message Dealer(optional)</b></span
              >
            </div>

            <div class="col-1">
              <h3 class="title">
               
                  <span v-if="!visible"><i class="fa fa-angle-down icon"></i></span>
                 <span v-if="visible"><i class="fa fa-angle-up icon"></i></span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="panel--body" v-if="visible">
      <div class="tab-content">
        <div class="container">
          <p></p>
          <h5>Add a short message to the dealer:(optional)</h5>
          <form>
            <div class="form-group">
              <textarea
                class="form-control"
                rows="7"
                @change="getValue1"
                name="message"
                id="comment"
                placeholder="Please Enter message here"
              ></textarea>
            </div>
             <div class="row">
            <div class="col-12">
                <p class="message">
                     Stay Safe. Read more about 
                     <a target="_blank" href=" #" class="underline"> avoiding scams and protecting your money</a>
                     . By using this site, you agree to our 
                     <a  target="_blank" href="#" class="underline">Terms of Use</a>
                    & our
                    <a  target="_blank" href="#" class="underline">Privacy Policy.</a> 
                </p>
            </div>
        </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {},

  methods: {
    toggle() {
      this.visible = !this.visible;
    },
  },
};
</script>



<style scoped>
.arrow {
  margin: 0.5em;
}

.message{
        font-size: 12px;
    text-align: justify;
}
a{
    color: #2971ea;
    text-decoration: none;
    background-color: transparent
}
</style>