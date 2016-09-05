$(document).ready(function() {
  $('#fullpage').fullpage({

    //Navigation
    menu: '#myMenu',
    lockAnchors: false,
    anchors:['welcome', 'about', 'projects', 'contact'],
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: ['introSlide', 'firstProject', 'secondProject', 'thirdProject'],
    showActiveTooltip: false,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',


    //colors
    sectionsColor: ['#d24c01', '#d24c01', '#d27f01', '#ec3333']
  });


});
