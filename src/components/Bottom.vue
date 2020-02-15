<template>
    <div class="bottomNav">
        <mu-container style="padding:0px">
            <mu-bottom-nav :value.sync="bottom" @change="storeNav">
                <mu-bottom-nav-item value="message" title="消息" icon="message" to="/message"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="contacts" title="联系人" icon="contacts" to="/contacts"></mu-bottom-nav-item>
                <mu-bottom-nav-item value="user" title="我" icon="perm_identity" to="/user"></mu-bottom-nav-item>
            </mu-bottom-nav>
        </mu-container>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Bottom',
        data() {
            return {
            }
        },
        methods: {
            ...mapActions(['storeBottomNav']),
            storeNav() {
                this.storeBottomNav(this.bottom)
            }
        },
        computed: {
            ...mapState({
                bottom: state => state.bottomNav
            })
        },
        created() {
            this.bottom = this.bottomNav
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .bottomNav {
        position: fixed;
        bottom: 0px;
        width: 100%;
        z-index: 1;
    }
</style>
