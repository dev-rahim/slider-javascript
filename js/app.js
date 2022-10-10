const images = [
    'images/pic-1.jpg',
    'images/pic-2.jpg',
    'images/pic-3.jpg',
    'images/pic-4.jpg',
    'images/pic-5.jpg',
    'images/pic-6.jpg',
    'images/pic-7.jpg',
    'images/pic-8.jpg',
    'images/pic-9.jpg',
];
let index = 0
const sliderImage = document.getElementById('slider-image');
setInterval(() => {

    if (index > images.length - 1) {
        index = 0;
    }
    const element = images[index];
    index++;
    sliderImage.setAttribute('src', element)
}
    , 1000)

console.log(images[1]);