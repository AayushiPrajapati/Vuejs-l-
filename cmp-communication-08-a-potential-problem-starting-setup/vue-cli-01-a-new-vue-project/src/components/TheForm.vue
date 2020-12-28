<template>
<form  @submit.prevent="">
<input type="text" placeholder="EnterName" v-model="name"/>
<input type="number" placeholder="EnterScores" v-model.number="scores"/>
<input type="text-area" row="4" column="8" placeholder="about" v-model="about"/>
<button  @click="addData">add</button>
</form>
</template>

<script>
export default {
    props : ['editableData','isEdit'],
    emits : ['add-data','update-data'],
    data(){
        return{
            id : '',
            name : '',
            scores : '',
            about : '',
          //  isEdit : null,
        };
    },
    methods : {
        addData(){
            this.$emit('add-data',this.name , this.scores ,this.about);
        },
    },
}
</script>