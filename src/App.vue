<template>
  <div class="main">
    <router-link to="/">HomeView</router-link>
    <router-link to="/about">AboutView</router-link>
    <router-link to="/listing">List an item</router-link>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Listing from './components/listing/listing.vue'
import Footer from './components/footer/Footer.vue'
export default {
  components: {
    Listing: Listing,
    Footer
  }
}
</script>

<style>
.main {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
}
</style>
