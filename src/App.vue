<template>
  <router-view />
</template>

<script setup></script>

<style>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
}

body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
  background: linear-gradient(135deg, #eef4ff 0%, #f7f9fc 45%, #eafaf3 100%);
  background-attachment: fixed;
  color: #303133;
}
</style>
