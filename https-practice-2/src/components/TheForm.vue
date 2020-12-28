<template>
    <section>
        <div>
            <label for=""> Name: </label>
            <input type="text" name="name" v-model="name" />
        </div>
         <div>
            <label for="age"> Age: </label>
            <input type="number" name="age" v-model.number="age" />
        </div>
         <div>
            <label for="gender"> Gender: </label>
            <input type="radio" name="gender" value="male" v-model="gender" />  Male
            <input type="radio" name="gender" value="female" v-model="gender" />  Female
        </div>
        <div>
            <label for="address"></label>
            <textarea name="address" cols="23" rows="4" v-model="address">Address</textarea>
        </div>
         <p v-if="error">{{ error }}</p>
        <div>
            <button @click="addData()">Add</button>
        </div>
       
    </section>
</template>

<script>
export default {
    data (){
        return{
            name : '',
            age : '',
            gender :'',
            address : '',
            error : '',
        } ;
    },
    methods : {
        addData(){
            fetch('https://information-c6570-default-rtdb.firebaseio.com/information.json',{
                method : 'POST',
                headers : {
                    'Content-Type' : '/applicaton/json'
                },
                body : JSON.stringify({
                    name : this.name,
                    age : this.age,
                    gender : this.gender,
                    address : this.address,
                })
            }).then((response)=>{
                if(response.ok){
                    //.....
                }
                else{
                    throw new Error("something Went Wrong");
                }
            }).catch((error)=>{
                this.error=error.message;
            });
            /* console.log("hii..");
            console.log(this.address); */
            this.name= '';
            this.age= '';
            this.gender = '';
            this.address= '';
        }
        // addData(){
        //     this.$emit('add-data',this.name, this.age, this.gender, this.address);
        // },
        
    },
}
</script> 