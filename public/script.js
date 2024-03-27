let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}
ctrlIcon.addEventListener("click", function(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
});
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.oninput = function(){
    song.currentTime = progress.value;
};

progress.onchange = function(){
song.play();
progress.value = song.currentTime;
ctrlIcon.classList.remove("fa-play");
ctrlIcon.classList.add("fa-pause");

};