<template>
  <the-form></the-form>
  
    <p v-if="isLoading">Is Loading...</p>
    <div v-if=" !isLoading && error">
  <p v-for="err of error" :key="err" >{{ err }}</p>
    </div>
    <p v-else-if=" !isLoading && (!informations || informations.length == 0)">No Data Found</p>
    <div v-if=" !isLoading && informations && (informations.length >= 0)">
  <show-data 
  v-for="info in informations"
  :key="info.id"
  :id="info.id"
  :name="info.name"
  :gender="info.gender"
  :age="info.age"
  :address="info.address"></show-data>
  </div>
</template>

<script>
import TheForm from "./TheForm.vue";
import ShowData from "./ShowData.vue";

export default {
  data() {
    return {
      informations: [],
      error : [],
      isLoading : false,
    };
  },
  components: {
    TheForm,
    ShowData,
  },
  methods: {
    loadData() {
        this.isLoading=true;
        this.error = [],
      fetch(
        "https://information-c6570-default-rtdb.firebaseio.com/information.json"
      )
        .then((response) => {
            this.isLoading = false;
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
            console.log(data)
          const info = [];
          for (const id in data) {
             info.push({
              id,
              name: data[id].name,
              age: data[id].age,
              gender: data[id].gender,
              address: data[id].address,
            });
            this.informations = info;
         // console.log(this.informations.age);
          }  
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted(){
      this.loadData();
  }
};
</script>
