module.exports = {
  getAllPets: async function (db) {
    const query = "SELECT * FROM pets";
    return await db.query(query);
  },
  getByIdPets: async function(db, id){
    const query = "SELECT pets.*, species.name as species FROM pets INNER JOIN species on pets.species_ID = species.ID WHERE pets.ID = ?"
    const [result] = await db.query(query, id)
    return [result][0]
  },
  create: async function(db){
    const query = "INSERT INTO pets(species_ID, name, foto, email, created_at) VALUES (?,?,?,?,?)"
    const [result] = await db.query(query,[species_ID, name , foto, email, created_at])
    return [result][0]
  }
};
