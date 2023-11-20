import StraipsnisRubrika from "../../etapas3/StraipsnisRubrika.js"

const Rubrika2 = new StraipsnisRubrika(
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
    Many people want this to stop.`,
    "Rubrika 2",
    "../etapas4/Straipsnis_2/index.html"
    )

document.getElementById("Straipsnis").innerHTML = Rubrika2.generavimas()