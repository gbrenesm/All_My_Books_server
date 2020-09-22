const Book = require("../models/Book")

//C
exports.newBook = async (req, res) => {
  const { title, author, publisher, published, edition, ISBN, publishPlace, pages, format, description, cover } = req.body
  const book = await Book.create({
    title,
    author,
    publisher,
    published,
    edition,
    ISBN,
    publishPlace,
    pages,
    format,
    description,
    cover,
    creator: req.user.id
  })
  res.status(2001).json({ book })
}

//R

//U

//D
