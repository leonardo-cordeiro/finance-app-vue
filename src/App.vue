<template>
  <div>
    <Marca />
    <Header />
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

body {
  margin: 0;
  background-color: #dddddd;
}
</style>
