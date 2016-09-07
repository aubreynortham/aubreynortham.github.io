$(document).ready(function() {
  $('#fullpage').fullpage({

    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors:['welcome', 'about', 'projects', 'contact'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['introSlide', 'LRN-Quiz', 'Dreamscape', 'ComingSoon'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',


    //colors
    sectionsColor: ['#d24c01', '#d24c01', '#d27f01', '#ec3333']
  });

  // icon hover effects
  $(".puz").hover(function(){
    $("#altFaves").html(" puzzles.");
    $("#altFaves").toggle("slow");
  });
  $(".cat").hover(function(){
    $("#altFaves").html(" cats, napping, & napping cats.");
    $("#altFaves").toggle("slow");
  });
  $(".row").hover(function(){
    $("#altFaves").html(" rowing.");
    $("#altFaves").toggle("slow");
  });
  $(".draw").hover(function(){
    $("#altFaves").html(" sketching (mostly portraits).");
    $("#altFaves").toggle("slow");
  });
  $(".can").hover(function(){
    $("#altFaves").html(" trying to garden.");
    $("#altFaves").toggle("slow");
  });
  $(".book").hover(function(){
    $("#altFaves").html(" psychological thrillers.");
    $("#altFaves").toggle("slow");
  });
  $(".piz").hover(function(){
    $("#altFaves").html(" pizza.");
    $("#altFaves").toggle("slow");
  });
  $(".bulb").hover(function(){
    $("#altFaves").html(" going green.");
    $("#altFaves").toggle("slow");
  });



});
