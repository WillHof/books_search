const router = require("express").Router();;
const controller = require("../controllers/bookscontroller.js");
const axios = require("axios")

router.route("/api/books")
    .get(controller.getAllBooks)
    .post(controller.addBook)
    .delete(controller.deleteBook)
router.route("/api/gSearch")
    .post(function (req, res) {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.name}`)
            .then(resp => {
                res.json(resp.data.items[0])
            }).catch(err => res.json(err))
    })

module.exports = router;