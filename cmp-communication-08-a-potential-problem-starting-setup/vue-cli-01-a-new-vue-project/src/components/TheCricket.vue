<template>
<the-form v-if="!isEdit"
:editableData="editableData" 
:isEdit="isEdit"
 @add-data="AddData"
 @update-data="UpdateData">
 </the-form>
 <the-forms v-if="isEdit"
  :editableData="editableData" 
  @update-data="UpdateData">
  </the-forms>
<show-data 
v-for="cricket in crickets"
 :key="cricket.id"
 :id="cricket.id"
 :name="cricket.name"
 :scores="cricket.scores"
 :about="cricket.about"
 :editableData="editableData"
 @edit-data="editData"
></show-data>

</template>

<script>
import ShowData from './ShowData.vue';
import TheForm from './TheForm.vue';
import TheForms from './TheForms.vue';
export default {
  //  emits : ['update-data'],
    components : {
        ShowData,
        TheForm,
        TheForms,
    },
    data (){
        return{
            editableData : null,
            isEdit : false,
            crickets: [{
                id : "abc",
                name : "virat",
                scores : 345,
                about : "captain",
            },
            {
                id : "xyz",
                name : "rohit",
                scores : 389,
                about : "vice-captain",
            },
            ],
        };
    },
    methods : {
        AddData(name , scores , about){
            const newData ={
                id : new Date().toString(),
                name : name,
                scores : scores,
                about : about
            }
            this.crickets.unshift(newData);
        },
        editData(id,isEdit){
            this.isEdit = isEdit;
            
          const findCricket =  this.crickets.find((cricket)=>cricket.id == id);
          this.editableData = findCricket;
         console.log(this.isEdit);
          
        },
        UpdateData(id,name,scores,about){
            const upData = {
                id : id,
                name : name,
                scores : scores,
                about : about
            }
            const idx=this.crickets.findIndex((cricket) => cricket.id == id);
            this.crickets.splice(idx,1,upData);
        }
    },
}
</script>

<style scoped></style>