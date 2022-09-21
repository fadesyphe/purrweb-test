module.exports = {
  content: ['./dist/*.html'],
  theme: {
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1023px' },
      laptop: { min: '1023px', max: '1600px' },
      desktop: { min: '1600px' }
    },
    extend: {}
  },
  plugins: [],
  variants: {
    extend: {}
  },
  plugins: []
}
