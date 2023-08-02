<template>
  <div id="painelResumo">
    <div class="resumoCaixa">
      <span class="titleResumo">Dinheiro em caixa</span>
      <span :class="dinheiroEmCaixa > 0 ? 'caixa entrada' : 'caixa gasto'">
        R$
        {{
          dinheiroEmCaixa.toLocaleString(undefined, {
            minimumFractionDigits: 2
          })
        }}
      </span>
    </div>

    <GraficoComportamento />
  </div>
</template>

<script>
import GraficoComportamento from './GraficoComportamento.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PainelResumo',
  computed: mapGetters(['dinheiroEmCaixa']),
  methods: mapActions(['atualizarCaixa']),
  components: {
    GraficoComportamento
  },
  created() {
    this.atualizarCaixa()
  }
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

@media screen and (max-width: 700px) {
  #painelResumo {
    width: 100%;
    margin: 0 auto auto 10px;
  }
  .titleResumo {
    /* width: 100%; */
    text-align: center;
    font-size: 150%;
  }

  .caixa {
    font-size: 200%;
    text-align: center;
    padding: 10px;
  }
}
</style>
