module.exports = {
  getAll: async (db) => {
    const q =
      "SELECT  pets.*, species.Name AS species FROM `pets` INNER JOIN species ON pets.species_ID = species.ID;";
    return await db.query(q);
  },
  getById: async (db, ID) => {
    const q =
      "SELECT pets.*, species.Name AS species FROM `pets` INNER JOIN species ON pets.species_ID = species.ID WHERE pets.ID = ?";
    const [results] = await db.query(q, [ID]);
    return [results[0]];
  },
  Create: async (db, data) => {
    const q =
      "INSERT INTO pets(species_ID, name, foto, email, created_at) VALUES (?,?,?,?,NOW())";
    const [results] = await db.query(q, [
      data.species_ID,
      data.name,
      data.foto,
      data.email,
    ]);
    if (results) {
      return results.insertId;
    } else {
      return false;
    }
  },
  Delete: async (db, ID) => {
    const q = "DELETE FROM pets WHERE ID = ?";
    const [result] = await db.query(q, [ID]);
    return result;
  },
  Update: async (db, data, id) => {
    const q =
      "UPDATE pets SET species_ID=?, name=?, foto=?, email=? WHERE ID=?";
    const [results] = await db.query(q, [
      data.species_ID,
      data.name,
      data.foto,
      data.email,
      id,
    ]);
    return results;
  },
  updateImage: async (db, id, path) => {
    const q = "UPDATE pets SET foto = ? WHERE ID = ?";
    return await db.query(q, [path, id]);
  },
  randomPet: async (db) => {
    const q = "SELECT * FROM pets ORDER BY RAND() LIMIT 2;";
    const results = await db.query(q);
    return results[0];
  },
  Result: async (db,data,ID) => {
    const q =
      "INSERT INTO votes(pet1_ID,pet2_ID,result,created_at) VALUES (?,?,?,NOW())";
    const [results] = await db.query(q,[data[0].ID,data[1].ID,ID]);
    if (results) {
      return results.insertId;
    } else {
      return false;
    }
  },
  DailyWinner : async(db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name, pets.foto
    AS pet_photo FROM votes JOIN pets ON votes.result = pets.id WHERE DATE(votes.created_at)
    = CURDATE() GROUP BY result, pet_name, pet_photo ORDER BY result_count DESC LIMIT 1`
    const result = await db.query(q);
    return result[0]
  },
  getTwoPets: async(db,data) => {
    const q = "SELECT foto, name, ID FROM `pets` WHERE ID IN (?,?)"
    const [results] = await db.query(q, [data[0],data[1]]);
    console.log(results)
    return results
  },
};
