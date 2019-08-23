const router = require("express").Router();;
const controller = require("../controllers/bookscontroller.js");

router.route("/")
    .get(controller.getAllBooks);
module.exports = router;