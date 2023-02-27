<template>
  <nav class="flex ">
    <NavbarTitle />
    <NavbarList />
  </nav>
</template>

<script>
import NavbarTitle from './NavbarTitle.vue';
import NavbarList from './NavbarList.vue';

export default {
  name: 'Navbar',
}
</script>

<style scoped>
  nav {
    display: flex;
    flex-direction: row;
    column-gap: 220px;
    height: 64px;
    width: 100%;
    background: linear-gradient(45deg, rgba(34,40,49,1) 0%, rgba(34,40,49,0.9585084033613446) 31%, rgba(34,40,49,0.7792366946778712) 68%, rgba(34,40,49,0.8604691876750701) 100%);
  }
</style>
