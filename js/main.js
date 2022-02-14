const swiper = new Swiper('.main-slider', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 10,    
    loop: true, 
    navigation: {
      nextEl: '.main-slider_arrow',
    },  
  });