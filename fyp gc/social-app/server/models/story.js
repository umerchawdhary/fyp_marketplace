const mongoose = require('mongoose');

const storySchema = mongoose.Schema({
    imageUrl: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    expiredAt: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Stories', storySchema);