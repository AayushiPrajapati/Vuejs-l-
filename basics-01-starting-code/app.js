const app = Vue.createApp({
    data (){
        return {
            courseGoalA : " <h4>Finish The Vue</h4> ",
            courseGoalB : ' <h4>Master vue</h4> ',
            vueLink : "https://vuejs.org/",
        };
    },
    methods : {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber <= 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount("#user-goal");