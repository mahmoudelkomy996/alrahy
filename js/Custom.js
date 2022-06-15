$(document).ready(function () {
  // MainSlider
  var swiper = new Swiper('.MainSlider-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    effect: 'fade',
    speed: 500,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  //newest Slider
  var swiper = new Swiper('.newestSlider', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // centeredSlides: true,
    loop: true,
    // slidesPerView: 'auto',
    // spaceBetween: 5,
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,

      },
      360: {
        slidesPerView: 2,

      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });
  // filter
  var $filter = $('.btn').click(function () {
    if (this.id == 'all') {
      $('#filterContent > .product').fadeIn(450);
    } else {
      var $item = $('.' + this.id).fadeIn(450);
      $('#filterContent > .product').not($item).hide();
    }
    $filter.removeClass('active');
    $(this).addClass('active');
  })
  // AOS
  AOS.init({
    offset: 70, // offset (in px) from the original trigger point
  });
  //spinner
  $(".spinner ").fadeOut("slow");
  //navbar animation
  $(window).scroll(function () {
    var appScroll = $(document).scrollTop();
    if ((appScroll > 60) && (appScroll < 99999999999)) {
      $(".mainNav").addClass("animatedNav");
    };
    if ((appScroll > 0) && (appScroll < 60)) {
      $(".mainNav").removeClass("animatedNav");
    };
  });
  // tooltip
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })
});
