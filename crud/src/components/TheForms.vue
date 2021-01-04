<template>
    <form @submit.prevent="">
    <div>
Name:
    <input type="name" name="name" id="name" v-model="name"/>
</div>
Interest:
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
    <button @click="update()">Update Data</button>
</div>
</form>

</template>
<script>
export default {
    data(){
        return{
            id :  this.editableInfo.id,
            name : this.editableInfo.name,
            state : this.editableInfo.state,
            gender : this.editableInfo.gender,
            interest : this.editableInfo.interest,            
        };
    },
    emits : ['update-data','isEdit'],
    props : ['editableInfo'],
    methods : {
        update(){
            this.isEdit=false;
            this.$emit('update-data',this.id,this.name,this.interest,this.gender,this.state,this.isEdit);
            this.name ='';
            this.interest=[];
            this.gender='';
            this.state='';
            
        },
    },
}
</script>