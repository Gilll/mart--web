
$(document).ready(function() {
    const pages = new Pageable("#container", {
        pips: false,
        animation: 0,
        delay: 500,
        swipeThreshold: 100,
        onBeforeStart: function (index) {
            let page = this.pages[this.oldIndex]
            let nextPage = $(this.pages[this.index])
            let animationsSteps = parseInt($(page).attr("animation-steps"))
            let animationsMobSteps = parseInt($(page).attr("animation-mob-steps"))
            let animationsStepsNextPage = parseInt($(nextPage).attr("animation-steps"))
            let animationsMobStepsNextPage = parseInt($(nextPage).attr("animation-mob-steps"))
            let animationsStep = parseInt($(page).attr("animation-step"))
            let animationsStepNextPage = parseInt($(nextPage).attr("animation-step"))
            let whiteHeaderSteps = $(page).attr("white-header-steps")?.split(",") || []
            let whiteHeaderStepsNextPage = $(nextPage).attr("white-header-steps")?.split(",") || []
            let isMobile = window.innerWidth <= 768;
            let container = $("#loading-section")

            if (!container.hasClass("isLocked")) {
                container.addClass("isLocked")
                setTimeout(function () {
                    container.removeClass("isLocked")
                }, 1000)

                if (animationsSteps || (isMobile && animationsMobSteps)) {
                    if (this.index < this.oldIndex) {
                        let vid = document.getElementById("premium-video")
                        if (animationsStep - 1 >= 0) {
                            pages.index = this.oldIndex
                            $(page).attr("animation-step", animationsStep - 1)
                                .removeClass("animation-state-" + animationsStep)
                                .addClass("animation-state-" + (animationsStep - 1))
                            $(".header").toggleClass("white", whiteHeaderSteps.includes("" + (animationsStep - 1)))
                            if ($(page).hasClass("video") && animationsStep == 0) {
                                if (vid) vid.play()
                            } else {
                                if (vid) vid.pause()
                            }
                        } else {
                            if (nextPage.hasClass("holder")) {
                                this.index = this.oldIndex
                            } else {
                                $(".header").toggleClass("white", this.pages[this.index].classList.contains("white-header"))
                                page.classList.remove("pg-active")
                            }
                        }
                    } else {
                        let vid = document.getElementById("premium-video")
                        if (animationsStep + 1 < (isMobile ? animationsMobSteps : animationsSteps)) {
                            pages.index = this.oldIndex
                            $(page).attr("animation-step", animationsStep + 1)
                                .removeClass("animation-state-" + animationsStep)
                                .addClass("animation-state-" + (animationsStep + 1))
                            $(".header").toggleClass("white", whiteHeaderSteps.includes("" + (animationsStep + 1)))
                            if ($(page).hasClass("video") && animationsStep == 0) {
                                if (vid) vid.play()
                            } else {
                                if (vid) vid.pause()
                            }
                        } else {
                            if (nextPage.hasClass("holder")) {
                                this.index = this.oldIndex
                            } else {
                                $(".header").toggleClass("white", this.pages[this.index].classList.contains("white-header"))
                                page.classList.remove("pg-active")
                            }
                        }
                    }
                } else {
                    if (nextPage.hasClass("holder")) {
                        this.index = this.oldIndex
                    } else {
                        let vid = document.getElementById("premium-video")
                        page.classList.remove("pg-active")
                        if (vid) vid.pause()
                        if (animationsStepsNextPage) {
                            $(".header").toggleClass("white", whiteHeaderStepsNextPage.includes("" + animationsStepNextPage))
                        } else {
                            $(".header").toggleClass("white", this.pages[this.index].classList.contains("white-header"))
                        }
                    }
                }

            } else {
                this.index = this.oldIndex
            }
        },
        onStart: function() {

        },
        events: {
            wheel: true,
            mouse: false,
            touch: true,
            keydown: true
        }
    });

    if ($("#play-video")) {
        $("#play-video").click(function() {
            let vid = document.getElementById("premium-video")
            $(".header").addClass("white")
            $("#premium").attr("animation-step", 1).removeClass("animation-state-0").addClass("animation-state-1")
            if (vid) vid.play()
        })
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

    let curPage = $(pages.pages[pages.index])

    if (curPage.hasClass("holder")) {
        pages.scrollToPage(pages.index + 2)
    } else {
        pages.scrollToPage(pages.index + 1)
    }

    setTimeout(function () {
        $("body").removeClass("isLoading")
    },300)
});