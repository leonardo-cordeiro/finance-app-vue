<template>
  <div class="wrap">
    <router-link v-if="showFinanceLink" @click="onClickShowHistoryLink" to="/">
      <img src="../img/logo.png" alt="logo" />
    </router-link>
    <router-link v-if="showFinanceLink" @click="onClickShowHistoryLink" to="/">
      <span class="titulo">FINANCE</span>
    </router-link>

    <div id="menu" v-if="showMenu">
      <router-link v-if="showHistoryLink" @click="hideHistoryLink" to="/historico" class="botao"> Histórico</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marcaFinanceira',
  data() {
    return {
      showFinanceLink: true,
      showHistoryLink: true,
      showMenu: true
    }
  },
  methods: {
    hideHistoryLink() {
      this.showHistoryLink = false
      this.showMenu = false
    },

    onClickShowHistoryLink() {
      this.showHistoryLink = true
      this.showMenu = true
    }
  }
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

a {
  text-decoration: none;
  color: var(--cor-destaque);
}

a:hover,
span:hover {
  color: rgb(170, 235, 170);
}

#menu {
  float: right;
  margin-right: 10px;
  border: 1px solid rgb(113, 112, 112);
  border-radius: 10%;
  background-image: linear-gradient(to right, #00b09b, #96c93d);
}

.botao {
  color: #fff;
}

@media screen and (max-width: 700px) {
  .wrap {
    height: 60px;
    padding: 20px 10px 0px 20px;
    font-size: 150%;
    max-width: 100%;
    width: 100%;
    background-image: linear-gradient(to right, #00b09b, #96c93d);
  }

  .titulo,
  .botao {
    color: #fff;
  }

  .botao {
    display: flex;
    justify-content: center;
    margin-top: 7px;
  }

  .botao:active {
    filter: invert(60%);
  }

  #menu {
    height: 30px;
    padding: 4px;
    margin-bottom: 5px;
    font-size: 60%;
    border: 1px solid rgb(113, 112, 112);
    border-radius: 10%;
    background-image: linear-gradient(to right, #00b09b, #96c93d);
  }
}
</style>
