<template>
    <div class="dialog">
        <mu-menu cover>
            <mu-list slot="content">
                <mu-list-item button>
                    <mu-list-item-title>Refresh</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Send feedback</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Settings</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Help</mu-list-item-title>
                </mu-list-item>
                <mu-list-item button>
                    <mu-list-item-title>Sign out</mu-list-item-title>
                </mu-list-item>
            </mu-list>
        </mu-menu>
    </div>
</template>

<script>
    export default {
        name: 'AddAction',
        data() {
            return {}
        },
        props: {
            open: {
                type: Boolean,
                required: true
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
