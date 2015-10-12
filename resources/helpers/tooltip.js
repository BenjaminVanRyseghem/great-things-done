/*     Initialize tooltips     */

window.installTooltip = function() {
  $('[data-toggle="tooltip"]').tooltip()
};

$(function () {
  window.installTooltip();
})
