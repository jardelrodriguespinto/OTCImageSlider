let indiceDoSlider = 1;
mostrarSlides(indiceDoSlider);

function sliderProximo(numeroDoSlide) {
  mostrarSlides(indiceDoSlider += numeroDoSlide);
}

function slideAtual(numeroDoSlide) {
  mostrarSlides(indiceDoSlider = numeroDoSlide);
}

function mostrarSlides(numeroDoSlide) {
  let i;
  let slides = document.getElementsByClassName("meusSlides");
  let pontos = document.getElementsByClassName("ponto");
  if (numeroDoSlide > slides.length) {
    indiceDoSlider = 1
}
  if (numeroDoSlide < 1) {indiceDoSlider = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < pontos.length; i++) {
    pontos[i].className = pontos[i].className.replace(" active", "");
  }
  slides[indiceDoSlider-1].style.display = "block";
  pontos[indiceDoSlider-1].className += " active";
}