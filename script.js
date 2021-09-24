var audio = document.getElementById('sng');
var vol = 1;
var isPlaying = true;

// Play function
function playPause() {
    if (isPlaying=false) {
        audio.play ();
        isPlaying = true;
        
        return;
    }
    else if (isPlaying=true) {
        audio.pause();
        isPlaying = false;
        return;
    }
}

//Volume and down 
function volume (num) {

vol += num;
if (vol>=1) {
    vol = 1;
}
else if (vol<=0){
    vol =0;
}

audio.vol = vol;

console.log(audio.vol);

}
