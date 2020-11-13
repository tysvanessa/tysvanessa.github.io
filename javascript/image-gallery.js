//SWIPER IMAGE GALLERY
new Swiper('.swiper-container', {
  // Optional parameters
  speed: 500,
  spaceBetween: 100,
  direction: 'horizontal',
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  }
});



//IMAGE GALLERY WITH PREV/NEXT BUTTONS:
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const galleryImages = document.querySelectorAll('.gallery-img'); // a node list, a pseudo array of image tags
// let currentlySelected = 0;

// prevBtn.addEventListener('click', function(){
//     galleryImages[currentlySelected].classList.remove('active');
//     currentlySelected--;
//     galleryImages[currentlySelected].classList.add('active');
//     nextBtn.disabled = false;

//     if (currentlySelected === 0) {
//         prevBtn.disabled = true;
//     }
// });

// nextBtn.addEventListener('click', function(){
//     galleryImages[currentlySelected].classList.remove('active');
//     currentlySelected++;
//     galleryImages[currentlySelected].classList.add('active');
//     prevBtn.disabled = false;
  
//     if (galleryImages.length === currentlySelected + 1) {
//         nextBtn.disabled = true;
//     }
// });