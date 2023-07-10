<template>
  <div
    class="grid place-items-center h-screen shadow-lg bg-gradient-to-br from-red-200 to-blue-500"
  >
    <Converter></Converter>
  </div>
</template>

<script>
import Converter from "./components/Converter.vue";
export default {
  name: "Bin2Dec",
  components: {
    Converter,
  },
};
</script>

<style></style>
