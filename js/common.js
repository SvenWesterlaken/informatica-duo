(function($){
    //Variables
  var $window,
      $nav = $(".navbar")
      $navbtn = $(".menubtn"),
      $navitems = $(".nav-item"),
      $overlay = $(".overlay"),
      $link = $('a[href^="#"]');

  //Hide Navigation menu
  function hideNavBar($nav, $navitems, $overlay) {
    $nav.hide();
    $navitems.hide();
    $overlay.hide();
  }

  //Animate opening and closing navigation menu
  function toggleNavBar($nav, $btn, $navitems, $overlay) {
    $btn.on('click', function(){
      $nav.toggle('slide', {
        duration: 1000,
        easing: 'easeInOutQuint'});
      $overlay.fadeToggle(1000, "easeOutCubic");
      $navitems.each(function(i){
        var $current = $(this);
        setTimeout(function(){
          $current.toggle('slide', {
            duration: 1000,
            easing: 'easeInOutBack'});
        }, 100 * i);
      });
    });
  }

  //Smoothscroll
  function smoothScroll() {
    $link.on('click', function(e){
      var $current = $(this),
          $target = $($current.attr('href')),
          $html = $('html, body');

      if($target.length) {
        e.preventDefault();
        $html.animate({
          scrollTop: ($target.offset().top - 62)
        }, 2000, 'easeInOutQuart');
      }
    });
  }

  $(document).ready(function(){
    $window = $(window);

    hideNavBar($nav, $navitems, $overlay);
    toggleNavBar($nav, $navbtn, $navitems, $overlay);
    smoothScroll();
  });

})(jQuery);
