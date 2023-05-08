enum query {
    getLength = `SELECT COUNT(*)
                 FROM books
                 WHERE isDeleted = 0;`,
    getAll = `SELECT *
              FROM books
              WHERE isDeleted = 0;`,
    getBookById = `SELECT books.*, GROUP_CONCAT(authors.name SEPARATOR ', ') as authors
                   FROM books
                            JOIN pairs ON books.id = pairs.book_id
                            JOIN authors ON authors.id = pairs.author_id
                   WHERE books.id = ?
                     AND isDeleted = 0;`,
    getBookByName = `SELECT *
                     FROM books
                     WHERE name = ?
                       AND isDeleted = 0`,
    getWithLimit = `SELECT books.*, GROUP_CONCAT(authors.name SEPARATOR ', ') as authors
                    FROM books
                             JOIN pairs ON books.id = pairs.book_id
                             JOIN authors ON authors.id = pairs.author_id
                    WHERE isDeleted = 0
                    GROUP BY books.id
                    LIMIT ?, ?;`,
    addBook = `INSERT INTO books (name, year, description, preview, title, pages, isDeleted)
               VALUES (?, ?, ?, ?, ?, ?, 0);`,
    deleteBook = `UPDATE books
                  SET isDeleted = 1
                  WHERE id = ?;`,
    saveAuthor = `INSERT INTO authors (name)
                      VALUE (?);`,
    savePair = `INSERT INTO pairs (book_id, author_id)
                    VALUE (?, ?);`,
    getAuthorByName = `SELECT id
                     FROM authors
                     WHERE name = ?;`,
}

export default query;