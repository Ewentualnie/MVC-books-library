const tableName: string = process.env.tableNmame || 'books'

export function queryAll() {
    return `SELECT *
            FROM ${tableName};`
}

export function queryBook(id: number) {
    return `SELECT *
            FROM ${tableName}
            WHERE ID = ${id}`
}

export function queryWithLimit(limit: number, position: number) {
    return `SELECT *
            FROM ${tableName}
            LIMIT ${position}, ${limit}`
}