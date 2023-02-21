$(function () {
// =============================volume-slider=========================
  $('.volume_wrapper').slick({
    arrows:false,
    dots:true,
    appendDots:$('.volume_row'),
    speed: 100,
    fade: true,

  
  });
  // =============================coment-slider=========================
  $('.comment_slider').slick({
    arrows:false,
    dots:true,
    appendDots:$('.comment_dots'),
    slidesToShow:1,
  });
  $('.arrow_prev').on('click',function(e) {
    e.preventDefault()
    $('.comment_slider').slick('slickPrev')
  })
  $('.arrow_next').on('click',function(e) {
    e.preventDefault()
  $('.comment_slider').slick('slickNext')
  })
// =============================Accordeon=========================
  $('.accord_link').on('click',function (e) {
    e.preventDefault()
    $(this).toggleClass('accord_link--active')
    $(this).children('.accord_items-text').slideToggle()
  })
  // =============================POPAP=========================
$('.overlay').removeClass("active")
$('.btn_act').on('click', function (e) {
  e.preventDefault()
  $('.overlay').addClass('active')
})
$(".cont_pop-close").click( function(){
  $(".overlay").removeClass("active");
});
// =============================POPAP-THANK=========================

$('.thank').removeClass("active")
$('.cont_form-btn').on('click', function (e) {
  e.preventDefault()
  $('.thank').addClass('active')
})




})