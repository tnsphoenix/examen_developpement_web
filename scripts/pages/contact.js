// contact.js

document.addEventListener("DOMContentLoaded", function () {
  const modalForm = document.getElementById("modalForm");

  if (modalForm) {
    modalForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const prenom = document.getElementById("prenom").value;
      const nom = document.getElementById("nom").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Prénom:", prenom);
      console.log("Nom:", nom);
      console.log("E-mail:", email);
      console.log("Message:", message);

      modalForm.reset();

      // Affichez un toast de succès avec Toastify
      Toastify({
        text: "Votre message a été envoyé avec succès!",
        backgroundColor: "green",
        duration: 5000, 
        gravity: "bottom", 
        position: "right", 
        close: true, 
      }).showToast();
    });
  } else {
    console.error("Element with id 'modalForm' not found");
  }
});
