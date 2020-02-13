import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/axios'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import VueSocketIO from 'vue-socket.io'

Vue.use(MuseUI);
Vue.use(Message);


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;


Vue.use(new VueSocketIO({
    debug: true,
    // 服务器端地址
    connection: process.env.VUE_APP_BASE_API,
    vuex: {
        store,
        actionPrefix: "SOCKET_",
        mutationPrefix: "SOCKET_"
    }
}));

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (to.path === '/login') {
            localStorage.removeItem('accessToken')
        }
        let accessToken = localStorage.getItem('accessToken');
        if (!accessToken && to.path !== '/login') {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        next()
    }

});

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');
