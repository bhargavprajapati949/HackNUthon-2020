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

//devfolio 

document.addEventListener('DOMContentLoaded', function () {
  let devfolioOptions = {
      buttonSelector: '#devfolio-apply-now',
      key: 'hacknuthon2020',
  }

  let script = document.createElement('script');
  script.src = "https://apply.devfolio.co";
  document.head.append(script);

  script.onload = function () {
      new Devfolio(devfolioOptions);
  }

  script.onerror = function () {
      document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
          window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
      });
  }
});