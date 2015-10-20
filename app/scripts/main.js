$(function() {
    $('#nav-wrapper').height($("#nav").height());
    
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});

$(function(){
    $("button").click(function(){
        $("#nav").toggleClass("nav-bkg-white");
    });
});



$('body').addClass('js');

$('#menu-trigger').on('click', function(e) {
    e.preventDefault();
    $('.navigation').toggleClass('off-canvas--hide off-canvas--show');
    $('.navigation').attr('aria-hidden', 'false');
});

$('.menu-close').on('click', function() {
    $('.navigation').toggleClass('off-canvas--hide off-canvas--show');
    $('.navigation').attr('aria-hidden', 'true');
});

$(window).resize(function() {
  if($(window).width() > 640) {
    $('.navigation').removeClass('off-canvas--show');
    $('.navigation').attr('aria-hidden', 'false');
  } else {
    $('.navigation').addClass('off-canvas--hide');
    $('.navigation').attr('aria-hidden', 'true');
  }
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('navbar').addClass("sticky");
    }
    else{
        $('navbar').removeClass("sticky");
    }
});