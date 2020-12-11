const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name : '',
      confirmedName : '',
    };
  },
  methods : {
    add(num){
      this.counter = this.counter + num;
    },
    remove(num){
      this.counter = this.counter - num;
    },
    saveName(event , lastName){
      this.name = event.target.value + " " +lastName ;
    },
    saveFName(){
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
