<template>
    <div>
        <p> Name : {{ name }} </p>
        Interest:
        <ul>
            <li v-for="intr of interest"
            :key="intr">{{ intr }}</li>
        </ul>
        <p> Gender : {{ gender }} </p>
        <p> State : {{ state }} </p>
        <button @click="editData()">edit</button>
        <button @click="deleteData()">delete</button>
    </div>
</template>
<script>
export default {
    data (){
        return{
            isEdit : false,
        };
    },
    emits : ['edit-data','delete-data'],
    props : ['id','name','interest','gender','state'],
    methods : {
        editData(){
            this.isEdit=true;
            this.$emit('edit-data',this.id,this.isEdit);
        },
        deleteData(){
            this.$emit('delete-data',this.id);
        }
    }
}
</script>