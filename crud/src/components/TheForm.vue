<template>
<form @submit.prevent="">
    <div>
Name:
    <input type="name" name="name" id="name" v-model="name"/>
</div>
Hobby:
<div>
Sports:<input type="checkbox" name="interest" value="sports" v-model="interest"/>
Music:<input type="checkbox" name="interest" value="music" v-model="interest"/>
Dance:<input type="checkbox" name="interest" value="dance" v-model="interest"/>
</div>
Gender
<div>
    Male:<input type="radio" name="gender" value="male" v-model="gender"/>
    Female:<input type="radio" name="gender" value="female" v-model="gender"/>
</div>
State:
<div>
    <select name="state" v-model="state">
        <option value="gujrat"> Gujarat </option>
        <option value="Maharashtra"> Maharashtra</option>
        <option value="Punjab">Punjab</option>
    </select>
</div>
<div>
    <button @click="addData()">Add Data</button>
</div>
</form>
</template>

<script>
export default {
    data(){
        return{
            name : '',
            interest : [],
            gender : '',
            state : '',
        };
    },
    methods:{
        addData(){
            console.log(this.interest);
            this.$emit('add-data',this.name,this.interest,this.gender,this.state);
            this.name='',
            this.interest=[];
            this.gender='';
            this.state='';
        }
    }
}
</script>