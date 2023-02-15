<template>
  <div class="adnbar-container">
    <DownloadButton />
    <SearchBar />
  </div>
</template>

<script>
  import DownloadButton from './DownloadButton.vue';
  import SearchBar from './SearchBar.vue';

  export default {
    name: 'AdnBar',
  }
</script>

<style scoped>
  .adnbar-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 30px;
  }
</style>