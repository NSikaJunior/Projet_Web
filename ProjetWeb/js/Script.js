/* ------------------------------------------------------------------- */
/* ------------------- Script de la page connexion ------------------- */
/* ------------------------------------------------------------------- */

/* ---------------------------- Matière ------------------------------ */
/* ####################### Affichage fenêtre ######################### */
/* Fonction qui afficher une fenêtre permettant de choisir les matières que l'on souhaite étudier */
function verifier1()
{
    // Récupération du formulaire par so identifiant //
    var formulaire = document.getElementById('fomulaireInscription');

    // Récupération des entrées du formulaire //
    var champs1 = formulaire.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');

    var tousLeschamps1Remplis = true;

    champs1.forEach(function(champ)
    {
        var divParente = champ.parentNode;

        // Vérifie si le champ est vide //
        if (champ.value.trim() === '')
        {
          tousLeschamps1Remplis = false;

          divParente.classList.add('champ-vide');
        }
        else
        {
          // Retire la classe d'erreur si le champ est rempli //
          divParente.classList.remove('champ-vide');
        }
    });

    return tousLeschamps1Remplis;
    
}

function afficherFenetreModale()
{
    if(verifier1())
    {
        document.getElementById('modal').style.display = 'block';
    }
    else
    {
        alert('Veuillez remplir tous les champs.');
    }
}

function fermerFenetreModale() {
    document.getElementById('modal').style.display = 'none';
}
/* ################################################################### */
/* ------------------------------------------------------------------- */



/* ------------------------------------------------------------------- */
/* ------------------- Script de la page de tutorat ------------------ */
/* ------------------------------------------------------------------- */
/* Fonction qui vérifie si les champs du formulaire d'inscription sont remplis */

function verifier2()
{
    // Récupération du formulaire par so identifiant //
    var formulaire = document.getElementById('content');

    // Récupération des divisions du formulaire //
    var champs = formulaire.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="number"]');

    var tousLesChampsRemplis = true;

    champs.forEach(function(champ)
    {
        var divParente = champ.parentNode;

        // Vérifie si le champ est vide //
        if (champ.value.trim() === '')
        {
          tousLesChampsRemplis = false;

          divParente.classList.add('champ-vide');
        }
        else
        {
          // Retire la classe d'erreur si le champ est rempli //
          divParente.classList.remove('champ-vide');
        }
    });

    // Affiche le message approprié //
    if (tousLesChampsRemplis)
    {
        alert("Votre demande a été prise en compte. \nVous recevrez d'ici deux jours une confirmation de votre inscription.");
        // Rechargement de la page //
        window.location.reload();
    }
    else
    {
        alert("Veuillez renseigner toutes les informations.");
    }
}
/* ------------------------------------------------------------------- */