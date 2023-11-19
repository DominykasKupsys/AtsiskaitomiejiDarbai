import  Straipsnis  from "./../../etapas1/Straipsnis.js"

const straipsnis3 = new Straipsnis(
    "Straipsnis 3",
    "Japan has a new island",
    "https://www.newsinlevels.com/wp-content/uploads/2023/11/Depositphotos_285414448_L.jpg",
    `Japan has a new island. The island is about 100 meters wide.  It is in the Ogasawara island chain.
    A volcano under the sea near Iwoto Island makes the island. The volcano erupts in October.
    Big eruptions start. These happen when magma meets water. 
    Professor Fukashi Maeno sees the island. He is flying above the volcano. 
    Smoke and ash go up during the eruptions.
    Similar things happen in 2021. We do not know what will happen to the island. 
    It may get bigger or go away. It sometimes happens that such islands go away. 
    Wind and water help this process. Japan gains and loses islands sometimes.`
    )

    document.getElementById("Straipsnis").innerHTML = straipsnis3.generavimas() 

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