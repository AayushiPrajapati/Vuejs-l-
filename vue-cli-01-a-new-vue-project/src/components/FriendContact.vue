<template>
    <section>
        <header><h1>{{ nameN }} - {{ isFavourite  ? 'Favourite' :'' }}</h1></header>
        <button @click="toggleList()">{{ listVisibility ? 'Hide' : 'Show' }} List</button>
        <button @click="toggleFavourite()">Favourite</button>
        <ul v-if="listVisibility">
            <li><strong>Phone : </strong>{{ phoneNumber }}</li>
            <li><strong>Email : </strong>{{ emailAddress }}</li>
        </ul>
        <button @click="$emit('delete',id)">Delete</button>
    </section>    
</template>
<script>
export default {
    // props : [
    //             'nameN',
    //             'phoneNumber',
    //             'emailAddress',
    //             'isFavourite',
    //         ],
    props : {
        id: {
            type :String,
            required : true,
        },
        nameN:{
            type :String,
            required : true
        },
        phoneNumber: {
            type : String,
            required : true,
        },
        emailAddress : {
            type : String,
            required : true,
        },
        isFavourite : {
            type : Boolean,
            required : false,
            default : false,
        }
    },
    //emits :['favourite-friend' ,'delete'],
    emits : {
        'favourite-friend' : function(id){ 
            if(id){
                return true;
            }
            else {
                console.warn("Id is Missing!!");
                return false;
            }
        },
        'delete' : function(id){
            if(id){
                return true;
            }
            else{
                console.warn("Id is Missing!!");
                return false;
            }
        }
    },
    data (){
        return {
            listVisibility : false,
        //    favouriteFriend :this.isFavourite,
        };
    },
    methods : {
        toggleList(){
            this.listVisibility = !this.listVisibility;
        },
        toggleFavourite(){
           // this.favouriteFriend = !this.favouriteFriend;
           this.$emit('favourite-friend',this.id);
        },
        // deleteContact(){
        //     this.$emit('delete',this.id)
        // }
    }
}
</script>