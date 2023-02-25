<template>
    <div>
      <Navbar/>
      <RequestPagesInputForm /> 
    </div>
    
  </template>
  
  <script>
    import Navbar from '../components/Navbar.vue';
    import RequestPagesInputForm from '../components/RequestPagesInputForm.vue';
    export default {
      name: 'RequestPage',
      components: {
        Navbar,
        RequestPagesInputForm 
  }
      
    }
  </script>

  <style scoped >
  body{
    width: 100%;
  }
</style>