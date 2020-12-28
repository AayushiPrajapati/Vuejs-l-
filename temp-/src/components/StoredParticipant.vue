<template>
 <show-participant
    v-for="participant in participants"
    :key="participant.id"
    :id="participant.id"
    :name="participant.name"
    :age="participant.age"
    :interest="participant.interest"
    :type="participant.type">
</show-participant>
</template>

<script>
import ShowParticipant from './ShowParticipant.vue';

export default {
    inject: ['participants'],
    components : { ShowParticipant},
   // props : ['participants'],
}
</script>