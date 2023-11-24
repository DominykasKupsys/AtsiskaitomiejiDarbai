let $toggler = document.getElementById("toggler"),
  $calculator = document.querySelector(".calculator");

if ($calculator.classList.contains("dark")) {
  $toggler.querySelector("#light").style.display = "block";
  $toggler.querySelector("#dark").style.display = "none";
} else {
  $toggler.querySelector("#light").style.display = "none";
  $toggler.querySelector("#dark").style.display = "block";
}

$toggler.addEventListener("click", function () {
  $calculator.classList.toggle("dark");

  if ($calculator.classList.contains("dark")) {
    $toggler.querySelector("#light").style.display = "block";
    $toggler.querySelector("#dark").style.display = "none";
  } else {
    $toggler.querySelector("#light").style.display = "none";
    $toggler.querySelector("#dark").style.display = "block";
  }
});
import { procentuSkaiciavimas } from "./modules/procentu_veikimas.mjs";
import { tinkamiOperatoriai } from "./modules/tinkami_operatoriai.mjs";
/**
 * suranda visus elementus su calculator-button klase
 * @type {Collection}
 */

const mygtukai = document.getElementsByClassName("calculator-button");

/**
 * suranda viena elementa su calculator-operation klase
 * @type {NodeList}
 */

const skaiciavimas = document.querySelector(".calculator-operation");

/**
 * suranda viena elementa su calculator-operation-result klase
 * @type {NodeList}
 */

const rezultatas = document.querySelector(".calculator-operation-result");

/**
 * čia laikomos visos reikšmės
 * @type {String}
 */

let funkcionavimas = "";

/**
 * Jei nėra įvesta jokių operatorių ar skaičių, skaičiuotuvas rodo 0
 */

rezultatas.innerHTML = 0;

/**
 * kiekvienam mygtukui yra pajungiamos funkcijos ir yra atliekami skaičiavimai
 */

for (let i = 0; i < mygtukai.length; i++) {
  let mygtukas = mygtukai[i];

  mygtukas.addEventListener("click", () => {
    let operacija = mygtukas.dataset.operacija;
    /**
     * kai paspaudžiame C mygtuka visos reikšmės yra ištrinamos ir rezultate yra rodomas 0
     */
    if (operacija == "C") {
      funkcionavimas = "";
      skaiciavimas.innerHTML = "";
      rezultatas.innerHTML = "0";
      /**
       * ištrinama paskutinė įvesta reikšmė
       */
    } else if (operacija == "Del") {
      funkcionavimas = funkcionavimas.slice(0, -1);
      skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
      /**
       * kai paspaudžiame lygu mygtuką reikšmės funkcionavimas yra suskaičiuojamos su eval funkcija
       */
    } else if (operacija == "=") {
      let galutinis = eval(procentuSkaiciavimas(funkcionavimas));
      skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas) + "=";

      if (galutinis.toString().length > 10) {
        rezultatas.innerHTML = `<div id="resultas-dydis">${galutinis}</div>`;
      } else {
        rezultatas.innerHTML = galutinis;
      }
      funkcionavimas = "";
      /**
       * kai paspaudžiame procentų mygtuką atliekami procentų skaičiavimai
       */
    } else if (operacija == "%") {
      funkcionavimas += operacija;
      skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
      skaiciavimas.innerHTML = funkcionavimas;
      /**
       * atliekamas pats skaičiavimo procesas
       */
    } else {
      /**
       * padaroma, kad negalėtume rašyti daugybos ir dalybos ženklos pačiame priekyje ir
       * uždedamas limitas, kiek skaičių galyme suskaičiuoti, kad jie neišeitų iš skaičiuotuvo ribų
       */
      if (negaliButiDaugOperatoriu(operacija)) {
        if (funkcionavimas === "") {
          if (operacija !== "*" && operacija !== "/") {
            rezultatas.innerHTML = operacija;
            funkcionavimas += operacija;
            skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
          }
        } else if (
          funkcionavimas[funkcionavimas.length] !== "*" &&
          funkcionavimas[funkcionavimas.length] !== "/" &&
          funkcionavimas.length < 20
        ) {
          funkcionavimas += operacija;
          skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
        }
      }
    }
  });
}

/**
 * padaro, kad nebūtų galima parašyti kelis operatorius iš eilės
 * @param {string} operacija
 * @returns {boolean} jei prie operatoriaus bandome parašyti dar viena operatorių gražina false
 * kitais atvėjais gražina true
 */

function negaliButiDaugOperatoriu(operacija) {
  let paskutinis_mygtukas = funkcionavimas.slice(-1);
  let operatoriai = ["+", "-", "/", "*",",", "."];

  if (operatoriai.includes(operacija)) {
    if (operatoriai.includes(paskutinis_mygtukas)) {
      return false;
    } else {
      return true;
    }
  }
  return true;
}
document.addEventListener("keydown", (event) => {
  const allowedKeys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "=",
    ".",
    ",",
    "-",
    "/",
    "*",
    "%",
    "Backspace",
    "Delete",
    "+",
  ];

  if (allowedKeys.includes(event.key)) {
    let operacija = event.key;

    if (operacija == "C") {
      funkcionavimas = "";
      skaiciavimas.innerHTML = "";
      rezultatas.innerHTML = "0";
    } else if (operacija == "Del") {
      funkcionavimas = funkcionavimas.slice(0, -1);
      skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
    } else if (operacija == "=") {
      let galutinis = eval(procentuSkaiciavimas(funkcionavimas));
      skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas) + "=";
      rezultatas.innerHTML = `<div id="resultas-dydis">${galutinis}</div>`;
      funkcionavimas = "";
    } else if (operacija == "%") {
      funkcionavimas += operacija;
      skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
      skaiciavimas.innerHTML = funkcionavimas;
    } else {
      if (negaliButiDaugOperatoriu(operacija)) {
        if (funkcionavimas === "") {
          if (operacija !== "*" && operacija !== "/") {
            rezultatas.innerHTML = operacija;
            funkcionavimas += operacija;
            skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
          }
        } else if (
          funkcionavimas[funkcionavimas.length] !== "*" &&
          funkcionavimas[funkcionavimas.length] !== "/" &&
          funkcionavimas.length < 20
        ) {
          funkcionavimas += operacija;
          skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
        }
      }
    }
  }
});
