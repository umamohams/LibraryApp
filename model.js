const db = require('./postgres');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {

    async findId() {
        
        const res = await db.query('SELECT id FROM book ORDER BY id ASC');
        const numbers = res.rows.map(row => parseInt(row.id));
        const set = new Set(numbers);
        let mayBeId = 1;

        while (set.has(mayBeId)) {
            mayBeId++;
          }
        
        return mayBeId;
      },

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
        const id = await this.findId();

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

        if (title.length > 0) {
            const sql = 'UPDATE book SET title = $1 WHERE id = $2';
            const result = await db.query(sql, [title, id]);
            console.log(result)
        }
        if (author.length > 0) {
            const sql = 'UPDATE book SET author = $1 WHERE id = $2';
            const result = await db.query(sql, [author, id]);
        }
        if (genre.length > 0) {
            const sql = 'UPDATE book SET genre = $1 WHERE id = $2';
            const result = await db.query(sql, [genre, id]);
        }
        return "Book modified with ID: ${id}", [id];
    },

    async getUser(request) {
        const username = request.body.username
        const sql = 'SELECT * FROM Admin WHERE username = $1';
        const result = await db.query(sql, [username]);
        const user = result.rows;
        return user[0].user_password;
    },

    async register(request) {
        const saltRounds = 10;
        const { username, password} = request.body

        bcrypt.hash(password, saltRounds, async (err, hash)  =>  {
            if (err) {
                console.error(err.message);
                return;
            }

            const sql = 'INSERT INTO Admin (username, user_password) VALUES ($1, $2) RETURNING *';
            const result = await db.query(sql, [username, hash]);
        });
        return "Admin added with username: ${username}",[username];
    },
};