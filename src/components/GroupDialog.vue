<template>
    <div class="dialog-wrap">
            <mu-flex class="dialog-list" :justify-content="isSelf(item.user)?'end':'start'"
                     v-for="(item, index) in messages" :key="index">
                <mu-flex v-if="!isSelf(item.user)"  :class="!isSelf(item.user)?'dialog-left':'dialog-right'">
                    <mu-flex>
                        <mu-avatar>
                            <img src="../assets/images/avatar1.png"/>
                        </mu-avatar>
                    </mu-flex>
                    <mu-flex>
                        <mu-flex class="flex-wrapper">
                            <span>{{item.message}}</span>
                        </mu-flex>
                    </mu-flex>
                </mu-flex>
                <mu-flex v-if="isSelf(item.user)"  :class="isSelf(item.user)?'dialog-right':'dialog-left'">

                    <mu-flex >
                        <mu-flex class="flex-wrapper">
                            <span>{{item.message}}</span>
                        </mu-flex>
                    </mu-flex>
                    <mu-flex>
                        <mu-avatar>
                            <img src="../assets/images/avatar1.png"/>
                        </mu-avatar>
                    </mu-flex>
                </mu-flex>

            </mu-flex>
    </div>
</template>

<script>
    export default {
        name: 'GroupDialog',
        data() {
            return {
                refreshing: false,
                loading: false,
            }
        },
        props: {
            title: {
                type: String,
                required: true
            },
            messages: {
                type: Array,
                required: false
            }
        },
        updated() {
            this.$nextTick(() => this.scrollToEnd());
        },
        methods: {
            isSelf(username) {
                return username == this.$store.state.userinfo.username;
            },
            scrollToEnd: function () {
                // scroll to the start of the last message
                this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .dialog-wrap {
        padding: 0.5rem;
        overflow-y: auto;
        height: 506px;
        .dialog-list {
            margin-top: 0.5rem;
            .dialog-left {
                span {
                    background-color: #42b983;
                    margin: 0.3rem;
                    border-radius: 1rem;
                    padding: 0.5rem;
                }
            }
            .dialog-right {
                span {
                    background-color: #e0e0e0;
                    margin: 0.3rem;
                    border-radius: 1rem;
                    padding: 0.5rem;
                }
            }
        }
    }
</style>
