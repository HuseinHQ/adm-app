<template>
  <div class="flex items-center mt-8 pb-6 ml-6 ">
    <h3 class="px-3 font-semibold text-sm inline">View loads per page</h3>
    <select class="inline-block border border-slate-400 rounded-md mx-3 p-1">
      <option>5</option>
      <option>10</option>
      <option>15</option>
      <option>20</option>
    </select>
    <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
      <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span class="sr-only">Previous</span>
        <!-- Heroicon name: solid/chevron-left -->
        <img class="w-4 rotate-180" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"/>
      </a>
      <a href="#" class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200">1</a>
      <a href="#" class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200">2</a>
      <a href="#" class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200">3</a>
      <span class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium">...</span>
      <a href="#" class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200">8</a>
      <a href="#" class="relative inline-flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-slate-200">9</a>
      <a href="#" class="relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium text-gray-500 hover:bg-gray-50">
        <span class="sr-only">Next</span>
        <!-- Heroicon name: solid/chevron-right -->
        <img class="w-4" src="https://cdn-icons-png.flaticon.com/512/271/271228.png"/>
      </a>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Pagination'
  }
</script>