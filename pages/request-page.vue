<template>
    <div>
      <Navbar/>

      <div class="form-request m-6">
        <div class="form-body rounded-md shadow-md bg-white pb-6 w-full">
          <h2 class="text-xl font-bold pt-6 pb-2 pl-6 w-full">ADM Request page</h2>

          <!-- Form -->
          <form class="flex flex-row flex-auto ml-6 mr-6 pb-6 gap-5">
            <!-- Left Input -->
            <div class="w-1/2">
              <!-- First Input -->
              <div class="mr-3 flex gap-3 w-full">
                <!-- ADN Number Input -->
                <div class="w-1/2">
                  <label for="adn_number" class="block mb-2 text-md font-medium text-slate-500">ADN Number</label>
                  <select class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px]"  name="adn_number" required autocomplete="off" id="adn_number" placeholder="Select ADN Number" v-model="ADN_Number">
                    <option value="" selected hidden disabled class="unselect">Select ADN Number</option>
                    <option value="3439" >3439</option>
                    <option value="2367" >2367</option>
                  </select>
                </div>

                <!-- Keyword Input -->
                <div class="w-1/2">
                  <label for="keyword " class="block mb-2 text-md font-medium text-slate-500">Keyword</label>
                  <input class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"  type="text" required name="keyword" id="keyword" placeholder="e.g SIK" v-model="keyword">     
                </div>
              </div>

              <!-- Program name input -->
              <div class="w-full mt-3 gap-3 mr-3">
                <label for="program_name " class="block mb-2 text-md font-medium text-slate-500">Program Name</label>
                <input class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"  type="text" required name="program_name" id="program_name" placeholder="e.g SIK" v-model="program_name">     
              </div>

              <!-- Program Description -->
              <div class="w-full mt-3 gap-3 mr-3">
                <label for="program_description" class="block mb-2 text-md font-medium text-slate-500">Program Description</label>
                <textarea name="program_description" id="program_description" rows="10" class="w-full border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-[10px] placeholder:text-slate-300" v-model="program_description"></textarea>
              </div>
            </div>

            <!-- Right Input -->
            <div class="w-1/2">
              <!-- First Input -->
              <div class="mr-3 flex gap-3 w-full">
                <!-- ADN Type Input -->
                <div class="w-1/2">
                  <label for="adn_type" class="block mb-2 text-md font-medium text-slate-500">ADN Type</label>
                  <select class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px]"  name="adn_type" required autocomplete="off" id="adn_type" v-model="ADN_Type">
                    <option value="" selected hidden disabled class="unselect">Select ADN Type</option>
                    <option value="ADNCustom" >ADN Custom</option>
                    <option value="ADNCollectingData" >ADN Collecting Data</option>
                  </select>
                </div>
                
                <!-- Price Input -->
                <div class="w-1/2">
                  <label for="price " class="block mb-2 text-md font-medium text-slate-500">Price</label>
                  <input class="border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[100%] px-4 py-[10px] placeholder:text-slate-300"  type="text" required name="price" id="price" placeholder="e.g 2000" v-model="price">     
                </div>
                
              </div>

              <!-- SMS Success -->
              <div class="w-full mt-3 gap-3 mr-3">
                <label for="replay_success" class="block mb-2 text-md font-medium text-slate-500">SMS Replay Success</label>
                <textarea name="replay_success" id="replay_success" rows="8" class="w-full border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-[10px] placeholder:text-slate-300" v-model="replay_success"></textarea>
              </div>

              <!-- SMS Reject -->
              <div class="w-full mt-3 gap-3 mr-3">
                <label for="replay_reject" class="block mb-2 text-md font-medium text-slate-500">SMS Replay Reject</label>
                <textarea name="replay_reject" id="replay_reject" rows="8" class="w-full border border-slate-500 text-black text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block px-4 py-[10px] placeholder:text-slate-300" v-model="replay_reject"></textarea>
              </div>

            </div>
          </form>
        </div>
      </div>

      <RequestPagesInputForm /> 
    </div>
    
  </template>
  
  <script>
    import Navbar from '../components/Navbar.vue';
    import RequestPagesInputForm from '../components/RequestPagesInputForm.vue';
    export default {
      name: 'RequestPage',
      data() {
        return {
          ADN_Number: '',
          keyword: '',
          ADN_Type: '',
          price: '',
          program_name: '',
          replay_success: '',
          replay_reject: '',
          program_description: '',
        }
      },
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