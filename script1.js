// List all VARs

//Objects
var song1 = {
    src:"music/m1.mp3",
    image: "banner/img1.png",
    title: "Music 1",
    artist: "Artist 1",
    lyrics: "Lyrics 1",
}

var song2 = {
    src: "music/m2.mp3",
    image: "banner/img2.png",
    title: "Music 2",
    artist: "Artist 2",
    lyrics: "Lyrics 2",
}

var song3 = {
    src:"music/m3.mp3",
    image: "banner/img3.png",
    title: "Music 3",
    artist: "Artist 3",
    lyrics: "Lyrics 3",
}

var song4 = {
    src:"music/m4.mp3",
    image: "banner/img4.png",
    title: "Music 4",
    artist: "Artist 4",
    lyrics: "Lyrics 4",
}

var song5 = {
    src:"music/m5.mp3",
    image: "banner/img5.png",
    title: "Music 5",
    artist: "Artist 5",
    lyrics: "Lyrics 5",
}

//Array 
var songList = [song1, song2, song3, song4, song5];

//Single Var
var audio = document.getElementById('aud');
var vol = 1;
var isPlaying = false; //not play
var isMuted = false; //start vol=1
var MusicPlaying = 1;
var audioID = 0;
var audioMax = songList.length;
var audio = document.getElementById('aud');
var timeB = document.getElementById('time-bar');



//vol function
function volUpdate(num) {
    vol += num;

    if (vol>=1) {
        vol = 1;
    } else if (vol <= 0) {
        vol = 0;}

    console.log (vol);
}

//pause/play function
function playAlt() {
    if (isPlaying = false) {
        audio.play();
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-play'></i>";
        isPlaying = true;
        return;

    } else if (isPlaying = true) {
        audio.pause();
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
        isPlaying = false;
        return;
    } 
}



//Song Switch function
function songSwap(input) {
    if (input == 1) {
        audioID += input;
    } else if (input == -1) {
        audioID -= input
    }
}


//Previous and Next Loop
if (audioID > audioMax) {
    audioID = 0;
}


//TimeBar 
setInterval(checkTime, 1000);
console.log(audio.duration);

function checkTime () {
    var songDuration = (audio.duration);
    var timeBWidth = (audio.currentTime/songDuration) * 100;

    timeB.style.width = timeBWidth + '%';
}

//OBJECT CHANGES
audio.src = songList[audioID].src;


// //BG CHANGES
document.getElementById('s1').style.backgroundImage = songList[audioID].image;
console.log(songList[audioID].image);


//title
document.getElementById('song-title').innerHTML = songList[audioID].title;

//artist
document.getElementById('artist').innerHTML = songList[audioID].artist;
console.log (songList[audioID].artist);

//lyrics
document.getElementById('lyrics').innerHTML = songList[audioID].lyrics;