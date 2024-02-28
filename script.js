const checkbox = document.getElementById("icon3");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});


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
