<template>
  <div class="form-group">
    <label for="name"> Name </label>
    <input
      type="text"
      class="form-control"
      id="name"
      autocomplete="off"
      @blur="validateName()"
      v-model.trim="details.name"
      placeholder=""
    />
    <!-- <p v-if="errors.includes('name')">{{ errors }}</p> -->
    <p v-if="validityName == 'required'">** name property Required</p>
    <p v-if="validityName == 'invalid'">** name property must be letters</p>
  </div>

  <div class="form-group">
    <label> Hobby: </label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input
            type="checkbox"
            value="Sports"
            name="hobby"
            v-model.trim="details.hobbies"
          />
        </div>
      </div>
      <input type="text" class="form-control" disabled value="Sports" />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input
            type="checkbox"
            value="Cultural"
            name="hobby"
            v-model.trim="details.hobbies"
          />
        </div>
      </div>
      <input type="text" class="form-control" disabled value="Cultural" />
    </div>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <input
            type="checkbox"
            value="SocialWork"
            name="hobby"
            v-model.trim="details.hobbies"
          />
        </div>
      </div>
      <input type="text" class="form-control" disabled value="Social-Work" />
    </div>
    <!-- <p v-if="errors.includes('hobbies')">{{ errors }}</p> -->
    <p v-if="validityHobbies == 'required'">** Select atleast one hobby</p>
    <p></p>
  </div>

  <div class="form-group">
    <div class="input-group-prepend">
      <div class="input-group-text">
        <label for="gender"> Male: </label>
        <input
          type="radio"
          name="gender"
          id="male"
          value="male"
          v-model.trim="details.gender"
          aria-label="Radio button for following text input"
        />
      </div>
      <div class="input-group-text">
        <label for="gender"> Female: </label>
        <input
          type="radio"
          name="gender"
          id="female"
          value="female"
          v-model.trim="details.gender"
          aria-label="Radio button for following text input"
        />
      </div>
    </div>
    <!-- <p v-if="errors.includes('gender')">{{ errors }}</p> -->
    <p v-if="validityGender == 'required'">** please select gender</p>
  </div>
  <div class="form-group">
    <label> Birth-Date </label>
    <!-- <datepicker></datepicker> -->
    <flat-pickr
      v-model.trim="details.bod"
      @onChange="validateBOD()"
    ></flat-pickr>
    <!-- <p v-if="errors.includes('birthdate')">{{ errors }}</p> -->
    <p v-if="validityBOD == 'required'">** birthdate field Required</p>
    <p v-if="validityBOD == 'invalid'">** invalid birthDate</p>
  </div>

  <div class="form-group">
    <label for="state"> State </label>
    <select class="form-control" id="state" v-model.trim="details.state">
      <option>Gujrat</option>
      <option>Maharashtra</option>
      <option>Punjab</option>
      <option>Rajasthan</option>
      <option>MadhyaPradesh</option>
    </select>
    <!-- <p v-if="errors.includes('state')">{{ errors }}</p> -->
    <p v-if="validityState == 'required'">** please select state</p>
  </div>
  <div class="form-group">
    <label for="address"> Address </label>
    <textarea
      class="form-control"
      id="address"
      rows="3"
      @blur="validateAddress()"
      v-model.trim="details.address"
    ></textarea>
    <!-- <p v-if="errors.includes('address')">{{ errors }}</p> -->
    <p v-if="validityAddress == 'required'">** address field Required</p>
  </div>
  <div class="btn">
    <button
      v-if="currentTab < 3"
      @click="updateTabP()"
      type="button"
      class="btn btn-secondary"
    >
      Next
    </button>
  </div>
</template>

<script>
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  emits: ["update-tabplus"],
  components: {
    flatPickr,
  },
  inject: ["details", "currentTab"],

  data() {
    return {
      validityName: "pending",
      validityAddress: "pending",
      validityBOD: "pending",
      validityHobbies: "pending",
      validityState: "pending",
      validityGender: "pending",
    };
  },
  methods: {
    updateTabP() {
      const resName = this.validateName();
      const resBirthDate = this.validateBOD();
      const resGender = this.validateGender();
      const resHobbies = this.validateHobbies();
      const resState = this.validateState();
      const resAdd = this.validateAddress();
      if (resName == false) {
        return false;
      }
      if (resHobbies == false) {
        return false;
      }
      if (resGender == false) {
        return false;
      }
      if (resState == false) {
        return false;
      }
      if (resBirthDate == false) {
        return false;
      }
      if (resAdd == false) {
        return false;
      }
      this.$emit("update-tabplus");
    },
    validateName() {
      console.log("nm");
      if (this.details.name == "") {
        this.validityName = "required";
        return false;
      } else if (!/^[a-zA-Z]+$/.test(this.details.name)) {
        this.validityName = "invalid";
        return false;
      } else {
        this.validityName = "valid";
      }
    },
    validateHobbies() {
      if (this.details.hobbies.length === 0) {
        this.validityHobbies = "required";
        return false;
      } else {
        this.validityHobbies = "valid";
      }
    },
    validateGender() {
      if (this.details.gender == "") {
        this.validityGender = "required";
        return false;
      } else {
        this.validityGender = "valid";
      }
    },
    validateState() {
      if (this.details.state == "") {
        this.validityState = "required";
        return false;
      } else {
        this.validityState = "valid";
      }
    },
    validateAddress() {
      if (this.details.address == "") {
        this.validityAddress = "required";
        return false;
      } else {
        this.validityAddress = "valid";
      }
    },
    validateBOD() {
      const selectDate = new Date(this.details.bod).toLocaleDateString();
      const currentDate = new Date().toLocaleDateString();
      const arr1 = selectDate.split("/");
      const arr2 = currentDate.split("/");

      if (this.details.bod == null) {
        this.validityBOD = "required";
        return false;
      } else if (this.details.bod.trim() == "") {
        this.validityBOD = "required";
        return false;
      } else if (+arr1[2] > +arr2[2]) {
        this.validityBOD = "invalid";
        return false;
      } else if (+arr1[2] == +arr2[2]) {
        if (+arr1[0] > +arr2[0]) {
          this.validityBOD = "invalid";
          return false;
        }
        if (+arr1[0] == +arr2[0]) {
          if (+arr1[1] > +arr2[1]) {
            this.validityBOD = "invalid";
            return false;
          } else {
            this.validityBOD = "valid";
            return true;
          }
        } else {
          this.validityBOD = "valid";
          return true;
        }
      } else {
        this.validityBOD = "valid";
        return true;
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
