const Book = require("../models/Book")
const User = require("../models/User")

////C
exports.newBookProcess = async (req, res) => {
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
  await User.findByIdAndUpdate(req.user.id, {$push: {books: book._id}})
  res.status(201).json({ book })
}

////R

exports.seeDetailBook = async (req, res) => {
  const book = await Book.findById(req.params.bookId)
  res.status(200).json({ book })
}

exports.seeUserBooks = async (req, res) => {
  const user = await User.findById(req.user.id).populate("books")
  res.status(200).json({ user })
}

////U

exports.upadateBookProcess = async (req, res) => {
  const { title, author, publisher, published, edition, ISBN, publishPlace, pages, format, description, cover } = req.body
  const book = await Book.findByIdAndUpdate(req.params.bookId, {
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
  }, { new: true })
  res.status(202).json({ book })
}

////D

exports.deleteBookProcess = async (req, res) => {
  await Book.findByIdAndDelete(req.params.bookId)
  res.status(200).json({ message: "Libro eliminado"})
  await User.findByIdAndUpdate(req.user.id, {$pull: {books: req.params.bookId}})

}
