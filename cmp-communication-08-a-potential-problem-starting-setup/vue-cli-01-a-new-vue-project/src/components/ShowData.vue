
<template>
<p>{{ name }}</p>
<p>{{ scores }}</p>
<p>{{ about }}</p>
<button @click="edit()">update</button>
</template>

<script>
export default {
    data(){
        return{
            isEdit : false,         
        };
    },
    emits :['edit-data'],
    props : ['id','name','scores','about','editableData'],
    methods : {
        edit(){
            this.isEdit = true;
          //  this.name = this.editableData.name;
          //  this.scores = this.editableData.scores;
          //  this.about = this.editableData.about;
            this.$emit('edit-data',this.id,this.isEdit);
        }
    }

}
</script>
