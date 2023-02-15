function switchSheet() {
  let theme = document.getElementById("tema");

  if (theme.getAttribute("href") == "./styles/estilo_claro.css") {
    theme.href = "./styles/estilo_oscuro.css";
  } else {
    theme.href = "./styles/estilo_claro.css";
  }
}

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});