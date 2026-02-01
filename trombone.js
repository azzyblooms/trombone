let slide = document.getElementById('slide');
let position = 1;
let activeKey = null;
const Bb = new Audio('audio/bbtrombone.mp3');
Bb.preservesPitch = false;

function getPlaybackRate(key, position, maxPosition = 7) {
    const baseFactors = {
        z: 1,
        x: 1.498,
        c: 2,
        v: 2.52,
        b: 2.998,
        n: 3.567
    };
    const semitoneLimit = 6;
    const minFactor = Math.pow(2, -semitoneLimit / 12);
    const step = 0.125 * 6 / (maxPosition - 1);
    const factor = Math.pow(minFactor, (position - 1) / (maxPosition - 1));
    return baseFactors[key] * factor;
}

slide.addEventListener('input', () => {
    position = Number(slide.value);
    if (activeKey) {
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
})
addEventListener('keydown', () => {
    if(event.repeat) return;
    if(!['z', 'x', 'c', 'v', 'b', 'n'].includes(event.key)) return;
    activeKey = event.key;
    Bb.currentTime = 0;
    Bb.playbackRate = getPlaybackRate(activeKey, position);
    Bb.play();
    console.log(position, Bb.playbackRate, 7);
});
addEventListener('keyup', (event) => {
    if(event.key === activeKey) {
        Bb.pause();
        Bb.currentTime = 0;
        activeKey = null;

    }
})
addEventListener('keydown', () => {
    if(event.key == 1) {
        slide.value = 1;
        position = 1;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
    if(event.key == 2) {
        slide.value = 2;
        position = 2;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
    if(event.key == 3) {
        slide.value = 3;
        position = 3;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
    if(event.key == 4) {
        slide.value = 4;
        position = 4;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
    if(event.key == 5) {
        slide.value = 5;
        position = 5;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
    if(event.key == 6) {
        slide.value = 6;
        position = 6;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
    if(event.key == 7) {
        slide.value = 7;
        position = 7;
        Bb.playbackRate = getPlaybackRate(activeKey, position, 7);
    }
})