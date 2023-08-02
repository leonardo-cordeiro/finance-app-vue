<template>
  <div>
    <Line ref="chart" v-if="loaded" :options="options" :data="data" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default {
  name: 'GraficoComponente',
  components: { Line },
  computed: mapGetters(['todosLancamentos']),

  data: () => {
    return {
      loaded: false,
      data: {
        labels: [],
        datasets: [
          {
            label: 'Valor em caixa',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },

  watch: {
    todosLancamentos: {
      handler(todosLancamentos) {
        this.loaded = false
        this.renderizarGrafico(todosLancamentos)
        this.loaded = true
      },
      immediate: true
    }
  },

  created() {
    // eslint-disable-next-line no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'calcularCaixa') {
        this.loaded = false
        this.renderizarGrafico()
        this.loaded = true
      }
    })
  },

  methods: {
    renderizarGrafico() {
      {
        let lancamentos = [...this.todosLancamentos]
        lancamentos.sort((a, b) => new Date(a.data) - new Date(b.data))
        let valorEmCaixa = 0
        let datas = []
        let valores = []

        lancamentos.forEach((lancamento) => {
          const dataFormatada = new Date(lancamento.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
          datas.push(dataFormatada)
          valorEmCaixa += lancamento.valor
          valores.push(valorEmCaixa)
        })

        this.data.labels = datas
        this.data.datasets[0].data = valores
        if (this.$refs.chart && this.$refs.chart.chart) {
          this.$refs.chart.chart.update()
        }
      }
    }
  }
}
</script>

<style scoped>
div {
  width: 90% !important;
}

@media screen and (max-width: 700px) {
  div {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
