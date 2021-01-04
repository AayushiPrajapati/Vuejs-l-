<template>
  <the-form v-if="!isShow" @save-data="saveData"></the-form>
  <not-found v-if="notFound"></not-found>
  <button v-if="isShow" @click="gotoForm()">GoTo Form</button>
  <div v-if="isShow">
    <show-details
      v-for="detail in details"
      :key="detail.id"
      :detail="detail"
    ></show-details>
  </div>
</template>

<script>
import TheForm from "./components/TheForm.vue";
import ShowDetails from "./components/ShowDetails.vue";
import NotFound from "./components/NotFound.vue";
export default {
  data() {
    return {
      details: [],
      isShow: false,
      notFound: false,
    };
  },
  provide() {
    return {
      showData: this.gotoDetails,
    };
  },
  components: {
    TheForm,
    ShowDetails,
    NotFound,
  },
  methods: {
    saveData(details, isShow) {
      this.isShow = isShow;
      const detail = {
        id: new Date().toISOString(),
        name: details.name,
        address: details.address,
        gender: details.gender,
        state: details.state,
        bankName: details.bName,
        branchName: details.brName,
        accountNum: details.accNum,
        phoneNum: details.phNum,
        birthDate: details.bod,
        hobbies: details.hobbies,
        email: details.email,
      };
      this.details.push(detail);
    },
    gotoDetails() {
      if (this.details.length == 0) {
        this.notFound = true;
      }
      this.isShow = true;
    },
    gotoForm() {
      this.isShow = false;
      this.notFound = false;
    },
  },
};
</script>

<style>
* {
  font-family: Georgia, "Times New Roman", Times, serif;
}
body {
  box-sizing: border-box;
}

button {
  background: rgb(85, 14, 136);
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 47%;
  margin-top: 10px;
  padding: 10px;
}
</style>
