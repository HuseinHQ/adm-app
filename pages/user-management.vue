<template>
  <div>
    <Navbar />
    <div class="max-w-[100%] m-6">
      <div class="bg-white mx-auto rounded-md shadow-md">
        <h2 class="text-xl font-bold pt-6 pb-2 mx-7">User Management</h2>
        <hr class="mx-6 my-2" />
        <!-- Button Download and Search -->
        <div class="pt-5 mx-6 mb-5 flex gap-3">
          <button
            class="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
            v-on:click.prevent="download"
          >
            Download
          </button>
          <button
            class="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
            @click="addGoto"
            v-if="statusweb === 'Web'"
          >
            Add User
          </button>
          <div
            class="focus-within:text-gray-400 border border-slate-300 rounded-md ml-auto"
          >
            <input
              class="py-2 px-3 text-sm text-black rounded-md placeholder:font-semibold focus:outline-none focus:bg-white focus:text-gray-900"
              type="search"
              name="search"
              placeholder="Search"
              v-model="searchKey"
            />
          </div>
        </div>

        <!-- Table -->
        <div class="mx-6 rounded-md overflow-hidden">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider"
                >
                  No
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider"
                >
                  User Domain
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider"
                >
                  Regional
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider"
                >
                  Status Admin
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-semibold bg-slate-200 uppercase tracking-wider"
                  v-if="statusweb === 'Web'"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-if="filteredItems.length == 0">
                <td class="px-6 py-3 whitespace-nowrap text-center" colspan="5">
                  Data Not Found
                </td>
              </tr>
              <tr v-for="(item, index) in filteredItems">
                <td class="px-6 py-3 whitespace-nowrap">{{ index + 1 }}</td>
                <td class="px-6 py-3 whitespace-nowrap">
                  {{ item.user_domain }}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">{{ item.regional }}</td>
                <td class="px-6 py-3 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-md bg-green-100 text-green-800"
                    >Admin {{ item.status }}</span
                  >
                </td>
                <td
                  class="px-6 py-3 whitespace-nowrap"
                  v-if="statusweb === 'Web'"
                >
                  <nuxt-link
                    class="inline bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
                    :to="'/edit?id=' + item.id"
                    >Edit</nuxt-link
                  >
                  <nuxt-link
                    v-on:click.prevent="deleteUser"
                    class="inline bg-red-500 hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-md"
                    :to="'/delete?id=' + item.id"
                    >Delete</nuxt-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="flex items-center mt-8 pb-6 ml-6">
          <h3 class="px-3 font-semibold text-sm inline">View loads per page</h3>
          <select
            v-model="perPages"
            class="inline-block border border-slate-400 rounded-md mx-3 p-1"
          >
            <option selected value="1">1</option>
            <option>2</option>
            <option>4</option>
            <option v-if="perPages == items.length">{{ items.length }}</option>
            <option v-else>all</option>
          </select>
          <nav
            class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a
              class="relative pr-1 inline-flex items-center rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50"
              v-if="page >= 4"
              @click="page = pagesFirst"
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <img
                class="w-5 rotate-180"
                src="https://cdn-icons-png.flaticon.com/512/2722/2722998.png "
              />
            </a>
            <a
              class="relative inline-flex items-center py-2 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50"
              v-if="page != 1"
              @click="page--"
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <img
                class="w-3 rotate-180"
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              />
            </a>

            <a
              class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200"
              @click="page = pageData"
              v-for="pageData in pages.slice(page - 2, page - 1)"
              v-if="page != 1 && page == 2"
              >{{ pageData }}</a
            >
            <a
              class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200"
              @click="page = pageData"
              v-for="pageData in pages.slice(page - 3, page - 1)"
              v-if="page != 2"
              >{{ pageData }}</a
            >

            <a
              class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium underline hover:bg-slate-200"
              @click="page = pageData"
              v-for="pageData in pages.slice(page - 1, page)"
              v-if="page == pageData"
              >{{ pageData }}</a
            >

            <a
              class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200"
              @click="page = pageData"
              v-for="pageData in pages.slice(page, page + 2)"
              v-if="page != pageData"
              >{{ pageData }}</a
            >

            <a
              class="relative inline-flex items-center py-2 rounded-r-md text-sm font-medium text-gray-500 hover:bg-gray-50"
              v-if="page < pages.length"
              @click="page++"
            >
              <span class="sr-only">Next</span>
              <!-- Heroicon name: solid/chevron-right -->
              <img
                class="w-3"
                src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              />
            </a>
            <a
              class="relative inline-flex items-center pl-1 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50"
              v-if="page < pages.length && page < pages.length - 2"
              @click="page = pages.length"
            >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <img
                class="w-5"
                src="https://cdn-icons-png.flaticon.com/512/2722/2722998.png "
              />
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import axios from 'axios'
import { json2excel, excel2json } from 'js2excel'
import Swal from 'sweetalert2'

export default {
  name: 'UserManagement',
  data() {
    return {
      items: [],
      statusweb: '',
      searchKey: '',
      pagesFirst: 0,
      pages: [],
      page: 1,
      perPages: 4,
    }
  },
  async created() {
    let getCookie = document.cookie
    let cookie = getCookie.split('Session=')
    await axios
      .post('http://localhost:5000/api/v1/get-user', {
        cookies: cookie[1],
      })
      .catch((err) => {
        console.log(err)
      })
      .then((res) => {
        if (res === undefined) {
          alert('Data Not Found')
        } else {
          this.items = res.data.data.map((v) => ({ ...v, '': '' }))
          this.statusweb = res.data.statusadmin
        }
      })
  },
  components: { Navbar },
  methods: {
    addGoto() {
      window.location.href = '/add-user'
    },
    download() {
      let data = this.filteredItems

      let name = 'Data_User_Export'
      json2excel({
        data,
        name: name,
      })
    },
    deleteUser() {
      this.Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        }
      })
    },
    setPages(posts) {
      if (this.perPages == 'all') {
        this.perPages = posts.length
      }
      let numberOfPages = Math.ceil(posts.length / this.perPages)
      for (let index = 1; index <= numberOfPages; index++) {
        console.log(index)
        if (index == 1) {
          this.pagesFirst = index
        }
        this.pages.push(index)
      }
    },
    paginate(posts) {
      this.pages = []
      this.setPages(posts)
      let page = this.page
      let perPage = parseInt(this.perPages)
      let from = page * perPage - perPage
      let to = page * perPage
      return posts.slice(from, to)
    },
  },
  computed: {
    filteredItems() {
      return this.paginate(
        this.items.filter((item) => {
          if (
            item.user_domain
              .toLowerCase()
              .indexOf(this.searchKey.toLowerCase()) > -1
          ) {
            return (
              item.user_domain
                .toLowerCase()
                .indexOf(this.searchKey.toLowerCase()) > -1
            )
          } else {
            return (
              item.regional
                .toLowerCase()
                .indexOf(this.searchKey.toLowerCase()) > -1
            )
          }
        })
      )
    },
  },
}
</script>
