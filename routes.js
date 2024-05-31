const model = require('./model.js');
const router = require('express').Router();
const { body, validationResult } = require('express-validator')

router.get('/books', async (req, res) => {
    try {
        const books = await model.getBooks();
        res.status(200).json(books);
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
});

router.get("/title/:title", async (req, res) => {

    try {
        const book = await model.getBookWithTitle(req.params.title);
        res.status(200).json(book);
    } catch (e) {
        res.status(400).end();
    }
});

router.get("/author/:author", async (req, res) => {

    try {
        const book = await model.getBookWithAuthor(req.params.author);
        res.status(200).json(book);
    } catch (e) {
        res.status(400).end();
    }
});

router.get("/genre/:genre", async (req, res) => {

    try {
        const book = await model.getBookWithGenre(req.params.genre);
        res.status(200).json(book);
    } catch (e) {
        res.status(400).end();
    }
});

router.get('/register/page', (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

router.get('/user/page', (req, res) => {
    res.sendFile(__dirname + "/user_page.html");
});

const genreValues = ['Science-fiction', 'Action', 'Adventure', 'Mystery', 'Horror', 'Thriller', 'Suspense', 'Historical-fiction', 'Romance', 'Graphic-novel', 'Autobiography', 'Biography', 'Travel', 'Crime', 'Humor', 'Guide', 'Religion', 'Humanities'];

router.get('/defined-genre', (req, res) => {
    res.json(genreValues);
});


module.exports = router;