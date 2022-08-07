<template>
  <p>{{ count }}</p>
  <p>{{ oddNumber }}</p>
  <p>{{ evenNumber }}</p>
  <p>{{ matchString(String(1)) }}</p>
  <button @click="countPlus">+</button>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    count () {
      return this.$store.state.count
    },

    ...mapGetters([
      'oddNumber',
      'evenNumber',
      'matchString'
    ])
  },

  methods: {
    countPlus () {
      this.$store.commit('increment')
    }
  }
}
</script>
