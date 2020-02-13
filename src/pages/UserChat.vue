<template>
    <div class="userchat">

<ChatHeader :title="title" />
<Dialog :title="title" :messages="messages"/>
<ChatBottom />
    </div>
</template>

<script>
    import ChatHeader from '../components/ChatHeader'
    import ChatBottom from '../components/ChatBottom'
    import Dialog from '../components/Dialog'
    import { mapState } from 'vuex'

    export default {
        name: 'UserChat',
        components: {Dialog, ChatBottom, ChatHeader},
        data() {
            return {
                title: this.$route.params.username,
                messages: [],
            }
        },
        sockets: {
            connect: function (data) {
                console.log('socket connected');
            },
            on_response: function (data) {
                this.getMessages(data)
            },
            user_message: function(data) {
                this.getMessage(data);
                this.$el.scrollTop = this.$el.scrollHeight;
            },
            disconnect: function (data) {
                console.log('socket disconnected');
            },
            error: function (error) {
                console.log(error)
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.userinfo.username
            })
        },
        methods: {
            getMessages(data) {
                this.messages = data;
            },
            getMessage(data) {
                this.messages.push(data);
            },

        },
        created() {
            this.$socket.emit('user_chat_dialog', this.$route.params.username, this.currentUser)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
