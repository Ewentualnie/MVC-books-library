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
                       AND isDeleted = 0;`,
    getWithLimit = `SELECT books.*, GROUP_CONCAT(authors.name SEPARATOR ', ') as authors
                    FROM books
                             JOIN pairs ON books.id = pairs.book_id
                             JOIN authors ON authors.id = pairs.author_id
                    WHERE isDeleted = 0
                    GROUP BY books.id
                    LIMIT ?, ?;`,
    addBook = `INSERT INTO books (name, year, description, preview, title, pages, isDeleted, clickCount, views)
               VALUES (?, ?, ?, ?, ?, ?, 0, 0, 0);`,
    softDeleteBook = `UPDATE books
                      SET isDeleted = 1
                      WHERE id = ?;`,
    saveAuthor = `INSERT INTO authors (name)
                      VALUE (?);`,
    savePair = `INSERT INTO pairs (book_id, author_id)
                    VALUE (?, ?);`,
    getAuthorByName = `SELECT id
                       FROM authors
                       WHERE name = ?;`,
    increaseView = `UPDATE books
                    SET views = views + 1
                    WHERE id = ?;`,
    increaseClickCount = `UPDATE books
                          SET clickCount = books.clickCount + 1
                          WHERE id = ?;`,
    deletePair = `DELETE
                  FROM pairs
                  WHERE book_id = ?;`,
    hardDeleteBooks = `DELETE
                       FROM books
                       WHERE isDeleted = 1;`,
    getMarkedBooks = `SELECT id
                      FROM books
                      WHERE isDeleted = 1;`,
    getBooksByPatternName =`SELECT books.*, GROUP_CONCAT(authors.name SEPARATOR ', ') as authors
                            FROM books
                                     JOIN pairs ON books.id = pairs.book_id
                                     JOIN authors ON authors.id = pairs.author_id
                            WHERE isDeleted = 0
                              AND books.name LIKE ?
                            GROUP BY books.id;`,
}

export default query;