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




// =================//
// Card Coding =====//
// ================//


const data = {
    currentIndex: 0,
    cards: [
        {
            title: "The Business Integlligence Analyst Course 2020",
            price: "₹650",
            intro: "Here you will learn the greatest fact about the bussiness and the ingredients to do the work.",
            image: "../img/card_img_1.jpg",
        },
        {
            title: "The World Without Fear",
            price: "₹550",
            intro: "A Resolve lesson of the baby",
            image: "../img/card_img_2.jpg",
        },
        {
            title: "The World Without Fear",
            price: "₹550",
            intro: "A Resolve lesson of the baby",
            image: "../img/card_img_2.jpg",
        },{
            title: "The World Without Fear",
            price: "₹550",
            intro: "A Resolve lesson of the baby",
            image: "../img/card_img_2.jpg",
        },{
            title: "The World Without Fear",
            price: "₹550",
            intro: "A Resolve lesson of the baby",
            image: "../img/card_img_2.jpg",
        },{
            title: "The World Without Fear",
            price: "₹550",
            intro: "A Resolve lesson of the baby",
            image: "../img/card_img_2.jpg",
        },{
            title: "The World Without Fear",
            price: "₹550",
            intro: "A Resolve lesson of the baby",
            image: "../img/card_img_2.jpg",
        }
    ],
};

data.cards.forEach(element => {
    const cardHTML = `
    <div id="card_Box" class="inline-block max-w-xs m-4 bg-white border border-b-2 rounded-br-lg shadow-lg card rounded-tr-md">
        <img id="cardImg" src="${element.image}" class="w-full">
        <div class="p-4">
            <h3 id="cardSlideTitle" class="font-semibold tracking-wider text-gray-800">${element.title}</h3>
            <p id="cardSlideIntro" class="mt-2 mb-2 tracking-wide text-gray-600">${element.intro}</p>
            <div>
                <span class="inline-block mb-4 font-semibold text-orange-600">Price :-</span><span id="cardSlidePrice" class="inline-block mb-4 font-semibold text-orange-600">${element.price}</span>
            </div>
            <a href="#" class="px-4 py-1 bg-blue-700 btn">Buy Now</a>
        </div>
    </div>
    `;
    document.querySelector('.cards').innerHTML += cardHTML;
});

// Decalre global variables
const cards = document.querySelector('.cards')
cards.style.scrollBehavior = "smooth"

// Next Prev Function
const next = document.querySelector('#nextbtn');
const prev = document.querySelector('#prevbtn');

next.onclick = () => {
    cards.scrollLeft += 220;
};
prev.onclick = () => {
    cards.scrollLeft -= 220;
}