/**
 * pakeičia procentų ženklą į dalybą iš šimto
 * @param {string} funkcionavimas 
 * @returns {Array} gražina array, kuriame procentai yra pakeisti į dalybą iš šimto
 */

function procentuSkaiciavimas(funkcionavimas) {
    funkcionavimas = funkcionavimas.replace(/%/g, '/100');
    let funkcionavimas_array = funkcionavimas.split(" ");
    return funkcionavimas_array.join(" ");
  }
export{procentuSkaiciavimas};
