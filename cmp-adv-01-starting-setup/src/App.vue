<template>
  <div>
    <the-header></the-header><!-- 
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotprops">
      <h2>{{ slotprops.goal }}</h2>
      <p>{{ slotprops['other-elem'] }}</p>
      </template>
    </course-goals> -->
    <button @click="setActiveComponent('active-goal')">Active Goal</button>
    <button @click="setActiveComponent('manage-goal')">Manage Goal</button>
    <!-- <active-goal v-if="activeComponent === 'active-goal'"></active-goal>
    <manage-goal  v-if="activeComponent === 'manage-goal'"></manage-goal> -->
    <keep-alive>
    <component :is="activeComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
//import BadgeList from './components/BadgeList.vue';
//import UserInfo from './components/UserInfo.vue';
//import CourseGoals from './components/CourseGoals.vue';
import ActiveGoal from './components/ActiveGoals.vue';
import ManageGoal from './components/ManageGoals.vue';
export default {
  components :  {
    TheHeader,
    ActiveGoal,
    ManageGoal,
  },
  data() {
    return {
      activeComponent :  'active-goal',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods : {
    setActiveComponent(cmp){
      this.activeComponent = cmp;
    }
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>