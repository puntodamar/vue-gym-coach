<template>
  <h2>COACH LIST</h2>
  <section>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button to="/register">Register as Coach</base-button>
    </div>
  </section>
  <section>
    <base-card>
      <ul v-if="hasCoaches">
        <coach-item v-for="c in filteredCoaches"
                    :key="c.id"
                    :first-name="c.firstName"
                    :id="c.id"
                    :last-name="c.lastName"
                    :areas="c.areas"
                    :rate="c.hourlyRate">
        </coach-item>

      </ul>
      <h3 v-else>No Coaches Found</h3>
    </base-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '@/components/CoachItem.vue';
import BaseCard from '@/ui/BaseCard.vue';

export default {
  components: { BaseCard, CoachItem },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/allCoaches'];
    },
    ...mapGetters('coaches', ['hasCoaches']),
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
  </style>