var SnippetPreview = require('yoastseo').SnippetPreview;
var App = require('yoastseo').App;

module.exports = YoastSeoDrupal;

function YoastSeoDrupal() {
  this.SnippetPreview = SnippetPreview;
  this.App = App;
};