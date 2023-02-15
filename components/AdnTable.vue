<template>
  <div class="mx-6 rounded-md overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">No</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">MSISDN</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">SMS</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Tanggal</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Waktu</th>
        </tr>
      </thead>
      <tbody v-for="item in items" class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.no }}</td>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.msisdn }}</td>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.sms }}</td>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.tanggal }}</td>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.waktu }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name: 'AdnTable',
    data(){
      return{
        items: []
      }
    },
    async created() {
      let getCookie = document.cookie
      let cookie = getCookie.split("Session=")
      const response = await axios.post('http://localhost:5000/api/v1/getdataadn', {
        cookies: cookie[1],
      }).catch((err) => {
        console.log(err)
      }).then((res) => {
        if (res === undefined) {
          alert("Data Not Found")
        } else {
          console.log(res.data.data)
          this.items = res.data.data
        }
      })
      
    }
  }
</script>