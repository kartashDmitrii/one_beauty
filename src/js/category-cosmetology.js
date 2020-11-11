import videoPlayer from "./components/global/top-block_video";
import Tabs from "./components/tabs";

if (document.querySelector('.top-video-block .video video')) {
    new videoPlayer(document.querySelector('.top-video-block .video video'), document.querySelector('.top-video-block .video .play-btn'))
}

if (document.querySelector('.our-specialists .slider')){
    document.querySelectorAll('.our-specialists .slider').forEach( slider => {
        let siema = new Siema({
            selector: slider,
            duration: 200,
            easing: 'ease-out',
            perPage: {
                0: 1,
                1024: 3
            },
            startIndex: 1,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: false,
            rtl: false,
            onInit: function (){
                this.selector.closest('section').querySelector('.slider-btns .btn-left').addEventListener('click', ()=>{siema.prev()})
                this.selector.closest('section').querySelector('.slider-btns .btn-right').addEventListener('click', ()=>{siema.next()})
            },
            onChange: function (){
            }
        })
    })
}

document.querySelectorAll('.tabs').forEach( tabs => {
    new Tabs(tabs.querySelectorAll('.tab-links .tab'), tabs.querySelectorAll('.tab-blocks .tab'))
})