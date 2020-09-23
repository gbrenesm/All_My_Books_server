const { Schema, model} = require ("mongoose")

const userSchema = new Schema(
    {
        username: String,
        email: {
            type: String,
            match: [/^\S+@\S+\.\S+$/, 'Por favor, proporciona un email válido.'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String
        },
        googleId: String,
        facebookId: String,
        profilePhoto: {
            type: String,
            default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fblogs.cardiff.ac.uk%2Fmental-health%2Fwp-content%2Fuploads%2Fsites%2F502%2F2017%2F04%2Fno-profile.jpg&f=1&nofb=1"
        },
        books: [{
            type: Schema.Types.ObjectId,
            ref: "Book"
        }],
        shelfs: [{
            type: Schema.Types.ObjectId,
            ref: "Shelf"
        }]
    },
    {
        timestamps: true
    }
)

module.exports = model ("User", userSchema)