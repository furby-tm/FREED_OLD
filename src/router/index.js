import Vue from 'vue'
import Router from 'vue-router'
import ActionBar from '@/components/ActionBar'
import Profile from '@/components/Profile'
import NewsFeedLoad from '@/components/NewsFeedLoad'
import MakeNewStatus from '@/components/MakeNewStatus'

Vue.use(Router)

const routes = [
  {
    path: '/',
    components: {
      default: MakeNewStatus,
      NewsFeedLoad: NewsFeedLoad
  }
}
  ];

const router = new Router({
  routes
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
})

export default router
