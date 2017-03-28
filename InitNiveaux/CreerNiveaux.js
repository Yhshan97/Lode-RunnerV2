/*

*/

var tableLayoutDuNiveau1 = null;
var imgMur = new Image();
var imgEchelle = new Image();
var imgCorde = new Image();
var imgLingotOr = new Image();
var imgJoueur = new Image();
var imgBase = new Image();
var imgTransp = new Image();
var imgGarde = new Image();

function initTableauNiveau1() {
    switch (niveau) {
        case 1:
            tableLayoutDuNiveau1 = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 0, 0, 0, 0, 4, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0],
                [1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 4, 0, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 4, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2],
                [0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
            ];
            nbLingots = 6;
            break;
        default:
            tableLayoutDuNiveau1 = [
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0],
                [2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 0, 4, 0, 5, 0, 0],
                [2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 0, 0],
                [2, 0, 4, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                [2, 1, 1, 1, 1, 1, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
                [2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                [2, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                [1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 2, 1, 1],
                [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0],
                [1, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 3, 3, 3, 3, 3, 2, 0, 0, 0, 2, 0, 4],
                [1, 1, 0, 0, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9]
            ];
            nbLingots = 7;
            break;
    }
}


function creerTableauNiveauObjects() {
    var posY = 0;
    var objet = null;
    //Creer les objets dependant du tableLayoutDuNiveau1
    for (var y = 0; y < tableLayoutDuNiveau1.length; y++, posY += 40) {
        var posX = 0;

        for (var x = 0; x < tableLayoutDuNiveau1[y].length; x++, posX += 35) {
            objet = new Object();
            switch (tableLayoutDuNiveau1[y][x]) {
                case 0:
                    objet.nom = "Vide";
                    objet.id = 0;
                    objet.x = posX;
                    objet.y = posY;
                    objet.image = imgTransp;
                    objet.visible = true;
                    break;

                case 1:
                    objet.nom = "Mur";
                    objet.id = 1;
                    objet.x = posX;
                    objet.y = posY;
                    objet.image = imgMur;
                    objet.visible = true;
                    break;

                case 2:
                    objet.nom = "Echelle";
                    objet.id = 2;
                    objet.x = posX;
                    objet.y = posY;
                    objet.image = imgEchelle;
                    objet.visible = true;
                    break;

                case 3:
                    objet.nom = "Corde";
                    objet.id = 3;
                    objet.x = posX;
                    objet.y = posY;
                    objet.image = imgCorde;
                    objet.visible = true;
                    break;

                case 4:
                    objet.name = "Ingot";
                    objet.id = 4;
                    objet.x = posX;
                    objet.y = posY;
                    objet.image = imgLingotOr;
                    objet.visible = true;
                    break;

                case 5:
                    objet.nom = "EchellesFinal";
                    objet.id = 5;
                    objet.x = posX;
                    objet.y = posY;
                    objet.image = imgEchelle;
                    objet.visible = false;
                    break;

                case 9:
                    objet.name = "Base";
                    objet.id = 9;
                    objet.image = imgBase;
                    objet.x = posX;
                    objet.y = posY;
                    objet.visible = true;
                    break;
            }
            tableauNiveauObjects[y][x] = objet;
        }
    }
}
