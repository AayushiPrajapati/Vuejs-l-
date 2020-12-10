
//alert("hiii..");

const app = Vue.createApp({
    data () {
        return {
            score : 0 ,
            wickets : 0 ,
            lb : 0,
            nb : 0,
            wd : 0,
            pName : '',
            players : [],
            fullWidthImage : false,
            selectedIndex : null,
            isEditing : false,
            abtTeam : "https://www.sportskeeda.com/team/india-national-cricket-team",
            img1 : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5RCBjt3NROsD1HxNPA_8TJ32vrr7kUt82A&usqp=CAU",
            img2 : "",
            details : '',
        };
    },
    watch : {
        details(){
            //const  that = this;
            this.details = this.details +" " + this.score;
        },
    },
    methods : {
        status(){
            //alert('Captain..');
            this.fullWidthImage = !this.fullWidthImage;
        },
        editPlayer(index, pName){
            this.pName = pName;
            this.selectedIndex = index;
            this.isEditing = true;
        },
        updatePlayer(){
            this.players.splice(this.selectedIndex, 1, this.pName );
            this.isEditing = false;
        },
        removePlayer(index){
            this.players.splice(index,1)
        },
        addPlayer(){
            if(this.pName === ''){
                return;
            }
            this.players.push(this.pName);
            this.pName = '';
        },
        updateScore(num){
            this.score=this.score+num;
        },
        resetScore(num){
            this.score = 0;
            this.wickets = 0;
            this.lb = 0;
            this.nb = 0;
            this.wd = 0;
        },
        calType(type){
            if(type === "w" && this.wickets <=10){
                this.wickets++;
            }
            else if(type === "nb"){
                this.nb++;
                this.score++;
            }
            else if(type === "wd"){
                this.wd++;
                this.score++;
            }
            else if(type === "lb"){
                this.lb++;
            }
        }
    } 
});

app.mount('#teamSelection');

//alert("hiii..");