function photographerTemplate(data) {
  const { name, picture, getUserCardDOM } = getPhotographerData(data);
  return { name, picture, getUserCardDOM };
}
  // section photographer

  // Extraction des propriétés du photographe depuis l'objet data
  // const { id, name, portrait, city, country, tagline, price } = data;

  function getPhotographerData(data) {
    // Construction du chemin d'accès à l'image du portrait du photographe
    // Extraction des propriétés du photographe depuis l'objet data
    const { id, name, portrait, city, country, tagline, price } = data;

    const picture = `assets/photographers/${portrait}`;

    // Définition de la fonction qui génère le DOM pour la carte du photographe
    function getUserCardDOM() {
      // Création de l'élément <article> pour contenir les informations du photographe
      const article = document.createElement("article");

      const img = document.createElement("img");
      img.setAttribute("src", picture);

      // Création de l'élément <h2> pour afficher le nom du photographe
      const h2 = document.createElement("h2");
      // Attribution du contenu textuel du <h2> avec le nom du photographe
      h2.textContent = name;

      const pCityCountry = document.createElement("p");
      pCityCountry.textContent = `${city}, ${country}`;

      const pTagline = document.createElement("p");
      pTagline.textContent = tagline;

      const pPrice = document.createElement("p");
      pPrice.textContent = `${price} € / jour`;

      const identifiant = document.createElement("p");
      identifiant.textContent = `ID : ${id}`;

      // Ajout des éléments créés à l'élément <article>
      article.appendChild(img);
      article.appendChild(h2);
      article.appendChild(pCityCountry);
      article.appendChild(pTagline);
      article.appendChild(pPrice);
      article.appendChild(identifiant);

      return article;
    }

    // Retourne un objet contenant le nom, le chemin de l'image du portrait et la fonction getUserCardDOM
    return { name, picture, getUserCardDOM };
  }



  // Function to create the media template
function mediaTemplate(media) {
  const { title, picture, video, likes, date, getMediaDOM } = getMediaData(media);
  return { title, picture, video, likes, date, getMediaDOM };
}

function getMediaData(media) {
  const { id, image, video, likes, date, title } = media;
  const mediaPath = `assets/media/${image || video}`;

  function getMediaDOM() {
    // Create a container for the media
    const mediaContainer = document.createElement(video ? "div" : "div");

    if (video) {
      // If it's a video, create a video element
      const videoElement = document.createElement("video");
      videoElement.setAttribute("controls", "controls");

      // Create a source element
      const source = document.createElement("source");
      source.setAttribute("src", mediaPath);
      source.setAttribute("type", "video/mp4");

      // Create a play button
      const playButton = document.createElement("button");
      playButton.textContent = "Play";
      playButton.addEventListener("click", () => {
        videoElement.play(); // Commencez la lecture de la vidéo lorsque le bouton est cliqué
        playButton.style.display = "none"; // Masquez le bouton une fois la vidéo démarrée
      });

      // Append the source to the video element
      videoElement.appendChild(source);

      // Append the video element and play button to the media container
      mediaContainer.appendChild(videoElement);
      // mediaContainer.appendChild(playButton);

      const h2 = document.createElement("h2");
      h2.textContent = title;

      const like = document.createElement("p");
      like.textContent = `${likes} Likes`;

      const dates = document.createElement("p");
      dates.textContent = `Date: ${date}`;

      const identifiant = document.createElement("p");
      identifiant.textContent = `ID : ${id}`;

      mediaContainer.appendChild(h2);
      mediaContainer.appendChild(like);
      mediaContainer.appendChild(dates);
      mediaContainer.appendChild(identifiant);

    } else {
      // If it's an image or video, create an img element
      const img = document.createElement(video ? "video" : "img");
      img.setAttribute("src", mediaPath);
      img.setAttribute("alt", title);
      // Append the img to the container
      mediaContainer.appendChild(img);

      // Add other elements to the media container
      const h2 = document.createElement("h2");
      h2.textContent = title;

      const like = document.createElement("p");
      like.textContent = `${likes} Likes`;

      const dates = document.createElement("p");
      dates.textContent = `Date: ${date}`;

      const identifiant = document.createElement("p");
      identifiant.textContent = `ID : ${id}`;

      mediaContainer.appendChild(h2);
      mediaContainer.appendChild(like);
      mediaContainer.appendChild(dates);
      mediaContainer.appendChild(identifiant);
    }

    return mediaContainer;
  }

  return { title, image, video, likes, date, getMediaDOM };
}




