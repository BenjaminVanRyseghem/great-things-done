/*     Initialize tooltips     */
(function(){
  window.installTooltip = function() {
    $('[data-toggle="tooltip"]').tooltip()
  };

  $(function () {
    window.installTooltip();
  })
})()
