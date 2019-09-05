+function ($) {
  'use strict'
  $.fn.headerAnim = function () {
    return this.each(function () {
      var top = $(this).find('.top'),
          topHeight = top.outerHeight()
      $(window).on('scroll', function(e) {
        var pageYOffset = e.currentTarget.pageYOffset
        if(pageYOffset >= topHeight) {
          top.css({
            transition: 'margin .35s ease-in',
            marginTop: topHeight * -1
          })
        } else {
          top.css({
            transition: 'margin .35s ease-in',
            marginTop: 0
          })
        }
      })
    })
  }

  $(document).ready(function () {
    $('.header-section').headerAnim()
  })
}(jQuery)