<template>
  <div>
    <FormulateForm v-model="form" @submit="login">
      <FormulateInput
        type="email"
        name="email"
        placeholder="Your email"
        label="Email"
        validation="required|email"
      />
      <FormulateInput
        type="password"
        name="password"
        placeholder="Your password"
        label="Password"
        validation="required"
      />
      <FormulateInput type="submit" label="Log In" />
    </FormulateForm>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
      error: null,
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.form.email,
            password: this.form.password,
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
