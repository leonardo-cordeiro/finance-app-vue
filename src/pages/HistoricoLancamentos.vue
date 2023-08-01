<template>
  <div id="containerHistorico">
    <div id="titulo">
      <h1>Histórico de lançamentos</h1>
    </div>

    <BlocoLancamento
      v-for="lancamento in todosLancamentos"
      v-bind:key="lancamento.id"
      :tipo="lancamento.valor > 0 ? 'entrada' : 'saida'"
      :lancamento="lancamento"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BlocoLancamento from '../components/BlocoLancamento.vue'
export default {
  name: 'HistoricoLancamentos',
  components: {
    BlocoLancamento
  },
  methods: mapActions(['carregarLancamentos']),
  computed: mapGetters(['todosLancamentos']),
  created() {
    this.carregarLancamentos()
  }
}
</script>

<style scoped>
#containerHistorico {
  padding: 20px;
}

#titulo {
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  text-align: center;
  margin-bottom: 20px;
}

h1 {
  font-family: 'negrito';
  color: var(--cor-destaque);
}
</style>
