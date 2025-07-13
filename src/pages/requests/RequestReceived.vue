<template>
  <section>
    <base-card>
      <header>
        <h2>Request Received</h2>
      </header>
      <ul v-if="hasRequests">
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