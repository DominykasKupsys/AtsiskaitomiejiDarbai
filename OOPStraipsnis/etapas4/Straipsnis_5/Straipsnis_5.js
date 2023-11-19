import  Straipsnis  from "./../../etapas1/Straipsnis.js"

const straipsnis5 = new Straipsnis(
    "Straipsnis 5",
    "France and Italy fight about migrants",
    "https://www.newsinlevels.com/wp-content/uploads/2022/11/Depositphotos_71106651_L-300x150.jpg?ezimgfmt=ngcb3/notWebP",
    `A French charity organization has a ship. This ship rescues migrants in the sea. 
    They are between Libya and Italy. The ship travels to Italy. 
    The Italian government says that the ship must not come there. The ship stays at sea for several weeks.
    Some migrants are sick. They need help. No port wants the ship. 
    In the end, the ship goes to the French port of Toulon.
    Giorgia Meloni is Italy's new prime minister. She is the leader of the government. 
    Her ideas are extreme. Her government only supports Italy.
    The change makes the relationship worse between Italy and France. 
    Now, France won't take 3,500 asylum seekers from Italy.`
    )

    document.getElementById("Straipsnis").innerHTML = straipsnis5.generavimas()

    
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