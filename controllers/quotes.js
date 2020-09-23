const Quote = require("../models/Quote")
const Book = require("../models/Book")

////C
exports.newQuoteProcess = async (req, res) => {
  const { description, note, pages } = req.body
  const quote = await Quote.create({
    description,
    note,
    pages,
    creator: req.user.id,
    book: req.params.bookId
  })
  await Book.findByIdAndUpdate(req.params.bookId, {$push: {quotes: quote._id}})
  res.status(201).json({ quote })
}

////R


////U
exports.updateQuoteProcess = async (req, res) => {
  const { description, note, pages } = req.body
  const quote = await Quote.findByIdAndUpdate(req.params.quoteId, {
    description,
    note,
    pages,
  }, {new: true})
  res.status(202).json({ quote })
}

////D
exports.deleteQuoteProcess = async (req, res) => {
  await Quote.findByIdAndDelete(req.params.quoteId)
  res.status(200).json({ message: "Cita eliminada" })
}