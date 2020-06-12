function testFonctionnalites() {
  document.querySelector("#geoloc").innerHTML = Modernizr.geolocation ? "pris en charge" : "non pris en charge";
  // Vérifie si la géolocalisation est active sur le navigateur
  // Si oui, affiche "Pris en charge", sinon affiche "Non pris en charge"
  
  document.querySelector("#touch").innerHTML = Modernizr.touch ? "pris en charge" : "non pris en charge" ;
  // Vérifie si l'écran prend en charge le tactile.
  // Si oui, affiche "Pris en charge", sinon affiche "Non pris en charge"
  
  document.querySelector("#svg").innerHTML = Modernizr.svg ? "pris en charge" : "non pris en charge";
  // Vérifie si le navigateur prend en charge le format .SVG pour les images.
  // Si oui, affiche "Pris en charge", sinon affiche "Non pris en charge"
  
  document.querySelector("#canvas").innerHTML = Modernizr.canvas ? "pris en charge" : "non pris en charge";
  // Vérifie si les animations type Canvas 
  // Si oui, affiche "Pris en charge", sinon affiche "Non pris en charge"
}
window.onload = testFonctionnalites;
// Test lors du chargement de la page