<template>
  <base-dialog v-if="inputInvalid" title="Invalid input" @close="closeDialog">
    <template #default><p>Unfortunately, at least one input value is invalid.</p><p>Please check all input are filled.</p></template>
    <template #actions>
      <base-button @click="closeDialog">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="titleInput"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea name="description" id="description" rows="3" ref="descInput"/>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput"/>
      </div>
      <base-button type="submit">Add resource</base-button>
    </form>
  </base-card>
</template>


<script>
export default {
  inject: ['addResource'],
  data: () => ({
    inputInvalid: false
  }),
  methods: {
    submitData() { 
      const enteredData = { title: this.$refs.titleInput.value, description: this.$refs.descInput.value, link: this.$refs.linkInput.value }
      if (enteredData.title.trim() === '' || enteredData.description.trim() === '' || enteredData.link.trim() === '' ) {
        this.inputInvalid = true
        return
      }
      this.addResource(enteredData)
    },
    closeDialog() {this.inputInvalid = false}
  }
};
</script>


<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>