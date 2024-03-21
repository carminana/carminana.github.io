/* addition for clickable drop down menu */
    $(function() {
      $('#menu__button').on('click touchstart', function(e) {
        e.preventDefault();
        $('#menu__container').toggleClass('is-active').removeClass('is-hovered');
      });

    });