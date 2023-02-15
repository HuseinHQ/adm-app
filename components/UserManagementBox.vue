<template>
  <div class="container mb-6">
    <div class="max-w-[93rem] bg-white mx-auto rounded-md shadow-md">
      <div class="pt-5 mx-6 mb-5 flex gap-3">
        <ActionButton childclass="bg-green-500 hover:bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-md" action="Download" />
        <ActionButton childclass="bg-yellow-500 hover:bg-yellow-700 text-white text-sm font-semibold py-2 px-4 rounded-md" action="Add User" />
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

export default {
    name: "UserManagementBox",
    components: { ActionButton, UserManagementForm, Pagination, SearchField }
}
</script>