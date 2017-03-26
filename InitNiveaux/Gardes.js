function bougerGardes() {
    var random = null;

    for (var i = 1; i < tableauPersonnages.length && active; i++) {
        // Generer nouvelle objectif si le premier a termine d'executer

        var y = parseInt((tableauPersonnages[i].posY + 39) / 40);
        var x = parseInt((tableauPersonnages[i].posX + 15) / 35);
        var randomDropIngot = Math.floor((Math.random() * 3000) + 1);
        if (tableauPersonnages[i].nbPas <= 0 && tableauPersonnages[i].stunTime == 0 && tableauPersonnages[i].mouvement !=
            "stunned" && tableauPersonnages[i].mouvement != "sortir") {
            if (tableauNiveauObjects[y][x].id != 2 && tableauPersonnages[i].posY % 40 == 0)
                random = Math.floor((Math.random() * 9));
            else if (tableauNiveauObjects[y][x].id == 2)
                random = Math.floor((Math.random() * 12));

            if (random <= 3 && random >= 0) {
                tableauPersonnages[i].mouvement = "gauche";
                tableauPersonnages[i].nbPas = Math.floor((Math.random() * 45) + 20);
            } else if (random >= 4 && random <= 7) {
                tableauPersonnages[i].mouvement = "droite";
                tableauPersonnages[i].nbPas = Math.floor((Math.random() * 45) + 20);
            } else if (random == 8 || random == 9) {
                tableauPersonnages[i].mouvement = "bas";
                tableauPersonnages[i].nbPas = Math.floor((Math.random() * 10) + 30);
            } else if (random == 10 || random == 11) {
                tableauPersonnages[i].mouvement = "haut";
                tableauPersonnages[i].nbPas = Math.floor((Math.random() * 10) + 30);
            } else {
                tableauPersonnages[i].mouvement = "";
                tableauPersonnages[i].nbPas = Math.floor((Math.random() * 10) + 10);
            }
        }
        if (!tableauPersonnages[i].falling) {
            var numero = Math.floor((Math.random() * 10) + 1);
            if (numero > 8) {
                if (tableauNiveauObjects[y][x].id == 2 && numero == 9 &&
                    (tableauPersonnages[i].mouvement != "haut" && tableauPersonnages[i].mouvement != "bas"))
                    tableauPersonnages[i].mouvement = "haut";
                else if (tableauNiveauObjects[y][x].id == 2 && numero == 10 &&
                    (tableauPersonnages[i].mouvement != "haut" && tableauPersonnages[i].mouvement != "bas"))
                    tableauPersonnages[i].mouvement = "bas";
            }
            if (tableauPersonnages[i].mouvement == "gauche" || tableauPersonnages[i].mouvement == "floating") gauche(tableauPersonnages[i]);
            if (tableauPersonnages[i].mouvement == "droite") droite(tableauPersonnages[i]);
            if (tableauPersonnages[i].mouvement == "haut") monter(tableauPersonnages[i], false);
            if (tableauPersonnages[i].mouvement == "bas") descendre(tableauPersonnages[i]);
            if (tableauPersonnages[i].mouvement == "sortir") monter(tableauPersonnages[i], true);
            if (tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40) + 1][x + 1] != null && tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40) + 1][x - 1] != null)
                if (randomDropIngot == 23 && tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40) + 1][x - 1].id == 1
                && tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40) + 1][x - 1].visible &&
                    tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40)][x - 1].id == 0 && tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40) + 1][x + 1].id == 1 &&
                    tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40)][x + 1].visible && tableauNiveauObjects[parseInt((tableauPersonnages[i].posY) / 40)][x + 1].id == 0 &&
                    tableauPersonnages[i].nbIngots == 1) {
                    var objet = new Object();
                    var variable = 0;
                    if (tableauPersonnages[i].mouvement == "gauche") variable = 1
                    else if (tableauPersonnages[i].mouvement == "droite") variable = -1
                    if (variable != 0) {
                        objet.name = "Ingot";
                        objet.id = 4;
                        objet.x = (x + variable) * 35;
                        objet.y = (parseInt((tableauPersonnages[i].posY) / 40)) * 40;
                        objet.image = imgLingotOr;
                        objet.visible = true;
                        tableauNiveauObjects[y][x + variable] = objet;
                        tableauPersonnages[i].nbIngots--;
                    }
                }
        }

        if (tableauPersonnages[i].nbPas <= 0 && tableauPersonnages[i].mouvement == "sortir") {
            tableauPersonnages[i].mouvement = "floating";
            tableauPersonnages[i].nbPas = 20;
        }
        if (tableauPersonnages[i].nbPas <= 0 && tableauPersonnages[i].mouvement == "floating") {
            tableauPersonnages[i].mouvement = "";
            tableauPersonnages[i].nbPas = 25;
        }
        if (tableauPersonnages[i].stunTime <= msCumulee && tableauPersonnages[i].stunTime != 0) {
            tableauPersonnages[i].mouvement = "sortir";
            tableauPersonnages[i].nbPas = 40;
            tableauPersonnages[i].stunTime = 0;
        }
        if (tableauNiveauObjects[y][x].id == 1 && tableauNiveauObjects[y][x].visible) {
            tableauPersonnages[i].stunTime = 0;
            tableauPersonnages[i].mouvement = "";
            tableauPersonnages[i].nbPas = 0;
            scoreDeCeNiveau += 75;
            initTrouverSpawnPourGarde(tableauPersonnages[i]);
        }
        if (tableauNiveauObjects[y][x].id == 1 && !tableauNiveauObjects[y][x].visible &&
            tableauNiveauObjects[y][x].x == x * 35 && tableauNiveauObjects[y][x].y == y * 40) {
            if (tableauPersonnages[i].nbIngots == 1) {
                var objet = new Object();
                objet.name = "Ingot";
                objet.id = 4;
                objet.x = x * 35;
                objet.y = (parseInt((tableauPersonnages[i].posY) / 40) - 1) * 40;
                objet.image = imgLingotOr;
                objet.visible = true;
                tableauNiveauObjects[y - 1][x] = objet;
                tableauPersonnages[i].nbIngots--;
            }
            if (tableauPersonnages[i].stunTime == 0 && tableauPersonnages[i].mouvement != "stunned" && tableauPersonnages[i].mouvement != "sortir" &&
                tableauPersonnages[i].mouvement != "floating") {
                tableauPersonnages[i].stunTime = msCumulee + 4000;
                tableauPersonnages[i].mouvement = "stunned";
                scoreDeCeNiveau += 75;
            }
        }
        tableauPersonnages[i].nbPas--;
    }
}

function initTrouverSpawnPourGarde(runner) {
    var random2 = 0;
    var trouve = false;
    while (!trouve)
        for (var y = 0; y < tableauNiveauObjects.length - 3 && !trouve; y++)
            for (var x = 0; x < tableauNiveauObjects[y].length && !trouve; x++)
                if (tableauNiveauObjects[y][x].id == 0 && tableauNiveauObjects[y + 1][x].id == 1 && tableauNiveauObjects[y + 2][x].id != 9) {
                    random2 = Math.floor((Math.random() * 30) + 1);
                    trouve = true;
                    for (var i = 0; i < tableauPersonnages.length && trouve; i++) {
                        if (x * 35 == parseInt(tableauPersonnages[i].posX) && y * 40 == parseInt(tableauPersonnages[i].posY))
                            trouve = false;
                    }
                    if (trouve && random2 == 5) {
                        runner.posY = tableauNiveauObjects[y][x].y;
                        runner.posX = tableauNiveauObjects[y][x].x;
                    } else
                        trouve = false;

                }
}
