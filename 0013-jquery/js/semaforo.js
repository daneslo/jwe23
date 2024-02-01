const lampeRot = document.querySelector('#lampeRot');
const lampeGelb = document.querySelector('#lampeGelb');
const lampeGruen = document.querySelector('#lampeGruen');
const buttonWeiter = document.querySelector('#buttonWeiter');

//----------------------------------------
// 2. Daten
//----------------------------------------
let phase = 0;
// 0 = rot
// 1 = rot-gelb
// 2 = gruen
// 3 = gelb

//----------------------------------------
// 3. Funktionsdefinitionen
//----------------------------------------
function phaseWeiterschalten() {
    phase++;
    if (phase > 3) {
        phase = 0;
    }
}

function rotAn() {
    lampeRot.classList.replace('aus', 'rot');
}

function rotAus() {
    lampeRot.classList.replace('rot', 'aus');
}

function gelbAn() {
    lampeGelb.classList.replace('aus', 'gelb');
}

function gelbAus() {
    lampeGelb.classList.replace('gelb', 'aus');
}

function gruenAn() {
    lampeGruen.classList.replace('aus', 'gruen');
}

function gruenAus() {
    lampeGruen.classList.replace('gruen', 'aus');
}

function phaseAusgeben() {
    switch (phase) {
        case 0: // rot
            rotAn();
            gelbAus();
            gruenAus();
            break;
        case 1: // rot-gelb
            rotAn();
            gelbAn();
            gruenAus();
            break;
        case 2: // gruen 
            rotAus();
            gelbAus();
            gruenAn();
            break;
        case 3: // gelb
            rotAus();
            gelbAn();
            gruenAus();
    }
}

function buttonWeiterClick() {
    phaseWeiterschalten();
    phaseAusgeben();
}

//----------------------------------------
// 4. EventListener
//----------------------------------------
buttonWeiter.addEventListener('click', buttonWeiterClick);

