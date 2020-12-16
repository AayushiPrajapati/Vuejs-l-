<template>

<section>
    <div>
        <active-user
            :name="user.name"
            :age="user.age"
        ></active-user>
    </div>
    <div>
        <user-data
             @send-data="showData"
        ></user-data>
    </div>
</section>

</template>

<script>
export default {
    data (){
        return {
            user : {
                name :'Aayushi Prajapati',
                age :21,
            }
        };
    },
    methods : {
        showData(name , age){
        //   this.user.name = name;
        //   this.user.age = +age;    
        this.user = {
            age : +age,
            name : name,
        }
        }
    }
}
</script>

<style>

</style>