const generatedText = document.querySelector('.generated__text');

const words = ['Awesome', 'Fun', 'Cool', 'Life', 'Famous', 'Weird', '╰(*°▽°*)╯'];
const typeIngDelay = 200;
const erasIngDelay = 200;
// Delay between current and next text
const newLetterDelay = 2000;
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[index].length) {
    generatedText.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typeIngDelay);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    generatedText.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasIngDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typeIngDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});
