const { Schema, model } = require("mongoose")

const shelfSchema = new Schema(
  {
    name: String,
    books: [{
      type: Schema.Types.ObjectId,
      ref: "Book"
    }],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
  )

module.exports = model ("Shelf", shelfSchema)