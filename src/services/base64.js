/**
 * recebe um arquivo e retorna ele no formato base64
 * @param {File} file
 */
function getBase64(file) {
  return new Promise((resolve, reject) => {
    // https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
    // https://stackoverflow.com/questions/18650168/convert-blob-to-base64
    // https://base64.guru/converter/encode/image
    const reader = new FileReader();

    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function (error) {
      console.debug('Error: ', error);
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

export default {
  getBase64,
};
