const { Schema, model} = require("mongoose")

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: [String],
        publisher: [String],
        published: Date,
        edition: String,
        ISBN: String,
        publishPlace: String,
        pages: Number,
        format: {
            type: String,
            enum: ["TAPA DURA", "TAPA BLANDA", "EBOOK"]
        },
        description: String,
        bookshelfs: [String],
        quotes: [{
            type: Schema.Types.ObjectId,
            ref: "Quote"
        }],
        cover: String,
        tags: [String],
        notes: [{
            type: Schema.Types.ObjectId,
            ref: "Note"
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

module.exports = model ("Book", bookSchema)