<template>
  <div class="form-group">
    <label for="email"> Email address </label>
    <input
      type="email"
      class="form-control"
      id="email"
      @blur="validateEmail()"
      v-model.trim="details.email"
      placeholder="name@example.com"
    />
    <!-- <p v-if="errors.includes('email')">{{ errors }}</p> -->
    <p v-if="validityEmail == 'required'">** email field Required</p>
    <p v-if="validityEmail == 'invalid@'">** invalid @ position in email</p>
    <p v-if="validityEmail == 'invalid.'">** invalid . position in email</p>
  </div>
  <div class="form-group">
    <label for="phnum"> Phone Number </label>
    <input
      type="text"
      @blur="validatePhNum()"
      v-model.trim="details.phNum"
      class="form-control"
      id="phnum"
    />
    <!-- <p v-if="errors.includes('phone number')">{{ errors }}</p> -->
    <p v-if="validityPhNum == 'required'">** phone number field Required</p>
    <p v-if="validityPhNum == 'invalid'">** only numbers are allowed</p>
    <p v-if="validityPhNum == 'invalidD'">** in number must be 10 digits</p>
  </div>
  <div class="btn">
    <button @click="updateTabM()" type="button" class="btn btn-secondary">
      Prev
    </button>
    <button @click="updateTabP()" type="button" class="btn btn-secondary">
      Submit
    </button>
  </div>
</template>
<script>
export default {
  inject: ["details", "currentTab"],
  emits: ["update-tabminus", "update-tabsubmit"],
  data() {
    return {
      validityEmail: "pending",
      validityPhNum: "pending",
    };
  },
  methods: {
    updateTabM() {
      this.$emit("update-tabminus");
    },
    updateTabP() {
      const resEmail = this.validateEmail();
      const resPhNum = this.validatePhNum();
      if (resEmail == false) {
        return false;
      }
      if (resPhNum == false) {
        return false;
      }
      this.$emit("update-tabsubmit");
    },
    validateEmail() {
      if (this.details.email == "") {
        this.validityEmail = "required";
        return false;
      } else if (this.details.email.indexOf("@") <= 0) {
        this.validityEmail = "invalid@";
        return false;
      } else if (
        this.details.email.charAt(this.details.email.length - 4) != "." &&
        this.details.email.charAt(this.details.email.length - 3) != "."
      ) {
        this.validityEmail = "invalid.";
        return false;
      } else {
        this.validityEmail = "valid";
      }
    },
    validatePhNum() {
      if (this.details.phNum == "") {
        this.validityPhNum = "required";
        return false;
      } else if (isNaN(this.details.phNum)) {
        this.validityPhNum = "invalid";
        return false;
      } else if (this.details.phNum.length != 10) {
        this.validityPhNum = "invalidD";
        return false;
      } else {
        this.validityPhNum = "valid";
      }
    },
  },
};
</script>
<style scoped>
.form-group {
  box-sizing: border-box;
  margin: 10px 50px 10px 50px;
}
.input-group-text {
  margin-right: 20px;
}

.btn {
  margin-left: 20px;
}
.btn > button {
  background: rgb(85, 14, 136) !important ;
  color: white !important ;
  border: none;
  border-radius: 5px;
  margin-left: 15px;
  margin-right: 10px;
}
p {
  color: rgb(245, 29, 29);
}
</style>
