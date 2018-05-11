/**
 * play a sound given a url
 * 
 */
export function playSound(soundSrc) {
    let sound = new Audio();
    sound.preload = 'auto';
    sound.src = soundSrc;
    if (sound) {
        sound.load();
        sound.currentTime = 0;
        sound.play().then(() => console.log("played"))
        .catch(error => console.log(error));
    }
}