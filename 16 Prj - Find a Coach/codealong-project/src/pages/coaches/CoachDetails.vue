<template>
   <!-- details for coach
   <router-link to="/coaches/id/contact">contact</router-link>
   <router-view></router-view> -->
   <section>
      <base-card>
      <h2>{{fullName}}</h2>
      <h3>${{selectedCoach.hourlyRate}}/hour</h3>
      </base-card>
   </section>
   <section>
      <base-card>
         <header>
            <h2>Interested? Reach out now!</h2>
            <base-button link :to="contactLink">Contact</base-button>
         </header>
         <router-view></router-view>
      </base-card>
   </section>
   <section>
      <base-card>
         <base-badge v-for="elm in selectedCoach.areas" :key="elm" :type="elm" :title="elm"></base-badge>
         <p>{{selectedCoach.description}}</p>
      </base-card>
   </section>
</template>


<script>
export default {
   props: ['id'],
   data: () => ({
      selectedCoach: null,
   }),
   computed: {
      fullName() { return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}` },
      contactLink() { return `${this.$route.path}/${this.id}/contact` }
   },
   created() {
      this.selectedCoach = this.$store.getters['coaches/coaches'].find(elm => elm.id === this.id)
   }
}
</script>


<style scoped>

</style>