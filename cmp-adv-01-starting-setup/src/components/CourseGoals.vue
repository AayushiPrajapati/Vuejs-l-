<template>
    <div>
        <ul>
            <li
             v-for="goal in goals"
              :key="goal"
              >
              <slot :goal="goal" other-elem="..."></slot></li>
        </ul>
    </div>
</template>

<script>
export default {
    data (){
        return {
            goals: ['goal1' , 'goal2'],
        };
    },
}
</script>