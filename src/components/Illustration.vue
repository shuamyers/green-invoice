<template>
  <section class="illustration-wrapper">
    <div class="illustration"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Illustration extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.illustration-wrapper {
  background: #FFDCDC;
  display: flex;
}

.illustration {
  height: 100%;
  width: 100%;
  background: url(../assets/green_login_page.svg) 100% no-repeat;
  background-size: 85%;
  background-position-x: 230px;
}

@media screen and(max-width: 1200px) {
  .illustration {
    background-size: 75%;
    background-position-x: 150px;
  }
}

@media screen and(max-width: 1000px) {
  .illustration-wrapper {
    display: none;
  }
}
</style>
