import Vue from 'vue'
import Router from 'vue-router'
import ActionBar from '@/components/ActionBar'
import Profile from '@/components/Profile'
import NewsFeedLoad from '@/components/NewsFeedLoad'
import MakeNewStatus from '@/components/MakeNewStatus'
import About from '@/components/About'
import News from '@/components/News'
import Music from '@/components/Music'

Vue.use(Router)

const routes = [
  {
    path: '/',
    components: {
      default: MakeNewStatus,
      NewsFeedLoad: NewsFeedLoad
  }
},
  {
    path: '/about',
    components: {
      default: About
    }
  },
  {
    path: '/profile',
    components: {
      default: Profile
    }
  },
  {
   path: '/news',
   components: {
     default: News
   }
 },
 {
   path: '/music',
   components: {
     default: Music
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
