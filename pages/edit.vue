<template>
  <div>
    <Navbar />
    <div class="add-user-container flex justify-center align-middle">
      <div class="w-1/2 mt-10 bg-white mx-auto rounded-md shadow-md">
        <p class="title-form text-xl font-bold pt-6 pb-2 mx-7">Edit User</p>
        <form action="" class="flex flex-row flex-auto ml-6 mr-6 pb-6">
          <div class="w-1/2">
            <div class="mr-3">
              <label
                for="username "
                class="block mb-2 text-md font-medium text-slate-500"
                >Username</label
              >
              <input
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                type="text"
                required
                name="username"
                id="username"
                placeholder="e.g john.com"
                v-model="username"
              />
            </div>

            <div class="mr-3 mt-3">
              <label
                for="regional"
                class="block mb-2 text-md font-medium text-slate-500"
                >Regional</label
              >
              <input
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                type="text"
                required
                name="regional"
                id="regional"
                placeholder="Input Regional"
                v-model="regional"
              />
            </div>

            <div class="mr-3 mt-3">
              <label
                for="status"
                class="block mb-2 text-md font-medium text-slate-500"
                >Status Admin</label
              >
              <select
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px]"
                name="status"
                required
                autocomplete="off"
                id="status"
                placeholder="Select Admin Status"
                v-model="status"
              >
                <option value="" selected hidden disabled class="unselect">
                  Select Admin Status
                </option>
                <option value="Web" :selected="status === 'Web' ? true : false">
                  Admin Web
                </option>
                <option
                  value="Regional"
                  :selected="status === 'Regional' ? true : false"
                >
                  Admin Regional
                </option>
                <option
                  value="User"
                  :selected="status === 'User' ? true : false"
                >
                  Admin User
                </option>
              </select>
            </div>
          </div>

          <div class="w-1/2">
            <div class="mr3">
              <label
                for="password"
                class="block mb-2 text-md font-medium text-slate-500"
                >Password</label
              >
              <input
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                type="password"
                required
                name="password"
                id="password"
                placeholder="e.g ineedadn123"
                v-model="password"
              />
            </div>

            <div class="mr-3 mt-3">
              <label
                for="confirm"
                class="block mb-2 text-md font-medium text-slate-500"
                >Confirm Password</label
              >
              <input
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                type="password"
                required
                name="confirm"
                id="confirm"
                placeholder="e.g ineedadn123"
                v-model="passwordConfirm"
                value="{passwordConfirm}"
              />
            </div>
            <div class="mt-9 flex flex-wrap gap-5 justify-center">
              <button
                class="text-white text-sm font-semibold py-2 px-4 rounded-md bg-green-600"
                type="button"
                @click="cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                class="text-white text-sm font-semibold py-2 px-4 rounded-md bg-red-700"
                @click="submitdata"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import axios from 'axios'
//import Fortify from "fortify-js";

export default {
  name: 'EditUser',
  data() {
    return {
      username: '',
      regional: '',
      status: '',
      password: '',
      passwordConfirm: '',
    }
  },
  props: {
    id: Number,
  },
  async created() {
    //var field = document.getElementById('password');
    //var confirmField = document.getElementById('confirm');
    //var fortify = new Fortify(field, confirmField);
    let getCookie = document.cookie
    let cookie = getCookie.split('Session=')
    let ulrParams = new URLSearchParams(window.location.search)

    await axios
      .post('http://localhost:5000/api/v1/getdatauser', {
        cookies: cookie[1],
        id: ulrParams.get('id'),
      })
      .catch((err) => {
        console.log(err)
      })
      .then((res) => {
        if (res === undefined) {
          alert('Incorrect Id - ' + ulrParams.get('id') + '!!')
        } else {
          if (res.status == 200) {
            this.username = res.data.data.user_domain
            this.regional = res.data.data.regional
            this.status = res.data.data.status
          }
        }
      })
  },
  methods: {
    cancel() {
      window.location.href = '/user-management'
    },
    async submitdata() {
      let getCookie = document.cookie
      let cookie = getCookie.split('Session=')
      let ulrParams = new URLSearchParams(window.location.search)
      await axios
        .post('http://localhost:5000/api/v1/edituser', {
          username: this.username,
          password: this.password,
          confirmPassword: this.passwordConfirm,
          region: this.regional,
          status: this.status,
          cookies: cookie[1],
          id: ulrParams.get('id'),
        })
        .catch((err) => {
          console.log(err)
        })
        .then((res) => {
          if (res === undefined) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Data Kosong!',
              footer: '<a href="">Why do I have this issue?</a>',
            })
          } else {
            if (res.status === 200) {
              window.alert(res.data.message)
              window.location.href = '/user-management'
            }
          }
        })
    },
  },
  components: { Navbar },
}
</script>
