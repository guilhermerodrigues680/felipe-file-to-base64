<template>
  <div id="app" class="bg-gray-100 min-h-full pb-16">
    <FileToBase64 />
  </div>
</template>

<script>
import FileToBase64 from './components/FileToBase64.vue'

export default {
  name: 'App',
  components: {
    FileToBase64
  }
}
</script>
