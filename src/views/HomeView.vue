<template>
  <div>
    <UserListItemVue v-if="isContractor"></UserListItemVue>
    <Contractors v-else></Contractors>
  </div>
</template>

<script>
import UserListItemVue from '../components/UserListItem.vue'
import Contractors from '../components/contractors/Contractors.vue'
export default {
  components: {
    UserListItemVue,
    Contractors
  },
  computed: {
    isContractor() {
      return this.$store.state.user === 'contractor'
    }
  },
  methods: {}
}
</script>

<style></style>
