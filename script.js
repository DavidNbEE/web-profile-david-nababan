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
