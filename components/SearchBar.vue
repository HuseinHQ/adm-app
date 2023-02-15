<template>
    <input class="input-field" placeholder="Search" /> 
</template>

<script>
  export default {
    name: 'SearchBar',
  } 
</script>

<style scoped>
input:placeholder {
  font-weight: 700;
  font-size: 12px;
  color: rgba(57, 62, 70, 0.2);
}
.input-field {
  width: 200px;
  height: 40px;
  border: 1px solid #7C7D80;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  justify-self: flex-end;
}
</style>