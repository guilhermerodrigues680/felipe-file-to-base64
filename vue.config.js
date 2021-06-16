module.exports = {
  publicPath: '', // https://cli.vuejs.org/config/#publicpath

  chainWebpack: config => {
    // vue inspect --plugin html
    // Alterar titulo padrão do index.html
    config.plugin('html').tap((args) => {
      args[0].title = 'Conversor para base64';
      return args;
    });
  },
};
