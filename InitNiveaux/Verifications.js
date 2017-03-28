function estUneChute(runner) {
    var y = parseInt(runner.posY / 40);
    var x = parseInt((runner.posX + 15) / 35);
    var soundActive = 0;
    if (tableauNiveauObjects[y + 1][x] != null && tableauNiveauObjects[y][x] != null) {
        var boolean2 = true;
        for (var i = 0; i < tableauPersonnages.length; i++) // Check si un personnage est tombe dans le trou
            if (parseInt(tableauPersonnages[i].posX / 35) == x && parseInt(tableauPersonnages[i].posY / 40) == y + 1 &&
                (tableauNiveauObjects[y + 1][x].id == 1 && !tableauNiveauObjects[y + 1][x].visible))
                boolean2 = false;

        var boolean = (tableauNiveauObjects[y][x].id != 3 && (tableauNiveauObjects[y + 1][x].id == 0 || tableauNiveauObjects[y + 1][x].id == 4 ||
            tableauNiveauObjects[y + 1][x].id == 3 || (tableauNiveauObjects[y + 1][x].id == 1 &&
                tableauNiveauObjects[y + 1][x].visible == false))) && boolean2;
        if (runner.id == 0) {
            if (boolean && auFall.paused) {
                auFall.play();
            }
            return boolean;
        } else
            return boolean && tableauNiveauObjects[y][x].id != 1 && runner.mouvement != "sortir" && runner.mouvement != "floating";
    }
}

function collisionBarreIngot() {
    for (var i = 0; i < tableauPersonnages.length; i++) {
        var y = parseInt(tableauPersonnages[i].posY / 40);
        var x = parseInt((tableauPersonnages[i].posX + 15) / 35);
        if (!tableauPersonnages[i].falling) {
            if (tableauNiveauObjects[y][x] != null) {
                if (tableauNiveauObjects[y][x].id == 4 && (tableauPersonnages[i].id == 0 ||
                        (tableauPersonnages[i].id != 0 && tableauPersonnages[i].nbIngots == 0))) {
                    tableauNiveauObjects[y][x] = tableauNiveauObjects[0][0];
                    tableauPersonnages[i].nbIngots++;
                    if (i == 0) {
                        scoreDeCeNiveau += 250;
                        auCoin.load();
                        auCoin.play();
                    }
                }
            }
        }
    }
}

function verifierCollisionsEtMortDeLodeRunner() {
    if (tableauNiveauObjects[parseInt((tableauPersonnages[0].posY+35) / 40)][parseInt((tableauPersonnages[0].posX + 15) / 35)].id == 1 &&
        tableauNiveauObjects[parseInt((tableauPersonnages[0].posY+35) / 40)][parseInt((tableauPersonnages[0].posX + 15) / 35)].visible)
        tableauPersonnages[0].mort = true; //Si le trou s'est rempli sur lui
    for (var i = 1; i < tableauPersonnages.length; i++) //Collision des autres personnages
        if (tableauPersonnages[0].posY < tableauPersonnages[i].posY + 35 && tableauPersonnages[0].posY + 35 > tableauPersonnages[i].posY &&
            tableauPersonnages[0].posX < tableauPersonnages[i].posX + 30 && tableauPersonnages[0].posX + 30 > tableauPersonnages[i].posX)
            tableauPersonnages[0].mort = true;
    if(tableauPersonnages[0].mort == true){
        auDeath.play();
    }
}

function verifierProximiteGardes(){
	for (var i = 1; i < tableauPersonnages.length; i++)
	for (var x = 1; x < tableauPersonnages.length; x++) //Collision des autres personnages
        if (tableauPersonnages[x].posY < tableauPersonnages[i].posY + 70 && tableauPersonnages[x].posY + 70 > tableauPersonnages[i].posY &&
            tableauPersonnages[x].posX < tableauPersonnages[i].posX + 60 && tableauPersonnages[x].posX + 60 > tableauPersonnages[i].posX && i != x){
				if(tableauPersonnages[x].mouvement == "gauche")
					tableauPersonnages[x].mouvement = "droite"
				else if(tableauPersonnages[i].mouvement == "gauche")
					tableauPersonnages[i].mouvement = "droite"

				if(tableauPersonnages[x].mouvement == "droite")
					tableauPersonnages[x].mouvement = "gauche"
				else if(tableauPersonnages[i].mouvement == "droite")
					tableauPersonnages[i].mouvement = "gauche"

				if(tableauPersonnages[x].mouvement == "haut")
					tableauPersonnages[x].mouvement = "bas"
				else if(tableauPersonnages[i].mouvement == "haut")
					tableauPersonnages[i].mouvement = "bas"

				if(tableauPersonnages[x].mouvement == "bas")
					tableauPersonnages[x].mouvement = "haut"
				else if(tableauPersonnages[i].mouvement == "bas")
					tableauPersonnages[i].mouvement = "haut"

			}
}

function verifierToutPersonnagesChute() {
    for (var i = 0; i < tableauPersonnages.length; i++) {
        if (estUneChute(tableauPersonnages[i])) {
            tomber(tableauPersonnages[i]);
            tableauPersonnages[i].falling = false;
        } else if (tableauPersonnages[i].falling == true)
            tomber(tableauPersonnages[i]);
    }
}

function verifierSixLingotsEtGenereEchelle() {
    if (tableauPersonnages[0].nbIngots == nbLingots)
        for (var i = 0; i < tableauNiveauObjects.length; i++)
            for (var x = 0; x < tableauNiveauObjects[i].length; x++)
                if (tableauNiveauObjects[i][x].id == 5) {
                    tableauNiveauObjects[i][x].visible = true;
                    tableauNiveauObjects[i][x].id = 2;
                }
}

function boucherLesTrous() {
    for (var i = 0; i < tableauMursCreusees.length; i++)
        if (tableauMursCreusees[i].ms <= msCumulee) {
            tableauNiveauObjects[tableauMursCreusees[i].y][tableauMursCreusees[i].x].visible = true;
            tableauMursCreusees.splice(0, 1);
        }
}

function mortLodeRunner() {
    tableauPersonnages[0].posY -= 4;
    if (tableauPersonnages[0].posY <= -50) {
        if (vies > 1) {
            vies--;
            reinit();
        } else {
            gameOver.boo = true;
            tableauPersonnages[0].mort = false;
        }
    }
}

function finitNiveau() {
    tableauPersonnages[0].posY -= 1;
    if (tableauPersonnages[0].posY <= -50) {
        prochainNiveau();
        reinit();
    }
}

function prochainNiveau() {
    if (nbGardes < 13)
        nbGardes++;
    scoreDeCeNiveau += 1500;
    scoreTotal += scoreDeCeNiveau;
    auGame.play();

}
