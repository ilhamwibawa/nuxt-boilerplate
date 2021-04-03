<template>
  <div class="navbar">
    <nuxt-link to="/"> <h4 class="navbar__title">Nuxt</h4></nuxt-link>
    <div class="navbar__menu">
      <template v-if="isAuthenticated">
        <a href="#">{{ loggedInUser.first_name }}</a>
        <nuxt-link to="/profile">My Profile</nuxt-link>
        <a href="#" @click="logout">Log out</a>
      </template>
      <template v-else>
        <nuxt-link to="/register">register</nuxt-link>
        <nuxt-link to="/login">login</nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser']),
  },
  methods: {
    async logout() {
      await this.$auth.logout()
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  padding: 20px;
  border-bottom: 1px solid $gray-400;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @include element('menu') {
    a {
      color: $gray-900;
      text-decoration: none;
      padding: 10px;
    }
  }
}
</style>
