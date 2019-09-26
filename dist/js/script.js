$(document).ready(function(){
  $('.category-menu__slider').slick({
    infinite:true,
    dots:true,
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow:"<svg class='a-left control-c prev slick-prev'  src='../icons/icon-left.svg'></svg>",
    nextArrow:"<svg class='a-right control-c next slick-next' src='../icons/icon-right.svg'></svg>"
  });
});