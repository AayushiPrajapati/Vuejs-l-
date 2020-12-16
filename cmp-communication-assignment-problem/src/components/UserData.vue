<template>
    <div>
        <form @submit.prevent="sendData">
            <div>
                <label> Name: </label>
                <input type="text" v-model="name"/>
            </div>
              <div>
                <label> Age: </label>
                <input type="text" v-model="age"/>
            </div>
            <div>
                <button> Display Data </button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data (){
        return{
            name : '',
            age : '',
        };
    },
    methods : {
        sendData(){
            this.$emit('send-data',this.name,this.age);
        }
    }
}
</script>