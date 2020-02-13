<template>
  <div class="bottomNav">
    <mu-container style="padding:0px">
      <mu-bottom-nav :value="bottomNav">
        <mu-bottom-nav-item value="message" title="消息" icon="message" to="/message"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="contacts" title="联系人" icon="contacts" to="/contacts"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="user" title="我" icon="perm_identity" to="/user"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  data() {
    return {
      bottomNav: "message"
    }

  }

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
