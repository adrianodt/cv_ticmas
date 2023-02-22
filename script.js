function switchSheet() {
  let theme = document.getElementById("tema");

  if (theme.getAttribute("href") == "./styles/estilo_claro.css") {
    theme.href = "./styles/estilo_oscuro.css";
  } else {
    theme.href = "./styles/estilo_claro.css";
  }
}

const open = document.getElementById('open');
const open2 = document.getElementById('open2');
const modal_container = document.getElementById('modal_container');
const modal_container2 = document.getElementById('modal_container2');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

open2.addEventListener('click', () => {
  modal_container2.classList.add('show');  
});

close2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});