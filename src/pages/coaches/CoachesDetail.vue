<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>{{ rate }}/hour</h3>
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
        <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>


<script>

export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    }
  },
  computed: {
    contactLink() {
      return `/coaches/${this.id}/contact`;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },

    description() {
      return this.selectedCoach.description;
    },
    fullName() {
      return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/allCoaches'].find(c => c.id === this.$route.params.id);
    // this.selectedCoach = this.$store.getters['coaches/allCoaches'].find(c => c.id === this.id)
  }
}
</script>

<!--<template>-->
<!--  <h3>Coach Detail</h3>-->
<!--  <router-view></router-view>-->
<!--  <router-link to="/coaches/c1/contact">Contact</router-link>-->
<!--</template>-->
