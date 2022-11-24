let btns = document.querySelectorAll('button'),
    carousel = document.getElementById('carousel'),
    increment = 40,
    cur = 0,
    touchstartX = 0,
    touchendX = 0;

btns.forEach((btn)=>{
  btn.addEventListener('click',function(){
    if(this.textContent  == '<') cur += increment;
    else cur -= increment;
    carousel.style.transform = `rotateY(${cur}deg)`;
  });
});
    
function checkDirection() {
  if (touchendX < touchstartX){
    cur -= increment;
    carousel.style.transform = `rotateY(${cur}deg)`;
  }
  if (touchendX > touchstartX){
    cur += increment;
    carousel.style.transform = `rotateY(${cur}deg)`;
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})