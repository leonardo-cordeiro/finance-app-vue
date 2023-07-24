<template>
  <div class="blocoLancamento">
    <div class="botoes">
      <button class="botaoRemover">
        <img src="../img/lixeira.png" alt="remover lançamento" />
      </button>

      <button class="botaoEditar">
        <img src="../img/editor.png" alt="editar lançamento" />
      </button>
    </div>

    <div class="descricaoLancamento">
      <span v-if="tipo === 'entrada'" class="valor entrada"
        >R$
        {{
          lancamento.valor.toLocaleString(undefined, {
            minimumFractionDigits: 2
          })
        }}</span
      >
      <span v-else-if="tipo === 'saida'" class="valor gasto"
        >R$
        {{
          lancamento.valor.toLocaleString(undefined, {
            minimumFractionDigits: 2
          })
        }}</span
      >
      <span>{{ lancamento.descricao }}</span>
      <span>{{ new Date(lancamento.data).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlocoLancamento',
  props: {
    tipo: String,
    lancamento: Object
  }
}
</script>

<style scoped>
.blocoLancamento {
  display: flex;
  background-color: white;
  border-radius: 20px;
  font-family: 'padrao';
  padding: 10px;
  margin-bottom: 10px;
}

.botoes {
  width: 50%;
}

.botaoRemover {
  border: none;
  outline: none;
  background-color: white;
  padding-top: 15px;
  cursor: pointer;
}

.botaoRemover img {
  width: 45px;
}
.botaoRemover img:active {
  filter: invert(100%);
}

.botaoEditar {
  border: none;
  outline: none;
  background-color: white;
  padding-top: 15px;
  cursor: pointer;
}

.botaoEditar img {
  width: 45px;
}

.botaoEditar img:active {
  filter: invert(40%);
}

.descricaoLancamento {
  width: 50%;
  float: right;
  text-align: right;
}

.descricaoLancamento span {
  display: block;
  padding: 2px;
}

.valor {
  font-family: 'negrito';
  font-size: 200%;
}

.entrada {
  color: #04bf33;
}

.gasto {
  color: red;
}
</style>
