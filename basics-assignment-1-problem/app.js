const app = Vue.createApp({
    data(){
        return{
            name : "Aayushi",
            age : 20,
            imgUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5RCBjt3NROsD1HxNPA_8TJ32vrr7kUt82A&usqp=CAU"
        }
    },
    methods : {
        updatedAge(num){
          return  this.age + num;
        },
        randomOutput(){
            return Math.random();
        }
    }
});

app.mount("#assignment");
