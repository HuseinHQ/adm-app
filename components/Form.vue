
import UsernameInput from './UsernameInput.vue';

<template>
  <form class="card">
    <div class="input-card">
      <label class="label-title">Username</label>
      <input class="input-field" type="text" placeholder="e.g. john.com" v-model="username" required>
    </div>
    <div class="input-card">
      <label class="label-title">Password</label>
      <input class="input-field" type="password" placeholder="e.g. ineedadn123" v-model="password" required >
    </div>
    
    <div class="link">
      <button type="submit" class="signin-button" @click="submitLogin">Sign In</button>
    </div>
  </form>
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
        console.log(err)
      }).then((res) => {
        if (res === undefined) {
          alert("Incorrect Username or Password!!")
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

<style>
  .card {
    display: flex;
    width: 550px;
    height: 450px;
    flex-direction: column;
    background-color: white;
    margin: auto;
    margin-top: 120px;
    border-radius: 8px;
    box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.25);
    -webkit-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.25);
    -moz-box-shadow: 1px 1px 4px 0px rgba(0,0,0,0.25);
  }
  .label-title {
    font-weight: 700;
    font-size: 18px;
    color: #7C7D80;
    padding-bottom: 20px;
  }
  input::placeholder {
    font-weight: 700;
    font-size: 16px;
    color: rgba(57, 62, 70, 0.2);
  }
  .input-card {
    display: flex;
    flex-direction: column;
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
  .label-title {
    text-align: start;
  }
  .input-field {
    width: 400px;
    height: 52px;
    border: 1px solid #7C7D80;
    border-radius: 5px;
    padding-left: 50px;
    padding-right: 50px;
  }
  .link {
    margin-left: auto;
    margin-right: auto;
  }
  .signin-button {
    background: linear-gradient(45deg, rgba(34,40,49,1) 0%, rgba(34,40,49,0.9080882352941176) 71%, rgba(34,40,49,0.7792366946778712) 91%, rgba(34,40,49,0.6896008403361344) 100%);
    font-weight: 800;
    font-size: 18px;
    color: white;
    border-radius: 200px;
    width: 300px;
    height: 52px;
    margin-top: 50px;
  }
  .signin-button:hover {
    background: linear-gradient(45deg, rgba(34,40,49,1) 0%, rgba(34,40,49,0.9080882352941176) 37%, rgba(34,40,49,0.7792366946778712) 68%, rgba(34,40,49,0.6896008403361344) 100%);
  }
</style>
