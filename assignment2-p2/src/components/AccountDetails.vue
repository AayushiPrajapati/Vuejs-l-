<template>
  <div class="form-group">
    <label for="bname"> Bank Name </label>
    <input
      type="text"
      class="form-control"
      @blur="validateBName()"
      v-model.trim="details.bName"
      id="bname"
      placeholder=""
    />
    <!-- <p v-if="errors.includes('bank name')">{{ errors }}</p> -->
    <p v-if="validityBName == 'required'">** bank name field Required</p>
    <p v-if="validityBName == 'invalid'">** bank name must be letters</p>
  </div>
  <div class="form-group">
    <label for="brname"> Branch Name </label>
    <input
      type="text"
      class="form-control"
      @blur="validateBrName()"
      v-model.trim="details.brName"
      id="brname"
      placeholder=""
    />
    <!-- <p v-if="errors.includes('branch name')">{{ errors }}</p> -->
    <p v-if="validityBrName == 'required'">** branch name field Required</p>
    <p v-if="validityBrName == 'invalid'">** branch name must be letters</p>
  </div>
  <div class="form-group">
    <label for="acnum"> Account Number </label>
    <input
      type="text"
      class="form-control"
      v-model.trim="details.accNum"
      @blur="validateAccNum()"
      id="acnum"
      placeholder=""
    />
    <!-- <p v-if="errors.includes('account number')">{{ errors }}</p> -->
    <p v-if="validityAccNum == 'required'">** account num field Required</p>
    <p v-if="validityAccNum == 'invalid'">** account num must be digits</p>
  </div>
  <div class="btn">
    <button @click="updateTabM()" type="button" class="btn btn-secondary">
      Prev
    </button>
    <button @click="updateTabP()" type="button" class="btn btn-secondary">
      Next
    </button>
  </div>
</template>

<script>
export default {
  inject: ["details", "currentTab"],
  emits: ["update-tabpluss", "update-tabminus"],
  data() {
    return {
      validityBName: "pending",
      validityBrName: "pending",
      validityAccNum: "pending",
    };
  },
  methods: {
    validateBName() {
      if (this.details.bName == "") {
        this.validityBName = "required";
        return false;
      } else if (!/^[a-zA-Z]+$/.test(this.details.bName)) {
        this.validityBName = "invalid";
        return false;
      } else {
        this.validityBName = "valid";
      }
    },
    validateBrName() {
      if (this.details.brName == "") {
        this.validityBrName = "required";
        return false;
      } else if (!/^[a-zA-Z]+$/.test(this.details.brName)) {
        this.validityBrName = "invalid";
        return false;
      } else {
        this.validityBrName = "valid";
      }
    },
    validateAccNum() {
      if (this.details.accNum == "") {
        this.validityAccNum = "required";
        return false;
      } else if (isNaN(this.details.accNum)) {
        this.validityAccNum = "invalid";
        return false;
      } else {
        this.validityAccNum = "valid";
      }
    },
    updateTabM() {
      this.$emit("update-tabminus");
    },
    updateTabP() {
      const resBrName = this.validateBrName();
      const resBName = this.validateBName();
      const resAccNum = this.validateAccNum();
      if (resBName == false) {
        return false;
      } else if (resBrName == false) {
        return false;
      } else if (resAccNum == false) {
        return false;
      } else {
        this.$emit("update-tabpluss");
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
