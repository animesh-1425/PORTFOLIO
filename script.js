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

//cvdownload