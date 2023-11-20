import StraipsnisRubrika  from "../etapas3/StraipsnisRubrika.js"

const Rubrika = new StraipsnisRubrika(
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
This is a good and normal thing.`,
"Rubrika 1",
"../etapas4/Straipsnis1/index.html"

)
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
"../etapas4/Straipsnis2/index.html"
)
const Rubrika3 = new StraipsnisRubrika(
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
Wind and water help this process. Japan gains and loses islands sometimes.`,
"Rubrika 3",
"../etapas4/Straipsnis3/index.html"  
)
const Rubrika4 = new StraipsnisRubrika(
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
Previously, the toilet is part of an art show in a big museum in New York.`,
"Rubrika 4",
"../etapas4/Straipsnis4/index.html"
)
const Rubrika5 = new StraipsnisRubrika(
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
Now, France won't take 3,500 asylum seekers from Italy.`,
"Rubrika 5",
"../etapas4/Straipsnis5/index.html"
)

document.getElementById("Straipsnis1").innerHTML = Rubrika.generavimas_rubrikos() 
document.getElementById("Straipsnis2").innerHTML = Rubrika2.generavimas_rubrikos() 
document.getElementById("Straipsnis3").innerHTML = Rubrika3.generavimas_rubrikos()
document.getElementById("Straipsnis4").innerHTML = Rubrika4.generavimas_rubrikos()
document.getElementById("Straipsnis5").innerHTML = Rubrika5.generavimas_rubrikos()  



