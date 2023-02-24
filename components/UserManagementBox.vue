<template>
  <div class="container my-6">
    <div class="max-w-[93rem] bg-white mx-auto rounded-md shadow-md">
      <h2 class="text-xl font-bold pt-6 pb-2 mx-7">User Management</h2>
      <hr class="mx-6 my-2">
      <div class="pt-5 mx-6 mb-5 flex gap-3" >
        <button class="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-md" v-on:click="download">Download</button>
        <ActionButton childclass="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-semibold py-2 px-4 rounded-md" action="Add User" link="/add-user" />
        <!-- <ActionButton v-else childclass="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-semibold py-2 px-4 rounded-md opacity-25" action="Add User" link="" /> -->
        <SearchField />
      </div>
      <UserManagementTable />
      <Pagination />
    </div>
  </div>
</template>

<script>
import ActionButton from './ActionButton.vue';
import Pagination from './Pagination.vue';
import SearchField from './SearchField.vue';
import UserManagementForm from './UserManagementTable.vue';
import axios from 'axios';

export default {
    name: "UserManagementBox",
    data() {
      return {
        statusadminweb: ''
      }
    },
    async created(){
      
    },
    components: { ActionButton, UserManagementForm, Pagination, SearchField }, 
    methods: {
      addUser() {
        window.location.href = '/add-user'
      },
      async cekStatusAdmin(){
        let getCookie = document.cookie
        if (getCookie === "") {
          alert("Session is Expired")
          window.location.href = '/'
        }
        let cookie = getCookie.split("Session=")
        const response = await axios.post('http://localhost:5000/api/v1/get-status', {
          cookies: cookie[1]
        }).catch(() => {
          alert("You don't have access")
          window.location.href = '/'
        })
        // window.alert(response.data.statusadmin)
        this.statusadminweb = response.data.statusadmin
        this.$set(this.statusweb, 'status', response.data.statusadmin)
      }
    }
}
</script>