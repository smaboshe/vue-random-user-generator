const app  = Vue.createApp({
  data () {
    return {
      firstName: 'Andrew',
      lastName: 'Banda',
      email: 'andrew.banda@example.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/91.jpg'
    }
  },
  methods: {
    getUser() {
      this.firstName = 'Thandiwe',
      this.lastName = 'Zulu',
      this.email = 'thandiwe.zulu@example.com',
      this.gender = 'female',
      this.picture = 'https://randomuser.me/api/portraits/women/91.jpg'
    },
  },
})

app.mount('#app')
