let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  
  // Nascondi tutte le immagini
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Incrementa l'indice della slide
  slideIndex++;
  
  // Se si supera il numero di slide, ricomincia dalla prima
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  // Mostra l'immagine corrente
  slides[slideIndex - 1].style.display = "block";
  
  // Cambia l'immagine ogni 3 secondi
  setTimeout(showSlides, 3000); 
}

// Funzione per cambiare slide con le frecce di navigazione
function changeSlide(n) {
  slideIndex += n - 1; // Modifica l'indice della slide in base alla freccia cliccata
  showSlides(); // Chiama la funzione per aggiornare la visualizzazione delle slide
}
