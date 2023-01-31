function switchSheet() {
    let theme = document.getElementById("tema");
  
    if (theme.getAttribute("href") == "estilo_claro.css") {
      theme.href = "estilo_oscuro.css";
    } else {
      theme.href = "estilo_claro.css";
    }
  }