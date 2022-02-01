<template>
  <div class="login-form">
    <h1 class="login-title">היי, טוב לראות אותך</h1>
    <div class="input-group">
      <input v-model="email" type="text" placeholder=" "/>
      <label class="floating-label">מייל</label>
      <div class="hint">כתובת המייל איתה נרשמת לחשבונית ירוקה</div>
    </div>
    <div class="input-group">
      <input v-model="password" type="password" placeholder=" "/>
      <label class="floating-label">סיסמה</label>
      <a href="#" class="hint">שחכת סיסמה?</a>
    </div>

    <div class="actions">
      <button class="login-btn btn" @click="login()" type="submit">כניסה</button>
    </div>
    <div class="signup">
      עוד לא הצטרפת?
      <a href="#">ל-30 יום ניסון חינם</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ActionsEnum } from '@/store'

@Component
export default class LoginForm extends Vue {
  email = ''
  password = ''

  async login (): Promise<void> {
    await this.$store.dispatch(ActionsEnum.LOGIN, {
      email: this.email,
      password: this.password
    })
    this.$router.push('/welcome')
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.login-title {
  font-size: 56px;
  letter-spacing: -3px;
}

.input-group {
  position: relative;
  width: 420px;
  margin-bottom: 30px;
}

input, label {
  font-size: 18px;
}

input {
  font-weight: 400;
  width: 100%;
  height: 100%;
  max-width: 420px;
  padding: 20px 16px 6px;
  border: none;
  border-bottom: 1px solid;
  appearance: none;
  margin-bottom: 5px;

  &:focus {
    outline: none;

    ~ .floating-label {
      top: -8px;
      font-size: 13px;
      font-weight: bold;
    }
  }
}

input:not(:placeholder-shown) ~ .floating-label {
  top: -8px;
  font-size: 13px;
}

.floating-label {
  position: absolute;
  pointer-events: none;
  right: 0;
  top: 20px;
  padding: 0 5px;
  background: #fff;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.login-btn {
  background: #18C746;
  color: #ffff;
}

.login-btn:hover {
  background: #0ea45c;
  border: 1px solid #0ea45c;
}

.hint {
  font-size: 14px;
}

a.hint {
  color: inherit;
}

.signup {
  color: #0084F4;
  font-size: 18px;
  margin-top: 40px;

  a {
    color: #0084F4;
  }
}

@media screen and(max-width: 650px) {

  .login-form {
    padding: 15px;
  }

  .login-title {
    font-size: 2.5rem;
  }

  .input-group {
    width: 85%;
  }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .signup {
    text-align: center;
  }
}

</style>
