module.exports = {
  getAll: async (db) => {
    const q = "SELECT * FROM species";
    return await db.query(q);
  },
  Create: async (db, data) => {
    const q = "INSERT INTO species(Name) VALUES (?)";
    const [results] = await db.query(q, [data.Name]);
    if (results) {
      return results.insertId;
    } else {
      return false;
    }
  },
};
