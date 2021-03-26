<template>
  <div class="layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "layout",
};
</script>

<style lang="less">
html,body{
  border: 0;
  padding: 0;
  margin: 0;
}
.layout{
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
