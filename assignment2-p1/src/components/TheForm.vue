<template>
  <form @submit.prevent="">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Welcome</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" :class="{ 'active': currentTab == 1 }" href="#">
              Personal Info <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              :class="{'active': currentTab == 2 }"
              href="#"
            >
              Account Info
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              :class="{ 'active': currentTab == 3 }"
              href="#"
            >
              Contact Details
            </a>
          </li>
        </ul>
      </div>
    </nav>

  
    <!-- Personal details -->
    <section v-if="currentTab == 1">
      <div class="form-group">
        <label for="name"> Name </label>
        <input
          type="text"
          class="form-control"
          id="name"
          @blur="validateName()"
          v-model.trim="details.name"
          placeholder=""
        />
        <p v-if="errors.includes('name')">{{ errors }}</p>
        <!-- <p v-if="validityName == 'invalid'">Required</p> -->
      </div>

      <div class="form-group">
        <label> Hobby: </label>
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" value="Sports" name="hobby" v-model.trim="details.hobbies" >
    </div>
  </div>
  <input type="text" class="form-control" disabled value="Sports">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" value="Cultural" name="hobby" v-model.trim="details.hobbies">
    </div>
  </div>
  <input type="text" class="form-control" disabled  value="Cultural" >
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" value="SocialWork" name="hobby" v-model.trim="details.hobbies" >
    </div>
  </div>
  <input type="text" class="form-control" disabled  value="Social-Work" >
</div>
<p v-if="errors.includes('hobbies')">{{ errors }}</p>
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
        <p v-if="errors.includes('gender')">{{ errors }}</p>
      </div>
      <div class="form-group">
        <label> Birth-Date </label>
        <!-- <datepicker></datepicker> -->
        <flat-pickr v-model.trim="details.bod"></flat-pickr>
        <p v-if="errors.includes('birthdate')">{{ errors }}</p>
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
        <p v-if="errors.includes('state')">{{ errors }}</p>
      </div>
      <!-- <div class="input-group mb-3">
    <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" aria-label="Checkbox for following text input">
    </div>
  </div>
  <input type="text" class="form-control" v-model="details.address" aria-label="Text input with checkbox">
</div> -->
      <div class="form-group">
        <label for="address"> Address </label>
        <textarea
          class="form-control"
          id="address"
          rows="3"
          v-model.trim="details.address"
        ></textarea>
        <p v-if="errors.includes('address')">{{ errors }}</p>
      </div>
    </section>
    <!-- Account details -->
    <section v-if="currentTab == 2">
      <div class="form-group">
        <label for="bname"> Bank Name </label>
        <input
          type="text"
          class="form-control"
          v-model.trim="details.bName"
          id="bname"
          placeholder=""
        />
        <p v-if="errors.includes('bank name')">{{ errors }}</p>
      </div>
      <div class="form-group">
        <label for="brname"> Branch Name </label>
        <input
          type="text"
          class="form-control"
          v-model.trim="details.brName"
          id="brname"
          placeholder=""
        />
        <p v-if="errors.includes('branch name')">{{ errors }}</p>
      </div>
      <div class="form-group">
        <label for="acnum"> Account Number </label>
        <input
          type="text"
          class="form-control"
          v-model.trim="details.accNum"
          id="acnum"
          placeholder=""
        />
        <p v-if="errors.includes('account number')">{{ errors }}</p>
      </div>
    </section>
    <!--  Contact Details -->
    <section v-if="currentTab == 3">
      <div class="form-group">
        <label for="email"> Email address </label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model.trim="details.email"
          placeholder="name@example.com"
        />
        <p v-if="errors.includes('email')">{{ errors }}</p>
      </div>
      <div class="form-group">
        <label for="phnum"> Phone Number </label>
        <input
          type="text"
          v-model.trim="details.phNum"
          class="form-control"
          id="phnum"
        />
        <p v-if="errors.includes('phone number')">{{ errors }}</p>
      </div>
    </section>
    <section v-if="!isShow" class="btn">
      <button
        v-if="currentTab > 1"
        @click="updateTabM()"
        type="button"
        class="btn btn-secondary"
      >
        Prev
      </button>
      <button
        v-if="currentTab < 3"
        @click="updateTabP()"
        type="button"
        class="btn btn-secondary"
      >
        Next
      </button>
      <button
        v-if="currentTab == 3"
        @click="submitData()"
        type="button"
        class="btn btn-secondary"
      >
        Submit
      </button>
    </section>
  </form>
