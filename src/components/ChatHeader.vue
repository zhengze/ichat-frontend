<template>
    <div class="header">
        <mu-appbar full-width :title="title" color="primary">
            <mu-button icon slot="left" @click="goBack">
                <mu-icon value="chevron_left"></mu-icon>
            </mu-button>
            <mu-button icon slot="right">
                <mu-icon value="menu"></mu-icon>
            </mu-button>
        </mu-appbar>
    </div>
</template>

<script>
    export default {
        name: 'ChatHeader',
        data() {
            return {}
        },
        props: {
            title: {
                type: String,
                required: true
            }
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
        /*position: fixed;*/
        /*width: 100%;*/
        background-color: #42b983;
    }
</style>
