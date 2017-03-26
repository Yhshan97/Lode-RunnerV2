function droite(runner) {
    var y = parseInt(runner.posY / 40);
    var x = parseInt((runner.posX + 1) / 35);

    if (runner.posX + 35 < objCanvas.width && !estUneChute(runner) && tableauNiveauObjects[y][x + 1] != null) {
        if ((tableauNiveauObjects[y][x + 1].id != 1 && runner.posY % 40 == 0) ||
            (tableauNiveauObjects[y][x].id == 2 && tableauNiveauObjects[y][x + 1].id != 1 &&
                tableauNiveauObjects[y + 1][x + 1].id != 1 && tableauNiveauObjects[y][x + 1].id != 3)) {

            if (tableauNiveauObjects[y][x].id == 3 && tableauNiveauObjects[y + 1][x].id == 0) {
                runner.etat2 = 1;
            } else runner.etat2 = 0;
            if (runner.etat > 2) {
                runner.etat = 0;
                runner.nbFoisMemeEtat = 0;
            } else if (runner.etat < 2 && runner.nbFoisMemeEtat == 5) {
                runner.etat++;
                runner.nbFoisMemeEtat = 0;
            } else if (runner.etat == 2 && runner.nbFoisMemeEtat == 5) {
                runner.etat = 0;
                runner.nbFoisMemeEtat = 0;
            }
            runner.nbFoisMemeEtat++;
            if (runner.id == 0)
                runner.posX += 3;
            else
                runner.posX += 2;
            runner.dernierDirection = "right";
        }
    }
}

function gauche(runner) {
    var y = parseInt(runner.posY / 40);

    if (runner.posX > 0 && !estUneChute(runner)) {
        if ((tableauNiveauObjects[y][parseInt((runner.posX - 1) / 35)].id != 1 && runner.posY % 40 == 0) ||
            (tableauNiveauObjects[y][parseInt((runner.posX + 25) / 35)].id == 2 &&
                tableauNiveauObjects[y][parseInt((runner.posX - 1) / 35)].id != 1 &&
                tableauNiveauObjects[y + 1][parseInt((runner.posX - 1) / 35)].id != 1 &&
                tableauNiveauObjects[y][parseInt((runner.posX) / 35) - 1].id != 3)) {

            if (tableauNiveauObjects[y][parseInt((runner.posX - 1) / 35)].id == 3 &&
                tableauNiveauObjects[y + 1][parseInt((runner.posX - 1) / 35)].id == 0) {
                runner.etat2 = 1;
            } else runner.etat2 = 0;

            if (runner.etat > 5 || runner.etat < 3) {
                runner.etat = 3;
                runner.nbFoisMemeEtat = 0;
            } else if (runner.etat > 2 && runner.etat < 5 && runner.nbFoisMemeEtat == 5) {
                runner.etat++;
                runner.nbFoisMemeEtat = 0;
            } else if (runner.etat == 5 && runner.nbFoisMemeEtat == 5) {
                runner.etat = 3;
                runner.nbFoisMemeEtat = 0;
            }
            runner.nbFoisMemeEtat++;
            if (runner.id == 0)
                runner.posX -= 3;
            else
                runner.posX -= 2;
            runner.dernierDirection = "left";
        }
    }
}

function descendre(runner) {
    var y = parseInt(runner.posY / 40);
    var x = parseInt((runner.posX + 15) / 35);

    if (tableauNiveauObjects[y + 1][x].id == 2 || (tableauNiveauObjects[y][x].id == 2 &&
            tableauNiveauObjects[y + 1][x].id != 1) && runner.posY > (y) * 40) {
        runner.etat2 = 0;
        monterOuDescendre(runner);
        if (runner.id == 0)
            runner.posY += 2;
        else
            runner.posY += 1;
        runner.dernierDirection = "down";

    } else if ((tableauNiveauObjects[y + 1][x].id != 1 || tableauNiveauObjects[y + 1][x].id == 2) &&
        tableauNiveauObjects[y][x].id == 3)
        runner.falling = true;
        if(runner.id==0){
          auFall.play();
        }
}

