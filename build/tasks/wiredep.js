module.exports = {
  old: {
    src: ['index.html']
  },
  new: {
    src: ['modified.html'],
    exclude: [
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
    ]
  }
};