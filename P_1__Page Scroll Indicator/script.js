const indicator = document.querySelector('.scroll__indicator .progress');
const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;


function scroll() {
  const { scrollTop } = document.documentElement;
  const scrolled = (scrollTop / scrollHeight) * 100;
  indicator.style.width = `${scrolled}%`;
}

window.addEventListener('scroll', scroll);