<template>
  <button :class="childclass">{{ action }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    action: String,
    childclass: String,
  }
}
// text-base font-semibold text-white py-3 px-8 rounded-lg w-10 hover:opacity-80 hover:shadow-lg transition duration-500 bg-red
</script>