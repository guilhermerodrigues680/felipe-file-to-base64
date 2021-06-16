<template>
  <div>
    <div v-for="(result, idx) in base64Results" :key="idx">
      <img class="base64-result-preview" :src="result" :alt="`img-idx-${idx}`">
      <textarea :value="result" disabled></textarea>
      <span><a :href="result" target="_blank">Abrir em uma nova aba</a></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Base64ResultsList',

  props: {
    base64Results: Array,
  },

}
</script>

<style scoped>
.base64-result-preview {
  max-width: 200px;
  max-height: 200px;
}
</style>
