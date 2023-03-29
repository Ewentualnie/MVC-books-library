enum query {
    getLength = `SELECT COUNT(*)
                 FROM books`,
    getAll = `SELECT *
              FROM books;`,
    getBook = `SELECT *
               FROM books
               WHERE ID = ?`,
    getWithLimit = `SELECT *
                    FROM books
                    LIMIT ?, ?;`,
    addBook = `INSERT INTO books (name, year, author, description, preview, title)
               VALUES (?, ?, ?, ?, ?, ?);`
}

export default query;