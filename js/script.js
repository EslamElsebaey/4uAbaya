$(document).ready(function(){


  // show and hide search box

$(".openMySearch").click(function(){
  $(".search-holder-parent").fadeToggle(200);
  $(" .account-text .header-dropdown").removeClass("show-user-account")
  $("body").addClass("overflow-hidden-body") ;
  $(".search-holder-input").addClass("open-search");
})
$(".closeSearh-btn").click(function(){
    $(".search-holder-input").removeClass("open-search");
    $(".control-section i").removeClass("icon-color");
    $(".openMySearch i ").removeClass("icon-color")
    setTimeout(() => {
    $(".search-holder-parent").fadeToggle(300);
  }, 200);
  $("body").removeClass("overflow-hidden-body") ;
 
})

/********************************************************************************* */


// open and close sideBar

$(".menu-bars").click(function(){
  $(this).toggleClass("open-bars");
  $(" .account-text .header-dropdown").removeClass("show-user-account")
  $("nav").toggleClass("reset-left");
  $("body").toggleClass("overflowHidden");
})


/********************************************************************************* */
    // preloader
    setTimeout(function () {
      $(".preloader").css({
        opacity : "0" , 
        visibility : "hidden" , 
      })
    }, 2000);


/********************************************************************************* */

    // SWIPERS 

// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});


//  new arrivals swiper

const newArrivalSwiper = new Swiper(' .newArrivals .swiper', {
  loop: true,
  autoplay : true , 
  draggable: true,
  
  pagination: {
    el: '.newArrivals .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.newArrivals .swiper-button-next ',
    prevEl: '.newArrivals .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});



/********************************************************************************* */

// show user account in Mobile

if($(window).width() < 992 ){
  $(".account-text").click(function(){
    $(" .account-text .header-dropdown").toggleClass("show-user-account")
  })
}

/********************************************************************************* */



/********************************************************************************* */

// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 500);
}) 


/********************************************************************************* */

//  nested menus in footer


if($(window).width() < 768){
$(".footer-title").click(function(e){
  e.preventDefault() ;
  $(this).next().slideToggle(300) ; 
  $(this).toggleClass("arrow-rotate");
  $(".footer-title").not($(this)).next().slideUp(300);
  $(".footer-title").not($(this)).removeClass("arrow-rotate");
})
}


/********************************************************************************* */




// FIXED NAV
    
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 150) {
        $("header").addClass("fixed");
        $(" .account-text .header-dropdown").removeClass("show-user-account");
        $(".control-section i").removeClass("icon-color");
        if($(window).width() > 768){
          $(".logo img").addClass("logo-img-big");
          $("header").addClass("header-padding-30");
        }
      } else {
        $("header").removeClass("fixed");
        if($(window).width() > 768){
          $(".logo img").removeClass("logo-img-big");
          $("header").removeClass("header-padding-30");
        }
      
      }
    });
    var fixedBar = document.querySelector("header"),
      prevScrollposition = $(window).scrollTop();

    (window.onscroll = function () {
      var o = $(window).scrollTop();
      prevScrollposition < o && prevScrollposition > 0 ? fixedBar.classList.add("fixsedt") : fixedBar.classList.remove("fixsedt"), (prevScrollposition = o);
    })   
  




/********************************************************************************* */
 
// add color to icons when clicked

if($(window).width() < 768){
  $(".control-section i").click(function(){
    $(this).toggleClass("icon-color");
  })
}
})




// fire wow


new WOW().init();

