const Note = require("../models/Note")
const Book = require("../models/Book")

////C
exports.newNoteProcess = async (req, res) => {
  const { description, pages, chapter} = req.body
  const note = await Note.create({
    description,
    pages,
    chapter,
    creator: req.user.id,
    book: req.params.bookId
  })
  await Book.findByIdAndUpdate(req.params.bookId, {$push: {notes: note._id}})
  res.status(201).json({ note })
}

////R


////U
exports.updateNoteProcess = async (req, res) => {
  const { description, pages, chapter} = req.body
  const note = await Note.findByIdAndUpdate(req.params.noteId, {
    description,
    pages,
    chapter,
  }, {new: true})
  res.status(202).json({ note })
}

////D

exports.deleteNoteProcess = async (req, res) => {
  await Note.findByIdAndDelete(req.params.noteId)
  res.status(200).json({ message: "Nota eliminada" })
}
