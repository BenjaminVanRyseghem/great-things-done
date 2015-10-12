(function(){
  var remote = require("remote");
  var globalShortcut = remote.require('global-shortcut');
  var ret = globalShortcut.register('ctrl+x', function() {
    console.log('ctrl+x is pressed');
    gtd.integration.js_get_current_app_data(function(data) {
      data.forEach(function(each) {
        console.log(each);
      })
    });
  });
})()
