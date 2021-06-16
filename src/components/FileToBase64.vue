<template>
  <div>
    <h1>File to base64</h1>
    <div>
      <div>
        <input type="checkbox" v-model="pickDirectory">
        Ler um diretório
      </div>
      <div>
        <input
          type="file"
          :accept="pickDirectory ? null : allowedMimeTypesStr"
          :webkitdirectory="pickDirectory"
          :multiple="!pickDirectory"
          @change="inputFileChanged($event)"
        >
      </div>
      <div>
        <div v-for="(result, idx) in base64Results" :key="idx">
          <img class="base64-result-preview" :src="result" :alt="`img-idx-${idx}`">
          <textarea :value="result" disabled></textarea>
          <span><a :href="result" target="_blank">Abrir em uma nova aba</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import base64 from "@/services/base64";

export default {
  name: 'FileToBase64',

  data: () => ({
    allowedMimeTypes: ['image/jpeg', 'image/png'],
    pickDirectory: false,
    base64Result: null,
    base64Results: [],
  }),

  computed: {
    allowedMimeTypesStr: function() {
      return this.allowedMimeTypes.join(',');
    },
  },

  methods: {
    async inputFileChanged(event) {
      /** @type{File[]} */
      const files = event.target.files;
      console.debug(files);

      this.base64Results.splice(0);
      for (const file of files) {
        if (!this.allowedMimeTypes.includes(file.type)) {
          console.debug(`Arquivo ${file.name} do tipo '${file.type}' não suportado. Pulando...`);
          continue;
        }

        const base64Result = await base64.getBase64(file);
        this.base64Results.push(base64Result);
      }
    }
  }
}
</script>

<style scoped>
.base64-result-preview {
  max-width: 200px;
  max-height: 200px;
}
</style>
