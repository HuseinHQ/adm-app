<template> 
  <div class="container mb-6">
    <div class="max-w-[92rem] bg-white mx-auto rounded-md shadow-md">
      <div class="pt-5 mx-6 mb-5 flex gap-3">
        <ActionButton childclass="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-md" action="Download" />
        <SearchField />
      </div>
      <AdnTable />
      <Pagination />
    </div>
  </div>
</template>

<script>
  // import AdnBar from './AdnBar.vue';
  import ActionButton from './ActionButton.vue';
  import SearchField from './SearchField.vue';
  import AdnTable from './AdnTable.vue';
  import Pagination from './Pagination.vue';

  export default {
    name: "AdnBox",
    components: { AdnTable, SearchField, ActionButton }
}
</script>