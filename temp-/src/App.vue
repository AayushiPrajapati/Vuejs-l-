<template>
<the-header></the-header>
<the-participant></the-participant>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheParticipant from './components/TheParticipant.vue'; 

export default {
    components : {
       TheParticipant,
       TheHeader,
      },
}
    
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 2px;
}

</style>