module.exports = {
  getAll: async function (db) {
    const q = "SELECT * FROM pets";
    return await db.query(q);
  },
  getAllSpecies: async function (db) {
    const q = "SELECT * FROM species";
    return await db.query(q);
  },
  getById: async function (db, id) {
    const q = `SELECT pets.*, species.name AS species
    FROM pets INNER JOIN species ON pets.species_ID = species.ID WHERE pets.id = ?;`;
    const [results] = await db.query(q, [id]);
    return [results[0]];
    },
  createPets: async function (db, data) {
    const q =
      "INSERT INTO pets ( species_ID, name, foto, email, created_at) VALUES (?, ?, ?, ?, ?)";
    const [result] = await db.query(q, [
      data.species_ID,
      data.name,
      data.foto,
      data.email,
      data.created_at,
    ]);
    if (result) {
      return result.insertId;
    } else {
      return false;
    }
  },
  createSpecies: async function (db, data) {
    const q =
      "INSERT INTO species (Name) VALUES (?)";
    const [result] = await db.query(q, [
      data.Name
    ]);
    if (result) {
      return result.insertId;
    } else {
      return false;
    }
  },
  update: async function (db,id, data) {
    const q =
      "UPDATE pets species_ID = ?,name = ?,foto = ?,email = ?,created_at = ? WHERE id = ?";
    return await db.query(q, [
      data.species_ID,
      data.name,
      data.foto,
      data.email,
      data.created_at,
      id,
    ]);
  },
};
