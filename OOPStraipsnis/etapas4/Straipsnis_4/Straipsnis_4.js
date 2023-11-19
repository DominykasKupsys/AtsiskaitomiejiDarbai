import  Straipsnis  from "./../../etapas1/Straipsnis.js"

const straipsnis4 = new Straipsnis(
    "Straipsnis 4",
    "Men steal a golden toilet",
    "https://www.newsinlevels.com/wp-content/uploads/2023/11/Depositphotos_346938824_L-300x150.jpg?ezimgfmt=ngcb3/notWebP",
    `Four men get into trouble. They steal a golden toilet from a palace in England.
    The toilet has a price of almost 6 million dollars. 
    It is part of an art show in an old place called Blenheim Palace. 
    The men come early in the morning in 2019. They use two cars. 
    The four men will go to court on November 28.
    The special toilet is called America. It is still missing, and nobody knows where it can be now. 
    Blenheim Palace, where Winston Churchill is born, is very sad when the toilet disappears. 
    Previously, the toilet is part of an art show in a big museum in New York.`
    )

    document.getElementById("Straipsnis").innerHTML = straipsnis4.generavimas() 
    
    const h1Elements = document.getElementsByTagName("h1");
    for (let i = 0; i < h1Elements.length; i++) {
    h1Elements[i].style.textAlign = "center";
    }
    const h2Elements = document.getElementsByTagName("h2");
    for (let i = 0; i < h2Elements.length; i++) {
    h2Elements[i].style.textAlign = "center";
    }
    const divElements = document.getElementsByTagName("div");
    for (let i = 0; i < divElements.length; i++) {
    divElements[i].style.textAlign = "center";
    }