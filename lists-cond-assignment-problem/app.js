const app = Vue.createApp({
    data (){
        return {
           taskData : '',
           tasks : [],
           clicked : true ,
        };
    },
    computed :{
        buttonShow(){
            return this.clicked ? "Hide list" : "Show list";
        }    
    },
    methods : {
        toggle(){
            this.clicked = !this.clicked;
        },
        addData(){
            this.tasks.push(this.taskData);
            this.taskData = '';
        },
    }
});

app.mount("#assignment");