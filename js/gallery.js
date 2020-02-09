// slider animation - gallery.html

let slideIndex = 1;
  showSlides(slideIndex, 'rooms');
  showSlides(slideIndex,'restaurant');
  showSlides(slideIndex, 'hotel');

     
function plusSlide(galleryID) {
  showSlides(slideIndex += 1, galleryID);
}

    
function minusSlide(galleryID) {
  showSlides(slideIndex -= 1, galleryID);  
}

    
function currentSlide(n, galleryID) {
  showSlides(slideIndex = n, galleryID);
}

    
function showSlides(n, galleryID) {
  let i, slides, dots;
    
  switch(galleryID) {

    case 'rooms':
        slides = document.getElementsByClassName('gallery__slider-image-box');
        dots = document.getElementsByClassName('dot-navigation');
    break;

    case 'restaurant':
      slides = document.getElementsByClassName('gallery__slider-image-box2');
      dots = document.getElementsByClassName('dot-navigation2');
    break;

    case 'hotel':
      slides = document.getElementsByClassName('gallery__slider-image-box3');
      dots = document.getElementsByClassName('dot-navigation3');
    break;
            
    default:
    break;
  }


  if (n > slides.length) {
    slideIndex = 1;
  }
    
  if (n < 1) {
    slideIndex = slides.length;
  }
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace('acting', '');
  }
    
  slides[slideIndex - 1].style.display = 'block';
    
  dots[slideIndex - 1].className += ' acting';
}
