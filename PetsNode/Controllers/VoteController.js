const Vote = require("../models/Vote");
const Pets = require("../models/Pets");
module.exports = {
  vote: async (req, res) => {
    try {
      const [pet1, pet2] = await Vote.getRandomPets(req.db);
      // pets idedam i sesija
      req.session.old = [];
      req.session.old.push(pet1, pet2);

      // gauname preito balsavimo gyvunelius ir juos istriname, kad jei visa laika trintusi
      let oldPetId = req.session.oldPetId || [];
      delete req.session.oldPetId;
      
      // gauname preito balsavimo laimejusi gyvunelio ID
      let previousWinner = req.session.previousWinners || [];
      delete req.session.previousWinner;

      if (pet1 && pet2) {
        if (oldPetId.length > 0 && previousWinner.length > 0) {
          const oldpet1 = await Pets.getById(req.db, oldPetId[0]);
          const oldpet2 = await Pets.getById(req.db, oldPetId[1]);
          const Winnerpet = await Pets.getById(req.db, previousWinner[0]);
          const twoPetsVoteCount = await Vote.getPetsVoteCount(
            req.db,
            oldPetId
          );
          const onePetVoteCount = await Vote.getPetVoteCount(
            req.db,
            oldPetId,
            previousWinner[0]
          );
          res.render("Vote", {
            title: "Pet battle",
            pet1: pet1,
            pet2: pet2,
            oldpet1: oldpet1,
            oldpet2: oldpet2,
            winnerpet: Winnerpet,
            twoPetsVoteCount: twoPetsVoteCount,
            onePetVoteCount: onePetVoteCount,
          });
        } else {
          res.render("Vote", {
            title: "Pet battle",
            pet1: pet1,
            pet2: pet2,
            oldpet1: "",
            oldpet2: "",
            winnerpet: "",
          });
        }
      } else {
        res.status(404).send(`Nerastas augintinis: ${err.message}`);
      }
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  result: async (req, res) => {
    let backURL = req.header("Referer") || "/";
    // gauname preito balsavimo gyvunelius naudodami sesijas
    const old = req.session.old;
    /*ant gyvunelio paveikslio yra parasytas jo id, todel mes gauname jo id,
    kad galetume uzfiksuoti kas laimejo preita balsavima*/
    const WinnerID = req.params.id;
    delete req.session.old;
    /**
     * sukuriame petID masyva i kuri idedame preito balsavimo gyvunelius(tuos pacius kaip ir req.session.old) ir idedame i nauja sesija,
     *  kad juos galetume naudoti parodant preito balsavimo rezultata
     */
    const petID = [];
    petID.push(old[0].ID, old[1].ID);
    req.session.oldPetId = petID;

    //laimejusio gyvuno id idedame i sesija
    req.session.previousWinners = [WinnerID];

    try {
      await Vote.Result(req.db, old, WinnerID);
      res.redirect(backURL);
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
};
