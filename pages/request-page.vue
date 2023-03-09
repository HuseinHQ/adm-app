<template>
  <div>
    <Navbar />

    <div class="form-request m-6">
      <div class="form-body rounded-md shadow-md bg-white pb-6 w-full">
        <h2 class="text-xl font-bold pt-6 pb-2 pl-6 w-full">
          ADM Request page
        </h2>

        <!-- Form -->
        <form class="flex flex-row flex-auto ml-6 mr-6 pb-6 gap-5">
          <!-- Left Input -->
          <div class="w-1/2">
            <!-- First Input -->
            <div class="mr-3 flex gap-3 w-full">
              <!-- ADN Number Input -->
              <div class="w-1/2">
                <label
                  for="adn_number"
                  class="block mb-2 text-md font-medium text-slate-500"
                  >ADN Number</label
                >
                <select
                  class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px]"
                  name="ADN_Number"
                  required
                  autocomplete="off"
                  id="ADN_Number"
                  placeholder="Select ADN Number"
                  v-model="ADN_Number"
                >
                  <option value="" selected hidden disabled class="unselect">
                    Select ADN Number
                  </option>
                  <option value="3439">3439</option>
                  <option value="2367">2367</option>
                </select>
              </div>

              <!-- Keyword Input -->
              <div class="w-1/2">
                <label
                  for="keyword "
                  class="block mb-2 text-md font-medium text-slate-500"
                  >Keyword</label
                >
                <input
                  class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                  type="text"
                  required
                  name="keyword"
                  id="keyword"
                  placeholder="e.g SIK"
                  v-model="keyword"
                />
              </div>
            </div>

            <!-- Program name input -->
            <div class="w-full mt-3 gap-3 mr-3">
              <label
                for="program_name "
                class="block mb-2 text-md font-medium text-slate-500"
                >Program Name</label
              >
              <input
                class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                type="text"
                required
                name="program_name"
                id="program_name"
                placeholder="e.g SIK"
                v-model="program_name"
              />
            </div>

            <!-- Program Description -->
            <div class="w-full mt-3 gap-3 mr-3">
              <label
                for="program_description"
                class="block mb-2 text-md font-medium text-slate-500"
                >Program Description</label
              >
              <textarea
                required
                name="program_description"
                id="program_description"
                rows="11"
                class="w-full border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-[10px] placeholder:text-slate-300"
                v-model="program_description"
              ></textarea>
            </div>

            <!-- Date Input -->
            <div class="mr-3 mt-3 flex gap-3 w-full">
              <!-- Start Date -->
              <div class="w-1/2">
                <label
                  for="program_start"
                  class="block mb-2 text-md font-medium text-slate-500"
                  >Program Start</label
                >
                <input
                  required
                  class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                  type="date"
                  name="program_start"
                  id="program_start"
                  v-model="program_start"
                />
              </div>

              <!-- End Date -->
              <div class="w-1/2">
                <label
                  for="program_end"
                  class="block mb-2 text-md font-medium text-slate-500"
                  >Program End</label
                >
                <input
                  required
                  class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                  type="date"
                  name="program_end"
                  id="program_end"
                  v-model="program_end"
                />
              </div>
            </div>

            <!-- White List -->
            <div class="w-full mr-3 mt-3 flex flex-col">
              <div class="w-full">
                <input
                  type="checkbox"
                  name="parent-checkbox"
                  value="White-list"
                  id="parent-option"
                  @click="activateOptions"
                />
                <label for="parent-checkbox">White List</label><br />
              </div>
              <div class="pl-3">
                <input
                  type="radio"
                  name="child-checkbox"
                  value="upload-White-list"
                  id="child-option-1"
                  disabled
                />
                <label for="parent-checkbox">Upload White List</label><br />

                <input
                  type="radio"
                  name="child-checkbox"
                  value="White-list-from-databse"
                  id="child-option-2"
                  disabled="false"
                />
                <label for="parent-checkbox"
                  >WhiteList from Existing Database</label
                ><br />
              </div>
            </div>
          </div>

          <!-- Right Input -->
          <div class="w-1/2">
            <!-- First Input -->
            <div class="mr-3 flex gap-3 w-full">
              <!-- ADN Type Input -->
              <div class="w-1/2">
                <label
                  for="adn_type"
                  class="block mb-2 text-md font-medium text-slate-500"
                  >ADN Type</label
                >
                <select
                  class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px]"
                  name="adn_type"
                  required
                  autocomplete="off"
                  id="adn_type"
                  v-model="ADN_Type"
                >
                  <option value="" selected hidden disabled class="unselect">
                    Select ADN Type
                  </option>
                  <option value="ADNCustom">ADN Custom</option>
                  <option value="ADNCollectingData">ADN Collecting Data</option>
                </select>
              </div>

              <!-- Price Input -->
              <div class="w-1/2">
                <label
                  for="price "
                  class="block mb-2 text-md font-medium text-slate-500"
                  >Price</label
                >
                <input
                  class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                  type="text"
                  required
                  name="price"
                  id="price"
                  placeholder="e.g 2000"
                  v-model="price"
                />
              </div>
            </div>

            <!-- SMS Success -->
            <div class="w-full mt-3 gap-3 mr-3">
              <label
                for="replay_success"
                class="block mb-2 text-md font-medium text-slate-500"
                >SMS Replay Success</label
              >
              <textarea
                name="replay_success"
                id="replay_success"
                rows="8"
                class="w-full border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-[10px] placeholder:text-slate-300"
                required
                v-model="replay_success"
              ></textarea>
            </div>

            <!-- SMS Reject -->
            <div class="w-full mt-3 gap-3 mr-3">
              <label
                for="replay_reject"
                class="block mb-2 text-md font-medium text-slate-500"
                >SMS Replay Reject</label
              >
              <textarea
                name="replay_reject"
                id="replay_reject"
                rows="8"
                class="w-full border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-[10px] placeholder:text-slate-300"
                required
                v-model="replay_reject"
              ></textarea>
            </div>

            <!-- Data Label -->
            <div class="w-full mt-3 mr-3">
              <div class="w-full">
                <label
                  for="data_label "
                  class="block mb-2 text-md font-medium text-slate-500"
                  >Data Label</label
                >
                <div class="flex gap-3">
                  <input
                    class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"
                    type="text"
                    name="data_label"
                    id="data_label"
                    placeholder="e.g SIK"
                    v-model="data_label"
                  />
                  <button
                    class="bg-green-500 w-10 h-10 rounded text-4xl text-white"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <!-- Button Submit -->
            <div class="w-full flex justify-end mt-6">
              <button
                class="bg-blue-500 w-140 h-15 rounded-md text-base p-2 text-white px-9"
                v-on:click.prevent="sendData"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'
