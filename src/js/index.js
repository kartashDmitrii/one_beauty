import videoPlayer from "./components/global/top-block_video";
import Tabs from "./components/tabs";
import HeaderBurger from "./components/global/headerBurger";
import headerLanguage from "./components/global/headerLanguage";

if (document.querySelector('.top-block .video video')) {
    new videoPlayer(document.querySelector('.top-block .video video'), document.querySelector('.top-block .video .play-btn'))
}

if (document.querySelector('.slider-full-page')){
    document.querySelectorAll('.slider-full-page').forEach( slider => {
        let sliderContainer = slider.querySelector('.container');
        let siema = new Siema({
            selector: sliderContainer,
            duration: 200,
            easing: 'ease-out',
            perPage: {
                0: 1,
                1024: 2
            },
            startIndex: 1,
            draggable: false,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: function (){
                if (window.screen.width < 767) {
                    this.selector.style.overflow = 'initial'
                }
                this.selector.querySelectorAll('.slide').forEach( (elem, index) => {
                    let dot = document.createElement('button');
                    dot.classList.add('dot');
                    dot.innerText = elem.querySelector('.name').innerHTML;
                    this.selector.closest('.tab').querySelector('.slider-btns .dots').appendChild(dot);
                    dot.addEventListener('click', ()=>{siema.goTo(index)})
                });
                this.selector.closest('.tab').querySelector('.slider-btns .btn-left').addEventListener('click', ()=>{siema.prev()});
                this.selector.closest('.tab').querySelector('.slider-btns .btn-right').addEventListener('click', ()=>{siema.next()})
            },
            onChange: function (){
                if (this.selector.closest('.tab').querySelector('.dot.current')){
                    this.selector.closest('.tab').querySelector('.dot.current').classList.remove('current')
                }
                this.selector.closest('.tab').querySelectorAll('.dot')[siema.currentSlide].classList.add('current')
            }
        })
    })
}
if (document.querySelector('.slider-full-page-solo')){
    document.querySelectorAll('.slider-full-page-solo').forEach( slider => {
        let sliderContainer = slider.querySelector('.container')
        let siema = new Siema({
            selector: sliderContainer,
            duration: 300,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: false,
            multipleDrag: false,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: function (){
                if (window.screen.width > 1199) {
                    this.selector.style.overflow = 'initial'
                }
                this.selector.querySelectorAll('.slide').forEach( (elem, index) => {
                    let dot = document.createElement('button');
                    dot.classList.add('dot');
                    dot.innerText = elem.dataset.dotName;
                    this.selector.closest('.tab').querySelector('.slider-btns .dots').appendChild(dot);
                    dot.addEventListener('click', ()=>{siema.goTo(index)})
                });
                this.selector.closest('.tab').querySelector('.slider-btns .btn-left').addEventListener('click', ()=>{siema.prev()});
                this.selector.closest('.tab').querySelector('.slider-btns .btn-right').addEventListener('click', ()=>{siema.next()})
            },
            onChange: function (){
                if (this.selector.querySelector('.slide.current')){
                    this.selector.querySelector('.slide.current').classList.remove('current')
                }
                this.selector.querySelectorAll('.slide')[siema.currentSlide].classList.add('current');
                if (this.selector.closest('.tab').querySelector('.dot.current')){
                    this.selector.closest('.tab').querySelector('.dot.current').classList.remove('current')
                }
                this.selector.closest('.tab').querySelectorAll('.dot')[siema.currentSlide].classList.add('current');
                let img = this.selector.closest('.slider-full-page-solo').querySelector('.bg-img img');
                img.style.opacity = '0';
                setTimeout(()=>{
                    img.src = this.selector.querySelectorAll('.slide')[siema.currentSlide].dataset.img;
                    img.style.opacity = '1'
                }, 150)
            }
        })
    })
}

document.querySelectorAll('.tabs').forEach( tabs => {
    new Tabs(tabs.querySelectorAll('.tab-links .tab'), tabs.querySelectorAll('.tab-blocks .tab'))
});

if (document.querySelector('.comments .slider')){
    let siema = new Siema({
        selector: '.comments .slider',
        duration: 300,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: false,
        threshold: 20,
        loop: false,
        rtl: false,
        onInit: function () {
            this.selector.closest('.comments').querySelector('.slider-btns .left').addEventListener('click', ()=>{siema.prev()});
            this.selector.closest('.comments').querySelector('.slider-btns .right').addEventListener('click', ()=>{siema.next()})
        },
        onChange: function () {
        }
    })
}

if (document.querySelector('header')) {
    new HeaderBurger(document.querySelector('.mobile-burger'), [...document.querySelectorAll('header .mobile')], document.querySelector('header .close'));
    if (window.screen.width > 576) {
        new headerLanguage(document.querySelector('.header .language'))
    }
}