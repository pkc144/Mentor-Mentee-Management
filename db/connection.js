const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/dbms",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
      console.log('database connected');
  }).catch((e)=>{
      console.log(e);
  })