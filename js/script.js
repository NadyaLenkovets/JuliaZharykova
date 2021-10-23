// ============  бургер-меню  ============ 

const burger = document.querySelector('.header-burger');
const nav = document.querySelector('.header-nav');
const navLinks = document.querySelectorAll('.header-nav__link');

burger.addEventListener('click', function(e) {
   document.body.classList.toggle('lock');
   nav.classList.toggle('active');
   burger.classList.toggle('active');
})

navLinks.forEach(navLink => {
   navLink.addEventListener('click', onNavLinkClick);
   navLink.addEventListener('click', makeLinkActive);
})

function onNavLinkClick(e) {
   const navLink = e.target;
   if (burger.classList.contains('active')) {
      document.body.classList.remove('lock');
      nav.classList.remove('active');
      burger.classList.remove('active');
   }
}

function makeLinkActive() {
   navLinks.forEach(navLink => {
      navLink.parentElement.classList.remove('active');
      this.parentElement.classList.add('active');
   })
}


// ============  submenu  ============ 

const body = document.querySelector('body');

let isMobile = {
   Android: function () {
       return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
       return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
       return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
       return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
       return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
       return (
               isMobile.Android()
               || isMobile.BlackBerry()
               || isMobile.iOS()
               || isMobile.Opera()
               || isMobile.Windows()
               );
   }
};

if (isMobile.any()) {
   body.classList.add('touch');
   let arrow = document.querySelectorAll('.menu-arrow');
   for (i = 0; i < arrow.length; i++) {
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      arrow[i].addEventListener("click", function() {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      })
   }
} else {
   body.classList.add('mouse');
}




// ============  button-up  ============ 

document.getElementById('button-up').onclick = function scrollUpFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()}

function scrollFunction() {
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById('button-up').style.opacity = "1";
      
   } else {
      document.getElementById('button-up').style.opacity = "0";
   }
}