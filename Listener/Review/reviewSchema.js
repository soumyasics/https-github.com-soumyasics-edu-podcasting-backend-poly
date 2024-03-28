const mongoose = require("mongoose");

const ListenerreviewSchema = mongoose.Schema({
    feedback: {
        type: String,
        required: true,
    },
    listenername: {
        type: String,
        required: true,
    },
    listenerid: {
        type: String,
        required: true,
    },
    creatorid: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("listenersreview", ListenerreviewSchema);
