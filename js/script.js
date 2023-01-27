const slides = document.querySelectorAll('.slides');
const image1 = document.querySelector('.first-slide');
const image2 = document.querySelector('.second-slide');
const image3 = document.querySelector('.third-slide');
const image4 = document.querySelector('.fourth-slide');
const image5 = document.querySelector('.fifth-slide');

const btnLeft = document.getElementById('left');
const btnRight = document.getElementById('right');

let currentImg = 0;
const imgArr = [0,1,2,3,4];

btnRight.addEventListener('click', () => {
    
    if(currentImg == 0) {
        image1.classList.add('hide');
        image2.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 1) {
        image2.classList.add('hide');
        image3.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 2) {
        image3.classList.add('hide');
        image4.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 3) {
        image4.classList.add('hide');
        image5.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 4) {
        image5.classList.add('hide');
        image1.classList.remove('hide');
        currentImg = 0;
    }
});

btnLeft.addEventListener('click', () => {
    
    if(currentImg == 0) {
        image1.classList.add('hide');
        image5.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 1) {
        image5.classList.add('hide');
        image4.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 2) {
        image4.classList.add('hide');
        image3.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 3) {
        image3.classList.add('hide');
        image2.classList.remove('hide');
        currentImg++;
    } else if(currentImg == 4) {
        image2.classList.add('hide');
        image1.classList.remove('hide');
        currentImg = 0;
    }
});