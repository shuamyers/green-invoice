<template>
  <div class="welcome-page-wrapper">
    <illustration class="welcome-page-illustration"></illustration>
    <section class="welcome-section">
      <div v-if="user">
        <h1 class="welcome-title">Hello {{ user.firstName }},</h1>
        <div class="welcome-sub-title">welcome to your <span
          class="business-name">{{ user.billingBusinessName }}!</span></div>
        <div class="user-info-link">To your <a @click.prevent="goToUserInfo()">Business info page</a></div>
      </div>
      <button class="logout-btn btn" @click="logout()" type="submit">Logout</button>
    </section>
  </div>
</template>

<script>
import Illustration from '@/components/Illustration'
import { ActionsEnum, GettersEnum } from '@/store'

export default {
  name: 'WelcomePage',
  components: {
    Illustration
  },
  computed: {
    user () {
      return this.$store.getters[GettersEnum.USER]
    }
  },
  methods: {
    logout () {
      this.$store.dispatch(ActionsEnum.LOGOUT)
      this.$router.push('/')
    },
    goToUserInfo () {
      this.$router.push('/user-info')
    }
  }

}
</script>

<style scoped lang="scss">

.welcome-page-wrapper {
  display: flex;
  min-width: 100%;
  min-height: 100vh;

  > section {
    min-width: 50%;
  }

  .welcome-section {
    direction: ltr;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .welcome-title {
    font-size: 54px;
  }

  .welcome-sub-title {
    font-size: 34px;
  }

  .business-name {
    font-weight: bold;
  }

  .user-info-link {
    font-size: 18px;

    a {
      color: #0084F4;
    }
  }

  .logout-btn {
    background: #ffffff;
    border: 1px solid #687d8f;
    margin-top: 40px;
  }

  .logout-btn:hover {
    background: #eaecf1;
    border: 1px solid #eaecf1;
  }

  @media screen and (max-width: 875px) {
    .welcome-page-illustration {
      display: none;
    }
    .welcome-section {
      width: 100%;
      padding: 5%;
    }
  }

}

</style>
