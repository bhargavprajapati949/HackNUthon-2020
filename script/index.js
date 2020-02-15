//preloader

$('document').ready(function(){
  $('#preloader').fadeOut(1000);
})

//change style of navbar after hero section is scrolled

const slider = document.querySelector('#slider');
const navBar = document.getElementById('navigationbar');

const navbarScrollEffect = new IntersectionObserver(function(entries, navbarScrollEffect){
  entries.forEach(entry => {
    // console.log(entry.isIntersecting)
      if(entry.isIntersecting == true){
        navBar.classList.remove('nav-after-scroll');
      }
      else{
        navBar.classList.add('nav-after-scroll');
      }
  })
},/*options*/{
  rootMargin: "-90px 0px 0px 0px"
})

navbarScrollEffect.observe(slider);


//main countdown

document.addEventListener('DOMContentLoaded', () => {
    var timeOfHackathon = new Date(2020, 2, 15, 9, 0) / 1000;
    // var flipdown = new FlipDown(timeOfHackathon, 'countdown-main').start();
    new FlipDown(timeOfHackathon, 'countdown-main',{
      theme: 'light'
    }).start();
  });


//intersection observer

const fadeInRightItems = document.querySelectorAll(".animated.addfadeInRight");

const fadeInRightObserver = new IntersectionObserver(function(entries, fadeInRightObserver){
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting == false){
      return;
    }
    else{
      entry.target.classList.add('fadeInRight');
      entry.target.classList.remove('addfadeInRight');
      fadeInRightObserver.unobserve(entry.target);
    }
  })
},/* Options */ {
  rootMargin: "0px 0px -50px 0px"
})

fadeInRightItems.forEach(item => {
  fadeInRightObserver.observe(item);
})

const fadeInLeftItems = document.querySelectorAll(".animated.addfadeInLeft");

const fadeInLeftObserver = new IntersectionObserver(function(entries, fadeInLeftObserver){
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting == false){
      return;
    }
    else{
      entry.target.classList.add("fadeInLeft");
      entry.target.classList.remove('addfadeInLeft');
      fadeInLeftObserver.unobserve(entry.target);
    }
  })
},/* options */ {
  rootMargin: "0px 0px -50px 0px"
})

fadeInLeftItems.forEach(item => {
  fadeInLeftObserver.observe(item);
})

const fadeInItems = document.querySelectorAll(".animated.addfadeIn");

const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver){
  entries.forEach(entry => {
    console.log(entry);
    if(entry.isIntersecting == false){
      return;
    }
    else{
      entry.target.classList.add('fadeIn');
      entry.target.classList.remove('addfadeIn');
      fadeInObserver.unobserve(entry.target);
    }
  })
},/* Options */ {
  rootMargin: "0px 0px -50px 0px"
})

fadeInItems.forEach(item => {
  fadeInObserver.observe(item);
})

const zoomInItems = document.querySelectorAll(".animated.addzoomIn");

const zoomInObserver = new IntersectionObserver(function(entries, zoomInObserver){
  entries.forEach(entry => {
    console.log(entry.target);
    if(entry.isIntersecting == false){
      return;
    }
    else{
      entry.target.classList.add("zoomIn");
      entry.target.classList.remove('addzoomIn');
      fadeInLeftObserver.unobserve(entry.target);
    }
  })
},/* options */ {
  rootMargin: "0px 0px -50px 0px"
})

zoomInItems.forEach(item => {
  zoomInObserver.observe(item);
})
