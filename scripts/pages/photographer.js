// scripts/pages/photographer.js
function getPhotographerIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function getMedia(id) {
  try {
    const response = await fetch("../../data/photographers.json");

    if (!response.ok) {
      throw new Error(
        `Erreur de chargement des données : ${response.statusText}`
      );
    }

    const { photographers, media } = await response.json();

    const photographer = photographers.find((p) => p.id.toString() === id);
    if (!photographer) {
      throw new Error("Photographe non trouvé.");
    }

    const photographerMedia = media.filter(
      (m) => m.photographerId.toString() === id
    );

    return { photographer, media: photographerMedia };
  } catch (error) {
    console.error(`Une erreur est survenue : ${error.message}`);
    return { photographer: null, media: [] };
  }
}

async function displayData() {
  const photographerId = getPhotographerIdFromUrl();
  console.log("ID du photographe sélectionné :", photographerId);

  const { photographer, media } = await getMedia(photographerId);

  if (!photographer) {
    console.error("Photographe non trouvé.");
    return;
  }

  const photographerModel = photographerTemplate(photographer);
  const userCardDOM = photographerModel.getUserCardDOM();

  const mediaSection = document.getElementById("media-section");

  // Utilisez une factory pour les médias pour générer les éléments DOM des médias
  media.forEach((mediaItem) => {
    const mediaModel = mediaTemplate(mediaItem);
    const mediaDOM = mediaModel.getMediaDOM();
    mediaSection.appendChild(mediaDOM);
  });

  // Ajoute la carte du photographe et les médias à l'élément <main>
  document.getElementById("main").appendChild(userCardDOM);
}

// gestion de la modal
function displayModal() {
  document.getElementById("contact_modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("contact_modal").style.display = "none";
}

function envoyerFormulaire() {
    // Ajoutez ici le code pour traiter l'envoi du formulaire
    // Par exemple, vous pouvez utiliser fetch() pour envoyer les données au serveur
    // N'oubliez pas de fermer la modale après l'envoi réussi du formulaire
    closeModal();
}

// Initiez l'affichage des détails du photographe lors du chargement de la page
displayData();
