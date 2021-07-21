<template>
   <section>
      <filter-list @change-filter="setFilters"></filter-list>
   </section>
   <section>
      <base-card>
         <div class="controls">
            <base-button mode="outline">Refresh coaches</base-button>
            <base-button link to="/register" v-if="!isCoach">Register as Coach</base-button>
         </div>
         <ul v-if="hasCoaches">
            <CoachItem v-for="elm in filteredCoaches" :key="elm.id" :coach="elm" />
         </ul>
         <h3 v-else>No coaches found.</h3>
      </base-card>
   </section>
</template>


<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
import FilterList from '../../components/coaches/FilterList.vue'

export default {
   components: { CoachItem, FilterList },
   data: () => ({
      activeFilters: {
         frontend: true,
         backend: true,
         career: true
      }
   }),
   computed: {
      filteredCoaches() {
         const coaches = this.$store.getters['coaches/coaches']
         return coaches.filter(elm => {
            if (this.activeFilters.frontend && elm.areas.includes('frontend')) return true;
            if (this.activeFilters.backend && elm.areas.includes('backend')) return true;
            if (this.activeFilters.career && elm.areas.includes('career')) return true;
            return false;
         })
      },
      hasCoaches() { return this.$store.getters['coaches/hasCoaches'] },
      isCoach() { return this.$store.getters['coaches/isCoach'] }
   },
   methods: {
      setFilters(updatedFilters) { this.activeFilters = updatedFilters }
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