<template>
    <div class="chat">
                <mu-appbar style="width: 100%;" :title="$route.name" color="primary"></mu-appbar>

        <mu-paper textline="two-line">
            <mu-list>
                <mu-sub-header class="subheader-title">用户</mu-sub-header>
                <mu-list-item avatar button :ripple="true" v-for="item in user_message_list" :key="item.from_user" @click="goChat(item.from_user)">
                    <mu-list-item-action>
                        <mu-avatar>
                            <mu-badge content="12" circle color="secondary">
                                <img src="../assets/images/avatar1.png">
                            </mu-badge>
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{item.from_user}}</mu-list-item-title>
                        <mu-list-item-sub-title>{{item.message}}</mu-list-item-sub-title>
                    </mu-list-item-content>
                    <mu-list-item-action>
                        <mu-list-item-after-text>{{item.display_time}}</mu-list-item-after-text>
                    </mu-list-item-action>

                </mu-list-item>

            </mu-list>
            <mu-divider></mu-divider>
            <mu-list>
                <mu-sub-header class="subheader-title">群组</mu-sub-header>

            </mu-list>
        </mu-paper>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: 'Chat',
        data() {
            return {
                user_message_list: ''
            }
        },
        sockets: {
            connect: function (data) {
                console.log('socket connected');
            },
            message: function (data) {
                console.log('server msg：' + data)
            },
            on_response: function (data) {
                this.getUserChat(data)
            },
            disconnect: function (data) {
                console.log('socket disconnected');
            },
            error: function (error) {
                console.log(error)
            }
        },
        methods: {
            getUserChat(data) {
                this.user_message_list = data;
            },
            goChat(username) {
                this.$router.push({'name': 'UserChat', params:{'username':username}})
            }
        },
        computed: {
          ...mapState({
              currentUser: state => state.userinfo.username
          })
        },
        created() {
            this.$socket.emit('user_chat_log', this.currentUser)
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .subheader-title {
        text-align: left;
    }
</style>
