<template>
  <base-card>
    <base-button
      @click="setSelectedTab('resources-list')"
      :mode="listButtonMode"
      >List of resources</base-button
    >
    <base-button @click="setSelectedTab('add-resource')" :mode="addButtonMode"
      >Add new resource</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>


<script>
import ResourcesList from "./ResourcesList.vue";
import AddResource from "./AddResource.vue";

export default {
  components: { ResourcesList, AddResource },
  data: () => ({
    selectedTab: "resources-list",
    storedResources: [
      {
        id: "official-guide",
        title: "Official Guide",
        description: "The official VueJS documentation",
        link: "https://vuejs.org",
      },
      {
        id: "google",
        title: "Google",
        description: "Learn to google...",
        link: "https://google.com",
      },
    ],
  }),
  provide() {
    return { resources: this.storedResources };
  },
  //   provide: () => ({
  //      resources: this.storedResources       => cannot read property storedResources of undefined => this is undefined because of arrow function
  //   }),
  computed: {
     listButtonMode() {return this.selectedTab === 'resources-list' ? null : 'flat'}
     addButtonMode() {return this.selectedTab === 'add-resource' ? null : 'flat'}
  }
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>


<style scoped>
</style>