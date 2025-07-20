import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from '@/pages/coaches/CoachesList.vue';
import CoachesDetail from '@/pages/coaches/CoachesDetail.vue';
import ContactCoach from '@/pages/requests/ContactCoach.vue';
// import NotFound from '@/pages/NotFound.vue';
import RequestReceived from '@/pages/requests/RequestReceived.vue';
// import CoachesRegister from '@/pages/coaches/CoachesRegister.vue';
import UserAuth from '@/pages/auth/UserAuth.vue';
import { defineAsyncComponent } from 'vue';

const CoachesRegister = defineAsyncComponent(() => import('@/pages/coaches/CoachesRegister.vue'))
const NotFound = defineAsyncComponent(() => import('@/pages/NotFound.vue'))

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches',
      
    },
    {
      path: '/coaches',
      name: 'coaches',
      component: CoachesList,
    }, {
      path: '/coaches/:id',
      component: CoachesDetail,
      props: true,
      children: [
        {
          path: 'contact',
          component: ContactCoach,
        }
      ]
    },
    // {
    //   path: '/coaches/:id/contact',
    //   component: ContactCoach,
    // },
    
    {
      path: '/register/',
      component: CoachesRegister,
      meta: {requiresAuth: true},
    }, {
      path: '/requests',
      component: RequestReceived,
      meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name: 'login',
      component: UserAuth,
      meta: {requiresUnauth: true},
    },
    
    {
      path: '/:notFound(.*)',
      component: NotFound,
    }
  ]
})

export default router;

