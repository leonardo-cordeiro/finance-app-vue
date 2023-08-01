<template>
  <div>
    <canvas id="grafico"></canvas>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chart from 'chart.js/auto'

export default {
  name: 'GraficoComponente',
  computed: mapGetters(['todosLancamentos']),
  methods: {
    renderizarGrafico() {
      const areaGrafico = document.getElementById('grafico')

      if (areaGrafico) {
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

        const corCurva = valorEmCaixa > 0 ? 'green' : 'red'
        const config = {
          type: 'line',
          data: {
            labels: datas,
            datasets: [
              {
                label: 'Valor em caixa',
                borderColor: corCurva,
                backgroundColor: corCurva,
                data: valores,
                fill: false
              }
            ]
          },
          options: this.opcoesGrafico
        }
        const contexto = areaGrafico.getContext('2d')
        if (this.chart) {
          this.chart.destroy()
        }
        this.chart = new Chart(contexto, config)
      }
    }
  },
  data: () => {
    return {
      opcoesGrafico: {
        responsive: true,
        title: {
          display: true,
          text: 'Dinheiro em caixa'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Dias'
              }
            }
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Renda'
              }
            }
          ]
        }
      },
      chart: null
    }
  },

  mounted() {
    this.renderizarGrafico()
  },

  created() {
    // eslint-disable-next-line no-unused-vars
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'calcularCaixa') {
        this.renderizarGrafico()
      }
    })
  }
}
</script>

<style scoped></style>
