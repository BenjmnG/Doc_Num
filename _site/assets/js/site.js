$(function(){

  var $navBar = $('#navigation_bar');
  var $Side = $('#Side');
  var showNavBarMinimum = $('#introduction').height();
  var showSideMinimum = $('#introduction').height() + $('#plays_index').height();
  // - $navBar.height()

  var wasNavBarVisible = false;
  var wasSideVisible = false;

  // change nav bar visibility on scroll
  function onScroll() {
    var isNavBarVisible = window.pageYOffset >= showNavBarMinimum;
    if ( isNavBarVisible != wasNavBarVisible ) {
      $navBar.toggleClass('show');
      wasNavBarVisible = isNavBarVisible;
    };
  };

 /* function onScrollSide() {
    var isSideVisible = window.pageYOffset >= showSideMinimum;
    if ( isSideVisible != wasSideVisible ) {
      $Side.toggleClass('show');
      wasSideVisible = isSideVisible;
    };
  };*/
  // initial check
  onScroll();
  //onScrollSide();

  // http://davidwalsh.name/function-debounce
  function debounce( fn, wait ) {
    var timeout;
    return function() {
      var _this = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        fn.apply( _this, args );
      };
      clearTimeout( timeout );
      timeout = setTimeout( later, wait || 100 );
    };
  }

  $(window).scroll( debounce( onScroll, 30 ) );
  //$(window).scroll( debounce( onScrollSide, 30 ) );

  $('body').scrollspy({ target: '#navigation_bar' });
  //$('body').scrollspy({ target: '#Side' });

  // Scroll Animations
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return true;
      }
    }
  });

});
