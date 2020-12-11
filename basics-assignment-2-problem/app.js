const app = Vue.createApp({
    data (){
        return {
            dataInput : '',
            dataInput2 : '',
        };
    },
    methods : {
        showAlert(){
            alert("Hello There..");
        },
        saveValue(event){
            this.dataInput = event.target.value;
        },
        saveValue2(event){
            this.dataInput2 = event.target.value;
        },
    }
});

app.mount("#assignment");