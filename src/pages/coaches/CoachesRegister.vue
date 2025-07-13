<template>
  <section>
<base-card>
  <h2>Register as a coach now!</h2>
  <coach-form @submit-coach="submitCoach"></coach-form>
</base-card>
  </section>
</template>

<script>
import CoachForm from '@/pages/coaches/CoachForm.vue';
import BaseCard from '@/ui/BaseCard.vue';

export default {
  components: {
    BaseCard,
    CoachForm
  },
  methods: {
    submitCoach(formData) {
      this.$store.dispatch('coaches/addCoach', formData)
    }
  }
}
</script>
