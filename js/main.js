const swiper = new Swiper('.main-slider', {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 0,    
    loop: true, 
    navigation: {
      nextEl: ' .main-slider_arrow_right',
      prevEl: ' .main-slider_arrow_left',      
    }, 
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768:{
        slidesPerView:2,
      }
    }
  }); 
 

  
  let burger = document.querySelector('.menu-burger');
  let closeMenu = document.querySelector('.header__menu-close');
  let menuMobile = document.querySelector('.header');

  burger.addEventListener('click', ()=> {
      menuMobile.style.display = 'block';
  })

  closeMenu.addEventListener('click', ()=>{
    menuMobile.style.display = 'none';
  })



  // кнопка с трейлером большая
  const modalWindow = document.querySelector('.modal');
  const buttonModal = document.querySelector('.main_button-play');
  
  buttonModal.addEventListener('click', (e)=>{
    modalWindow.classList.add('active');
  })
  
  modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');
  
      if(!isModal)
      {
            modalWindow.classList.remove('active');
      }
  })

//первый слайд
const modalWindow1 = document.querySelector('.modal_1');
const buttonModal1 = document.querySelector('.image1');
  
buttonModal1.addEventListener('click', (e)=>{
  modalWindow1.classList.add('active');
})
  
modalWindow1.addEventListener('click', (e) => {
  const isModal1 = e.target.closest('.modal__inner_1');
  
    if(!isModal1)
    {
          modalWindow1.classList.remove('active');
    }
})


  // второй слайд
const modalWindow2 = document.querySelector('.modal_2');
const buttonModal2 = document.querySelector('.image2');
  
buttonModal2.addEventListener('click', (e)=>{
  modalWindow2.classList.add('active');
})
  
modalWindow2.addEventListener('click', (e) => {
  const isModal2 = e.target.closest('.modal__inner_2');
  
    if(!isModal2)
    {
          modalWindow2.classList.remove('active');
    }
})


// третий слайд
const modalWindow3 = document.querySelector('.modal_3');
const buttonModal3 = document.querySelector('.image3');
  
buttonModal3.addEventListener('click', (e)=>{
  modalWindow3.classList.add('active');
})
  
modalWindow3.addEventListener('click', (e) => {
  const isModal3 = e.target.closest('.modal__inner_3');
  
    if(!isModal3)
    {
          modalWindow3.classList.remove('active');
    }
})

// четвертый слайд
const modalWindow4 = document.querySelector('.modal_4');
const buttonModal4 = document.querySelector('.image4');
    
buttonModal4.addEventListener('click', (e)=>{
  modalWindow4.classList.add('active');
})
    
modalWindow4.addEventListener('click', (e) => {
  const isModal4 = e.target.closest('.modal__inner_4');
    
    if(!isModal4)
    {
          modalWindow4.classList.remove('active');
    }
})
  
// пятый слайд
const modalWindow5 = document.querySelector('.modal_5');
const buttonModal5 = document.querySelector('.image5');
      
buttonModal5.addEventListener('click', (e)=>{
  modalWindow5.classList.add('active');
})
      
modalWindow5.addEventListener('click', (e) => {
  const isModal5 = e.target.closest('.modal__inner_5');
    
    if(!isModal5)
    {
          modalWindow5.classList.remove('active');
    }
})

// шестой слайд
const modalWindow6 = document.querySelector('.modal_6');
const buttonModal6 = document.querySelector('.image6');
      
buttonModal6.addEventListener('click', (e)=>{
  modalWindow6.classList.add('active');
})
      
modalWindow6.addEventListener('click', (e) => {
  const isModal6 = e.target.closest('.modal__inner_6');
      
    if(!isModal6)
    {
          modalWindow6.classList.remove('active');
    }
})
    