function monter(runner, sortirTrou) {
    var y = parseInt(runner.posY / 40);
    var x = parseInt((runner.posX + 15) / 35);

    if (runner.posY >= 2 && runner.posY <= 660) {
        if ((tableauNiveauObjects[y][x].id == 2 || tableauNiveauObjects[y + 1][x].id == 2 &&
                runner.posY > (y) * 40) || sortirTrou) {
            runner.dernierDirection = "up";
            runner.etat2 = 0;
            monterOuDescendre(runner);
            if (runner.id == 0)
                runner.posY -= 2;
            else
                runner.posY -= 1;
        }
    }
}

function tomber(runner) {
    runner.posX = parseInt((runner.posX + 15) / 35) * 35;

    if (runner.etat != 8) {
        runner.etat = 8;
        runner.etat2 = 0;
        runner.nbFoisMemeEtat = 0;
    } else if ((runner.etat2 == 0) && runner.nbFoisMemeEtat == 6) {
        runner.etat2++;
        runner.nbFoisMemeEtat = 0;
    } else if (runner.etat2 == 1 && runner.nbFoisMemeEtat == 6) {
        runner.etat2--;
        runner.nbFoisMemeEtat = 0;
    }
    runner.nbFoisMemeEtat++;
    if (runner.id == 0)
        runner.posY += 2;
    else
        runner.posY += 1;

    if (tableauNiveauObjects[parseInt(runner.posY / 40) + 1][parseInt((runner.posX + 15) / 35)].id == 0){
        runner.falling = true;
      }
    else {
      runner.falling = false;
      auFall.pause();
      auFall.load();
    }

}


function monterOuDescendre(runner) {
    runner.posX = parseInt((runner.posX + 15) / 35) * 35;

    if (runner.etat != 7 && runner.etat != 6) {
        runner.etat = 6;
        runner.nbFoisMemeEtat = 0;
    } else if ((runner.etat == 6) && runner.nbFoisMemeEtat == 6) {
        runner.etat++;
        runner.nbFoisMemeEtat = 0;
    } else if (runner.etat == 7 && runner.nbFoisMemeEtat == 6) {
        runner.etat--;
        runner.nbFoisMemeEtat = 0;
    }
    runner.nbFoisMemeEtat++;
}

function creuserGauche(runner) {
    var y = parseInt(runner.posY / 40);
    var x = parseInt((runner.posX + 15) / 35);

    if (runner.posX > 45)
        if (tableauNiveauObjects[y + 1][x - 1].id == 1 &&
            tableauNiveauObjects[y][x - 1].id == 0 &&
            tableauNiveauObjects[y + 1][x - 1].visible) {
            creuser(0, runner);
            tableauNiveauObjects[y + 1][x - 1].visible = false;
            objMurCreusee = new Object();
            objMurCreusee.x = parseInt(runner.posX / 35) - 1;
            objMurCreusee.y = y + 1;
            objMurCreusee.ms = msCumulee + 8000;
            tableauMursCreusees.push(objMurCreusee);
        }
}

function creuserDroite(runner) {
    var y = parseInt(runner.posY / 40);
    var x = parseInt((runner.posX + 15) / 35);

    if (runner.posX < 1299)
        if (tableauNiveauObjects[y + 1][x + 1].id == 1 &&
            tableauNiveauObjects[y][x + 1].id == 0 &&
            tableauNiveauObjects[y + 1][x + 1].visible) {
            creuser(1, runner);
            tableauNiveauObjects[y + 1][parseInt(runner.posX / 35) + 1].visible = false;
            var objMurCreusee = new Object();
            objMurCreusee.x = parseInt(runner.posX / 35) + 1;
            objMurCreusee.y = y + 1;
            objMurCreusee.ms = msCumulee + 8000;
            tableauMursCreusees.push(objMurCreusee);
        }
}

function creuser(direction, runner) {
    if (direction == 0) {
        runner.etat = 7
        runner.etat2 = 1;
        runner.posX = parseInt((runner.posX + 15) / 35) * 35;
    } else {
        runner.etat = 6
        runner.etat2 = 1;
        runner.posX = parseInt((runner.posX + 15) / 35) * 35;
    }


}
