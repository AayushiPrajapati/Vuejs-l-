<template>
<base-card>
      <form @submit.prevent="saveData()">
        <div class="form-control" :class="{invalid :validPara === 'invalid'}">
           <label for="name">Name :</label> 
           <input type="text"  name="name" id="name" v-model.trim="name" @blur="checkValidity()"/>
           <p v-if="validPara === 'invalid'"> Please Enter Valid Input. </p>
       </div>
        <div class="form-control" :class="{invalid :validParaAge === 'invalid'}">
           <label for="age">Age :</label>
           <input type="number" min="0" name="age" id="age" v-model.number="age" @blur="checkValidityAge()"/>
           <p v-if="validParaAge === 'invalid'"> Please Enter Valid Input. </p>
       </div>
        <div class="form-control">
           <label for="interest-cricket">Cricket</label>
           <input type="checkbox" name="interest" id="interest-cricket" value="cricket" v-model="interest"/>
       </div>
        <div class="form-control">
           <label for="interest-football">FootBall</label>
           <input type="checkbox" name="interest" id="interest-football" value="football" v-model="interest"/>
       </div>
        <div class="form-control">
           <label for="interest-basketball">BasketBall</label>
           <input type="checkbox" name="interest" id="interest-basketball" value="basketball" v-model="interest"/>
       </div>
        <div class="form-control">
           <label for="oneday">OneDay</label>
           <input type="radio" name="type" id="oneday" value="oneday" v-model="type"/>
       </div>
        <div class="form-control">
           <label for="fivedays">FiveDays</label>
           <input type="radio" name="type" id="fiveday" value="fiveday" v-model="type"/>
       </div>
        <div class="form-control">
           <label for="oneweek">OneWeek</label>
           <input type="radio" name="type" id="oneweek" value="oneweek" v-model="type"/>
       </div>
       <base-button type="submit" name="submit" value="submit">Submit</base-button>
      </form>       
</base-card>
</template>

<script>
export default {
    inject :['addparticipant'],
    data (){
        return {
            validPara:'pending',
            validParaAge:'pending',
            name : '',
            age : null,
            interest : [],
            type : null,

        };
    },
    methods :  {
        saveData(){
            const enteredName = this.name;
            const enteredAge = this.age;
            const enteredInterest = this.interest;
            const enteredType = this.type;

            console.log(enteredAge);

            this.addparticipant(enteredName , enteredAge ,enteredInterest ,enteredType);

            this.name = '';
            this.age = null;
            this.interest = [];
            this.type = null;

        },
        checkValidity(){
            if(this.name === ''){
                this.validPara = 'invalid';
            }
            else{
                this.validPara = 'valid';
            }
        },
        checkValidityAge(){
            if(this.age === '' || this.age<=0){
                this.validParaAge = 'invalid';
            }
            else{
                this.validParaAge = 'valid';
            }
        },
    }
}
</script>

<style scoped>

form {
  margin: 2rem auto;
  padding: 2rem;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: rgb(255, 2, 2);
}


.form-control.invalid label {
  color: rgb(255, 0, 0);
}

.form-control.invalid p {
  color: rgb(255, 0, 0);
}

label {
  font-weight: bold;
}

</style>