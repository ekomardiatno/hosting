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
          if(pageYOffset >= topHeight / 2) {
            var css = {
              transform: 'translateY(-' + topHeight + 'px)',
            }
            top.css(css)
            nav.css(css)
            nav.addClass('affix')
          } else {
            var css = {
              transform: 'translateY(-' + pageYOffset + 'px)',
            }
            top.css(css)
            nav.css(css)
            nav.removeClass('affix')
          }
        }
      })
    })
  }

  $(document).ready(function () {
    $('.header-section').headerAnim()
  })
}(jQuery)