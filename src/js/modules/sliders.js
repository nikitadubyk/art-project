const sliders = (selector, direction, prev, next) => {
    let slidesIndex = 1,
        paused = false;
    const slides = document.querySelectorAll(selector);

    function showSlides(n) {
        if (n > slides.length) {
            slidesIndex = 1;
        } 
        if (n < 1) {
            slidesIndex = slides.length;
        }

        slides.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        slides[slidesIndex - 1].style.display = 'block';
    }

    showSlides(slidesIndex);

    function changeSlides(n) {
        showSlides(slidesIndex += n);
    }

    try {
        const prevArrow = document.querySelector(prev),
            nextArrow = document.querySelector(next);

        prevArrow.addEventListener('click', () => {
            changeSlides(-1);
            slides[slidesIndex - 1].classList.remove('slideInLeft');
            slides[slidesIndex - 1].classList.add('slideInRight');
        });

        nextArrow.addEventListener('click', () => {
            changeSlides(1);
            slides[slidesIndex - 1].classList.remove('slideInRight');
            slides[slidesIndex - 1].classList.add('slideInLeft');
            document.body.style.overflowX = 'hidden';
        });
    } catch (error) {}

    function activedAnimation() {
        if (direction === 'vertical') {
            paused = setInterval(function() {
                changeSlides(1);
                slides[slidesIndex - 1].classList.add('slideInDown');
            }, 3000);
        } else {
            paused = setInterval(function() {
                changeSlides(1);
                slides[slidesIndex - 1].classList.remove('slideInLeft');
                slides[slidesIndex - 1].classList.add('slideInRight');
                document.body.style.overflowX = 'hidden';
            }, 3000);
        }
    }

    activedAnimation();

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode.addEventListener('mouseleave', () => {
        activedAnimation();
    });
    
};

export default sliders;