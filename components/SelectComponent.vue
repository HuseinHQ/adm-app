
<template>
   <div>
    <div class="select-card">
      <label class="select-title">{{ title }}</label>
      <select class="select-field" >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
   </div>
    
  </template>
  
  <script>
    
    export default {
      name: 'RequestPage',
      props: {
        title: String,
        type: String,
        width:Number
      }
    }
  </script>
  <style scoped>
  body{
    background-color: white;
  }
  .select-title {
      font-weight: 700;
      font-size: 18px;
      color: #7C7D80;
      padding-bottom: 10px;
      margin: 10px;
      width: 100%;
      
    }
    
    .select-card {
      display: flex;
      flex-direction: column;
      
    }
    .select-title {
      text-align: start;
    }
    .select-field {
      width: 97%;
      height: 40px;
      border: 1px solid #7C7D80;
      
      padding-left: 10px;
      padding-right: 10px;
    }
</style>