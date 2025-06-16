
$(document).ready(function() {

    if ($("#play-video")) {
        $("#play-video").click(function() {
            let vid = document.getElementById("premium-video")
            $(".header").addClass("white")
            $("#premium").attr("animation-step", 1).removeClass("animation-state-0").addClass("animation-state-1")
            if (vid) vid.play()
        })
    }

    if ($(".main-swiper")) {
        let lockScrollEv = false
        const s = new Swiper('.main-swiper', {
            direction: 'vertical',
            loop: false,
            slidesPerView: 1,
            effect: 'fade',
            mousewheel: {
                enabled: false,
            },
            preventInteractionOnTransition: true,
            followFinger: false,
            simulateTouch: false,
            speed: 1000,
            on: {
                slidePrevTransitionStart: s => {
                    if (s.activeIndex + 1 <= s.slides.length) {
                        s.slides[s.activeIndex + 1].classList.remove('pg-active')
                    }
                    if ($(s.slides[s.activeIndex]).hasClass('white-header')) {
                        $(".header").addClass("white")
                    } else {
                        $(".header").removeClass("white")
                    }
                },
                slidePrevTransitionEnd: s => {
                    s.slides[s.activeIndex].classList.add('pg-active')
                },
                slideNextTransitionStart: s => {
                    if (s.activeIndex > 0) {
                        s.slides[s.activeIndex - 1].classList.remove('pg-active')
                    }
                    if ($(s.slides[s.activeIndex]).hasClass('white-header')) {
                        $(".header").addClass("white")
                    } else {
                        $(".header").removeClass("white")
                    }
                },
                slideNextTransitionEnd: s => {
                    s.slides[s.activeIndex].classList.add('pg-active')
                }
            }
        });
        $("#container").on("wheel", ev => {
            if (!lockScrollEv) {
                lockScrollEv = true
                if (ev.originalEvent.deltaY > 0) {
                    if (s.activeIndex <= s.slides.length) {
                        let el = s.slides[s.activeIndex]
                        if (el.dataset.animationSteps) {
                            let steps = parseInt(el.dataset.animationSteps),
                                step = parseInt(el.dataset.animationStep),
                                whiteHeader = el.dataset.whiteHeaderSteps.split(',') || []
                            if (step + 1 < steps) {
                                el.classList.remove('animation-state-' + step)
                                el.classList.add('animation-state-' + (step + 1))
                                el.dataset.animationStep = step + 1
                                if (whiteHeader.includes(step + 1 + "")) {
                                    $(".header").addClass("white")
                                } else {
                                    $(".header").removeClass("white")
                                }
                                setTimeout(function() { lockScrollEv = false }, 1000)
                            } else {
                                s.slideNext();
                                setTimeout(function() { lockScrollEv = false }, 2000)
                            }
                        } else {
                            s.slideNext();
                            setTimeout(function() { lockScrollEv = false }, 2000)
                        }
                    }
                } else if (ev.originalEvent.deltaY < 0) {
                    if (s.activeIndex > 0) {
                        let el = s.slides[s.activeIndex]
                        if (el.dataset.animationSteps) {
                            let steps = parseInt(el.dataset.animationSteps),
                                step = parseInt(el.dataset.animationStep),
                                whiteHeader = el.dataset.whiteHeaderSteps.split(',') || []
                            if (step - 1 >= 0) {
                                el.classList.remove('animation-state-' + step)
                                el.classList.add('animation-state-' + (step - 1))
                                el.dataset.animationStep = step - 1
                                if (whiteHeader.includes(step - 1 + "")) {
                                    $(".header").addClass("white")
                                } else {
                                    $(".header").removeClass("white")
                                }
                                setTimeout(function() { lockScrollEv = false }, 1000)
                            } else {
                                s.slidePrev();
                                setTimeout(function() { lockScrollEv = false }, 2000)
                            }
                        } else {
                            s.slidePrev();
                            setTimeout(function() { lockScrollEv = false }, 2000)
                        }
                    }
                }
            }
        });
        if ($(".projects-swiper")) {

            const swiperPr = new Swiper('.projects-swiper', {
                direction: 'horizontal',
                loop: false,
                slidesPerView: 1,
                speed: 1000,
                observer: true,
                navigation: {
                    nextEl: '.projects-swiper__next',
                    prevEl: '.projects-swiper__prev',
                },
                on: {
                    slidePrevTransitionStart: s => {
                        /*let projects = $("#projects")
                        if (projects.hasClass("animation-state-0")) {
                            projects.removeClass("animation-state-0").addClass("animation-state-1").attr("animation-step", "1")
                            $(".header").addClass("white")
                        }*/
                    },
                    slidePrevTransitionEnd: s => {

                    },
                    slideNextTransitionStart: s => {
                        /*let projects = $("#projects")
                        if (projects.hasClass("animation-state-0")) {
                            projects.removeClass("animation-state-0").addClass("animation-state-1").attr("animation-step", "1")
                            $(".header").addClass("white")
                        }*/
                    }
                }
            });
        }
    }

    if ($(".specialists-swiper")) {
        const swiper = new Swiper('.specialists-swiper', {
            direction: 'horizontal',
            loop: false,
            slidesPerView: 1,
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
        $(".introAnimation").addClass("pg-active")
    },300)
});