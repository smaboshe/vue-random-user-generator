const app  = Vue.createApp({
  data () {
    return {
      firstName: 'Andrew',
      lastName: 'Banda',
      email: 'andrew.banda@example.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/91.jpg',
    }
  }
})

app.mount('#app')
