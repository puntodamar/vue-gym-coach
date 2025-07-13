<template>
  <form @submit.prevent>
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="text" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p v-if="!validForm">Please input correct data</p>
    <div class="actions">
      <base-button @click="submit">Send</base-button>
    </div>

  </form>
</template>


<script>
export default {
  data() {
    return {
      message: '',
      email: '',
      validForm: true
    }
  },
  methods: {
    submit() {
      this.validForm = true;

      if (this.email === '' || !this.email.includes('@')|| this.message === '') {
        this.validForm = false;
        return
      }

      const formData = {
        coachId: this.$route.params.id,
        email: this.email,
        message: this.message,
      }

      this.$store.dispatch('requests/contactCoach', formData)
      this.$router.replace('/coaches')
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>