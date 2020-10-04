$(document).ready(function() {
  // Initialize fullpage.js
  /*var autoScroll = true;*/
  // if (window.innerWidth > 900) {

  $('#fp-wrapper').fullpage({
    anchors: ['home', 'about&clubs', 'timeline', 'contact'],
    fixedElements: '.navbar-fixed-top',
    menu: '#myNavbar',
    // loopBottom: true,
    loopBottom: false
    // navigation: true
    //scrollOverflow: true,
    //normalScrollElements: '#section1',
    // responsiveWidth: 950,
    //scrollBar: true,
    //autoScrolling: autoScroll,
  });
  /*
  if (window.innerWidth < 800) {
    $.fn.fullpage.setAutoScrolling(false);
  }*/
});
