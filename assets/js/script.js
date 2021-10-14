(function($) {

    "use strict";

    var Medi = {
        init: function() {
            this.Basic.init();
        },

        Basic: {
            init: function() {

                this.preloader();
                this.BackgroundImage();
                this.MobileMenu();
                this.Slider1();
                this.GoogleMap();
                this.scrollTop();
                this.Animation();
                this.Tools();

            },
            preloader: function() {
                $(window).on('load', function() {
                    $(".preloader").fadeOut();
                });
            },
            BackgroundImage: function() {
                $('[data-background]').each(function() {
                    $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
                });
            },
            Animation: function() {
                var wow = new WOW({
                    boxClass: 'wow', // animated element css class (default is wow)
                    animateClass: 'animated', // animation css class (default is animated)
                    offset: 0, // distance to the element when triggering the animation (default is 0)
                    mobile: true, // trigger animations on mobile devices (default is true)
                    live: true, // act on asynchronously loaded content 
                });
                wow.init();
            },
            MobileMenu: function() {
                jQuery(window).on('scroll', function() {
                    if (jQuery(window).scrollTop() > 250) {
                        jQuery('.medi-main-header').addClass('sticky-on')
                    } else {
                        jQuery('.medi-main-header').removeClass('sticky-on')
                    }
                });
                $('.open_mobile_menu').on("click", function() {
                    $('.mobile_menu_wrap').toggleClass("mobile_menu_on");
                });
                $('.open_mobile_menu').on('click', function() {
                    $('body').toggleClass('mobile_menu_overlay_on');
                });
                if ($('.mobile_menu li.dropdown ul').length) {
                    $('.mobile_menu li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');
                    $('.mobile_menu li.dropdown .dropdown-btn').on('click', function() {
                        $(this).prev('ul').slideToggle(500);
                    });
                }
            },
            Slider1: function() {
                var swiper = new Swiper(".gallerySlider", {
                    slidesPerView: 1,
                    loop: true,
                    autoplay: true,
                    pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                    },
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                });
            },
            GoogleMap: function() {
                var mapSelector = $('#popular_map');
                if (mapSelector.length) {
                    var lat = mapSelector.data('lat');
                    var lon = mapSelector.data('lon');
                    var zoom = mapSelector.data('zoom');
                    var marker = mapSelector.data('marker');
                    var info = mapSelector.data('info');
                    var markerLat = mapSelector.data('mlat');
                    var markerLon = mapSelector.data('mlon');
                    var map = new GMaps({
                        el: '#popular_map',
                        lat: lat,
                        lng: lon,
                        scrollwheel: false,
                        scaleControl: true,
                        streetViewControl: false,
                        panControl: true,
                        disableDoubleClickZoom: true,
                        mapTypeControl: false,
                        zoom: zoom,
                        height: '100%',
                    });
                    map.addMarker({
                        lat: markerLat,
                        lng: markerLon,
                        icon: marker,
                        infoWindow: {
                            content: info
                        }
                    })
                }
            },
            scrollTop: function() {
                $(window).on("scroll", function() {
                    var ScrollBarPosition = $(this).scrollTop();
                    if (ScrollBarPosition > 200) {
                        $(".scroll-top").fadeIn();
                    } else {
                        $(".scroll-top").fadeOut();
                    }
                });
                $(".scroll-top").on("click", function() {
                    $('body,html').animate({
                        scrollTop: 0,
                    });
                })
            },
        }
    };
    jQuery(document).ready(function() {
        Medi.init();
    });
})(jQuery);