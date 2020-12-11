const app = Vue.createApp({
    data (){
        return{
            health: 100,
            ended: false,
        };
    },
    methods :{
        punch(){
            this.health -= 10;
            if(this.health <=0){
                this.ended = true;
            }
        },
        reset(){
            this.health = 100;
            this.ended = false;
        }
    }
});

app.mount('#punchBag');