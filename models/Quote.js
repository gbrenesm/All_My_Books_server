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
        quote: String,
        pages: [Number],
        notes: [String],
        tags: [String]
    },
    {
        timestamps: true
    }
)

module.exports = model ("Quote", quoteSchema)