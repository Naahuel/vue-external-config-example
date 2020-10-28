<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <h1>{{ $config.miConfig }}</h1>
    <p>{{ $config.otroValor }}</p>
  </div>
</template>

<script>
import api from "./api";

export default {
  name: "App",
  mounted() {
    console.log(this.$config);
    // Llamar al api
    api.fetchPosts();
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
