<template>
    <form @submit.prevent="" @load="loadData()">
    <div>
<input type="text" placeholder="EnterName" :value="editableData.name" ref="name" />
<input type="number" placeholder="EnterScores" :value="editableData.scores" ref="scores" />
<input type="text-area" row="4" column="8" placeholder="about" :value="editableData.about" ref="about"/>
<button @click="update()">update-save</button>
</div>
</form>

</template>
<script>
export default {
  props : ['editableData'],
    methods :{
        update(){
             const eid = this.editableData.id;
             const ename = this.$refs.name.value;
             const escores = this.$refs.scores.value;
             const eabout = this.$refs.about.value;
            this.$emit('update-data',eid,ename , escores ,eabout);
        }
    }
}
</script>