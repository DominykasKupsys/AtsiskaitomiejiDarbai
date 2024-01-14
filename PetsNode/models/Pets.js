module.exports = {
  getAll: async (db) => {
    const q = "SELECT * FROM pets";
    return await db.query(q);
  },
  getById: async (db, ID) => {
    const q = "SELECT * FROM pets WHERE ID = ?";
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
     if(results){
      return results.insertId
     }else{
      return false
     }
  },
  Delete: async(db,ID) => {
    const q = "DELETE FROM pets WHERE ID = ?"
    const [result] = await db.query(q, [ID])
    return result
  },
  Update: async(db,data, id) =>{
    const q = "UPDATE pets SET species_ID=?, name=?, foto=?, email=? WHERE ID=?";
    const [results] = await db.query(q, [data.species_ID, data.name, data.foto, data.email,id])
    return results
  },
  updateImage: async(db,id,path) =>{
    const q = "UPDATE pets SET foto = ? WHERE ID = ?"
    return await db.query(q,[path,id])
  }
};
