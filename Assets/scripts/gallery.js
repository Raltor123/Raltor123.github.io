const images = [
    '../Assets/img/Elite Dangerous/Elite Dangerous Banner.jpeg',
    '../Assets/img/Elite Dangerous/Screen1.png',
    '../Assets/img/Elite Dangerous/Screen2.png',
    '../Assets/img/Elite Dangerous/Screen3.png',
    '../Assets/img/Elite Dangerous/Screen4.png',
    '../Assets/img/Elite Dangerous/Screen5.png',
    '../Assets/img/Genshin Impact/Genshin Impact Banner.jpg',
    '../Assets/img/Genshin Impact/paimon.png',
    '../Assets/img/Genshin Impact/slash.png',
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const article = document.querySelector('.img-container');

    images.forEach((src, index) => {
        const imageBox = document.createElement('div');
        imageBox.classList.add('image-box');
        imageBox.onclick = () => openLightbox(index);

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Image ${index + 1}`;

        imageBox.appendChild(img);
        article.appendChild(imageBox);
    });
});

function openLightbox(index) {
    currentIndex = index;
    document.getElementById('lightbox-img').src = images[currentIndex];
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('lightbox-img').src = images[currentIndex];
}
