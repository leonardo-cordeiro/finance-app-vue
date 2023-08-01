<template>
  <div>
    <router-link to="/">
      <img src="../img/logo.png" alt="logo" />
    </router-link>
    <router-link to="/">
      <span>FINANCE</span>
    </router-link>

    <div id="menu">
      <router-link to="/historico"> Histórico de lançamentos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marcaFinanceira'
}
</script>

<style scoped>
div {
  background-color: white;
  font-family: 'negrito';
  padding: 10px;
}

img {
  width: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

span {
  color: var(--cor-destaque);
  font-size: 150%;
}

a {
  text-decoration: none;
  color: var(--cor-destaque);
}

a:hover,
span:hover {
  color: lightgreen;
}

#menu {
  float: right;
}
</style>
