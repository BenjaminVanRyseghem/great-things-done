(function(){
  var util = {};

  util.getURLParameters = function() {
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
      var pair = vars[i].split("=");
      // If first entry with this name
      if (typeof query_string[pair[0]] === "undefined") {
        query_string[pair[0]] = decodeURIComponent(pair[1]);
        // If second entry with this name
      } else if (typeof query_string[pair[0]] === "string") {
        var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
        query_string[pair[0]] = arr;
        // If third or later entry with this name
      } else {
        query_string[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
    return query_string;
  }

  util.stringWidth = function(string, font) {
    var f = font || '12px arial',
        o = $('<div>' + string + '</div>')
    .css({'position': 'absolute', 'float': 'left', 'white-space': 'nowrap', 'visibility': 'hidden', 'font': f})
    .appendTo($('body')),
        w = o.width();

    o.remove();

    return w;
  }

  util.dayOfYear = function (d) {
    var yn = d.getFullYear();
    var mn = d.getMonth();
    var dn = d.getDate();
    var d1 = new Date(yn,0,1,12,0,0); // noon on Jan. 1
    var d2 = new Date(yn,mn,dn,12,0,0); // noon on input date
    var ddiff = Math.round((d2-d1)/864e5);
    return ddiff+1;
  }

  window.util = util;
})()
