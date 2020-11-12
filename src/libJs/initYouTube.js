if (document.querySelector('#video')) {
    let tag = document.createElement('script');
    tag.src = "//www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    let video = document.querySelector('#video').dataset.video
    onYouTubeIframeAPIReady = function() {
        player = new YT.Player('video', {
            videoId: video, // youtube video id
            playerVars: {
                'autoplay': 0,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onReady': ()=>{document.querySelector('#video').style.minHeight = `${Math.round(.45 * document.querySelector('#video').offsetWidth)}px`}
            }
        });
    };

    let p = document.querySelector('#video');
    p.style.opacity = '0';

    let t = document.querySelector('#video').parentNode.querySelector('.image');
    if (t.querySelector('img').src === '') {
        t.querySelector('img').src = `http://img.youtube.com/vi/${video}/0.jpg`;
    }

    document.querySelector('#video').parentNode.querySelector('.play-btn').addEventListener('click', function(){
        this.style.display = 'none';
        document.querySelector('#video').style.opacity = '1';
        t.style.display = 'none';
        player.playVideo();
    })
}