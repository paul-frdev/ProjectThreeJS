import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import TinySlider from './modules/slider/slider-tiny';


window.addEventListener('DOMContentLoaded', () => {

    const slider = new MainSlider({ btns: '.next', container: '.page' });
    slider.render();

    const shoUpSlider = new TinySlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    shoUpSlider.init();

    const modulesSlider = new TinySlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    })
    modulesSlider.init();

    const feedSlider = new TinySlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
    })
    feedSlider.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();
});