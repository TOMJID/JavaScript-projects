const toggler = document.querySelector('#switch');

toggler.addEventListener('click', () => {
  if (toggler.checked === true) {
    document.body.style.backgroundColor = 'var(--bg_white)';
  } else {
    document.body.style.backgroundColor = 'var(--bg_black)';
  }
});
