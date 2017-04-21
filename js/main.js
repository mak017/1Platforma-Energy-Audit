$(document).ready(function(){
  $( function() {
    var icons = {
      header: "iconClosed",
      activeHeader: "iconOpen"
    };
    $( "#accordion" ).accordion({
      heightStyle: "content",
      icons: icons
    });
  });
  $(document).ready(function(){
    $('.carousel').slick({
      
    });
  });
});