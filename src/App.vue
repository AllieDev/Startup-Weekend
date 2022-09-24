<template>
  <div class="main">
    <navbarVue />

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Listing from "./components/listing/listing.vue";
import Footer from "./components/footer/Footer.vue";
import navbarVue from "./components/header/navbar.vue";
export default {
  components: {
    navbarVue,
    Listing: Listing,
    Footer,
  },
};
</script>

<style>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
