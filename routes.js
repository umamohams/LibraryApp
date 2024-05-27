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



router.post("/",     [
    body("title").notEmpty(),
    body("author").notEmpty(),
    body("genre").notEmpty(),
  ], async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

    try {
        const result = await model.addBooks(req);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).end();
    }
});

router.patch("/id/:id", async (req, res) => {

    try {
        const result = await model.updateBooks(req, req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).end();
    }
});

router.delete("/delete/:id", async (req, res) => {

    try {
        const result = await model.deleteBooks(req.params.id);
        res.status(200).send(result);
    } catch (e) {
        res.status(400).end();
    }
});







module.exports = router;