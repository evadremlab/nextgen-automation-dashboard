module.exports = {
  css: {
    options: {
      strictImports: true
    },
    files: {
      'styles/app.css': 'styles/less/app.less',
      'styles/app-ie.css': 'styles/less/app-ie.less',
    }
  }
};