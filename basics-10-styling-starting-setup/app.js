const app = Vue.createApp({
    data (){
        return {
            boxASelected : false,
            boxBSelected : false,
            boxCSelected : false,
        };
    },
    computed : {
        classesA(){
            return { active : this.boxASelected }
        },
        classesB(){
            return { active : this.boxBSelected }
        },
        classesB(){
            return { active : this.boxBSelected }
        },
    },
    methods :{
        boxSelection(box){
            if( box === 'A'){
                this.boxASelected = !this.boxASelected;
            }
            else if( box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }
            else{
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});

app.mount("#styling");