import Swal from 'sweetalert2'

export default {
  name: 'RequestPage',
  data() {
    return {
      ADN_Number: 0,
      keyword: '',
      ADN_Type: '',
      price: 0,
      program_name: '',
      replay_success: '',
      replay_reject: '',
      program_description: '',
      program_start: '',
      program_end: '',
      data_label: '',
      ADN_Price: '',
    }
  },
  components: {
    Navbar,
  },
  methods: {
    activateOptions() {},
    async sendData() {
      let getCookie = document.cookie
      let cookie = getCookie.split('Session=')

      if (
        this.ADN_Number == 0 ||
        this.keyword == '' ||
        this.ADN_Type == '' ||
        this.program_end == '' ||
        this.program_start == '' ||
        this.replay_success == '' ||
        this.replay_reject == ''
      ) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Mohon lengkapi data dengan benar!',
        })
      } else {
        console.log(this.ADN_Number)
        await axios
          .post('http://localhost:5000/api/v1/request-adn', {
            cookies: cookie[1],
            ADN_Number: this.ADN_Number,
            ADN_Type: this.ADN_Type,
            keyword: this.keyword,
            ADN_Price: this.ADN_Price,
            sms_success: this.replay_success,
            sms_reject: this.replay_reject,
            program_start: this.program_start,
            program_end: this.program_end,
            program_desc: this.program_description,
            program_name: this.program_name,
          })
          .catch((err) => {
            console.log(err)
          })
          .then((res) => {
            if (res === undefined) {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Data not found!',
              })
            } else {
              Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Request ADN berhasil',
              })
            }
          })
      }
    },
  },
}
</script>

<style scoped>
body {
  width: 100%;
}
</style>
