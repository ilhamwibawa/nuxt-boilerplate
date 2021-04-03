<template>
  <div class="container">
    <div class="wrapper">
      <h4>Log in</h4>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '~/components/forms/LoginForm'
export default {
  components: {
    LoginForm,
  },
  middleware: ['guest'],
}
</script>

<style lang="scss" scoped>
.container {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrapper {
  border: 1px solid $gray-400;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 350px;
}

h4 {
  font-size: 2rem;
  color: $gray-800;
  margin-bottom: 20px;
}
</style>
