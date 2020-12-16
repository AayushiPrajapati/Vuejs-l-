<template>
<section>
    <new-friend @add-friend="addContact"></new-friend>
    <h2> Friends' List</h2>
    <ul>
        <li>
            <friend-contact
                v-for="friend in friends"
                :key="friend.id"
                :id="friend.id"
                :name-n="friend.name"
                :phone-number="friend.phone"
                :email-address="friend.email"
                :is-favourite="friend.isFavourite"
                @favourite-friend="toggleFavourite"
                @delete="deleteContact"
            ></friend-contact>
        </li>
    </ul>
</section>
</template>
<script>
//import NewFriend from './components/NewFriend.vue';
export default {
  //components: { NewFriend },
    data (){
        return {
            friends : [{
                id: 'aayushi',
                name : 'Aayushi Prajapati',
                phone : '989887765',
                email : 'aayushi3131@gmail.com',
                isFavourite : true,
            },
            {
                id : 'sujal' ,
                name : 'Sujal Prajapati',
                phone : '786709755',
                email : 'sujal12@gmail.com',
                isFavourite : false,
            },
            ],
        };
    },
    methods : {
        toggleFavourite(fid){
            const FId=this.friends.find(friend => friend.id === fid);
            FId.isFavourite = !FId.isFavourite;
        },
        addContact(name,phone,email){
            const newFriendobj={
                id : new Date().toISOString(),
                name : name,
                phone : phone,
                email : email,
                isFavourite : true,
            }
            this.friends.push(newFriendobj);
        },
        deleteContact(id){
            this.friends = this.friends.filter(friend => friend.id !=id)
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: #1b995e;
  color: white;
  text-align: center;
}

#app {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

#app p {
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}


#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input{
    font : inherit;
    padding : 0.15 rem;
}
#app label{

    font-weight: bold;
    margin-right: 1 rem;
    width : 7 rem;
    display: inline-block;
}
#app form div{
    margin : 1rem 0;
}

</style>