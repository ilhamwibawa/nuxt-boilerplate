<template>
  <div>
    <template v-if="loading"> Loading! </template>
    <template v-else>
      <div class="sample">
        <div
          v-for="sample in samples"
          :key="sample.id"
          :style="`background-color: ${sample.color}`"
          class="sample__item"
        >
          {{ sample.name }}
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      samples: (state) => {
        return state.sample.samples
      },
      loading: (state) => {
        return state.sample.loading
      },
    }),
  },
  mounted() {
    this.$store.dispatch('sample/get_samples')
  },
}
</script>

<style lang="scss" scoped>
.sample {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include element('item') {
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 1.4rem;
  }
}
</style>
