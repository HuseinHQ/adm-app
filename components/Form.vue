<template>
  <!-- Form Login -->
  <div class="w-full">
    <form class="container max-w-lg px-16 py-14 bg-white rounded-md shadow-md mx-auto">
      <div class="flex flex-col">
        <label for="username" class="mb-2 text-md font-bold text-slate-500">Username</label>
        <input id="username" class="border border-slate-300 text-slate-500 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-12 py-3 mb-6" type="text" placeholder="e.g. john.com" v-model="username" required>
      </div>
  
      <div class="flex flex-col">
        <label for="password" class="mb-2 text-md font-bold text-slate-500">Password</label>
        <input id="password" class="border border-slate-300 text-slate-500 text-md rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-12 py-3 mb-6" type="password" placeholder="e.g. ineedadn123" v-model="password" required >
      </div>
      
      <div class="flex ">
        <button type="submit" class="bg-gradient-to-r from-slate-800 to-slate-600 mx-auto px-10 py-3 rounded-full w-full text-white font-bold shadow-md mt-3 mb-4 hover:from-slate-700 hover:to-slate-500 duration-300 transition ease-in-out" v-on:click.prevent="submitLogin">Sign In</button>
      </div>
    </form>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'Form',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async submitLogin() {
      const response = await axios.post("http://localhost:5000/api/v1/login", {
        username: this.username,
        password: this.password
      }).catch((err) => {
        window.alert(err)
      }).then((res) => {
        if (res === undefined) {
          window.alert("Incorrect Username or Password!!")
        } else{
          if (res.status == 202) {
            const expire = Math.floor(Date.now() / 1000) + (60 * 60)
            console.log("Post successfully created!") 
            document.cookie = "Session="+res.data.token+";"+expire+";path=/"
            window.location.href = '/download';
          } 
        }
      })
    },
  }
}
</script>