<template>
  <div class="mt-[10%]">
    <div id="app" class="h-full flex-col flex justify-center align-middle">
      <LoginTitle />
      <Form />
      <img class="vector1" src="../assets/image/vector1.png" alt="vector">
      <img class="vector2" src="../assets/image/vector2.png" alt="vector2">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Form from '../components/Form.vue'
import LoginTitle from '../components/LoginTitle.vue';

export default {
    name: "IndexPage",
    async created() {
      let getCookie = document.cookie
      let cookie = getCookie.split("Session=")
      await axios.post('http://localhost:5000/api/v1/get-status', {
        cookies: cookie[1]
      }).catch((err) => {
        console.log(err)
      }).then((res) => {
        if (res === undefined) {
          document.cookie = "Session" + '="";expires=Thu, 01 Jan 1970 00:00:01 GMT;'
          
        } else {
          if (res.status === 200) {
            window.location.href = '/download'
          }
        }
      })
    },
}
</script>

<style scoped>
  .vector1 {
    position: absolute;
    top: 120px;
    right: 300px;
    z-index: -1;
    width: 250px;
  }
  .vector2 {
    position: absolute;
    bottom: 50px;
    left: 250px;
    z-index: -1;
    width: 100px;
  }
</style>
