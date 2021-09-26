// List all VARs

//Objects
var song1 = {
    src:"music/m1.mp3",
    image: "banner/img1.png",
    title: "See you",
    artist: "Cartoon",
    lyrics: "Lyric 1",
}

var song2 = {
    src: "music/m2.mp3",
    image: "banner/img2.png",
    title: "Travels",
    artist: "Khai Dreams",
    lyrics: "Lyric 2",
}

var song3 = {
    src:"music/m3.mp3",
    image: "banner/img3.png",
    title: "I'll RMBR U",
    artist: "Cartoon",
    lyrics: "Lyrics 3",
}

var song4 = {
    src:"music/m4.mp3",
    image: "banner/img4.png",
    title: "Gone",
    artist: "Cartoon",
    lyrics: "Lyrics 4",
}

var song5 = {
    src:"music/m5.mp3",
    image: "banner/img5.png",
    title: "Ocean Blue",
    artist: "Ivy",
    lyrics: "Lyrics 5",
}

//Array 
var songList = [song1, song2, song3, song4, song5];



//Single Var
var audioID = 0;
var audio = document.getElementById('audio');
var vol = 1;
var isPlaying = true; //not play
var MusicPlaying = 1;
var audioMax = songList.length;
var sng = document.getElementById('audio');
var timeB = document.getElementById('time-bar');
var fileName;



//vol function
function volUpdate(num) {
    vol += num;

    if (vol>=1) {
        vol = 1;
    } else if (vol <= 0) {
        vol = 0;}

    console.log (vol);
    
    audio.volume = vol; //to print back
}


//play pause
function playPause() {
   if (isPlaying == true) {
        audio.play();
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
        isPlaying = false;
       
    } else if (isPlaying == false) {
        audio.pause();
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-play'></i>";
        isPlaying = true;
    } 
}

//TimeBar 
setInterval(checkTime, 1000);
console.log(sng.duration);

function checkTime () {
    var songDuration = (sng.duration);
    var timeBWidth = (sng.currentTime/songDuration) * 100;

    timeB.style.width = timeBWidth + '%';
}




function vidChange(fileName) {
    audio.src = fileName;

    if (fileName == "music/m1.mp3") {   
        document.getElementById('s1').style.backgroundImage = song1.image;
        document.getElementById('song-title').innerHTML = song1.title;
        document.getElementById('artist').innerHTML = song1.artist;
        document.getElementById('lyrics').innerHTML = song1.lyrics;
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
    } else if (fileName == "music/m2.mp3") 
    {
        document.getElementById('s1').style.backgroundImage = song2.image;
        document.getElementById('song-title').innerHTML = song2.title;
        document.getElementById('artist').innerHTML = song2.artist;
        document.getElementById('lyrics').innerHTML = song2.lyrics;
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
    } else if (fileName == "music/m3.mp3")
    {
        document.getElementById('s1').style.backgroundImage = song3.image;
        document.getElementById('song-title').innerHTML = song3.title;
        document.getElementById('artist').innerHTML = song3.artist;
        document.getElementById('lyrics').innerHTML = song3.lyrics;
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
    } else if (fileName == "music/m4.mp3")
    {
        document.getElementById('s1').style.backgroundImage = song4.image;
        document.getElementById('song-title').innerHTML = song4.title;
        document.getElementById('artist').innerHTML = song4.artist;
        document.getElementById('lyrics').innerHTML = song4.lyrics;
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
    } else if (fileName == "music/m5.mp3"){
        document.getElementById('s1').style.backgroundImage = song5.image;
        document.getElementById('song-title').innerHTML = song5.title;
        document.getElementById('artist').innerHTML = song5.artist;
        document.getElementById('lyrics').innerHTML = song5.lyrics;
        document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";
    }
       
}

//Song Detection
if (fileName == "music/m1.mp3") {
    fileName = audioID[song1];
}

if (fileName == "music/m2.mp3") {
    fileName = song2;
}

if (fileName == "music/m3.mp3") {
    fileName = song3;
}


if (fileName == "music/m4.mp3") {
    fileName = song4;
}

if (fileName == "music/m5.mp3") {
    fileName = song5;
}



//Song Switch function

function songSwap(but) {

    //back and forth
    
    if (but==1) {
        audioID += 1;
    } else if (but==-1) {
        audioID -= 1;
    }

    //Previous and Next Loop
    if (audioID > audioMax) {
        audioID = 0;
    } else if (audioID < 0) { //if minus
        audioID = audioMax;
    }

    document.getElementById("switch-btn").innerHTML ="<i class='fas fa-pause'></i>";

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
}

