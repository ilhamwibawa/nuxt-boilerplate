import SampleRepository from '~/repositories/sampleRepository'

export default ($axios) => ({
  sample: SampleRepository($axios),
})
