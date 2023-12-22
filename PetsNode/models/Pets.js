module.exports = {
  getById: async function (db, id) {
    const q = `SELECT ID, name , foto , email , created_at
    FROM pets WHERE pets.id = ?;`;
    const [results] = await db.query(q, [id]);
    return [results[0]];
  },
  getSpeciesById: async function (db, id) {
    const q = `SELECT species.name
    FROM species INNER JOIN pets on pets.species_ID = species.ID WHERE pets.id = ?;`;
    const [results] = await db.query(q, [id]);
    return [results[0]];
  },
};
