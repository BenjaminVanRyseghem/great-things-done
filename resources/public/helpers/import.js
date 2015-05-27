console.log("Dragons");
window.importScript = function(string) {
  var projects = great_things_done.db.list_of_projects() || [];
  var fn = eval("(" + string + ")");
  var result = fn(projects) || [];

  return result;
};
