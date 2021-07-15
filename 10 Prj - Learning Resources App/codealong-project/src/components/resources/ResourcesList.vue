<template>
  <ul>
    <ResourceItem v-for="elm in resources" :key="elm.id" :resource="elm" />
  </ul>
</template>


<script>
import ResourceItem from "./ResourceItem.vue";

export default {
  components: {
    ResourceItem,
  },
  inject: ["resources"],
};
</script>


<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>