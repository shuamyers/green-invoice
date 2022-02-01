<template>
  <div class="user-info-wrapper">
    <div class="info-wrapper">
      <h1>פרטי החברה</h1>
      <div class="card" v-if="user">
        <div><span class="bold">שם החברה:</span> {{ user.billingBusinessName }}</div>
        <div><span class="bold">אימייל:</span> {{ user.email }}</div>
        <div><span class="bold">שם פרטי:</span> {{ user.firstName }}</div>
        <div><span class="bold">שם משפחה:</span> {{ user.lastName }}</div>
        <div><span class="bold">תעודת זהות:</span> {{ user.idNumber }}</div>
        <div><span class="bold">טלפון:</span> {{ user.phone }}</div>
        <div><span class="bold">כתובת החברה:</span> {{ user.businesses[0].address }}</div>
      </div>
    </div>
    <illustration></illustration>
  </div>
</template>

<script>
import Illustration from '@/components/Illustration'
import { GettersEnum } from '@/store'

export default {
  name: 'UserInfo',
  components: {
    Illustration
  },
  computed: {
    user () {
      return this.$store.getters[GettersEnum.USER]
    }
  }

}
</script>

<style scoped lang="scss">

.user-info-wrapper {
  background: #f2f2f2;
  height: 100Vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.illustration-wrapper {
  width: 25%;
  height: 100%;
  background: rgba(154, 246, 224, 0.56);

}

::v-deep div.illustration {
  background-size: 50%;
  background-position-x: 150px;
}

.bold {
  font-weight: bold;
}

.info-wrapper {
  flex-grow: 1;
  padding: 5% 7% 0 20px;
  height: 80%;
}

.card {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  margin: 1rem;
  position: relative;
  width: 90%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  font-size: 18px;

  div {
    margin: -1.5rem 1rem -1.75rem 0 -1.75rem;
    padding: 1rem 1.75rem;
    border-bottom: 1px solid #d4dade;
  }
}

</style>
