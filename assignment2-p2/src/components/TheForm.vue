<template>
  <form @submit.prevent="">
    <the-navbar :currentTab="currentTab"></the-navbar>

    <!-- Personal details -->
    <section v-if="currentTab == 1">
      <personal-details @update-tabplus="updateTabP"></personal-details>
    </section>

    <!-- Account details -->
    <section v-if="currentTab == 2">
      <account-details
        @update-tabpluss="updateTabP"
        @update-tabminus="updateTabM"
      ></account-details>
    </section>

    <!--  Contact Details -->
    <section v-if="currentTab == 3">
      <contact-details
        @update-tabminus="updateTabM"
        @update-tabsubmit="submitData"
      ></contact-details>
    </section>
  </form>
</template>

<script>
import TheNavbar from "./TheNavbar.vue";
import PersonalDetails from "./PersonalDetails.vue";
import AccountDetails from "./AccountDetails.vue";
import ContactDetails from "./ContactDetails.vue";
export default {
  provide() {
    return {
      details: this.details,
      currentTab: this.currentTab,
    };
  },
  components: {
    TheNavbar,
    PersonalDetails,
    AccountDetails,
    ContactDetails,
  },
  emits: ["save-data"],
  data() {
    return {
      details: {
        name: "",
        address: "",
        email: "",
        gender: "",
        state: "",
        bName: "",
        brName: "",
        accNum: "",
        phNum: "",
        bod: null,
        hobbies: [],
      },
      currentTab: 1,
      TotalTab: 3,
      isShow: false,
    };
  },
  methods: {
    updateTabP() {
      this.currentTab += 1;
    },
    updateTabM() {
      this.currentTab -= 1;
    },
    submitData() {
      this.isShow = true;
      this.$emit("save-data", this.details, this.isShow);
      this.currentTab = 0;
      this.details.name = "";
      this.details.address = "";
      this.details.email = "";
      this.details.gender = "";
      this.details.state = "";
      this.details.bName = "";
      this.details.brName = "";
      this.details.accNum = "";
      this.details.phNum = "";
      this.details.bod = null;
    },
  },
};
</script>
