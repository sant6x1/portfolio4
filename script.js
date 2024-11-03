
const chk = document.getElementById('chk')

chk.addEventListener('change',() => {
  document.body.classList.toggle('dark-mode')
})


$(document).ready(function() {

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $('.moveNextCarousel').click(function(e){
    e.preventDefault();
    $('.carousel').carousel('next');
  });


  $('.movePrevCarousel').click(function(e){
    e.preventDefault();
    $('.carousel').carousel('prev');
  });
});