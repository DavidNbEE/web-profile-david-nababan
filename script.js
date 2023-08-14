const textElement = document.getElementById('typewriter-text');
const texts = ["Electrical Engineering", "IT enthusiast"]; // Ganti dengan teks yang Anda inginkan
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, 100); // Kecepatan ketik dapat diatur di sini
  } else {
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    textElement.textContent = '';
    setTimeout(typeText, 500); // Waktu antara teks baru muncul
  }
}

typeText();

document.querySelector('.mobile-menu-button').addEventListener('click', function() {
  document.querySelector('.mobile-menu').classList.toggle('active');
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link")
  document.getElementById(tabname).classList.add("active-tab")
}

const image = document.getElementById('image');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = 
['imageporto/1.png', 
'imageporto/David-Nababan-porto_page-0002.jpg', 
'imageporto/3.png', 
'imageporto/David-Nababan-porto_page-0004.jpg',
'imageporto/David-Nababan-porto_page-0005.jpg',
'imageporto/David-Nababan-porto_page-0006.jpg',
'imageporto/David-Nababan-porto_page-0007.jpg',
'imageporto/David-Nababan-porto_page-0008.jpg',
'imageporto/David-Nababan-porto_page-0009.jpg',
'imageporto/David-Nababan-porto_page-0010.jpg',
'imageporto/David-Nababan-porto_page-0011.jpg',
'imageporto/David-Nababan-porto_page-0012.jpg',
'imageporto/David-Nababan-porto_page-0013.jpg',
'imageporto/David-Nababan-porto_page-0014.jpg'
];

let currentIndex = 0;

function updateImage() {
  image.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

updateImage();

const fadeInDiv = document.getElementById('fadeInDiv');

window.addEventListener('load', () => {
  fadeInDiv.style.display = 'block';
  fadeInDiv.style.transition = 'opacity 1s ease-in-out';
  fadeInDiv.style.opacity = '1';
});