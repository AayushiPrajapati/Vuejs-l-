<template>
    <div>
        <h3>Manage Goals</h3>
        <input type="text" ref='goal' />
        <button @click="setGoal()">Set Goal</button>
        <teleport to="body">
        <error-alert v-if="inputIsInvalid">
            <h2>Input is Invalid..</h2>
            <p>Please Enter valid input..</p>
            <button @click="confirmAlert()">Ok</button>
        </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert';

export default {
    components :{
        ErrorAlert,
    },
    data (){
        return {
            inputIsInvalid : false,
        };
    },
    methods :{
        setGoal(){
            const enteredGoal = this.$refs.goal.value;
            if(enteredGoal === ''){
                this.inputIsInvalid = true;
            }
        },
        confirmAlert(){
            this.inputIsInvalid = false;
        }
    }
}
</script>