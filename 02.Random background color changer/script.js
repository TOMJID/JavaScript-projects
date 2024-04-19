const colorScreen = document.querySelector('.color__screen');
const btn = document.querySelector('.changer__btn');
const colorCodeText = document.querySelector('.color__code');

const getColor = () => {
  const randomNumber = Math.floor(Math.random() * 1677215);
  const colorCode = `#${randomNumber.toString(16).padEnd(6, 0)}`;

  colorScreen.style.backgroundColor = colorCode;
  colorCodeText.innerHTML = colorCode;
};

// event call
btn.addEventListener('click', () => {
  getColor();
});

// init call
getColor();
