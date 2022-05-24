$(function () {
    $('#callback-button').click(function () {
      $('.modal').addClass('modal_active');
    });
   
    $('.modal__close-button').click(function () {
      $('.modal').removeClass('modal_active');
    });
  });