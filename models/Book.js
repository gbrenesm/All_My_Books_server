const { Schema, model} = require("mongoose")

const bookSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        authorFirstName: String,
        authorLastName: String,
        publisher: [String],
        published: Date,
        edition: String,
        ISBN: String,
        publishPlace: String,
        pages: Number,
        cover: String,
        format: {
            type: String,
            enum: ["TAPA DURA", "TAPA BLANDA", "EBOOK"]
        },
        description: String,
        bookshelves: [{
            type: Schema.Types.ObjectId,
            ref: "Shelf"
        }],
        quotes: [{
            type: Schema.Types.ObjectId,
            ref: "Quote"
        }],
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