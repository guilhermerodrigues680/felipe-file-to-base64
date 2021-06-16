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

      <div v-if="logs && logs.length">
        <p>Logs da conversão</p>
        <ul>
          <li v-for="(log, idx) in logs" :key="idx">{{log}}</li>
        </ul>
      </div>

      <Base64ResultsList :base64Results="base64Results" />
    </div>
  </div>
</template>

<script>
import Base64ResultsList from "@/components/Base64ResultsList.vue";
import base64 from "@/services/base64";

export default {
  name: 'FileToBase64',

  components: {
    Base64ResultsList,
  },

  data: () => ({
    allowedMimeTypes: ['image/jpeg', 'image/png'],
    pickDirectory: false,
    base64Results: [],
    logs: [],
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
          const logMsg = `[AVISO] ${file.name} do tipo '${file.type || 'desconhecido'}' não é suportado.`;
          console.debug(logMsg);
          this.logs.push(logMsg);
          continue;
        }

        const base64Result = await base64.getBase64(file);
        this.base64Results.push(base64Result);
      }
    }
  }
}
</script>
