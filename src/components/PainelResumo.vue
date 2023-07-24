<template>
  <div id="painelResumo">
    <div class="resumoCaixa">
      <span class="titleResumo">Dinheiro em caixa</span>
      <span class="caixa">R$ 0</span>
    </div>

    <div class="grafico">
      <canvas></canvas>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PainelResumo'
}
</script>

<style scoped>
#painelResumo {
  width: 60%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  padding: 10px;
}

.resumoCaixa {
  text-align: right;
  padding: 10px;
}

.resumoCaixa span {
  display: block;
  font-family: 'negrito';
}

.titleResumo {
  font-size: 300%;
}

.caixa {
  font-size: 400%;
}
</style>
