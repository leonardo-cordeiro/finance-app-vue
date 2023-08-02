<template>
  <div>
    <Marca />
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Marca from './components/Marca.vue'
export default {
  name: 'App',
  components: { Marca, Header }
}
</script>

<style>
@font-face {
  font-family: 'padrao';
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: 'negrito';
  src: url(./fonts/KumbhSans-Bold.ttf);
}

:root {
  --cor-destaque: #04bf33;
}
html {
  max-width: 100%;
}

body {
  margin: 0;
  padding: 0;
  background-color: #dddddd;
  max-width: 100%;
}

.entrada {
  color: #04bf33;
}

.gasto {
  color: red;
}

@media screen and (max-width: 700px) {
  div {
    max-width: 100%;
  }
  #paineis {
    display: block;
    padding: 2%;
  }
}
</style>
