<template>
  <p>{{ count }}</p>
  <button @click="increment">+</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
    ...mapActions([
      'increment'
    ])
  }
}
</script>
