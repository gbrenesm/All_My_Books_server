const { Schema, model } = require ("mongoose")

const quoteSchema = new Schema (
    {
        creator: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        book: {
            type: Schema.Types.ObjectId,
            ref: "Book"
        },
        description: String,
        pages: [Number],
        note: String,
        tags: [String]
    },
    {
        timestamps: true
    }
)

module.exports = model ("Quote", quoteSchema)