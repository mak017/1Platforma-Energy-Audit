$(document).ready(function(){
  // jQueryUI Accordion
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
  
  // Slick Carousel
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>',
    cssEase: 'ease-in-out',
    dots: true
  });

  // Square-scale
  var squareScale = function(elem) {
    $(elem + ' .square-scale__point__diamond').on('click', function() {
      $(elem + ' .square-scale__point').removeClass('active');
      $(this).parent().addClass('active');
    });
  }
  
  squareScale('.appartments');
  squareScale('.house');
});