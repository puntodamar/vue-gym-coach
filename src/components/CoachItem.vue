<template>
  <li>
    <h3>{{fullName}}</h3>
    <h4>${{rate}}/hour</h4>
    <div>
<!--      <span v-for="area in areas" :key="area">{{area}}, </span>-->
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink">Contact</base-button>
      <base-button link  :to="coachDetailLink">Details</base-button>
<!--      <router-link :to="coachContactLink">Contact</router-link>-->
<!--      <router-link :to="coachDetailLink">Details</router-link>-->
    </div>
  </li>
</template>

<script>
import BaseBadge from '@/ui/BaseBadge.vue';

export default {
  components: { BaseBadge },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return `/coaches/${this.id}/contact`;
    },
    coachDetailLink() {
      return `/coaches/${this.id}`;
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>