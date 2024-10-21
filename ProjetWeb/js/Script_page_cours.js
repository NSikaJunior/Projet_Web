/* ------------------------------------------------------------------- */
/* ------------------- Script de la page des cours ------------------- */
/* ------------------------------------------------------------------- */
/* Fonction qui effectue la recherche des profresseurs dans la base de données json */
/* Base de données */
var professeursData =
{
    "licence1" : {
        "maths" : [
        {
          "nom" : "Emma Dupont"
        },
        {
          "nom" : "Gabriel Martin"
        }
      ],
      "info_generale": [
        {
          "nom": "Lucas Dubois"
        },
        {
          "nom": "Léa Rousseau"

        }
        ],
    },
    "licence2": {
      "maths_app": [
        {
          "nom": "Louis Bernard"
        },
        {
          "nom": "Camille Girard"
        }
    ],
      "anglais": [
        {
          "nom": "Hugo Leroux"
        },
        {
          "nom": "Jade Moreau"
        }
        ],
    },
    "master1" : {
        "anglais" : [
            {
                "nom" : "Enzo Morel"
            },
            {
                "nom" : "Sarah Dubois"
            },
            {
                "nom" : "Théo Lefevre"
            }
        ]

    },
    "bachelor" : {
      "finance" : [
        {
          "nom": "Ethan Lambert"
        },
        {
          "nom": "Noah Laurent"
        }
        ],
      "dissertation": [
        {
          "nom": "Zoé Fontaine"
        },
        {
          "nom": "Manon Giraud"
        }
        ]
    },
    "dut" : {
        "physique" : [
            {
                "nom" : "Nathan Simon"
            },
            {
                "nom" : "Inès Roussel"
            }
        ],
        "maths" : [
            {
                "nom" : "Tom Lemoine"
            },
            {
                "nom" : "Chloé Petit"
            }
        ]
    }
  }


// Fonction pour afficher les informations sur les professeurs //
function afficherInfosProfesseurs()
{
    // Récupération des valeurs des sélecteurs //
    var niveau = document.getElementById('niveau').value;
    var matiere = document.getElementById('matieres').value;
  
    // Récupération de la div 'resultatsprofesseurs' //
    var divResultats = document.getElementById('resultatsProfesseurs');
  
    // Effacez le contenu précédent de la div //
    divResultats.innerHTML = "";
  
    // Vérifiez si les valeurs sont sélectionnées //
    if (niveau && matiere && professeursData[niveau] && professeursData[niveau][matiere])
    {
      // Récupérez les informations sur les professeurs pour les valeurs sélectionnées //
      var professeurs = professeursData[niveau][matiere];
  
      // Création de l'élément html et ajout à la div 'resultatsprofesseurs' //
      for (var i = 0; i < professeurs.length; i++)
      {
        var infoProfesseur = document.createElement('p');
        infoProfesseur.textContent = professeurs[i].nom;
        divResultats.appendChild(infoProfesseur);
        divResultats.classList.add('infos_profs');
      }
    }
    else
    {
      // S'il n'y a pas de professeurs //
      var messageErreur = document.createElement('p');

      messageErreur.textContent = "Aucun professeur trouvé.\nNous sommes actuellement à la recherche de professeurs dans cette matière, pour ce niveau.";
      divResultats.appendChild(messageErreur);
    }
  }
  