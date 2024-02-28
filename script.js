const menu=document.querySelector(".menu");
const toggle=document.querySelector(".toggle");
toggle.addEventListener("click",()=>{
  menu.classList.toggle("active");
})
var icon=document.getElementById("icon3");

icon.onclick=function(){
  document.body.classList.toggle("dark");
  if(document.body.classList.contains("dark")){
    icon.src="sun.png";
  }
  else{
    icon.src="moon.png";
  }
}


document.addEventListener('DOMContentLoaded', function() {
  var navbar = document.querySelector('.container1');

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-bg');
      } else {
          navbar.classList.remove('navbar-bg');
      }
  });
});

//cvdownload
