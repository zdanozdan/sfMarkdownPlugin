$(document).ready(function(){
  $(document).unbind('rebind.showdown.gui');
  $(document).bind('rebind.showdown.gui', function() {
     startGui();
  })

  $(document).trigger('rebind.showdown.gui');
})