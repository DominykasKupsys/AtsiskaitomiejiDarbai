/**
 * pakeičia operatorių išvaizda skaičiuotuvo ekrane
 * @param {string} funkcionavimas 
 * @returns {Array} gražina array, kuriame operatoriai yra su pakeista išvaizda
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
export {tinkamiOperatoriai};