<template>
  <div>
    <base-dialog  :show="!!error" title="Error occured" @close="handleError">
      <p>{{error}}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilters"></coach-filter>
    </section>

    <section>
      <base-card>
        <section>
          <div class="controls">
            <base-button mode="outline" @click="getCoaches(true)" v-if="!isLoading">Refresh</base-button>
            <base-button v-if="!isAuthenticated" link to="/login">Login</base-button>
            <base-button to="/register" link v-if="!isACoach && !isLoading && isAuthenticated">Register as Coach</base-button>
          </div>
        </section>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasCoaches">
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
  </div>
</template>

<script>
import { mapGetters,  } from 'vuex';
import CoachItem from '@/components/CoachItem.vue';
import CoachFilter from '@/pages/coaches/CoachFilter.vue';

export default {
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true
      },
      isLoading: false,
      error: null,
    };
  },
  components: { CoachFilter, CoachItem },
  computed: {
    // isAuthenticated: () => this.$store.getters.isAuthenticated,
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    },
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/allCoaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }

        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }

        return this.activeFilters.career && coach.areas.includes('career');


      });

    },
    hasCoaches: () => !this.isLoading && this.hasCoaches,
    ...mapGetters('coaches', ['isACoach', 'hasCoaches'])
  },
  created() {
    this.getCoaches();
  },
  methods: {
    handleError: () => this.error = null,
    setFilters: (filters) => this.activeFilters = filters,
    async getCoaches(refresh = false) {
      if (refresh) {
        this.isLoading = true;
      }
      try {
        await this.$store.dispatch('coaches/getCoaches', {forceRefresh: refresh});
        setTimeout(() => this.isLoading = false, 500);
      } catch (error) {
        this.error = error.message || 'Something went wrong';
        this.isLoading = false;
      }
    }
  }
};
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