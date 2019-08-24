const router = require("express").Router();;
const controller = require("../controllers/bookscontroller.js");

router.route("/api/books")
    .get(controller.getAllBooks);
module.exports = router;