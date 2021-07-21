<template>
   <form @submit.prevent="submitForm">
      <div class="form-control" :class="{invalid: !firstName.isValid}">
         <label for="firstname">Firstname</label>
         <input type="text" id="firstname" v-model.trim="firstName.value" @blur="clearValidity('firstName')"/>
         <p v-if="!firstName.isValid" class="invalid">Firstname must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !lastName.isValid}">
         <label for="lastname">Lastname</label>
         <input type="text" id="lastname" v-model.trim="lastName.value" @blur="clearValidity('lastName')"/>
         <p v-if="!lastName.isValid" class="invalid">Lastname must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !description.isValid}">
         <label for="description">Description</label>
         <textarea id="description" rows="5" v-model.trim="description.value" @blur="clearValidity('description')" />
         <p v-if="!description.isValid" class="invalid">Description must not be empty.</p>
      </div>
      <div class="form-control" :class="{invalid: !hourlyRate.isValid}">
         <label for="rate">Hourly rate</label>
         <input type="numer" id="rate" v-model.number="hourlyRate.value" @blur="clearValidity('hourlyRate')"/>
         <p v-if="!hourlyRate.isValid" class="invalid">Rate must be greater than 0.</p>
      </div>
      <div class="form-control" :class="{invalid: !areas.isValid}">
         <h3>Areas of expertise</h3>
         <div>
            <input type="checkbox" value="frontend" id="frontend" v-model="areas.value" @blur="clearValidity('areas')"/>
            <label for="frontend">Frontend Development</label>
         </div>
         <div>
            <input type="checkbox" value="backend" id="backend" v-model="areas.value" @blur="clearValidity('areas')"/>
            <label for="backend">Backend Development</label>
         </div>
         <div>
            <input type="checkbox" value="career" id="career" v-model="areas.value" @blur="clearValidity('areas')"/>
            <label for="career">Career Advisory</label>
         </div>
         <p v-if="!areas.isValid" class="invalid">At least one area must be selected.</p>
      </div>
      <p v-if="!formIsValid" class="invalid"><b>Please fix the errors and submit again.</b></p>
      <base-button>Register</base-button>
   </form>
</template>

<script>
export default {
   emit: ['save-data'],
   data: () => ({
      firstName: {value: '', isValid: true},
      lastName: {value: '', isValid: true},
      description: {value: '', isValid: true},
      hourlyRate: {value: null, isValid: true},
      areas: {value: [], isValid: true},
      formIsValid: true
   }),
   methods: {
      clearValidity(input) { 
         if (this[input].value && this[input].value.length > 0 || this[input].value > 0) this[input].isValid = true
      },
      validateForm() {
         this.formIsValid = true;
         if (this.firstName.value === '') { this.firstName.isValid = false; this.formIsValid = false }
         if (this.lastName.value === '') { this.lastName.isValid = false; this.formIsValid = false }
         if (this.description.value === '') { this.description.isValid = false; this.formIsValid = false }
         if (!this.hourlyRate.value || this.hourlyRate.value < 0) { this.hourlyRate.isValid = false; this.formIsValid = false }
         if (this.areas.value.length === 0) { this.areas.isValid = false; this.formIsValid = false }
      },
      submitForm() {
         this.validateForm()
         if (!this.formIsValid) { return }
         const formData = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            description: this.description.value,
            hourlyRate: this.hourlyRate.value,
            areas: this.areas.value
         }
         this.$emit('save-data', formData)
      }
   }
}
</script>


<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid p {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>