let slideIndex = 1;
showSlides(slideIndex);

// Funzione per cambiare slide con le frecce di navigazione
function changeSlide(n) {
  showSlides(slideIndex += n);
}

// Mostra la slide corrente
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");

  // Se si raggiunge l'ultima slide, ritorna alla prima
  if (n > slides.length) { 
    slideIndex = 1; 
  }

  // Se si va oltre la prima slide, mostra l'ultima
  if (n < 1) { 
    slideIndex = slides.length; 
  }

  // Nascondi tutte le slide
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Mostra la slide corrente
  slides[slideIndex - 1].style.display = "block";
}
