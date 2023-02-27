<template>
    <div class="form-request">
        <div class="form-container">
          <h2 class="text-xl font-bold pt-6 pb-2 mx-7" >ADM Request page</h2>
          <div class="request-container">
            <LeftContainerRequestPage/>
          <RightContainerRequestPage/>
          </div>
          
      </div>

    </div>

    
    
  </template>
  
  <script>
  import LeftContainerRequestPage from './LeftContainerRequestPage.vue';
  import RightContainerRequestPage from './RightContainerRequestPage.vue';
  
    export default {
      name: 'InputField',
      components:{
        LeftContainerRequestPage,
        RightContainerRequestPage
      }
    }
  </script>
  
  <style scopped>
  body{
    background-color: #eeeeee;
    width: 100%;
  }
    .form-request{
        padding: 15px;
        
    }

  .form-container{

    
    background-color: white;
    padding: 30px 0px 30px 0px;
  }
  
  .request-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  </style>