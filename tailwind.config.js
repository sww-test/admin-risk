// https://docs.tailwindchina.com/docs/guides/vue-3-vite
module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
