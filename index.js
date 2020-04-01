// var navIcon = $(".navbar-toggler-icon");
// navIcon.on("click",function(){
//   var currentImage = navIcon.attr("src");
//   if(currentImage == "images/icon-hamburger.svg"){
//     navIcon.attr("src", "images/icon-close.svg");
//     $(".navbar-nav").toggleClass("navbar-open");
//   }else if(currentImage == "images/icon-close.svg"){
//     navIcon.attr("src", "images/icon-hamburger.svg");
//   }
// })

var navIcon = $(".navbar-toggler-icon");
navIcon.on("click",function(){
  $(".navbar-nav").toggleClass("navbar-open");
  $(".navbar-toggler-icon").toggleClass("icon-navbar-open");
  $(".dot-icon").toggle();
  $(".add-bottom-border").toggleClass("navitem-bottom-border");
});
