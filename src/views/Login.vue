<template>
  <div class="login-page-wrapper">
    <section class="login-form-wrapper">
      <login-form></login-form>
    </section>
    <illustration class="login-page-illustration"></illustration>
  </div>
</template>

<script>
// @ is an alias to /src

import LoginForm from '@/components/LoginForm'
import Illustration from '@/components/Illustration'

export default {
  name: 'Login',
  components: {
    Illustration,
    LoginForm
  }
}
</script>

<style scoped lang="scss">

.login-page-wrapper {
  display: flex;
  min-width: 100%;
  min-height: 100vh;

  > section {
    min-width: 50%;
  }
}

.login-form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1000px) {
  .login-page-illustration {
    display: none;
  }
  .login-page-wrapper {
    justify-content: center;
  }
}

</style>
