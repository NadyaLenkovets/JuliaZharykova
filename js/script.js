// // ============  бургер-меню  ============ 

// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.sidebar');
// const navLinks = document.querySelectorAll('.nav__link');

// burger.addEventListener('click', function(e) {
//    document.body.classList.toggle('lock');
//    nav.classList.toggle('active');
//    burger.classList.toggle('active');
// })

// navLinks.forEach(navLink => {
//    navLink.addEventListener('click', onNavLinkClick);
//    navLink.addEventListener('click', makeLinkActive);
// })

// function onNavLinkClick(e) {
//    const navLink = e.target;
//    if (burger.classList.contains('active')) {
//       document.body.classList.remove('lock');
//       nav.classList.remove('active');
//       burger.classList.remove('active');
//    }
// }

// function makeLinkActive() {
//    navLinks.forEach(navLink => {
//       navLink.parentElement.classList.remove('active');
//       this.parentElement.classList.add('active');
//    })
// }



// ============  fixed header  ============ 

// window.onscroll = function() {scrollFunction()}

// function scrollFunction() {

//    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//       // document.getElementById('header').style.backgroundColor = "rgba(255, 255, 255, 0.8)";
//       document.getElementById('header').classList.add('active');
//    } else {
//       // document.getElementById('header').style.backgroundColor = "transparent";
//       document.getElementById('header').classList.remove('active');
//    }
// }




// ============  подменю  ============ 

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