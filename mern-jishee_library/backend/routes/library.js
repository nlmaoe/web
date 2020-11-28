const router = require('express').Router();
let Library = require('../models/library.model');

router.route('/').get((req, res) => {
  Library.find()
    .then(librarys => res.json(librarys))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const bookname = req.body.bookname;

  const newLibrary = new Library({bookname});

  newLibrary.save()
    .then(() => res.json('Bookname added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;