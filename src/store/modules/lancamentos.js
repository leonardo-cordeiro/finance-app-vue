import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_URL_API_LANCAMENTOS
})

const moduloLancamentos = {
  // Guardar os dados
  state: {
    lancamentos: [],
    caixa: 0
  },
  // Metódo para devolver os dados para a aplicação
  getters: {
    ultimosLancamentos: (state) => state.lancamentos.slice(0, 3),
    todosLancamentos: (state) => state.lancamentos,
    dinheiroEmCaixa: (state) => state.caixa
  },
  // Metódos que fazem solicitações para alterar os dados
  actions: {
    carregarLancamentos: async ({ commit }) => {
      const resposta = await http.get('/')
      commit('atualizarLancamentos', resposta.data)
      commit('calcularCaixa')
    },
    salvarLancamento: async ({ commit }, lancamento) => {
      await http.post('/', lancamento)
      commit('adicionarLancamento', lancamento)
      commit('calcularCaixa')
    },
    atualizarCaixa: ({ commit }) => commit('calcularCaixa'),
    excluirLancamento: async ({ commit }, id) => {
      const resposta = await http.delete(`/${id}`)
      if (resposta.status === 204) {
        commit('removerLancamento', id)
        commit('calcularCaixa')
      }
    }
  },
  // Faz as alteração dos dados
  mutations: {
    atualizarLancamentos: (state, lancamentos) => (state.lancamentos = lancamentos),
    adicionarLancamento: (state, lancamento) => state.lancamentos.unshift(lancamento),

    calcularCaixa: (state) => {
      const caixa =
        state.lancamentos.length > 0 ? state.lancamentos.map((lancamento) => lancamento.valor).reduce((soma, valor) => soma + valor) : 0

      state.caixa = caixa
    },

    removerLancamento: (state, id) => (state.lancamentos = state.lancamentos.filter((lancamento) => lancamento.id !== id))
  }
}

export default moduloLancamentos
