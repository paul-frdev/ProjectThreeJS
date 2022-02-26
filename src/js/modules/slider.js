export default class Slider {
    constructor(page, btns, teacher) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btns = document.querySelectorAll(btns);
        this.slideIndex = 1;
        this.teacher = document.querySelector(teacher);
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';
            if (n === 3) {
                this.hanson.classList.add('animated');

                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp')
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp')
            }
        } catch (error) {

        }

        this.slides.forEach(slide => {
            slide.style.display = 'none'
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    // showModule() {
    //     this.teacher.style.display = 'none';
    //     this.slides.forEach(slide => {
    //         if (slide.classList.contains('modules')) {
    //             setTimeout(() => {
    //                 this.teacher.style.display = 'block'
    //             }, 6000);
    //         } else {
    //             this.teacher.style.display = 'none'
    //         }
    //     })
    // }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (error) {

        }
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (event) => {
                event.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        // this.showModule();


        this.showSlides(this.slideIndex);
    }
}