<template>
  <div>
    <Navbar />
    <GeneratorBox />
    <AdnBox />
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue';
  import GeneratorBox from '~/components/GeneratorBox.vue';
  import AdnBox from '~/components/AdnBox.vue';

  export default {
    name: "DownloadPage",
    created() {
        //alert("Welcome")
    },
    components: { Navbar, GeneratorBox, AdnBox }
} 
</script>