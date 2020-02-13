import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/register',
            name: 'Register',
            component: r => require(['@/pages/Register'], r),
            meta: {
                needLogin: false,
                requiresAuth: false
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: r => require(['@/pages/Login'], r)
        },
        {
            path: '/',
            name: 'Index',
            redirect: {'name': 'Home'}
        },
        {
            path: '/home',
            name: 'Home',
            component: r => require(['@/pages/Home'], r),
            children: [
                {
                    path: '/Message',
                    name: 'Message',
                    component: r => require(['@/pages/Message'], r)
                }, {
                    path: '/contacts',
                    name: 'Contacts',
                    component: r => require(['@/pages/Contacts'], r)
                }, {
                    path: '/user',
                    name: 'User',
                    component: r => require(['@/pages/User'], r)
                }
            ],
            redirect: {'name': 'Message'}
        },
        {
            path: '/userchat',
            name: 'UserChat',
            component: r => require(['@/pages/UserChat'], r)
        },
        {
            path: '/groupchat',
            name: 'GroupChat',
            component: r => require(['@/pages/GroupChat'], r)
        }]
})