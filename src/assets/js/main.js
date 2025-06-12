
$(document).ready(function() {

    if ($("#play-video")) {
        $("#play-video").click(function() {
            let vid = document.getElementById("premium-video")
            $(".header").addClass("white")
            $("#premium").attr("animation-step", 1).removeClass("animation-state-0").addClass("animation-state-1")
            if (vid) vid.play()
        })
    }

    if ($(".test-swiper")) {
        const swiper = new Swiper('.test-swiper', {
            direction: 'vertical',
            loop: false,
            slidesPerView: 1,
            effect: 'fade',
            mousewheel: {
                enabled: true,
            },
            //creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.projects-swiper__next',
                prevEl: '.projects-swiper__prev',
            },
        });
    }

    if ($(".projects-swiper")) {
        const swiper = new Swiper('.projects-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            effect: 'creative',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.projects-swiper__next',
                prevEl: '.projects-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {
                    let projects = $("#projects")
                    if (projects.hasClass("animation-state-0")) {
                        projects.removeClass("animation-state-0").addClass("animation-state-1").attr("animation-step", "1")
                        $(".header").addClass("white")
                    }
                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {
                    let projects = $("#projects")
                    if (projects.hasClass("animation-state-0")) {
                        projects.removeClass("animation-state-0").addClass("animation-state-1").attr("animation-step", "1")
                        $(".header").addClass("white")
                    }
                }
            }
        });
    }

    if ($(".specialists-swiper")) {
        const swiper = new Swiper('.specialists-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            effect: 'creative',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.specialists-swiper__next',
                prevEl: '.specialists-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {

                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {

                }
            }
        });
    }

    if ($(".result-swiper")) {
        const swiper = new Swiper('.result-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            effect: 'creative',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.result-swiper__next',
                prevEl: '.result-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {

                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {

                }
            }
        });
    }

    if ($(".interiors-swiper")) {
        const swiper = new Swiper('.interiors-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
            effect: 'creative',
            creativeEffect: {},
            speed: 1000,
            navigation: {
                nextEl: '.interiors-swiper__next',
                prevEl: '.interiors-swiper__prev',
            },
            on: {
                slidePrevTransitionStart: s => {

                }
                ,
                slidePrevTransitionEnd: s => {

                }
                ,
                slideNextTransitionStart: s => {

                }
            }
        });
    }

    setTimeout(function () {
        $("body").removeClass("isLoading")
    },300)
});