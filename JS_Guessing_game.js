function randomColor() {
  let randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  let r = randomBetween(0, 255);
  let g = randomBetween(0, 255);
  let b = randomBetween(0, 255);
  let rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function guessColor() {
  // Genera los colores aleatoriamente y elige uno de ellos
  let colores = [];
  let divs = document.getElementsByClassName("color");
  for (let i = 0; i < divs.length; i++) {
    let color = randomColor();
    divs[i].style.opacity = "100%";
    divs[i].style.backgroundColor = color;
    colores.push(color);
  }
  let randomIndex = Math.floor(Math.random() * colores.length);
  let choosenColor = colores[randomIndex];
  document.getElementById("rgbColor").innerHTML = choosenColor;
  document.getElementById("rgbColor").style.textTransform = "uppercase";

  // Recorre los divs y si el color de dicho div es el elegido aleatoriamente "gana"

  document.getElementById("resultado").innerHTML =
    "Result...";
  for (let i = 0; i < divs.length; i++) {
    divs[i].removeAttribute("id");
    document.getElementById("resultado").style.textDecoration = "none";
    divs[i].addEventListener("click", (e) => {
      if (e.target.style.backgroundColor == choosenColor) {
        e.target.style.opacity= "100%";
        document.getElementById("resultado").innerHTML = "Guessed!";
        document.getElementById("resultado").style.textDecoration = "underline";
        e.target.setAttribute("id","rotateDiv");
      } else {
        e.target.style.opacity= "0%";
        e.target.style.transition= "0.2s";
        document.getElementById("resultado").innerHTML = "Keep trying!";
        document.getElementById("resultado").style.textDecoration = "none";
      }
    });
  }
}

window.onload = () => {
  // Genera nuevos colores al pulsar sobre el enlace

  let newColors = document.querySelector("a");
  newColors.addEventListener("click", guessColor);

  guessColor();
};
