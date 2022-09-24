<template>
  <div>
    <navbarVue></navbarVue>

    <router-link to="/">HomeView</router-link>
    <router-link to="/about">AboutView</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import navbarVue from "./components/header/navbar.vue";
export default {
  components: {
    navbarVue,
  },
};
</script>

<style></style>
