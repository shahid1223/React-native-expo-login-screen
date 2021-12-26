const mongoose = require('mongoose')

const MONGOURI = "mongodb+srv://shahid:shahid@cluster0.zbodk.mongodb.net/React-Native?retryWrites=true&w=majority"

const connectToMongo = () => {
    mongoose.connect(MONGOURI, () => {
        console.log("Connected to DB successFully")
    })
}

module.exports = connectToMongo