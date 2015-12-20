(function(app) {
  app.AppComponent = ng.core
    .Component({
      selector: 'my-app',
      template: 'Hallo Wesley'
    })
    .Class({
      constructor: function() {}
    })
})(window.app || (window.app = {}));
