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
    divs[i].style.backgroundColor = color;
    colores.push(color);
  }
  let randomIndex = Math.floor(Math.random() * colores.length);
  let choosenColor = colores[randomIndex];
  document.getElementById("rgbColor").innerHTML = choosenColor;
  document.getElementById("rgbColor").style.textTransform = "uppercase";

  // Recorre los divs y si el color de dicho div es el elegido aleatoriamente "gana"

  document.getElementById("resultado").innerHTML =
    "Aquí se mostrará tu resultado";
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", () => {
      if (divs[i].style.backgroundColor == choosenColor) {
        document.getElementById("resultado").innerHTML = "¡Has acertado!";
      } else {
        divs[i].style.backgroundColor= "#232323";
        divs[i].style.transition= "0.2s"
        document.getElementById("resultado").innerHTML = "¡Sigue intentando!";
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
