import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: r => require(['@/pages/Home'], r)
    },{
      path: '/friends',
      name: 'Friends',
      component: r => require(['@/pages/Friends'], r)
    }]
})