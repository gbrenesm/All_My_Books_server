const { model } = require("mongoose")
const Book = require("../models/Book")
const User = require("../models/User")

////C
exports.newBookProcess = async (req, res) => {
  const { title, authorFirstName, authorLastName, coAuthorFirstName, coAuthorLastName, publisher, published, edition, ISBN, publishPlace, pages, format, description, cover } = req.body
  const book = await Book.create({
    title,
    authorFirstName,
    authorLastName,
    coAuthorFirstName,
    coAuthorLastName,
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
    .populate("notes")
    .populate("quotes")
    .populate("bookshelves")
  res.status(200).json({ book })
}

exports.seeUserBooks = async (req, res) => {
  const user = await User.findById(req.user.id).populate({
    path: "books",
    options: {sort: { title: 1 } }
  })
  .populate({
    path:"shelves",
    options: {sort: { name: 1 } }
  })
  res.status(200).json({ user })
}


exports.seeUserBooksByAuthor = async (req, res) => {
  const user = await User.findById(req.user.id).populate({
    path: "books",
    options: {sort: { authorLastName: 1 } }
  })
  .populate({
    path:"shelves",
    options: {sort: { name: 1 } }
  })
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
