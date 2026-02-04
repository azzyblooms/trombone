let slide = document.getElementById('slide');
let position = 1;
let baseFactors = null;
let tuning = "12tet";
let activeKey = null;
const blip = new Audio(audio/blip.mp3);
const hover = new Audio(audio/hover.mp3);
const tuningButton = document.getElementById('tuningButton');
const Bb = new Audio('audio/bb1trombone.mp3');
Bb.preservesPitch = false;

tuningButton.addEventListener('click', () => {
    if(tuning === "just") {
        tuning = "12tet";
    } else {
        tuning = "just";
    }
    blip.cloneNote(true).play();

});
tuningButton.addEventListener('mouseenter', () => {
    hover.cloneNode(true).play();
})
function getPlaybackRate(key, position, maxPosition = 7) {
    if(tuning == "just") {
        baseFactors = {
        Shift: 1,
        z: 2,
        x: 3,
        c: 4,
        v: 5,
        b: 6,
        n: 7,
        m: 8
        //just intonation
        }
    }
    if(tuning == "12tet") {
        baseFactors = {
        Shift: 0.5 * 2,
        z: 1 * 2,
        x: 1.498 * 2,
        c: 2 * 2,
        v: 2.52 * 2,
        b: 2.998 * 2,
        n: 3.567 * 2,
        m: 4 * 2
        //12-TET
        }
    }


    const factor = Math.pow(Math.pow(2, (-0.5)), (position - 1) / 6);
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
    if(!['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm'].includes(event.key)) return;
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