const Stats = require("../models/Stats");

module.exports = {
  petStats: async (req, res) => {
    try {
      const [dailywinner] = await Stats.DailyWinner(req.db);
      const [weeklywinner] = await Stats.WeeklyWinner(req.db);
      const [monthlywinner] = await Stats.WeeklyWinner(req.db);
      const [dailyloser] = await Stats.DailyLoser(req.db);
      const [weeklyloser] = await Stats.WeeklyLoser(req.db);
      const [monthlyloser] = await Stats.MonthlyLoser(req.db);
      res.render("Stats/petStats", {
        title: "Todays records",
        dailywinner: dailywinner,
        dailyloser: dailyloser,
        weeklywinner: weeklywinner,
        weeklyloser: weeklyloser,
        monthlywinner: monthlywinner,
        monthlyloser: monthlyloser,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
  speciesStats: async (req, res) => {
    try {
      const [speciesPets] = await Stats.speciesWithTheMostPets(req.db);
      const [speciesWins] = await Stats.speciesWithTheMostWins(req.db);
      res.render("Stats/speciesStats", {
        title: "Species records",
        speciesPets: speciesPets,
        speciesWins: speciesWins,
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(`Serverio klaida: ${err.message}`);
    }
  },
};