</template>

<script>
// import Datepicker from 'vuejs-datepicker';
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    flatPickr,
  },
  data() {
    return {
      details: {
        name: "",
        address: "",
        email: null,
        gender: "",
        state: "",
        bName: "",
        brName: "",
        accNum: "",
        phNum: "",
        bod: null,
        hobbies:[],
      },
      currentTab: 1,
      TotalTab: 3,
      isShow : false,
      errors :'',
      validityName : 'pending',
    };
  },
  methods: {
    validateName(){
      if(this.details.name==''){
        this.validityName='invalid';
      }
      else{
        this.validityName='valid';
      }
    },
    updateTabP() {
        if(this.currentTab==1){
          if(this.details.name == ''){
            this.errors='** name field is required.';
        return false;
      }
      if(!((/^[a-zA-Z]+$/.test(this.details.name)))){
        this.errors='** only letters are allowed in the name';
        return false;
      }
      if(this.details.hobbies.length === 0){
         this.errors='** Please select anyone hobbies.';
        return false;
      }
      if(this.details.gender==''){
        this.errors='** Please select gender.';
        return false;
      }
      if(this.details.bod==null){
        this.errors='** Please select birthdate.';
        return false;
      }
      if(this.details.state==''){
        this.errors='** Please select state.';
        return false;
      }
      if(this.details.address==''){
        this.errors='** address field is required.';
        return false;
      }
      this.errors='';
        }
      if(this.currentTab==2){
        if(this.details.bName==''){
          this.errors='** bank name is required.';
          return false;
        }
        if(!((/^[a-zA-Z]+$/.test(this.details.bName)))){
        this.errors='** only letters are allowed in the bank name';
        return false;
      } 
        if(this.details.brName ==''){
          this.errors='** branch name is required.';
          return false;
        }
        if(!((/^[a-zA-Z]+$/.test(this.details.brName)))){
        this.errors='** only letters are allowed in the branch name';
        return false;
      }
        if(this.details.accNum == ''){
          this.errors='** account number is required,';
          return false;
        }
        if(isNaN(this.details.accNum)){
          this.errors='** only digits are allowed in the account number';
          return false;
        }
        this.errors='';
      }
      //this.validate();
      this.currentTab += 1;
    },
    updateTabM() {
      this.currentTab -= 1;
    },
    submitData() {
      if(this.details.email==null){
        this.errors='** email is required';
        return false;
      }
      if(this.details.email.indexOf('@')<=0){
        this.errors='** invalid @ position in email';
        return false;
      }
      if((this.details.email.charAt(this.details.email.length-4)!='.')&&(this.details.email.charAt(this.details.email.length-3)!='.')){
        this.errors='** invalid . position in email';
        return false;
      }
      if(this.details.phNum==''){
        this.errors='** phone number is required.';
        return false;
      }
       if(isNaN(this.details.phNum)){
        this.errors='** only numbers are allowed in phone number';
        return false;
      }
       if(this.details.phNum.length!=10){
        this.errors='** only 10 digits are allowed in phone number';
        return false;
      }
      this.isShow =true;
      this.$emit('save-data',this.details,this.isShow);
      this.currentTab=0;
       this.details.name ="";
       this.details.address = "" ;
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

<style scoped>
.form-group {
  box-sizing: border-box;
  margin: 10px 50px 10px 50px;
}
.input-group-text {
  margin-right: 20px;
}

nav {
  background: rgb(85, 14, 136);
}
.navbar .navbar-brand
{
  color: white;
}
.navbar .navbar-nav li a {
 color: white !important;
}
.navbar .navbar-nav li a.active{
    background: white !important;
    color: rgb(85, 14, 136)  !important ;
}
.btn{
    margin-left: 20px;
}
.btn > button{
background:rgb(85, 14, 136)  !important ;
    color:white !important ;
    border : none;
    border-radius: 5px;   
    margin-left: 15px;
    margin-right: 10px;
}
p{
  color: rgb(245, 29, 29);
}
</style>
