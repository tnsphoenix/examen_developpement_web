async function getPhotographers() {
  try {
    // Remplacez l'URL par le chemin vers votre fichier JSON
    const response = await fetch("../../data/photographers.json");
    
    if (!response.ok) {
      throw new Error(
        `Erreur de chargement des données : ${response.statusText}`
      );
    }

    const { photographers } = await response.json();

    if (!Array.isArray(photographers)) {
      throw new Error(
        "Les données ne sont pas au format attendu (tableau d'objets)."
      );
    }

    // Retourne le tableau photographers seulement une fois récupéré
    return photographers;
  } catch (error) {
    console.error(`Une erreur est survenue : ${error.message}`);
    return [];
  }
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();

    // Ajoute un gestionnaire d'événements au clic sur la carte du photographe
    userCardDOM.addEventListener("click", () => {
      // Récupère l'ID du photographe sélectionné
      const photographerId = photographer.id;

      // Redirige vers la page détaillée du photographe avec l'ID comme paramètre d'URL
      window.location.href = `photographer.html?id=${photographerId}`;
    });

    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les données des photographes en utilisant fetch
  const photographers = await getPhotographers();
  displayData(photographers);
}

init();
