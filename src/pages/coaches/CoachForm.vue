<template>
  <form @submit.prevent>
    <div class="form-control" :class="{invalid: !firstName.valid}">
      <label for="firstname">First Name</label>
      <input type="text" id="firstname" v-model.trim="firstName.value" @blur="clearValidity('firstName')">
      <p v-if="!firstName.valid">First name is invalid</p>
    </div>
    <div class="form-control" :class="{invalid: !lastName.valid}">
      <label for="lastname">Last Name</label>
      <input type="text" id="lastname" v-model.trim="lastName.value" @blur="clearValidity('lastName')">
      <p v-if="!lastName.valid">Last name is invalid</p>
    </div>
    <div class="form-control" :class="{invalid: !description.valid}">
      <label for="description">Description</label>
      <textarea id="description rows=5" v-model.trim="description.value" @blur="clearValidity('description')"></textarea>
      <p v-if="!firstName.valid">Description is invalid</p>
    </div>

    <div class="form-control" :class="{invalid: !rate.valid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.value" @blur="clearValidity('rate')">
      <p v-if="!rate.valid">Rate is invalid</p>
    </div>

    <div class="form-control" :class="{invalid: !areas.valid}">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.value" @blur="clearValidity('areas')">
        <label for="frontend">Frontend Development</label>
      </div>

      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.value" @blur="clearValidity('areas')">
        <label for="frontend">Backend Development</label>
      </div>

      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.value" @blur="clearValidity('areas')">
        <label for="frontend">Career Advisory</label>
      </div>
    </div>
    <p v-if="!areas.valid">Area is required</p>
    <p v-if="!validForm">Please fix above error and try again</p>
    <base-button @click="submit">Register</base-button>
  </form>
</template>


<script>
export default {
  emits: ['submit-coach'],
  data() {
    return {
      firstName: {value: '', valid: true},
      lastName: {value: '', valid: true},
      rate: {value: 'null', valid: true},
      description: {value: '', valid: false},
      areas: {value: [], valid: false},
      validForm: true
    }
  },
  methods: {
    clearValidity(input) {
      this[input].valid = true
    },
    validateForm() {
      this.validForm = true;
      console.log(this.firstName.value)
      if (this.firstName.value === '') {
        this.firstName.valid = false
        this.validForm = false
      }

      if (this.lastName.value  === '') {
        this.lastName.valid = false
        this.validForm = false
      }

      if (this.description.value  === '') {
        this.description.valid = false
        this.validForm = false
      }

      if (this.rate.val || this.rate.val <= 0) {
        this.rate.valid = false
        this.validForm = false
      }

      if (this.areas.length === 0) {
        this.areas.valid = false
        this.validForm = false
      }

      console.log(this.firstName.value)
      return this.validForm

    },
    submit() {

      if (this.validateForm()) {
        console.log("valid form")
        const formData = {
          firstName: this.firstName,
          lastName: this.lastName,
          description: this.description,
          rate: this.rate,
          areas: this.areas,
        }

        this.$emit('submit-coach', formData)
        // this.$router.push('/coaches')
        this.$router.replace('/coaches')
      }

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

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>