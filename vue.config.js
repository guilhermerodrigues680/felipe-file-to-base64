// https://cli.vuejs.org/config
module.exports = {
  publicPath: '',
  outputDir: 'docs', // GitHub Pages

  chainWebpack: config => {
    // vue inspect --plugin html
    // Alterar titulo padrão do index.html
    config.plugin('html').tap((args) => {
      args[0].title = 'Conversor para base64';
      return args;
    });
  },
};
