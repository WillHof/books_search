const db = require("../models/Books.js");
module.exports = {
    getAllBooks: function (req, res) {
        db
            .find()
            .then(Books => res.json(Books))
            .catch(err => res.status(503).json(err));
    },
    findOneBook: function (req, res) {
        db
            .findOne(req.params.id, function (err, data) {
                if (err) {
                    res.status(503).json(err)
                }
                else {
                    res.json(data)
                }
            });
    },
    addBook: function (req, res) {
        db.create(req.body)
            .then(res.status(200))
            .catch(err => res.json(err))
    },
    deleteBook: function (req, res) {
        db.remove(req.body._id)
            .then(res("Document removed"))
            .catch(err => res.json(err))
    }
}