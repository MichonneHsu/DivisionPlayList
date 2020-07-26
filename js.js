
var lists=document.querySelectorAll('#playlist');
var playlist=document.querySelectorAll('#playlist li');
var p=document.querySelectorAll('#playlist li p');
var audio=document.querySelector('#audio');
var source=document.querySelector('#audio #source');
var folderObject = Windows.Storage.KnownFolders.picturesLibrary;
console.log(folderObject);
var countDown=0;
var list=[
  'DZ-GP-Trailer_FullMix01_1648',
  'The Division_FinalStereoMusic_06_04_14',
  'theme_03_2_StageEnding_03_1648'
];
audio.setAttribute('src','./media/'+list[0]+'.wav');
for(i=0;i<playlist.length;i++){
    playlist[i].querySelector('p').addEventListener('click',clickEvent);
    playlist[i].querySelector('p').prepend(i+". ");
    playlist[i].querySelector('p').setAttribute('data-source','./media/'+list[i]+'.wav');
    playlist[i].querySelector('p').setAttribute('index',i);
    playlist[i].querySelector('p').innerText=list[i];
}
playlist[0].querySelector('p').classList.add('active');

function clickEvent(e){
 

  window.countDown=e.target.getAttribute('index');
  
  console.log(window.countDown);
    for(i=1;i<e.target.parentNode.parentNode.children.length;i++){
      e.target.parentNode.parentNode.children[i].firstChild.classList.remove('active');
    }
    e.target.classList.add('active');
   
    var sourceurl=e.target.getAttribute('data-source');
    
    audio.setAttribute('src',sourceurl);
    audio.currentTime = 0;
    audio.play();

}

function checkMusic(lists){

  

  if(audio.ended){
    
    console.log(window.countDown)
    console.log(lists[window.countDown]);
    audio.setAttribute('src','./media/'+lists[window.countDown]+'.wav');
    for(i=0;i<window.p.length;i++){
      window.p[i].classList.remove('active');
    }
    window.p[window.countDown].classList.add('active');
    window.countDown++;
  }
  if(window.countDown>=2){
    window.countDown=0;
  }
}
audio.pause();
setInterval(checkMusic,1000,list);