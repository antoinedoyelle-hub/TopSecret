document.getElementById("formulaire").addEventListener("submit", function (event) {
    // Empêche le comportement par défaut (rechargement/soumission classique)
    event.preventDefault();

    const prenom = document.getElementById("prenom").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const message = document.getElementById("message");

    // On vérifie si les valeurs correspondent à ce qu'on attend
    if (prenom === "Eileen" && nom === "Curnier") {
        // Si c'est correct, on va sur la page suivante
        window.location.href = "Page2.html";
    } 
    else {
        // Sinon on reste et on affiche un message d'erreur
        message.textContent = "Nom ou prénom incorrect. Qui etes-vous ? Vous n'avez rien à faire là !";
        message.style.color = "rgb(143, 8, 8)";
        message.style.backgroundColor = "rgb(251, 107, 107)";
    }

    if (prenom === "Antoine" && nom === "Doyelle") {
        window.location.href = "Page4.html";
    }
    else {
        // Sinon on reste et on affiche un message d'erreur
        message.textContent = "Nom ou prénom incorrect. Qui etes-vous ? Vous n'avez rien à faire là !";
        message.style.color = "rgb(143, 8, 8)";
        message.style.backgroundColor = "rgb(251, 107, 107)";
    }
});