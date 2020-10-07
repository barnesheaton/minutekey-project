import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#5f8ee4',
        grey: '#e6e6e6',
        white: '#ffffff',
        error: '#e4655f'
      },
      dark: {
        primary: '#19191a',
        error: '#e4655f'
      }
    }
  }
}

export default new Vuetify(opts)
