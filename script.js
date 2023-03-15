feather.replace();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// bar line page
document.addEventListener("DOMContentLoaded", function () {
    const progressbarinner = document.querySelector('.progress-bar-inner');
    window.addEventListener('scroll', function(){
        let h = document.documentElement;
        let st = h.scrollTop || this.document.body.scrollTop;
        let sh = h.scrollHeight || this.document.body.scrollHeight;
        let percent = st/(sh - h.clientHeight) *100;
        let roundedpercent = Math.round(percent);
        progressbarinner.style.width = percent + "%"
        progressbarinner.innetText = roundedpercent + "%"
    });
});

hamburger = document.querySelector(".hamburger");
nav = document.querySelector("nav");
hamburger.onclick = function() {
    nav.classList.toggle("active");
}

const header = document.getElementById("header");
const logocol = document.querySelector(".logocol");


window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("scrolled");
    logocol.classList.add("scrolledlogo");
  } else {
    header.classList.remove("scrolled");
    logocol.classList.remove("scrolledlogo");
  }
});

window.addEventListener('scroll', function() {
    var animation = document.querySelector('.animated-text');
    var animationPosition = animation.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    
    if (animationPosition < screenPosition / 2) {
      setTimeout(function() {
        animation.classList.add('active');
      }, 5000);
    }
  });
  
  document.querySelector('.animated-text').addEventListener('click', function() {
    var nextSection = document.querySelector('#profile');
    nextSection.scrollIntoView({ behavior: 'smooth' });
  });