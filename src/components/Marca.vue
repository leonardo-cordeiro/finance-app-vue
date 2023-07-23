<template>
  <div>
    <img src="../img/logo.png" alt="logo" />
    <span>FINANCE</span>
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
</style>
