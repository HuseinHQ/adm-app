<template>
    <!-- <div class="">
      <label class="">{{ title }}</label>
      <input class="" type="date" />
    </div> -->
  <div class="pr-3">
    <label for="date" class="block mb-2 text-md font-medium text-slate-500">{{ title }}</label>
    <input id="date" type="date" class="border border-slate-500 text-slate-300 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[200px] px-4 py-[8px]" />
      
  </div>
</template>

<script>
export default {
  name: 'DateField',
  props: {
    title: String,
  }
}
</script>

<!-- <style scoped>
.label-title {
  font-weight: 700;
  font-size: 16px;
  color: #7C7D80;
  padding-bottom: 5px;
}
input::placeholder {
  font-weight: 700;
  font-size: 12px;
  color: rgba(57, 62, 70, 0.2);
}
.input-card {
  display: grid;
  flex-direction: column;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
.label-title {
  text-align: start;
}
.input-field {
  width: 200px;
  height: 40px;
  border: 1px solid #7C7D80;
  border-radius: 5px;
  padding-left: 20px;
  padding-right: 20px;
}
</style> -->