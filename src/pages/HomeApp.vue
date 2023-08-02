<template>
  <div id="container">
    <PainelResumo v-if="isSmallScreen" />
    <PainelLancamentos v-if="!isSmallScreen" />
    <PainelLancamentos v-if="isSmallScreen" />
    <PainelResumo v-if="!isSmallScreen" />
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
  },
  data() {
    return {
      isSmallScreen: false
    }
  },
  mounted() {
    this.updateScreenSize()
    window.addEventListener('resize', this.updateScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize)
  },
  methods: {
    updateScreenSize() {
      this.isSmallScreen = window.innerWidth <= 700
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  padding: 20px;
}

#container > div {
  flex: 1;
}

@media screen and (max-width: 700px) {
  #container {
    flex-direction: column;
  }
}
</style>
