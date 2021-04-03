export const state = () => ({
  samples: [],
  sample: [],
  loading: false,
})

export const mutations = {
  SET_SAMPLES(state, samples) {
    state.samples = samples
  },
  SET_SAMPLE(state, sample) {
    state.sample = sample
  },
  SET_LOADING(state, loading) {
    state.loading = loading
  },
}

export const actions = {
  async get_samples({ commit }) {
    // if (state.products.length) return
    commit('SET_LOADING', true)
    const res = await this.$repositories.sample.getAll()
    const { status, data } = res
    if (status === 200) {
      commit('SET_SAMPLES', data.data)
      commit('SET_LOADING', false)
    }
  },

  async get_sample({ commit }, sampleId) {
    commit('SET_LOADING', true)
    const res = await this.$repositories.sample.show(sampleId)
    const { status, data } = res
    if (status === 200) {
      commit('SET_SAMPLE', data.data)
      commit('SET_LOADING', false)
    }
  },
}
