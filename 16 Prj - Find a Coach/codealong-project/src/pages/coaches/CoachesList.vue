<template>
   <section>
      filter
   </section>
   <section>
      <div class="controls">
         <button>Refresh coaches</button>
         <router-link to="/register">Register as coach</router-link>
      </div>
      <ul v-if="hasCoaches">
         <li v-for="elm in filteredCoaches" :key="elm.id">{{elm.firstName}}</li>
      </ul>
      <h3 v-else>No coaches found.</h3>
   </section>
</template>


<script>
export default {
   computed: {
      filteredCoaches() {
         return this.$store.getters['coaches/coaches']
      },
      hasCoaches() { return this.$store.getters['coaches/hasCoaches'] }
   }
}
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

</style>