<template>
    <div class="userchat">
        <ChatHeader :title="title"/>
        <GroupDialog :title="title" :messages="messages"/>
        <ChatBottom/>
    </div>
</template>

<script>
    import ChatHeader from '../components/ChatHeader'
    import ChatBottom from '../components/ChatBottom'
    import GroupDialog from '../components/GroupDialog'
    import {mapState} from 'vuex'

    export default {
        name: 'GroupChat',
        components: {GroupDialog, ChatBottom, ChatHeader},
        data() {
            return {
                title: this.$route.params.gname,
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
            group_message: function (data) {
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
            this.$socket.emit('group_chat_dialog', this.$route.params.gname)
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
