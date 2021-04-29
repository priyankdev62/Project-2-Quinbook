import Vue from 'vue'
import VueRouter from 'vue-router'
import editprofile from '@/views/editprofile.vue'
import userphotos from '@/views/userphotos.vue'
import errorpage from '@/views/errorpage.vue'
import friends from '@/views/friends.vue'
import searchpage from '@/views/searchpage.vue'
import about from '@/views/about.vue'
import feed from '@/views/feed.vue'
import register from '@/views/register.vue'
import login from '@/views/login.vue'
import notification from '@/views/notification.vue'
import friendprofile from '@/views/friendprofile.vue'
import ownfeed from '@/views/ownfeed.vue'
import friendfeed from '@/views/friendfeed.vue'


Vue.use(VueRouter)

const routes = [
  {
  path: '/editprofile',
  name: 'EditProfile',
  component: editprofile
  },
  {
    path: '/userphotos',
    name: 'UserPhotos',
    component: userphotos
  },
  {
    path: '/friends',
    name: 'friends',
    component: friends
  },
  {
    path: '/friendfeed',
    name: 'friendfeed',
    component: friendfeed
  },
  {
    path: '/search',
    name: 'search',
    component: searchpage
  },
  {
    path: '/notification',
    name: 'notification',
    component: notification
  },
  {
    path: '/feed',
    name: 'feed',
    component: feed
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/friendprofile',
    name: 'friendprofile',
    component: friendprofile
  },
  {
    path: '/ownfeed',
    name: 'ownfeed',
    component: ownfeed
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '*',
    name: 'errorpage',
    component: errorpage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
