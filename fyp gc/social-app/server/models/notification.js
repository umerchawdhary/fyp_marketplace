const mongoose = require('mongoose');

const notificationSchema = mongoose.Schema({
    notification: String,
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    senderAvatar: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Notifications', notificationSchema);