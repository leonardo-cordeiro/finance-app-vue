<template>
  <div>
    <h1>FINANCE</h1>
    <p>Colocando a sua vida financeira nos eixos!</p>
  </div>
</template>

<script>
export default {
  name: 'headerFinance'
}
</script>

<style scoped>
div {
  background-image: linear-gradient(to right, #00b09b, #96c93d);
  color: white;
  padding: 20px 20px 10px 20px;
}

h1 {
  font-family: 'negrito';
  font-size: 250%;
}

p {
  font-family: 'padrao';
  font-size: 120%;
}

@media screen and (max-width: 700px) {
  div {
    margin-top: 60px;
    padding: 7% 0 0 20px;
    height: 200px;
    width: 100%;
    display: none;
  }
}
</style>
