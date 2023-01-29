const slides = document.querySelectorAll('.slides');
const image1 = document.querySelector('.first-slide');
const image2 = document.querySelector('.second-slide');
const image3 = document.querySelector('.third-slide');
const image4 = document.querySelector('.fourth-slide');
const image5 = document.querySelector('.fifth-slide');

const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let currentImg = 0;
const imgArr = ["images/image-slide-1.jpg",
                "images/image-slide-2.jpg",
                "images/image-slide-3.jpg",
                "images/image-slide-4.jpg",
                "images/image-slide-5.jpg"];

btnRight.addEventListener('click', () => {
    if(currentImg <= imgArr.length) {
    image1.setAttribute('src', imgArr[currentImg+1]);
} else {
    currentImg = 0;
}
});

btnLeft.addEventListener('click', () => {
    if(currentImg <= imgArr.length) {
        image1.setAttribute('src', imgArr[currentImg+1]);
    } else {
        currentImg = 0;
    }
    });