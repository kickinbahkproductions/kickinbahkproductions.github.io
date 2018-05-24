jQuery(document).ready(function ($) {
  /* ======= Scrollspy ======= */
  $('body').scrollspy({target: '#header', offset: 400})

  /* ======= Fixed header when scrolled ======= */

  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
      $('#header').addClass('navbar-fixed-top')
    } else {
      $('#header').removeClass('navbar-fixed-top')
    }
  })

  /* ======= ScrollTo ======= */
  $('a.scrollto').on('click', function (e) {
    // store hash
    var target = this.hash

    e.preventDefault()

    $('body').scrollTo(target, 800, {offset: -70, 'axis': 'y', easing: 'easeOutQuad'})
    // Collapse mobile menu after clicking
    if ($('.navbar-collapse').hasClass('in')) {
      $('.navbar-collapse').removeClass('in').addClass('collapse')
    }
  })

  (function () {
    var buffer = 20 // scroll bar buffer
    var iframe = document.getElementById('ifm')

    function pageY (elem) {
      return elem.offsetParent ? (elem.offsetTop + pageY(elem.offsetParent)) : elem.offsetTop
    }

    function resizeIframe () {
      var height = document.documentElement.clientHeight
      height -= pageY(document.getElementById('ifm')) + buffer
      height = (height < 0) ? 0 : height
      document.getElementById('ifm').style.height = height + 'px'
    }

    // .onload doesn't work with IE8 and older.
    if (iframe.attachEvent) {
      iframe.attachEvent('onload', resizeIframe)
    } else {
      iframe.onload = resizeIframe
    }
    window.onresize = resizeIframe
  })()
})
