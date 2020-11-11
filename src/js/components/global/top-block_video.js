export default class videoPlayer {
    constructor(video, button) {
        this.video = video;
        this.button = button;
        if (this.video.parentNode.querySelector('.poster')){
            this.poster = this.video.parentNode.querySelector('.poster')
        }
        this.button.addEventListener('click', ()=>{this.playVideo()})
    }
    playVideo(){
        if (this.video.paused){
            if (this.poster){
                this.poster.style.display = 'none'
            }
            this.video.play();
            this.button.classList.add('active')
        } else {
            this.video.pause();
            this.button.classList.remove('active')
        }
    }
}