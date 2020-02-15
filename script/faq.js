//change style of navbar after hero section is scrolled

const titleSection = document.querySelector('.intro-img');
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

navbarScrollEffect.observe(titleSection);
