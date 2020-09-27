const { Schema, model } = require ("mongoose")

const noteSchema = new Schema(
    {
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: "Book"
        },
        tags: [String],
        chapter: String,
        pages: String,
        description: String
    },
    {
        timestamps: true
    })

module.exports = model ("Note", noteSchema)