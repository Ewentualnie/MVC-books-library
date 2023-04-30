enum query {
    getLength = `SELECT COUNT(*)
                 FROM books
                 WHERE isDeleted = 0;`,
    getAll = `SELECT *
              FROM books
              WHERE isDeleted = 0;`,
    getBookById = `SELECT *
                   FROM books
                   WHERE ID = ? AND isDeleted = 0`,
    getBookByName = `SELECT *
                     FROM books
                     WHERE name = ? AND isDeleted = 0`,
    getWithLimit = `SELECT *
                    FROM books
                    WHERE isDeleted = 0
                    LIMIT ?, ?;`,
    addBook = `INSERT INTO books (name, year, author, description, preview, title, pages, isDeleted)
               VALUES (?, ?, ?, ?, ?, ?, ?, 0);`,
    deleteBook = `UPDATE books
                  SET isDeleted = 1
                  WHERE id = ?;`
}

export default query;