<template>
  <div>
    <Navbar />
    <div class="add-user-container flex justify-center align-middle">
      <div class="form-add w-1/2 mt-10 bg-white mx-auto rounded-md shadow-md">
        <p class="title-form text-xl font-bold pt-6 pb-2 mx-7">Add New User</p>
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

              <select
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px]"
                name="regional"
                required
                autocomplete="off"
                id="regional"
                placeholder="Select regional"
                v-model="regional"
              >
                <option value="" selected hidden disabled class="unselect">
                  Select Region
                </option>
                <option value="BALNUS">BALNUS</option>
                <option value="JATIM">JATIM</option>
              </select>
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
                <option value="Web">Admin Web</option>
                <option value="Regional">Admin Regional</option>
                <option value="User">Admin User</option>
              </select>
            </div>
          </div>

          <div class="w-1/2">
            <div class="mr-3">
              <label
                for="password"
                class="block mb-2 text-md font-medium text-slate-500"
                >Password</label
              >
              <input
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                type="password"
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
import Swal from 'sweetalert2'

export default {
  name: 'AddUser',
  data() {
    return {
      username: '',
      password: '',
      passwordConfirm: '',
      status: '',
      regional: '',
    }
  },
  created() {},
  methods: {
    cancel() {
      window.location.href = '/user-management'
    },
    async submitdata() {
      if (this.username == '' && this.password == '') {
        Swal.fire({
          icon: 'error',
          title: 'Empty Data!',
          text: 'Please fill all the requirement fields',
        })
      } else {
        await axios
          .post('http://localhost:5000/api/v1/register', {
            username: this.username,
            password: this.password,
            passwordConfirm: this.passwordConfirm,
            region: this.regional,
            status: this.status,
          })
          .catch((err) => {
            console.log(err)
          })
          .then((res) => {
            if (res === undefined) {
              Swal.fire({
                icon: 'error',
                title: 'Invalid Data',
                text: 'Looks like the username is already taken!',
              })
            } else {
              if (res.status === 201) {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'User has been saved',
                  showConfirmButton: false,
                  timer: 60000,
                })
                window.location.href = '/user-management?status="success"'
              }
            }
          })
      }
    },
  },
  components: { Navbar },
}
</script>

<!-- <style>

    .add-user-container{
        display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    }

    .button-input{
        margin-top: 35px;
        display: flex;
        flex-wrap: wrap;
        gap: 22px;
        align-items: center;
        justify-content: center;
    }
    
    .input-add{
        width: 95%;
        margin: 10px 10px 48px 10px;
        height: 55px;
        padding: 10px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #7C7D80;
        border-radius: 5px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        color: #b8b9be;

        
    }

    .input-add::before{
        color: rgba(57, 62, 70, 0.2);
    }
    .selectdiv {
        position: relative;
    }
    .img-select {
        position: absolute;
        width: 30px;
        -webkit-transform: rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        right: 40px; 
        /*Adjust for position however you want*/
        
        top: 19px;
        opacity: 40%;
        color: rgba(57, 62, 70, 0.2);
        padding: 0 0 2px;
        pointer-events: none;
    }
    .selectdiv select{
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        /* Add some styling */
        
        line-height: 1.75;
        -ms-word-break: normal;
        word-break: normal;
        color: #b8b9be;
    }
    .input-add option {
        color: #b8b9be;
        height: 55px;
        padding: 10px;
        box-sizing: border-box;
        background: #FFFFFF;
        border: 1px solid #7C7D80;
        border-radius: 5px;

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
    }
    .input-add::-ms-expand {
        display: none;
    }
    .button-add {
        width: 153px;
        height: 52px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        align-items: center;
        text-align: center;

        color: #FFFFFF;
    }
    .cancel{
        background: #FF1E1E;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    .save{
        background: #2DC207;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    label {
        margin: 10px 10px 48px 10px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 29px;

        color: #7C7D80;
    }
    .label-username{
        width: 100%;
    }

    #username{
        background-image: none;
    }
    .form-add {
        width:1000px;

        padding: 48px;
        background: #FFFFFF;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
    }
    .title-form {
        margin: 0px 0px 30px 0px;
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 25px;
        line-height: 39px;
        display: flex;
        align-items: center;

        color: #000000;
    }
</style> -->
