<template>
    <the-form v-if="!isEdit"
     @add-data="AddData">
     </the-form>

    <the-forms v-if="isEdit"
    :isEdit='isEdit'
    :editableInfo="editableInfo"
    @update-data="updateData"
    ></the-forms>
    <show-data
    v-for="info in infos"
    :key="info.id"
    :id="info.id"
    :name="info.name"
    :interest="info.interest"
    :gender="info.gender"
    :state="info.state"
    @edit-data="editData"
    @delete-data="deleteData"></show-data>
</template>
<script>
import TheForms from './TheForms.vue';
import TheForm from './TheForm.vue';
import ShowData from './ShowData.vue';
export default {
  components: {
      ShowData,
      TheForm,
      TheForms,
  } ,
  data () {
      return{
          isEdit: false,
          editableInfo : null,
          infos : [],
      };
  },
  methods :{
      AddData(name,interest,gender,state){
          const newData={
              id: new Date().toISOString(),
              name:name,
              interest:interest,
              gender:gender,
              state:state
          }
          this.infos.unshift(newData);
      },
      editData(id,isEdit){
          this.isEdit=isEdit;
          const editableInfo=this.infos.find((inf)=>inf.id == id);
          this.editableInfo = editableInfo;
      },
      updateData(id,name,interest,gender,state,isEdit){
          console.log(id);
          const newData={
              id: id,
              name:name,
              interest:interest,
              gender:gender,
              state:state
          }
          const idx= this.infos.findIndex((inf)=>inf.id==id);
          this.infos.splice(idx,1,newData);
          this.isEdit=isEdit;
      },
      deleteData(id){
          const idx= this.infos.findIndex((inf)=>inf.id == id);
          this.infos.splice(idx,1);
      }
  }
}
</script>