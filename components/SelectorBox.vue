<template>
  <form class="flex  items-end ml-6">
    <SelectField title="Select ADN" placeholder="Select ADN" />
    <SelectField title="Select Keyword" placeholder="Select Keyword" />
    <DateField title="Start Date" />
    <DateField title="End Date" />
    <ActionButton childclass="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-9 rounded-md h-10" action="Generate" />
  </form>
</template>

<script>
  import SelectField from './SelectField.vue';
  import DateField from './DateField.vue';
  import ActionButton from './ActionButton.vue';

  export default {
    name: "SelectorBox",
    components: { ActionButton }
}  
</script>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-left: 5px;
    padding-right: 15px;
    align-items: flex-end;
  }
</style>