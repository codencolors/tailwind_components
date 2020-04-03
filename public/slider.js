const slider = document.querySelector('.myslides');
const slides = [
    '../img/slider-1.jpg',
    '../img/slider-2.jpg',
    '../img/slider-3.jpg'
];
let index = 0;
slider.style.display = "block";
// fixing image height

const nextSlide = () => {
    if(index>=slides.length-1) {
        index = 0; 
    }
    else {
        index++;
    }
    slider.querySelector('#sliderImage').setAttribute('src', slides[index]);
};

const prevSlide= () => {

    if(index<1) {
        index = slides.length-1;
    }
    else {
        index--;
    }
    slider.querySelector('#sliderImage').setAttribute('src', slides[index]);
}

nextSlide();
prevSlide();
//  listeners for buttons

const nextButton = document.querySelector('#nextbtn');
const prevButton = document.querySelector('#prevbtn');

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);