import  Straipsnis  from "./../../etapas1/Straipsnis.js"

const straipsnis2 = new Straipsnis(
    "Straipsnis 2",
    "A lion escapes from a circus",
    "https://www.newsinlevels.com/wp-content/uploads/2023/11/Depositphotos_22237959_L-300x150.jpg?ezimgfmt=ngcb3/notWebP",
    `A lion escapes from a circus. It happens in a town near Rome, Italy.People must stay home.
    Police and circus workers try to catch the lion. Rony Vassallo looks after all circus animals.
    He says that the lion is not dangerous. The animal's name is Kimba.
    After several hours, the police catch Kimba. They sedate the animal.
    The mayor wants to stop using animals in circuses. 
    Animal groups say that using animals in circuses is not safe.
    Also, animals are not happy there. In Italy, it is still possible to use animals in circuses.
    Many people want this to stop.`
    )

    document.getElementById("Straipsnis").innerHTML = straipsnis2.generavimas() 

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