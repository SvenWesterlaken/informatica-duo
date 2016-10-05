(function($){
  //Variables
    var $window,
        $nav = $(".navbar")
        $navbtn = $(".menubtn"),
        $navitems = $(".nav-item"),
        $overlay = $(".overlay");


    function toggleNavBar($nav, $btn, $navitems, $overlay) {
      $btn.on('click', function(){
        $nav.toggle('slide', {
          duration: 1000,
          easing: 'easeInOutQuint'});
        $overlay.fadeToggle(1000, "easeOutCubic");
        $nav.toggleClass('box-shadow');
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

  $(document).ready(function(){
    $window = $(window);

    toggleNavBar($nav, $navbtn, $navitems, $overlay);
  });

})(jQuery);
