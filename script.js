let button = document.querySelector('.button');
button.addEventListener('mouseover', myFunction);
function myFunction(){
  let randomX = Math.floor(Math.random() * window.innerWidth);
  let randomY = Math.floor(Math.random() * window.innerHeight);
  button.style.position = 'absolute';
  button.style.left = randomX + 'px';
  button.style.top = randomY + 'px';
  
}
