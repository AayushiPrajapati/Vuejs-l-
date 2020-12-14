const app = Vue.createApp({
    data (){
        return {
            //visibilityList : false,
            friends : [{
                id : 'manuel',
                name : 'Manuel Lorenz' ,
                phone : '0123 4567 8991' ,
                email : 'manuel@localhost.com',
            },
            {
                id : 'julie' ,
                name : 'Julie Jones',
                phone : ' 09876 543 221',
                email : 'julie@localhost.com',
            },

        ],
        };
    },
    methods :{
        // toggleList(){
        //     this.visibilityList = !this.visibilityList;
        // }
    }
});


app.component('friend-list',{
    template : `
    <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleList()">{{ visibilityList ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="visibilityList">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
    </li>
    `,
    data (){
        return{
            visibilityList : false,
            friend : {
                id : 'manuel',
                name : 'Manuel Lorenz' ,
                phone : '0123 4567 8991' ,
                email : 'manuel@localhost.com',
            },
        };
    },
    methods : {
        toggleList(){
            this.visibilityList = !this.visibilityList;
        }
    }
});

app.mount("#app");