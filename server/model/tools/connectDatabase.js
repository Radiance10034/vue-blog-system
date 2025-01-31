const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/")
    .then(()=>{
        console.log('database connect successfully');
    })
    .catch((err)=>{
        console.log(err);
    })