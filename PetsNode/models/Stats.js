module.exports = {
  DailyWinner: async (db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name, pets.foto
        AS pet_photo FROM votes JOIN pets ON votes.result = pets.id WHERE DATE(votes.created_at)
        = CURDATE() GROUP BY result, pet_name, pet_photo ORDER BY result_count DESC LIMIT 1`;
    const result = await db.query(q);
    return result[0];
  },
  WeeklyWinner: async (db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name,
        pets.foto AS pet_photo FROM votes JOIN pets ON votes.result = pets.id WHERE YEARWEEK(votes.created_at) = YEARWEEK(CURDATE())
        GROUP BY result, pet_name, pet_photo ORDER BY result_count DESC LIMIT 1`;
    const result = await db.query(q);
    return result[0];
  },
  MonthlyWinner: async (db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name, pets.foto AS pet_photo FROM
        votes JOIN pets ON votes.result = pets.id WHERE MONTH(votes.created_at) = MONTH(CURDATE())
        GROUP BY result, pet_name, pet_photo ORDER BY result_count DESC LIMIT 1`;
    const result = await db.query(q);
    return result[0];
  },
  DailyLoser: async (db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name, pets.foto AS pet_photo FROM votes JOIN pets ON votes.result = pets.id
        WHERE DATE(votes.created_at) = CURDATE() GROUP BY result, pet_name, pet_photo ORDER BY result_count ASC LIMIT 1`;
    const result = await db.query(q);
    return result[0];
  },
  WeeklyLoser: async (db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name,
        pets.foto AS pet_photo FROM votes JOIN pets ON votes.result = pets.id WHERE YEARWEEK(votes.created_at) = YEARWEEK(CURDATE())
        GROUP BY result, pet_name, pet_photo ORDER BY result_count ASC LIMIT 1`;
    const result = await db.query(q);
    return result[0];
  },
  MonthlyLoser: async (db) => {
    const q = `SELECT result, COUNT(*) AS result_count, pets.name AS pet_name, pets.foto AS pet_photo FROM
        votes JOIN pets ON votes.result = pets.id WHERE MONTH(votes.created_at) = MONTH(CURDATE())
        GROUP BY result, pet_name, pet_photo ORDER BY result_count ASC LIMIT 1`;
    const result = await db.query(q);
    return result[0];
  },
  speciesWithTheMostPets: async (db) => {
    const q = `SELECT species.Name, COUNT(pets.species_ID) AS species_count
        FROM pets INNER JOIN species ON pets.species_ID = species.ID
        GROUP BY species.Name
        ORDER BY species_count DESC
        LIMIT 1`;
    return await db.query(q);
  },
  speciesWithTheMostWins: async (db) => {
    const q = `SELECT species.Name,COUNT(votes.result) AS result_count FROM votes JOIN pets ON votes.result = pets.id
        INNER JOIN species ON pets.species_ID = species.ID WHERE YEARWEEK(votes.created_at) = YEARWEEK(CURDATE())
        GROUP BY species.Name ORDER BY result_count DESC LIMIT 1`;
    return await db.query(q);
  },
};
