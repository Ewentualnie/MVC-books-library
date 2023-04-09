enum query {
    getLength = `SELECT COUNT(*)
                 FROM books`,
    getAll = `SELECT *
              FROM books;`,
    getBookById = `SELECT *
                   FROM books
                   WHERE ID = ?`,
    getBookByName = `SELECT *
                   FROM books
                   WHERE name = ?`,
    getWithLimit = `SELECT *
                    FROM books
                    LIMIT ?, ?;`,
    addBook = `INSERT INTO books (name, year, author, description, preview, title)
               VALUES (?, ?, ?, ?, ?, ?);`
}

export default query;