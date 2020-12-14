function getRandomValue ( min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
    data (){
        return {
            monsterHealth : 100,
            playerHealth : 100,
            currentRound : 0,
            winner : null,
            logMessages : [],
        };
    },
    computed : {
        monsterHealthStyle(){
            if( this.monsterHealth < 0){
                return { width : 0 + '%'}
            }
            else{
                return { width: this.monsterHealth + '%'};
            }
        },
        playerHealthStyle(){
            if( this.playerHealth < 0){
                return { width : 0 + '%'}
            }
            else{
                return { width: this.playerHealth + '%'};
            }
        },
        maySpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    watch:{
        monsterHealth(value){
            if( value <=0 && this.playerHealth <= 0){
                this.winner = "Draw";
            }
            else if( value <= 0){
                this.winner = "Player"
            }
        },
        playerHealth(value){
            if( value <=0 && this.monsterHealth <= 0){
                this.winner = "Draw";
            }
            else if( value <= 0){
                this.winner = "Monster"
            }  
        }
    },
    methods : {
       attackMonster() {
           this.currentRound++;
           const attackVal = getRandomValue( 5, 12 );
           this.monsterHealth -= attackVal;
           this.addLogMessage( "Player" ,"attack" ,attackVal);
           this.attackPlayer();
       },
       attackPlayer(){
            const attackVal = getRandomValue( 8, 15 );
            this.playerHealth -= attackVal;
            this.addLogMessage( "Monster" ,"attack" ,attackVal);
       },
       specialAttack(){
            this.currentRound++;
            const attackVal = getRandomValue( 10, 25 );
            this.monsterHealth -= attackVal;
            this.addLogMessage( "Player" ,"attack" ,attackVal);
            this.attackPlayer();
       },
       heal(){
            this.currentRound++;
            const healVal = getRandomValue( 9, 20 );
            if( this.playerHealth + healVal > 100){
                this.playerHealth = 100;
            }
            else{
                this.playerHealth += healVal;
            }
            this.addLogMessage( "Player" ,"Heal" ,healVal);
            this.attackPlayer();
       },
       restart(){
           this.monsterHealth = 100;
           this.playerHealth = 100;
           this.currentRound =0;
           this.winner = null;
           this.logMessages = [];
       },
       surrender(){
           this.winner = 'Monster';
       },
       addLogMessage( who , what , value ){
           this.logMessages.unshift({
               actionBy : who,
               actionType : what,
               actionValue : value,
           });
       }
    }
});

app.mount("#game");