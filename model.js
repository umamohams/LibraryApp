const db = require('./postgres');
module.exports = {
    async getBooks() {
        const sql = `SELECT * FROM book`;
        const result = await db.query(sql);
        return result.rows;
    },

    async getBookWithGenre(genre) {
        const sql = 'SELECT * FROM book WHERE genre = $1';
        const result = await db.query(sql, [genre]);
        return result.rows;
    },

    async getBookWithAuthor(author) {
        const sql = 'SELECT * FROM book WHERE author = $1';
        const result = await db.query(sql, [author]);
        return result.rows;
    },

    async getBookWithTitle(title) {
        const sql = 'SELECT * FROM book WHERE title = $1';
        const result = await db.query(sql, [title]);
        return result.rows;
    },

    async addBooks(request) {
        const { title, author, genre } = request.body
        const id = (await this.getBooks()).length + 1
        const sql = 'INSERT INTO book (id, title, author, genre) VALUES ($1, $2, $3, $4) RETURNING *';
        const result = await db.query(sql, [id, title, author, genre]);
        return "Book added with ID: ${id}", [id];
    },

    async deleteBooks(id) {
        const sql = 'DELETE FROM book WHERE id = $1';
        const result = await db.query(sql, [id]);
        return "Book deleted with ID: ${id}", [id];
    },

    async updateBooks(request, id) {
        const title = request.body.title ?? null;
        const author = request.body.author ?? null;
        const genre = request.body.genre ?? null;
        console.log(title)

        if (title != null) {
            const sql = 'UPDATE book SET title = $1 WHERE id = $2';
            const result = await db.query(sql, [title, id]);
            console.log(result)
        }
        if (author != null) {
            const sql = 'UPDATE book SET author = $1 WHERE id = $2';
            const result = await db.query(sql, [author, id]);
        }
        if (genre != null) {
            const sql = 'UPDATE book SET genre = $1 WHERE id = $2';
            const result = await db.query(sql, [genre, id]);
        }
        return "Book modified with ID: ${id}", [id];
    },
};