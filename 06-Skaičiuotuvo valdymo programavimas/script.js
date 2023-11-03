let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
})

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

const rezultatas = document.querySelector(".calculator-operation-result")

/**
 * Jei nėra įvesta jokių operatorių ar skaičių, skaičiuotuvas rodo 0
 */

let funkcionavimas = ""
rezultatas.innerHTML = 0;

/**
 * kiekvienam mygtukui yra pajungiamos funkcijos ir yra atliekami skaičiavimai
 */

for (let i = 0; i < mygtukai.length; i++) {
  let mygtukas = mygtukai[i];

  mygtukas.addEventListener("click", () => {
  let operacija = mygtukas.dataset.operacija;
    
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
      rezultatas.innerHTML =  `<div id="result-value">${galutinis}</div>`;
      funkcionavimas = ""
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
        } else if (funkcionavimas[funkcionavimas.length] !== "*" && funkcionavimas[funkcionavimas.length ] !== "/" 
        && funkcionavimas.length < 20) {
          funkcionavimas += operacija;
          skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
        }
      }
    }
    
  });
};

/**
 * pakeičia operatorių išvaizda skaičiuotuvo ekrane
 * @param {*} funkcionavimas 
 * @returns 
 */

function tinkamiOperatoriai(funkcionavimas) {
  let funkcionavimas_array = funkcionavimas.split("");
  let funkcionavimas_array_ilgis = funkcionavimas_array.length

  for(let i = 0; i < funkcionavimas_array.length; i++){
    if (funkcionavimas_array[i] == "*"){
      funkcionavimas_array[i] = `<span>x<span>`
    } else if (funkcionavimas_array[i] == "/"){
      funkcionavimas_array[i] = `<span">÷<span>`
    } else if (funkcionavimas_array[i] == "."){
      funkcionavimas_array[i] = `<span>,<span>`
    }
  }
  return funkcionavimas_array.join("");
}


function negaliButiDaugOperatoriu (operacija) {
  let paskutinis_mygtukas = funkcionavimas.slice(-1);
  let operatoriai = ["+","-","/","*",",","%","."]

  if (operatoriai.includes(operacija)){
    if (operatoriai.includes(paskutinis_mygtukas)){
      return false
    } else {
      return true
    }
  }
  return true
}


function procentuSkaiciavimas(funkcionavimas) {
  funkcionavimas = funkcionavimas.replace(/%/g, '/100');
  let funkcionavimas_array = funkcionavimas.split(" ");
  return funkcionavimas_array.join(" ");
}

/**
 * leidžia skaičiuotuvui naudoti klavetūros mygtukus
 */

document.addEventListener('keydown', (event) => {
   
  if(event.key== "1" || event.key == "2" || event.key == "3" || event.key == "4"
  || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8"
  || event.key == "9" || event.key == "=" || event.key == "." || event.key == ","
  || event.key == "-" || event.key == "/" || event.key == "*"  || event.key == "%"
  || event.key == "0" || event.key == "Backspace"|| event.key == "Delete" || event.key == "+"){
    operacija = event.key
  } 

  if (operacija == "Delete") {
    funkcionavimas = "";
    skaiciavimas.innerHTML = "";
    rezultatas.innerHTML = "0";
  } else if (operacija == "Backspace") {
    funkcionavimas = funkcionavimas.slice(0, -1);
    skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
  } else if (operacija == "=") {
    let galutinis = eval(procentuSkaiciavimas(funkcionavimas));
    skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas) + "=";
    rezultatas.innerHTML = galutinis
    funkcionavimas = ""
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
      } else if (funkcionavimas[funkcionavimas.length] !== "*" && funkcionavimas[funkcionavimas.length ] !== "/") {
        funkcionavimas += operacija;
        skaiciavimas.innerHTML = tinkamiOperatoriai(funkcionavimas);
      }
    }
  }
  
});