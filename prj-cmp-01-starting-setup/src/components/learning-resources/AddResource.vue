<template>
<base-dialog v-if="isEmpty" title="invalid Input"  @close="errorHandle()" >
  <template #default>
      <p> You miss atleast one Input To Enter.</p>
      <p>  Please Enter  some characters all the input . </p>
  </template>
  <template #controls>
    <base-button @click="errorHandle()">Okay.</base-button>
  </template>
</base-dialog>
    <base-card >
    <form @submit.prevent="saveData()">
        <div class="form-control">
            <label for="title"></label>
            <input type="text" name="title" id="title" placeholder="Enter Title" ref="title">
        </div>
        <div class="form-control">
            <label for="description"></label>
            <textarea name="description" id="description" cols="10" rows="3" placeholder="Write Description" ref="description"></textarea>
        </div>
        <div class="form-control">
            <label for="link"></label>
            <input type="url" name="link" id="link" placeholder="Put URL" ref="link">
        </div>
        <div>
            <base-button type="submit"> Add Resource</base-button>
        </div>
    </form>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            isEmpty : false,
        };
    },
    inject :['addResources'],
    methods : {
      saveData(){
          const enteredTitle =this.$refs.title.value;
          const enteredDescription =this.$refs.description.value;
          const enteredlink =this.$refs.link.value;

          if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredlink.trim() === ''){
              this.isEmpty = true;
              return;
          }

          this.addResources(enteredTitle ,enteredDescription,enteredlink);
      },
      errorHandle(){
          this.isEmpty = false;
      },
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>