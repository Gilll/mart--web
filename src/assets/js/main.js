
$(document).ready(function() {

    if ($("#play-video")) {
        $("#play-video").click(function() {
            let vid = document.getElementById("premium-video")
            $(".header").addClass("white")
            $("#premium").addClass("video-playing")
            if (vid) vid.play()
        })
    }

    $("[open-modal]").click(function() {
        let selector = $(this).attr("open-modal");
        $(selector).addClass("is-open");
        $("#container").addClass("scroll-lock");
    })

    $(".projects-change-state").click(function() {
        $(this).parents(".swiper-slide").removeClass("animation-state-0")
            .addClass("animation-state-1").attr("data-animation-step", "1");
        $(".header").addClass("white")
    })
    $(".premium-change-state").click(function() {
        $("#premium").removeClass("animation-state-0")
            .addClass("animation-state-1").attr("data-animation-step", "1");
        $(".header").addClass("white")
    })

    $(".close-modal").click(function() {
        $(this).parent().parent().removeClass("is-open");
        $("#container").removeClass("scroll-lock");
    })

    $(".show-success-block").click(function() {
        $(this).parents(".modal-content").addClass("is-success");
    })

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
                        if (s.slides[s.activeIndex + 1].classList.contains("premium-block")) {
                            s.slides[s.activeIndex + 1].classList.remove('video-playing')
                            let vid = document.getElementById("premium-video")
                            if (vid) {
                                let v=vid.currentSrc;
                                vid.pause();
                                vid.currentTime = 0;
                                vid.src='';
                                vid.src=v;
                            }
                        }
                    }
                    if (s.slides[s.activeIndex].dataset.animationSteps) {
                        let el = s.slides[s.activeIndex],
                            step = parseInt(el.dataset.animationStep),
                            whiteHeader = el.dataset.whiteHeaderSteps ? el.dataset.whiteHeaderSteps.split(',') : []

                        if (whiteHeader.includes(step + "")) {
                            $(".header").addClass("white")
                        } else {
                            $(".header").removeClass("white")
                        }
                    } else {
                        if ($(s.slides[s.activeIndex]).hasClass('white-header')) {
                            $(".header").addClass("white")
                        } else {
                            $(".header").removeClass("white")
                        }
                    }
                },
                slidePrevTransitionEnd: s => {
                    s.slides[s.activeIndex].classList.add('pg-active')
                },
                slideNextTransitionStart: s => {
                    if (s.activeIndex > 0) {
                        s.slides[s.activeIndex - 1].classList.remove('pg-active')
                        if (s.slides[s.activeIndex - 1].classList.contains("premium-block")) {
                            s.slides[s.activeIndex - 1].classList.remove('video-playing')
                            let vid = document.getElementById("premium-video")
                            if (vid) {
                                let v=vid.currentSrc;
                                vid.pause();
                                vid.currentTime = 0;
                                vid.src='';
                                vid.src=v;
                            }
                        }
                    }
                    if (s.slides[s.activeIndex].dataset.animationSteps) {
                        let el = s.slides[s.activeIndex],
                            step = parseInt(el.dataset.animationStep),
                            whiteHeader = el.dataset.whiteHeaderSteps ? el.dataset.whiteHeaderSteps.split(',') : []

                        if (whiteHeader.includes(step + "")) {
                            $(".header").addClass("white")
                        } else {
                            $(".header").removeClass("white")
                        }
                    } else {
                        if ($(s.slides[s.activeIndex]).hasClass('white-header')) {
                            $(".header").addClass("white")
                        } else {
                            $(".header").removeClass("white")
                        }
                    }
                },
                slideNextTransitionEnd: s => {
                    s.slides[s.activeIndex].classList.add('pg-active')
                }
            }
        });
        $("#container").on("wheel", ev => {
            if (!lockScrollEv && !$("#container").hasClass("scroll-lock")) {
                lockScrollEv = true
                if (ev.originalEvent.deltaY > 0) {
                    let el = s.slides[s.activeIndex]
                    if (el.dataset.animationSteps) {
                        let steps = parseInt(el.dataset.animationSteps),
                            step = parseInt(el.dataset.animationStep),
                            whiteHeader = el.dataset.whiteHeaderSteps ? el.dataset.whiteHeaderSteps.split(',') : []
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
                            if (s.activeIndex <= s.slides.length) {
                                s.slideNext();
                                setTimeout(function() { lockScrollEv = false }, 2000)
                            } else {
                                lockScrollEv = false
                            }
                        }
                    } else {
                        if (s.activeIndex <= s.slides.length) {
                            s.slideNext();
                            setTimeout(function() { lockScrollEv = false }, 2000)
                        } else {
                            lockScrollEv = false
                        }
                    }
                } else if (ev.originalEvent.deltaY < 0) {
                    let el = s.slides[s.activeIndex]
                    if (el.dataset.animationSteps) {
                        let steps = parseInt(el.dataset.animationSteps),
                            step = parseInt(el.dataset.animationStep),
                            whiteHeader = el.dataset.whiteHeaderSteps ? el.dataset.whiteHeaderSteps.split(',') : []
                        if (step - 1 >= 0) {
                            el.classList.remove('animation-state-' + step)
                            el.classList.add('animation-state-' + (step - 1))
                            el.dataset.animationStep = step - 1
                            if (whiteHeader.includes(step - 1 + "")) {
                                $(".header").addClass("white")
                            } else {
                                $(".header").removeClass("white")
                            }
                            if (el.classList.contains("premium-block")) {
                                el.classList.remove("video-playing")
                                let vid = document.getElementById("premium-video")
                                if (vid) {
                                    let v=vid.currentSrc;
                                    vid.pause();
                                    vid.currentTime = 0;
                                    vid.src='';
                                    vid.src=v;
                                }
                            }
                            setTimeout(function() { lockScrollEv = false }, 1000)
                        } else {
                            if (s.activeIndex > 0) {
                                s.slidePrev();
                                setTimeout(function() { lockScrollEv = false }, 2000)
                            } else {
                                lockScrollEv = false
                            }
                        }
                    } else {
                        if (s.activeIndex > 0) {
                            s.slidePrev();
                            setTimeout(function() { lockScrollEv = false }, 2000)
                        } else {
                            lockScrollEv = false
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

    if ($(".piter2-slider")) {
        const swiper = new Swiper('.piter2-slider', {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 44,
            autoplay: {
                delay: 5000,
            },
            loop: true,
            speed: 1000,
            navigation: {
                nextEl: '.piter2-slider__next',
                prevEl: '.piter2-slider__prev',
            }
        });
    }
    if ($(".spesialits2-slider")) {
        const swiper = new Swiper('.spesialits2-slider', {
            direction: 'horizontal',
            slidesPerView: 2,
            spaceBetween: 44,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                nextEl: '.spesialits2-slider__next',
                prevEl: '.spesialits2-slider__prev',
            }
        });
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
            }
        });
    }
    if ($(".interiors-swiper2")) {
        const swiper = new Swiper('.interiors-swiper2', {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 1.3,
            speed: 1000,
            navigation: {
                nextEl: '.interiors-swiper__next2',
                prevEl: '.interiors-swiper__prev2',
            }
        });
    }

    $(".time-selector__item").click(function () {
        $(".time-selector__item").removeClass("active");
        $(this).addClass("active");
        $("#selected-time").val($(this).html())
    })

    setTimeout(function () {
        $("body").removeClass("isLoading")
        $(".introAnimation").addClass("pg-active")
    },300)
});