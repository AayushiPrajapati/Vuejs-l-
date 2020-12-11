const app = Vue.createApp({
    data (){
        return {
            cname : '',
            togglePara : true,
            bgcolor : '',
        };
    },
    computed :{

    },
    methods : {
        toggleParagraph(){
            this.togglePara = !this.togglePara;
        }
    }
});

app.mount("#assignment");