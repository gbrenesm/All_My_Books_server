const Shelf = require("../models/Shelf")
const User = require("../models/User")
const Book = require("../models/Book")


////C
exports.newShelfProcess = async (req, res) => {
  const { name } = req.body
  const shelf = await Shelf.create({
    name,
    creator: req.user.id
  })
  await User.findByIdAndUpdate(req.user.id, {$push: {shelves: shelf._id}})
  res.status(201).json({ shelf })
}

////R
exports.seeUserShelves = async (req, res) => {
  const shelves = await User.findById(req.user.id).populate("shelves")
  res.status(200).json({ shelves })
}

exports.seeBooksShelf = async (req, res) => {
  const books = await Shelf.findById(req.params.shelfId).populate("books")
  res.status(200).json({ books })
}

////U
exports.addBook = async (req, res) => {
  const { shelfId } = req.body
  await Shelf.findByIdAndUpdate(shelfId, {$push: {books: req.params.bookId}})
  await Book.findByIdAndUpdate(req.params.bookId, {$push: {bookshelves: shelfId}})
  res.status(201).json({ message: "Libro agregado correctamente" })
}

exports.removeBook = async (req, res) => {
  const { shelfId } = req.body
  await Shelf.findByIdAndUpdate(shelfId, {$pull: {books: req.params.bookId}})
  await Book.findByIdAndUpdate(req.params.bookId, {$pull: {bookshelves: shelfId}})
  res.status(201).json({ message: "Libro removido correctamente" })
}

////D
exports.deleteShelfProcess = async (req, res) => {
  await Shelf.findByIdAndDelete(req.params.shelfId)
  res.status(201).json({message: "Estante eliminado"})
  await User.findByIdAndUpdate(req.user.id, {$pull: {shelves: req.params.shelfId}})
}