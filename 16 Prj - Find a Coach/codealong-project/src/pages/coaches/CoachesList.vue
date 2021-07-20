<template>
   <section>
      filter
   </section>
   <section>
      <div class="controls">
         <button>Refresh coaches</button>
         <router-link to="/register">Register as coach</router-link>
      </div>
      <ul>list</ul>
   </section>
</template>


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