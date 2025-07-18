<template>
  <section>
    <base-card>
      <header>
        <h2>Request Received</h2>
      </header>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasRequests">
        <request-item v-for="r in receivedRequests" :key="r.id" :message="r.message" :email="r.userEmail"></request-item>
      </ul>
      <h3 v-else>You havent received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex';
  import RequestItem from '@/pages/requests/RequestItem.vue';

  export default {
    components: { RequestItem },
    data() {
      return {
        isLoading: false,
      }
    },
    created() {
      this.getRequests();
    },
    methods: {
      async getRequests() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('requests/getCoachRequests');
          setTimeout(() => this.isLoading = false, 500);
        } catch (error) {
          this.error = error.message || 'Something went wrong';
          this.isLoading = false;
        }

      }
    },
    computed: {
      ...mapGetters('requests', ['hasRequests', 'receivedRequests']),
    }
  }
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>