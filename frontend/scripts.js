document.addEventListener("DOMContentLoaded", () => {
  const charactersDiv = document.getElementById("characters");

  // Con esto hacemos una solicitud GET al endpoint '/characters'
  fetch("/characters")
    .then((response) => {
      // Verificar si la respuesta es correcta
      if (!response.ok) {
        throw new Error("No hay respuesta del servidor ");
      }
      return response.json();
    })
    .then((data) => {
      // Comprobamos si la respuesta es un array de personajes
      if (Array.isArray(data)) {
        // Generaramos un  HTML para cada personaje
        charactersDiv.innerHTML = data
          .map(
            (character) => `
          <div>
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}">
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
            <p>Origin: ${character.origin.name}</p>
          </div>
        `
          )
          .join("");
      } else {
        charactersDiv.innerHTML = "<p>No characters found</p>";
      }
    })
    .catch((error) => {
      console.error("Error : No se encuentran los personajes", error);
      charactersDiv.innerHTML = "<p>No se encuentran los personajes</p>";
    });
});
