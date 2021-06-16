<template>
  <div>
    <div class="flex items-end bg-white h-28 p-4">
      <span class="text-3xl text-gray-600">Conversor para base64</span>
    </div>

    <h2 class="bg-indigo-500 m-2 p-4 rounded text-white text-xl">
      Seleção de arquivos
    </h2>

    <div class="flex gap-x-4 border p-4 m-2">
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
    </div>

    <div v-if="logs && logs.length" class="px-2 font-mono">
      <p class="text-sm text-yellow-500 uppercase">Logs da conversão</p>
      <ul class="text-xs text-gray-500">
        <li v-for="(log, idx) in logs" :key="idx">{{log}}</li>
      </ul>
    </div>

    <div class="m-2">
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
