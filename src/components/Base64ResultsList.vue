<template>
  <div class="flex flex-col gap-y-4">
    <div v-for="(result, idx) in base64Results" :key="idx" class="flex gap-x-2">
      <span class="self-center">({{idx+1}})</span>
      <a :href="result" target="_blank" class="text-blue-500 underline">
        <img class="border border-gray-400 p-1 rounded max-h-48 max-w-xs" :src="result" :alt="`img-idx-${idx}`">
      </a>
      <textarea :value="result" disabled class="w-full p-2 font-light overflow-x-scroll whitespace-pre resize-none bg-green-900 text-white">
      </textarea>
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
