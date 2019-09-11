+function ($) {
  'use strict'
  $.fn.headerAnim = function () {
    return this.each(function () {
      var top = $(this).find('.top'),
          nav = $(this).find('.navbar')
      $(window).on('scroll', function(e) {
        var topHeight = top.outerHeight(),
            height = e.currentTarget.innerHeight,
            width = e.currentTarget.innerWidth,
            pageYOffset = e.currentTarget.pageYOffset
        
        if(width > 991) {
          if(pageYOffset >= topHeight) {
            var css = {
              transform: 'translateY(-' + topHeight + 'px)'
            }
            top.css(css)
            nav.css(css)
          } else {
            var css = {
              transform: 'none'
            }
            top.css(css)
            nav.css(css)
          }
        }
      })
    })
  }

  $(document).ready(function () {
    $('.header-section').headerAnim()
  })
}(jQuery)