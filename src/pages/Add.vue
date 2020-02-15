<template>
    <div>
        <mu-text-field style="width: 75%;margin-left: 5%" placeholder="" v-model="value"
                       @input="changeInput"></mu-text-field>
        <mu-button small slot="right" @click="cancel">
            取消
        </mu-button>

        <mu-list v-if="friends">
            <div v-for="item in friends">
                <mu-list-item avatar button :ripple="false" @click="addFriend(item.username)">
                    <mu-list-item-action>
                        <mu-avatar>
                            <img src="../assets/images/avatar.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{item.username}}</mu-list-item-title>
                    </mu-list-item-content>

                </mu-list-item>
            </div>
        </mu-list>

        <mu-list v-if="groups">
            <div v-for="item in groups">
                <mu-list-item avatar button :ripple="false" @click="addGroup(item.gname)">
                    <mu-list-item-action>
                        <mu-avatar>
                            <img src="../assets/images/avatar3.jpg">
                        </mu-avatar>
                    </mu-list-item-action>
                    <mu-list-item-content>
                        <mu-list-item-title>{{item.gname}}</mu-list-item-title>
                    </mu-list-item-content>

                </mu-list-item>
            </div>
        </mu-list>
    </div>

</template>

<script>
    import {addFriend, addGroupMember} from "../api/api";

    export default {
        name: 'Add',
        data() {
            return {
                value: '',
                friends: [],
                groups: [],
                searchType: 'friend',
                current_user: ''
            }
        },
        props: {},
        sockets: {
            connect: function (data) {
                console.log('socket connected');
            },
            search_result: function (data) {
                if (this.searchType === 'friend') {
                    this.friends = data
                } else {
                    this.groups = data
                }
            },
            disconnect: function (data) {
                console.log('socket disconnected');
            },
            error: function (error) {
                console.log('error:', error)
            }
        },
        methods: {
            changeInput() {
                if (this.value) {
                    this.$socket.emit('search', this.current_user, this.value, this.searchType)
                }
            },
            cancel() {
                this.$router.go(-1)
            },
            addFriend(username) {
                let params = {'username': username};
                addFriend(params).then(data => {
                    this.$router.push({'name': 'UserChat', params:{'username':username}})
                })
            },
            addGroup(gname) {
                let params = {'groupname': gname};
                addGroupMember(params).then(data => {
                    this.$router.push({'name': 'GroupChat', params: {'gname': gname}})
                })
            }
        },
        created() {
            this.searchType = this.$route.params.searchType;
            this.current_user = this.$store.state.userinfo.username;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
