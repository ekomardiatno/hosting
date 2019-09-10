+function ($) {
  'use strict'
  $.fn.naration = function () {
    var el = $(this)
    $(window).on('scroll', function (e) {
      var height = e.currentTarget.innerHeight,
          offsetTop = e.currentTarget.pageYOffset
      if(offsetTop >= height) {
        el.removeClass('fadeInDown').removeClass('animated')
        el.addClass('fadeOutUp animated')
      } else {
        if(el.hasClass('fadeOutUp')) {
          el.removeClass('fadeOutUp').removeClass('animated')
          el.addClass('fadeInDown animated')
        }
      }
    })
  }
  $(document).ready(function() {
    $('.main-section-homepage .naration').naration()
  })
}(jQuery)