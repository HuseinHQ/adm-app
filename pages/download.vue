<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Generator Box -->
    <div class="container">
      <div class="bg-white max-w-[65rem] m-6 pb-6 rounded-md shadow-md">
        <!-- Title -->
        <h2 class="text-xl font-bold pt-4 pl-6">Generate Table</h2>
        <hr class="ml-6 mr-8 my-2">
        <form class="flex  items-end ml-6">

          <!-- Select ADN -->
          <div class="pr-3">
            <label for="select" class="block mb-2 text-md font-medium text-slate-500">Select ADN</label>
            <select id="select" required v-model="selectedData" @change="cekAdn" autocomplete="off" class="border border-slate-500  text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-4 py-[10px]">
              <option disabled value="" class="disabled:text-slate-300" >Select ADN</option>
              <option value="3934">3934</option>
              <option value="2367">2367</option>
            </select>
          </div>
      
          <!-- Select Keyword -->
          <div class="pr-3">
            <label for="select" class="block mb-2 text-md font-medium text-slate-500">Select Keyword</label>
            <select id="select" v-model="keyword" class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-4 py-[10px]">
              <option disabled selected value="">Select Keyword</option>
              <option v-for="keywordData in itemsKeyword" v-bind:value="keywordData.keyword">{{keywordData.keyword}}</option>
            </select>
          </div>
      
          <!-- Select Start Date -->
          <div class="pr-3">
            <label for="date" class="block mb-2 text-md font-medium text-slate-500">Start Date</label>
            <input id="date" v-model="startDate" type="date" class="border border-slate-500 text-slate-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-4 py-[8px]" />
          </div>
      
          <!-- Select End Date -->
          <div class="pr-3">
            <label for="date" class="block mb-2 text-md font-medium text-slate-500">End Date</label>
            <input id="date" v-model="endDate" type="date" class="border border-slate-500 text-slate-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-4 py-[8px]" />
          </div>
      
          <!-- Button Submit -->
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-9 rounded-md h-10" v-on:click.prevent="generateTable">Generate</button>
          
        </form>
      </div>
    </div>

    <!-- Adn BOX -->
    <div class="max-w-[100%] m-6" v-if="items.length != 0">
      <div class=" bg-white mx-auto rounded-md shadow-md">

        <!-- Search And Download Button-->
        <div class="pt-5 mx-6 mb-5 flex gap-3">
          <button class="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-md" v-on:click.prevent="downloadTable">Download</button>
          <!-- Search -->
          <div class="focus-within:text-gray-400 border border-slate-300 rounded-md ml-auto">
            <input class="py-2 px-3 text-sm text-black rounded-md placeholder:font-semibold focus:outline-none focus:bg-white focus:text-gray-900" type="search" name="search" placeholder="Search" v-model="searchKey" >
          </div>
        </div>

        <!-- ADN TABLE -->
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
            
            <tbody  class="bg-white divide-y divide-gray-200">
              <tr v-if="filteredItems.length == 0">
                <td class="px-6 py-3 whitespace-nowrap text-center" colspan="5"  >Data Not Found</td>
              </tr>
              <tr v-for="(item, index) in filteredItems">
                <td class="px-6 py-3 whitespace-nowrap">{{ index + 1}}</td>
                <td class="px-6 py-3 whitespace-nowrap">{{ item.msisdn }}</td>
                <td class="px-6 py-3 whitespace-nowrap">{{ item.sms }}</td>
                <td class="px-6 py-3 whitespace-nowrap">{{ item.tanggal }}</td>
                <td class="px-6 py-3 whitespace-nowrap">{{ item.waktu }}</td>
              </tr>
            </tbody>
          </table>
          
        </div>

        <!-- Pagination -->
        <div class="flex items-center mt-8 pb-6 ml-6 ">
          <h3 class="px-3 font-semibold text-sm inline">View loads per page</h3>
          <select v-model="perPages" class="inline-block border border-slate-400 rounded-md mx-3 p-1">
            <option selected value="1">1</option>
            <option >2</option>
            <option >4</option>
            <option v-if="perPages == items.length">{{items.length}}</option>
            <option v-else>all</option>
          </select>
          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <a class="relative pr-1 inline-flex items-center rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50" v-if="page >= 4" @click="page = pagesFirst"  >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <img class="w-5 rotate-180" src="https://cdn-icons-png.flaticon.com/512/2722/2722998.png "/>
            </a>
            <a class="relative inline-flex items-center py-2 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50" v-if="page != 1" @click="page--"  >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <img class="w-3 rotate-180" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"/>
            </a>

            <a class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium  hover:bg-slate-200" @click="page = pageData" v-for="pageData in pages.slice(page-2, page-1)"  v-if="page != 1 && page == 2">{{pageData}}</a>
            <a class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium  hover:bg-slate-200" @click="page = pageData" v-for="pageData in pages.slice(page-3, page-1)"  v-if="page != 2">{{pageData}}</a>

            <a class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium underline hover:bg-slate-200" @click="page = pageData" v-for="pageData in pages.slice(page-1, page)" v-if="page == pageData">{{pageData}}</a>

            <a class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200" @click="page = pageData" v-for="pageData in pages.slice(page, page+2)" v-if="page != pageData">{{pageData}}</a>
            
            <a class="relative inline-flex items-center  py-2 rounded-r-md text-sm font-medium text-gray-500 hover:bg-gray-50" v-if="page < pages.length" @click="page++"  >
              <span class="sr-only">Next</span>
              <!-- Heroicon name: solid/chevron-right -->
              <img class="w-3" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"/>
            </a>
            <a class="relative inline-flex items-center pl-1 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50" v-if="page < pages.length && page < pages.length - 2" @click="page = pages.length"  >
              <span class="sr-only">Previous</span>
              <!-- Heroicon name: solid/chevron-left -->
              <img class="w-5" src="https://cdn-icons-png.flaticon.com/512/2722/2722998.png "/>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue';
  import axios from 'axios';
  import {json2excel, excel2json} from 'js2excel';
  

  export default {
    name: "DownloadPage",
    data(){
      return{
        startDate: '',
        endDate: '',
        keyword: '',
        selectedData: '',
        searchKey: '',
        itemsKeyword: [],
        items: [],
        pagesFirst: 0,
        pages: [],
        page: 1,
        perPages: 4,
      }
    },
    async created() {
      
    },
    methods: {
      async generateTable(){
        if (this.selectedData == '') {
          alert('ADN not Selected')
        } else {
          let getCookie = document.cookie
          let cookie = getCookie.split("Session=")

          const response = await axios.post('http://localhost:5000/api/v1/getdataadn', {
            cookies: cookie[1],
            ADN_Number: this.selectedData,
            keyword: this.keyword,
            start_date: this.startDate,
            end_date: this.endDate
          }).catch((err) => {
            console.log(err)
          }).then((res) => {
            if (res === undefined) {
              alert("Data Not Found")
            } else {
              this.items = res.data.data
            }
          })
        }

        
      },
      async cekAdn(){
        let getCookie = document.cookie
        let cookie = getCookie.split("Session=")
        const response = await axios.post('http://localhost:5000/api/v1/getkeyword', {
          cookies: cookie[1],
          ADN_Number: this.selectedData
        }).catch((err) => {
          console.log(err)
        }).then((res) => {
          if (res === undefined) {
            alert("Data Not Found")
          } else {
            this.itemsKeyword = res.data.data
          }
        })
      },
      downloadTable(){
        let data = this.filteredItems
        let name = 'Data_ADN_Export'
        json2excel({
          data,
          name: name,
        })
      },
      setPages(posts){
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
        let page = this.page;
        let perPage = parseInt(this.perPages);
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return posts.slice(from, to)
      }
    },
    filters: {
      trimWords(value){
        return value.split(" ").splice(0,20).join(" ") + '...';
      }
    },
    computed: {
      filteredItems () {
        return this.paginate(this.items.filter(item => {
          if ( item.sms.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1) {
            return item.sms.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
          } else {
            return item.msisdn.toLowerCase().indexOf(this.searchKey.toLowerCase()) > -1
          }
        }))
        
      }
    },
    components: { Navbar}
} 
</script>