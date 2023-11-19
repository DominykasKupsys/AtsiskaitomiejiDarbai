import  Straipsnis  from "./../../etapas1/Straipsnis.js"

const straipsnis = new Straipsnis(
    "Straipsnis 1",
    "Is globalization ending",
    "https://www.newsinlevels.com/wp-content/uploads/2023/11/Depositphotos_649420092_L.jpg",
    `Robert Moritz is an expert on global trade. He speaks about globalization.
    Globalization is the process by which companies and organizations operate around the world, not only in a few countries.
    Moritz says that globalization is not stopping but changing. 
    People are now trading more with nearby places or just one other country. 
    Regions like North America, Europe, and Asia are becoming closer and working together more. 
    Some people think that everything will break apart. 
    But these regions are trying hard to trade more with each other to help their economies grow.
    Moritz believes that our world is always changing. It is something what people cannot stop. 
    It seems that in the future, countries will trade more with their neighbors. 
    This is a good and normal thing.`
    );

document.getElementById("Straipsnis").innerHTML = straipsnis.generavimas() 

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