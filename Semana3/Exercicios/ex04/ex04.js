var btn1 = document.getElementById('galer');
var galeria = document.querySelector('#galeria');
btn1.addEventListener('click', function() {
    
  if(galeria.style.display === 'block') {
    galeria.style.display = 'none';
  } else {
    galeria.style.display = 'block';
  }
});

var btn2 = document.getElementById('vid');
var videos = document.querySelector('#video');
btn2.addEventListener('click', function() {
    
  if(videos.style.display === 'block') {
    videos.style.display = 'none';
  } else {
    videos.style.display = 'block';
  }
});

var btn = document.getElementById('per');
var perfil = document.querySelector('#perfil');
btn.addEventListener('click', function() {
    
  if(perfil.style.display === 'block') {
    perfil.style.display = 'none';
  } else {
    perfil.style.display = 'block';
  }
});