const mongoose = require('mongoose');

const Fortune = mongoose.model('Fortune', {
    phrase: {
        required: true,
        type: String
    }
});

module.exports = Fortune;