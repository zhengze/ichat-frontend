<template>
    <div class="chat">
                <mu-appbar style="width: 100%;" :title="$route.name" color="primary"></mu-appbar>


                <mu-paper fill>
  <mu-list>

    <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-title>头像</mu-list-item-title>
      <mu-list-item-action>
        <mu-avatar>
          <img src="../assets/images/avatar3.jpg">
        </mu-avatar>
      </mu-list-item-action>
    </mu-list-item>
      <mu-divider></mu-divider>
          <mu-list-item avatar button :ripple="false">
      <mu-list-item-action></mu-list-item-action>
      <mu-list-item-title>用户名</mu-list-item-title>
      <mu-list-item-action>
          {{this.$store.state.userinfo.username}}
      </mu-list-item-action>
    </mu-list-item>
  </mu-list>
</mu-paper>

            <mu-flex justify-content="center" align-items="center" style="bottom: 0px">
                <mu-button full-width color="red" @click="logout">退出</mu-button>
            </mu-flex>


    </div>
</template>

<script>
    export default {
        name: 'User',
        data() {
            return {
                size: 88
            }
        },
        methods: {
            logout() {
                this.$confirm('确定要退出？', '提示', {
                    type: 'warning'
                }).then(({result}) => {
                    if (result) {
                        localStorage.removeItem('accessToken')
                        this.$router.push({name: 'Login'});
                    }
                });
            },

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .chat {
    }
</style>
