<template>
<base-card>
<base-button
  :mode="addPartStyle"
  @click="switchTab('add-participant')">
  Add Participant
</base-button>
<base-button
    :mode="storePartStyle"
    @click="switchTab('stored-participant')">
    Show Participants
</base-button>
</base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>

</template>

<script>
import StoredParticipant from './StoredParticipant.vue';
import AddParticipant from './AddParticipant.vue';

export default {
     provide(){
        return {
            participants : this.participants,
            addparticipant : this.addParticipant,
        }
    },
    components : {
        StoredParticipant,
        AddParticipant,
    },
    data (){
        return {
            selectedTab : 'stored-participant',
             participants: [
           ],
        };
    },
    computed : {
        storePartStyle(){
           return this.selectedTab === 'stored-participant' ? null : 'flat';
        },
        addPartStyle(){
           return this.selectedTab === 'add-participant' ? null : 'flat';
        },
    },
    methods : {
        switchTab(tab){
            this.selectedTab= tab;
        },
         addParticipant(name,age,interest,type){
            const newParticipant ={
                id : new Date().toISOString(),
                name : name,
                age : age,
                interest : interest,
                type : type,           
                }
                this.participants.unshift(newParticipant);
                this.selectedTab = 'stored-participant';
        },
    }
}
</script>

<style scoped>

</style>