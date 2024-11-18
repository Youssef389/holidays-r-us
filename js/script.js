$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('active');
    });

    $(window).on('scroll load', function(){

        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('active');

        if($(window).scrollTop() > 60){
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }

        $('section').each(function(){

            let top = $(window).scrollTop();
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let id = $(this).attr('id');

            if(top >= offset && top < offset + height){
                $('.navbar a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }

        });

    });

})

let scrollAmount = 0;

function scrollCarousel(direction) {
  const container = document.querySelector(".carousel__container");
  const itemWidth = container.querySelector(".carousel-item").offsetWidth + 10; // العرض + الفجوة
  const visibleWidth = container.parentElement.offsetWidth;

  scrollAmount += direction * itemWidth;


  const maxScroll = container.scrollWidth - visibleWidth;
  if (scrollAmount < 0) scrollAmount = 0;
  if (scrollAmount > maxScroll) scrollAmount = maxScroll;

  container.style.transform = `translateX(-${scrollAmount}px)`;
}
let guestCount = 1;
const guestDisplay = document.getElementById('guest-count');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');

decreaseBtn.addEventListener('click', () => {
  if (guestCount > 1) {
    guestCount--;
    guestDisplay.innerText = `Guests: ${guestCount}`;
  }
});

increaseBtn.addEventListener('click', () => {
  guestCount++;
  guestDisplay.innerText = `Guests: ${guestCount}`;
});