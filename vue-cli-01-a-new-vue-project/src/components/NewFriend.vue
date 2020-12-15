<template>
    <form @submit.prevent="submitContact()">
        <div>
            <label> Name :</label>
            <input type="text" v-model="name"/>
        </div>
        <div>
            <label> Phone-Number :</label>
            <input type="text" v-model="phone"/>
        </div>
        <div>
            <label> Email-Address :</label>
            <input type="text" v-model="address"/>
        </div>
        <div>
            <button>Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits :['add-friend'],
    data (){
        return {
            name :'',
            phone:'',
            address:'',
        };
    },
    methods : {
        submitContact(){
            this.$emit('add-friend',this.name,this.phone,this.address);
            this.name='';
            this.phone='';
            this.address='';
        }
    }
}
</script>