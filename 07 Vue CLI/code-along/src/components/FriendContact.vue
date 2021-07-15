<template>
  <li>
    <h2>{{friend.name}}{{friend.isFav ? ' - Fav' : ''}}</h2>
    <button @click="toggleFavourite">{{friend.isFav ? 'Remove' : 'Make'}} favourite</button>
    <button @click="toggleDetails">{{detailsVisible ? 'Hide' : 'Show'}} details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong>{{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
    <button @click="$emit('delete', friend.id)">Delete</button>
  </li>
</template>


<script>
export default {
  name: 'FriendContact',
  //props: ['friend'],
  props: {
    friend: {type: Object, required: true}
  },
  emits: ['toggle-favourite', 'delete'],
  // emits: {
  //   'toggle-favourite': id => {
  //     if (id) { return true }
  //     else { console.warn('toggle-favourite id is missing'); return false }
  //   }
  // },
  data: () => ({
    detailsVisible: false,
    }),
  methods: {
    toggleDetails() {this.detailsVisible =!this.detailsVisible},
    toggleFavourite() {this.$emit('toggle-favourite', this.friend.id)}
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
