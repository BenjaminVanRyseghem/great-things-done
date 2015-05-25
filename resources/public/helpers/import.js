console.log("Dragons");
window.importScript = function(string) {
  var projects = great_things_done.db.projects();
  var fn = eval("(" + string + ")");
  var result = fn(projects) || [];

  return result;
};
