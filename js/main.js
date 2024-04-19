console.log("welcome to deezer")
//Intailizing all the variables
let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3');
let masterSongName = document.getElementById('masterSongName');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songItemsPlay = Array.from(document.getElementsByClassName('songItemsPlay'));


let songs = [
    {songName:"Got my mind set on you", filepath:"./songs/1.mp3", coverPath: "./covers/cover1.jpg"},
    {songName:"My sweet Lord", filepath:"./songs/2.mp3", coverPath: "./covers/cover2.jpg"},
    {songName:"Stir it up", filepath:"./songs/3.mp3", coverPath: "./covers/cover3.jpg"},
    {songName:"Sweet child O' mine", filepath:"./songs/4.mp3", coverPath: "./covers/cover4.jpg"},
    {songName:"Lemon", filepath:"./songs/5.mp3", coverPath: "./covers/cover5.jpg"},
    {songName:"Stand by me", filepath:"./songs/6.mp3", coverPath: "./covers/cover6.jpg"},
    {songName:"Dreams", filepath:"./songs/7.mp3", coverPath: "./covers/cover7.jpg"}
]

songItems.forEach((element, i) =>{
    element.querySelector("img").src = songs[i].coverPath;
    element.querySelector(".songName").innerText = songs[i].songName;
})


//Manage all play/pause button
masterPlay.addEventListener('click',playPauseFunctionality)
//declaring important functions
function playAtIndex(songIndex){
        audioElement.src = songs[songIndex].filepath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
}
function playPauseFunctionality(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
}

//Listening all the events
audioElement.addEventListener('timeupdate', () =>{
    //updating seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress; 
})
    //synchronising the change in seekbar to the playing of music
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = audioElement.duration * (myProgressBar.value/100);
})
function makeAllDefault(){
songItemsPlay.forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}
    //add the play/pause functionality to all mini play button
songItemsPlay.forEach((element,i) =>{
    element.addEventListener('click',(miniPlay)=>{
        makeAllDefault();
        songIndex = i;
        miniPlay.target.classList.remove('fa-circle-play');
        miniPlay.target.classList.add('fa-circle-pause');
        playAtIndex(songIndex);
})
})
    //adding backward functionality to backward button
document.getElementById('back').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = songs.length-1;
    }
    else{
        songIndex -= 1;
    }
    playAtIndex(songIndex);
})
    //adding forward functionality to forward button
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >=7 ){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    playAtIndex(songIndex);
})




