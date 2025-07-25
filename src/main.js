import { createApp, defineAsyncComponent } from 'vue';
import router from './router';
import App from '@/App.vue';
import store from './store';
import BaseCard from '@/ui/BaseCard.vue';
import BaseButton from '@/ui/BaseButton.vue';
import BaseBadge from '@/ui/BaseBadge.vue';
import BaseSpinner from '@/ui/BaseSpinner.vue';
// import BaseDialog from '@/ui/BaseDialog.vue';

const app = createApp(App)
const BaseDialog = defineAsyncComponent(() => import('@/ui/BaseDialog.vue'))

app.use(router)
app.use(store)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)


router.beforeEach((to, from, next) => {
  if (!store.getters.isAuthenticated && to.meta.requiresAuth) {
    return next({ name: 'login' })
  }
  else if (store.getters.isAuthenticated && to.meta.requiresUnauth) {
    return next({ name: 'coaches' })
  }

  next()
})


router.isReady().then(() => {
  app.mount('#app');
})

