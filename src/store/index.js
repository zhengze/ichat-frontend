import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userinfo: {
            username: ''
        },
        bottomNav: 'message'
    },
    mutations:{
        setUserName(state, username) {
            state.userinfo.username = username
        },
        storeBottomNav(state, routerName) {
            state.bottomNav = routerName
        }
    },
    actions: {
        setUserName(context, username) {
            context.commit("setUserName", username)
        },
        storeBottomNav(context, routerName) {
            context.commit("storeBottomNav", routerName)
        }
    }
});

export default store