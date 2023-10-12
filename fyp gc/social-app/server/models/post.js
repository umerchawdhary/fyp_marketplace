const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    description: String,
    imageUrl: String,
    videoUrl: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Users'
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    share: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        isShare: {
            type: Boolean,
            default: false
        },
        shareCount: {
            type: Number,
            default: 0
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Posts', postSchema);