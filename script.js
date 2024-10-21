let slideIndex = 0;
showSlides(slideIndex);

// Funzione per cambiare slide
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Funzione per mostrare la slide corrente
function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) { slideIndex = 0 } // Torna alla prima slide
  if (n < 0) { slideIndex = slides.length - 1 } // Torna all'ultima slide
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Nascondi tutte le slide
  }
  slides[slideIndex].style.display = "block"; // Mostra la slide corrente
}
