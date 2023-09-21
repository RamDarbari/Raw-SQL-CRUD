
const exportQueris = {}

exportQueris.updateQuery = `UPDATE companies
SET name1 = ?, emailAdress = ?, password = ?, phoneNumber = ?
WHERE id = ?`



module.exports = exportQueris;