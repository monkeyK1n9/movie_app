const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
    },
    img: {       // image to be used as background in homescreen
        type: String,
    },
    imgTitle: {  // image title to display
        type: String,
    },
    imgSm: {     // image to use as list item card background
        type: String,
    },
    trailer: {   // video trailer in listitem card when hovering
        type: String,
    },
    video: {      // video to be watched as movie
        type: String,
    },
    year: {
        type: String,
    },
    limit: {
        type: Number,
    },
    genre: {
        type: String,
    },
    isSeries: {
        type: Boolean,
        default: false,
    }
}, {
    timestamp: true
})

module.exports = mongoose.model('Movie', MovieSchema);