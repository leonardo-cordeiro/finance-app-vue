<template>
  <div id="container">
    <PainelLancamentos />
    <PainelResumo />
  </div>
</template>

<script>
import PainelResumo from '../components/PainelResumo.vue'
import PainelLancamentos from '../components/PainelLancamentos.vue'

export default {
  name: 'HomeApp',
  components: {
    PainelLancamentos,
    PainelResumo
  }
}
</script>

<style scoped>
#container {
  display: flex;
  padding: 20px;
}
</style>
