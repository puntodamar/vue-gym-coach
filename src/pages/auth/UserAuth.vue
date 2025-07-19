<template>

  <base-card>
    <form @submit.prevent>
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model.trim="email">
      </div>

      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password">
      </div>
      <p v-if="!formValid">Please enter valid values</p>
      <base-button @click="submitForm">{{submitButtonCaption}}</base-button>
      <base-button type="button" mode="flat" @click="switchMode">{{switchModeButtonCaption}}</base-button>
    </form>
  </base-card>

</template>


<style>
form {
  margin: 1rem;
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

input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        mode: 'login',
        formValid: true,
      }
    },
    computed: {
      submitButtonCaption() {
        return this.mode === 'login' ? 'Login' : 'Sign Up'
      },
      switchModeButtonCaption() {
        return this.mode === 'login' ? 'Sign Up instead' : 'Login'
      }
    },
    methods: {
      async submitForm() {
        if (this.email === '' || this.password === '' || !this.email.includes('@') || this.password.length < 6) {
          this.formValid = false
          return
        }

        if (this.mode === 'login') {
          console.log('login')
        } else {
          await this.$store.dispatch('signUp', {
            email: this.email, password: this.password
          })

          this.$router.replace('/')
        }


      },
      switchMode() {
        this.mode = this.mode === 'login' ? 'signup' : 'login'
      }
    }
  }
</script>

