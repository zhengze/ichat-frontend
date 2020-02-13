<template>
    <div class="chat-bottom">
        <input type="text" ref="message" @keydown.enter="sendMessage"/>
        <mu-button color="primary" @click="sendMessage">发送</mu-button>

    </div>
</template>

<script>
    export default {
        name: 'ChatBottom',
        data() {
            return {}
        },
        props: {},
        methods: {
            sendMessage() {
                let message = this.$refs.message.value;

                if (this.$route.name == 'UserChat') {
                    let from_username = this.$store.state.userinfo.username;
                    let to_username = this.$route.params.username;
                    this.$socket.emit('send_user_message', from_username, to_username, message)
                } else {
                    let username = this.$store.state.userinfo.username;
                    let groupname = this.$route.params.gname;
                    this.$socket.emit('send_group_message', username, groupname, message)
                }
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
    .chat-bottom {
        padding: 0.5rem;
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #e0e0e0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            height: 2.3rem;
            display: inline-block;
            width: 100%;
            /*padding: 0.5rem;*/
            border: none;
            border-radius: 0.2rem;
            font-size: 1rem;
            margin-right: 0.5rem;
        }
    }
</style>
