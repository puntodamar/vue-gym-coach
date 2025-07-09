<template>
  <h2>COACH LIST</h2>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
  </section>
  <section>
    <ul v-if="hasCoaches">
      <li v-for="c in filteredCoaches" :key="c.id">{{c.firstName}}</li>
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/allCoaches'];
    },
    ...mapGetters('coaches', ['hasCoaches']),
  }
}
</script>