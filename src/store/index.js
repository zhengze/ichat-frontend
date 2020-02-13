import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userinfo: {
            username: ''
        },
    },
    mutations:{
        setUserName(state, username) {
            state.userinfo.username = username
        }
    },
    actions: {
        setUserName(context, username) {
            context.commit("setUserName", username)
        }
    }
});

export default store