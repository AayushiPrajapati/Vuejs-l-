const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname : '',
    };
  },
  computed :{
    fullName(){
      if( this.name === '' &&  this.lastname){
        return;
      }
      return this.name + " " + this.lastname;
    }
  },
  watch : {
    counter(value){
      if(value > 50){
        const that = this;
        setTimeout(()=>{
          that.counter = 0;
        },3000)
      }
    }
  },
  methods : {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = '';
    },
  }
});

app.mount('#events');
