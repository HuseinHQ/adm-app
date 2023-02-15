<template>
  <div class="focus-within:text-gray-400 border border-slate-300 rounded-md ml-auto">
    <!-- <span class="inset-y-0 left-0 flex items-center pl-2">
      <button type="submit" class="p-1 focus:outline-none focus:shadow-outline">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
          <path d="M22 22l-6-6"></path>
          <path d="M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z"></path>
        </svg>
      </button>
    </span> -->
    <input class="py-2 px-3 text-sm text-white rounded-md placeholder:font-semibold focus:outline-none focus:bg-white focus:text-gray-900" type="search" name="search" placeholder="Search">
  </div>
</template>

<script>
  export default {
    name: 'SearchField',
  }
</script>