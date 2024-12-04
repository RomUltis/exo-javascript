function changementText(parametre1) {
    setTimeout(function () {
        alert("Le texte va se modifier !");
        
        let elements = document.getElementsByName("lesdivs");

        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = parametre1; 
        }
    }, 2000); 
}

changementText("Vous êtes dispo mercredi soir ?");