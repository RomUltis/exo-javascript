async function AfficherDuTexte() {
    var MaDiv= document.getElementById("fetch");
    const reponse = await fetch("http://192.168.65.57/exo-javascript/Exercice%2011/test.json");
    const text = await reponse.json();
    console.log(text);
    MaDiv.innerHTML=(text);
  } 
  setTimeout(()=>{
    AfficherDuTexte();
  },"3000");