const mongoose = require('mongoose');

const db = mongoose.connect("mongodb://127.0.0.1:27017/clientportal")
.then((res) =>{
    console.log('connection successfully')
})
.catch((err) =>{
    console.log('cannot connect due to this error' + err);
})

module.exports = db;
