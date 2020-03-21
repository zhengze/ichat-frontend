<template>
    <div class="contacts">
        <mu-appbar style="width: 100%;" :title="$route.name" color="primary">
            <mu-menu slot="right">
                <mu-button icon>
                    <mu-icon value="add"></mu-icon>
                </mu-button>
                <mu-list slot="content">
                    <mu-list-item button @click="createGroup">
                        <mu-list-item-content>
                            <mu-list-item-title>创建群</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item button @click="addFriend">
                        <mu-list-item-content>
                            <mu-list-item-title>加好友</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                    <mu-list-item button @click="joinGroup">
                        <mu-list-item-content>
                            <mu-list-item-title>加入群</mu-list-item-title>
                        </mu-list-item-content>
                    </mu-list-item>
                </mu-list>
            </mu-menu>
        </mu-appbar>

        <mu-container style="padding: 0px">
            <mu-appbar style="width: 100%;" title="Title">
                <mu-text-field full-width placeholder="用户/群组"></mu-text-field>
                <br/>
                <mu-button icon slot="right">
                    <mu-icon value="search"></mu-icon>
                </mu-button>
            </mu-appbar>

            <mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)" center>
                <mu-tab>朋友</mu-tab>
                <mu-tab>群组</mu-tab>
            </mu-tabs>
            <div class="demo-text" v-if="active === 0">
                <mu-list>
                    <div v-for="item in friends" @click="goUserChat(item.fname)">
                        <mu-list-item avatar button :ripple="false">
                            <mu-list-item-action>
                                <mu-avatar>
                                    <img src="../assets/images/avatar.jpg">
                                </mu-avatar>
                            </mu-list-item-action>
                            <mu-list-item-content>
                                <mu-list-item-title>{{item.fname}}</mu-list-item-title>
                            </mu-list-item-content>

                        </mu-list-item>
                        <mu-divider></mu-divider>
                    </div>

                </mu-list>
            </div>
            <div class="demo-text" v-if="active === 1">

                <mu-list>
                    <mu-sub-header>我创建的群</mu-sub-header>
                    <div v-for="item in groups" @click="goGroupChat(item.gname)">
                        <mu-list-item avatar button :ripple="false">
                            <mu-list-item-action>
                                <mu-avatar>
                                    <img src="../assets/images/avatar.jpg">
                                </mu-avatar>
                            </mu-list-item-action>
                            <mu-list-item-content>
                                <mu-list-item-title>{{item.gname}}</mu-list-item-title>
                            </mu-list-item-content>

                        </mu-list-item>
                        <mu-divider></mu-divider>
                    </div>
                </mu-list>

                <mu-list>
                    <mu-sub-header>我加入的群</mu-sub-header>
                    <div v-for="item in joined_groups" @click="goGroupChat(item.gname)">
                        <mu-list-item avatar button :ripple="false">
                            <mu-list-item-action>
                                <mu-avatar>
                                    <img src="../assets/images/avatar.jpg">
                                </mu-avatar>
                            </mu-list-item-action>
                            <mu-list-item-content>
                                <mu-list-item-title>{{item.gname}}</mu-list-item-title>
                            </mu-list-item-content>

                        </mu-list-item>
                        <mu-divider></mu-divider>
                    </div>
                </mu-list>
            </div>

        </mu-container>

    </div>
</template>

<script>
    import {getFriendList, getGroupList, getJoinedGroupList} from "../api/api";

    export default {
        name: 'Contacts',
        data() {
            return {
                active: 0,
                friends: [],
                groups: [],
                joined_groups: []
            }
        },
        methods: {
            getFriendList() {
                getFriendList().then(data => {
                    this.friends = data.friends
                })
            },
            getGroupList() {
                getGroupList().then(data => {
                    this.groups = data.groups
                })
            },
            getJoinedGroupList() {
                getJoinedGroupList().then(data => {
                    this.joined_groups = data.joined_groups
                })
            },
            goUserChat(username) {
                this.$router.push({'name': 'UserChat', params: {'username': username}})
            },
            goGroupChat(gname) {
                this.$router.push({'name': 'GroupChat', params: {'gname': gname}})
            },
            createGroup() {
                this.$router.push({'name': 'CreateGroup'})
            },
            addFriend() {
                this.$router.push({name: 'Add', params: {'searchType': 'friend'}})
            },
            joinGroup() {
                this.$router.push({name: 'Add', params: {'searchType': 'group'}})
            }
        },
        created() {
            this.getFriendList();
            this.getGroupList();
            this.getJoinedGroupList()
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contacts {
        padding: 0px;
        width: 100%;
    }
</style>
