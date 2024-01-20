module.exports = {
  getRandomPets: async (db) => {
    const q = "SELECT * FROM pets ORDER BY RAND() LIMIT 2;";
    const results = await db.query(q);
    return results[0];
  },
  Result: async (db, data, ID) => {
    const q =
      "INSERT INTO votes(pet1_ID,pet2_ID,result,created_at) VALUES (?,?,?,NOW())";
    const [results] = await db.query(q, [data[0].ID, data[1].ID, ID]);
    if (results) {
      return results.insertId;
    } else {
      return false;
    }
  },
  getPetsVoteCount: async (db, data) => {
    const q = `SELECT COUNT(result) as count FROM votes WHERE pet1_ID = ? AND pet2_ID = ?`;
    const results = await db.query(q, [data[0], data[1]]);
    return results[0];
  },
  getPetVoteCount: async (db, data, result) => {
    const q = `SELECT COUNT(result) as count FROM votes WHERE pet1_ID = ? AND pet2_ID = ? AND result = ?`;
    const results = await db.query(q, [data[0], data[1], [result]]);
    return results[0];
  },
};
