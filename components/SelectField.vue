<template>
  <div class="pr-3">
    <label for="select" class="block mb-2 text-md font-medium text-slate-500">{{ title }}</label>
    <select id="select" class="border border-slate-500 text-slate-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-4 py-[10px]">
      <option disabled selected>{{ placeholder }}</option>
      <option value="US"></option>
      <option value="CA"></option>
      <option value="FR"></option>
      <option value="DE"></option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectField',
  props: {
    title: String,
    placeholder: String,
    values: ['apa'],
  } 
}
</script>
