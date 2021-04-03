const resource = '/unknown'

export default ($axios) => ({
  getAll() {
    return $axios.get(`${resource}`)
  },
})
