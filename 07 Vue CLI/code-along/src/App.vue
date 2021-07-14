<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <new-friend @add-contact="addContact"></new-friend>
  <ul>
    <!--<FriendContact v-for="elm in friends" v-bind:friend-name="elm.name" v-bind:friend-phone="elm.phone" v-bind:friend-email="elm.email" :key="elm.id"/>-->
    <FriendContact v-for="elm in friends" :key="elm.id" :friend="elm" @toggle-favourite="toggleFavouriteStatus" @delete="deleteContact"/>
  </ul>
</template>



<script>
import FriendContact from './components/FriendContact.vue';

export default {
  name: "App",
  //Components configured like this are only available locally
  components: {
    FriendContact,
  },
  data: () => ({
    friends: [
      {id: "Manuel", name: "Manuel Lopez", phone: "123 456 789", email: "app@app.com", isFav: true},
      {id: "Lola", name: "Lola Bunny", phone: "098 765 432", email: "lola@bunny.com", isFav: false},
    ]
  }),
  methods: {
    toggleFavouriteStatus(friendId) {
      const selectedFriend = this.friends.find(elm => elm.id === friendId)
      selectedFriend.isFav = !selectedFriend.isFav
    },
    addContact(name, phone, email) {
      const contact = {id: new Date().toISOString, name: name, phone: phone, email: email, isFav: false}
      this.friends.unshift(contact)
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter(elm => elm.id !== friendId)
    }
  }
};
</script>



<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li, form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
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
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>
