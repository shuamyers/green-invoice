<template>
  <div id="app">
    <img src="./assets/green_logo.svg" class="green-logo" alt="green-invoice logo"/>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://cdn.d.greeninvoice.co.il/assets/web-app/2.2.331/components/webfonts/all.min.css');

html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'almoni-neue-dl', sans-serif;
  color: #23445A;
}

.green-logo {
  height: 34px;
  width: 221px;
  position: fixed;
  top: 44px;
  right: 85.8px;
}

.btn {
  font-size: 1rem;
  border-radius: 100px;
  height: 56px;
  width: 228px;
  border: 1px solid #18C746;
  margin-top: 40px;
}

</style>
