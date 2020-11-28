const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const bookname = req.body.bookname;
  const description = req.body.description;
  const rating = Number(req.body.rating);
  const date = Date.parse(req.body.date);

  const newBook = new Book({
    bookname,
    description,
    rating,
    date,
  });

  newBook.save()
  .then(() => res.json('Book added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then(books => {
      books.bookname = req.body.bookname;
      books.description = req.body.description;
      books.rating = Number(req.body.rating);
      books.date = Date.parse(req.body.date);

      books.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;