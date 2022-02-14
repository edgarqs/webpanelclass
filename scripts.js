
// SCRIPT CLARO/OSCURO
function switchSheet() {
    let theme = document.getElementById("theme");
  
    if (theme.getAttribute("href") == "style_white.css") {
      theme.href = "style.css";
    } else {
      theme.href = "style_white.css";
    }
  }