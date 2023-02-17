
<template>
   <div class="input-component">
    <div class="input-card">
      <label class="label-title">{{ title }}</label>
      <input class="input-field" :type="type" :placeholder="placeholder">
    </div>
   </div>
    
  </template>
  
  <script>
    
    export default {
      name: 'RequestPage',
      props: {
        title: String,
        placeholder: String,
        type: String,
      }
    }
  </script>
  <style scoped>
  body{
    background-color: white;
  }
  
  .label-title {
      font-weight: 700;
      font-size: 18px;
      color: #7C7D80;
      padding-bottom: 10px;
      margin: 10px;
      width: 100%;
    }
    input::placeholder {
      font-weight: 700;
      font-size: 16px;
      color: rgba(57, 62, 70, 0.2);
    }
    .input-card {
      display: flex;
      flex-direction: column;
      margin-top:0px;
      
    }
    .label-title {
      text-align: start;
    }
    .input-field {
      width: 97%;
      height: 40px;
      border: 1px solid #7C7D80;
      
      padding-left: 10px;
      padding-right: 10px;
    }
</style>