<template>
   <form @submit.prevent="submitData">
      <div>
         <label>Name</label>
         <input type="text" v-model="name"/>
      </div>
      <div>
         <label>Phone</label>
         <input type="tel" v-model="phone"/>
      </div>
      <div>
         <label>Email</label>
         <input type="email" v-model="email"/>
      </div>
      <button>Add contact</button>
   </form>
</template>


<script>
export default {
   name: 'NewFriend',
   emits: ['add-contact'],
   data: () => ({
      name: '', phone: '', email: ''
   }),
   methods: {
      submitData() {
         this.$emit('add-contact', this.name, this.phone, this.email)
         this.name = ''; this.phone = ''; this.email =''
      }
   }
}
</script>