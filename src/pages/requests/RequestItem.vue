<template>
  <li>
    <div>
      <span><b>From: </b></span><a :href="emailLink">{{email}}</a>
    </div>
    <span>Message:</span>
    <p>{{message}}</p>
  </li>
</template>

<script>
export default {
  props: ['message', 'email'],
  computed: {
    emailLink() {
      return `mailto:${this.email}`;
    }
  }
}
</script>