<template>
  <div class="mx-6 rounded-md overflow-hidden">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">No</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">User Domain</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Regional</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Status Admin</th>
          <th scope="col" class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200" v-for=" ( item, index ) in items">
        <tr>
          <td class="px-6 py-3 whitespace-nowrap">{{index + 1}}</td>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.user_domain }}</td>
          <td class="px-6 py-3 whitespace-nowrap">{{ item.regional }}</td>
          <td class="px-6 py-3 whitespace-nowrap"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-green-100 text-green-800">Admin {{ item.status }}</span></td>
          <td class="px-6 py-3 whitespace-nowrap" v-if="item.statusadmin === 'Web'">
            <nuxt-link class="inline bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md" :to="'/edit?id='+item.id">Edit</nuxt-link>
            <nuxt-link class="inline bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md" :to="'/delete?id='+item.id">Delete</nuxt-link>
          </td>
          <td class="px-6 py-3 whitespace-nowrap" v-else>
            <nuxt-link class="inline bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md opacity-25" :to="''">Edit</nuxt-link>
            <nuxt-link class="inline bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md opacity-25" :to="''">Delete</nuxt-link>
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import console from 'console';

export default {
  name: 'UserManagementTable',
  data(){
    return{
      items: [],
      statusweb: {
      },
    }
  },
  async created () {
    
    let getCookie = document.cookie
    let cookie = getCookie.split("Session=")
    await axios.post('http://localhost:5000/api/v1/get-user', {
      cookies: cookie[1],
    }).catch((err) => {
      console.log(err)
    }).then((res) => {
      if (res === undefined) {
        alert("Data Not Found")
      } else {
        this.items = res.data.data.map(v => ({...v, statusadmin: res.data.statusadmin}))
      }
    })
    
    
  }, 
}
</script>