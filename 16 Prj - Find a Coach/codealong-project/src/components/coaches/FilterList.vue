<template>
   <base-card>
      <h2>Find your coach</h2>
      <span class="filter-option">
         <input type="checkbox" name="frontend" id="frontend" checked @change="setOneFilter" >
         <label for="frontend">Frontend</label>
         <input type="checkbox" name="backend" id="backend" checked @change="setOneFilter" >
         <label for="backend">Backend</label>
         <input type="checkbox" name="career" id="career" checked @change="setOneFilter" >
         <label for="career">Career</label>
      </span>
   </base-card>
</template>


<script>
export default {
   emits: ['change-filter'],
   data: () => ({
      filters: {
         frontend: true,
         backend: true,
         career: true
      }
   }),
   methods: {
      setOneFilter(event) {
         const filterKey = event.target.id
         const filterValue = event.target.checked
         const updatedFilters = {...this.filters, [filterKey]: filterValue}
         this.filters = updatedFilters
         this.$emit('change-filter', updatedFilters)
      }
   }
}
</script>


<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>