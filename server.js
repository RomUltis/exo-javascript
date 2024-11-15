var Mavariable = "Hello Word"
alert(Mavariable);

//chaine de caractère
var MavariableString = "toto";
//nombre
var MavariableNumerique = 100;
//des tableaux
var MavariableTableau = ['Apple', 'Bananna'];
//des objets (ici la fenetre du navigateur)
var MavariableObjet = window;

alert(MavariableString + MavariableNumerique + MavariableTableau[0] + MavariableObjet.location.pathname);

if(MavariableObjet.outerWidth <=600)
{
    alert("test");
}