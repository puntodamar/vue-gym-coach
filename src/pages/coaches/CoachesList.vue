<template>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button to="/register" link>Register as Coach</base-button>
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
import CoachFilter from '@/pages/coaches/CoachFilter.vue';

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      }
    }
  },
  components: { CoachFilter, BaseCard, CoachItem },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/allCoaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true
        }

        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true
        }

        return false
      })
    },
    ...mapGetters('coaches', ['hasCoaches']),
  },
  methods: {
    setFilters(filters) {
      this.activeFilters = filters;
    }
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